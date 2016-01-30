(function(global) {

    //Check for jQuery before initialization, it is the sole dependency!
    if (!global.jQuery) throw new Error('GridSnapperJS requires jQuery to work.');

    /*************************************************************
    * GridSnapper Constructor
    **************************************************************/
    function GridSnapper(selector, options) {
        var self = this;
        //Default options
        self.options = {
            animationOn: true, // TODO: MAKE ANIMATION ON/OFF WORK
            animationDuration: 0.75,
			filter: 'all',
			filterOutCss: {
				'opacity'  : 0,
				'transform': 'scale(0,0)'
			},
			filterInCss: {
				'opacity'  : 1,
	            'transform': 'scale(1,1)'
			},
			selector: selector || '.snap-container'
        };
		//If options argument provided, override defaults
		if (options) {
			for (var prop in options) {
				self.options[prop] = options[prop];
			}
		}
        //Private properties
        self._jq			   = $(self.options.selector); //maintain ref to self as jQuery object
		self._isAnimating      = false;	//Disables animations if one's already in progress
		self._lastWidth		   = self._jq.width(); //triggers container resizing event if not equal to current width
		self._itemsPerRow      = self._calcItemsPerRow(); //Calculate items per row
		self._mainCollection   = self._getSnapItems(); //Main collection contains all .snap-item elements
		self._subCollections   = self._divideIntoSubarrays(self._mainCollection); //subcollections filtered by category
		self._activeCollection = self._getCollectionByFilter(self.options.filter); //active collection based on filter
		self._itemPositions    = self._calcItemPositions();
		//Initial .snap-container css
		self._jq.css({
			'height': self._calcNewHeight(),
			'overflow': 'hidden',
			'transition': 'height ' + self.options.animationDuration + 's'
		});
		//Set up GridSnapper and hit it off!
		self._setResizeEvents();
		self._setupFilterControls();
        self._placeItems(self._activeCollection); //init GridSnapper!;
    }

	/*************************************************************
    * GridSnapper Prototype
    **************************************************************/
    GridSnapper.prototype = {
		//Filters the items
		//@param fromCategory is the visible array of .snap-item elements
		//@param toCategory is the target array of .snap-item elements
        filterItems: function(targetCategory) {
            var self = this;
			//Minimize all .snap-item elements that are not the same between categories
			global.$.each(self._getArrayOfUniqueItems(self._activeCollection, targetCategory), function(i, e) {
				e._filterOut();
			});
			//Position same items
			self._placeItems(targetCategory);
			//Set new active category
			self._activeCollection = targetCategory;
        },

        //////////////////////////////////////////////////////////
		// Setup plugin methods, called in the constructor once
		/////////////////////////////////////////////////////////
		//Runs through the .snap-container and caches all .snap-item
		//elements into an array which it returns after setting them up.
		_getSnapItems: function() {
			var self      = this,
				itemArray = [],
				minCss    = self.options.filterOutCss;
	        //populate snapItems array
	        for (var i = 0; i < self._jq.find('.snap-item').length; i++) {
	            //Cache all items in the snap container as individual jQuery objects
	            itemArray[i] = $($(self._jq.find('.snap-item'))[i]);
				//Set properties
	            itemArray[i]._index = i; //used for _getArrayOfUniqueItems
				itemArray[i]._isMinimized = true; //used for animations
				itemArray[i]._parentGridSnapper = self; //internal ref to GridSnapper parent for access to options
				//Extend all .snap-item objects with SnapProto and its methods
	            global.jQuery.extend(itemArray[i], SnapProto);

				itemArray[i].css(minCss);
	            itemArray[i].css({
	                'position'  : 'absolute',
	                'transition': 'all ' + self.options.animationDuration + 's',
	            });
	            //Event handling at transition end
	            itemArray[i].on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	                var item = this;
	                //finished minimizing
	                if (item.hasClass('snap-filteringOut')) {
	                    item.hide();
	                    item._isMinimized = true;
	                    item.removeClass('snap-filteringOut');
	                }
	                //finished maximizing
	                if (item.hasClass('snap-filteringIn')) {
	                    item._isMinimized = false;
	                    item.removeClass('snap-filteringIn');
	                }
					item._parentGridSnapper._isAnimating = false;
	            }.bind(itemArray[i]));
	        }
			return itemArray;
		},
		//Get max number of categories based on data-category
		_getMaxCategories: function() {
			var self = this,
				categories = [];
			//Iterate through mainCollection to find out how many categories there are
	        global.$.each(self._mainCollection, function(n, e) {
				//Get data-category
	            var cat = e.data('category');
	            //For items belonging to multiple categories, first split string and find max category
	            if (typeof cat === 'string') {
					cat = cat.split(", ");
					cat = Math.max(cat[0], cat[cat.length - 1]);
				}
				categories.push(cat);
	        });
			return Math.max.apply(null, categories);
		},
		//Divide .snap-item elements into sub-arrays
		//based on data-category attribute
		//@param array to divide into subarrays based on the value of data-category
		_divideIntoSubarrays: function(array) {
			var self = this,
				subArrays = [],
	         	categories = self._getMaxCategories();
	        //Cache items into distinct categories
	        for (i = 0; i < categories; i++) {

	            subArrays[i] = [];

	            for (var z = 0; z < array.length; z++) {
	                //if data-category equals i+1 (the user-defined categories range) add to respective category array
	                if (array[z].data().category.toString().indexOf(i + 1) > -1) {
	                    subArrays[i].push(array[z]);
	                }
	            }
	        }
			return subArrays;
		},
		//Find all filter controls with data-filter attr
		//and set up their filtering functionality
		_setupFilterControls: function() {
			var self = this;
			//Find and initialize filter controls
	        $('*[data-filter]').click(function() {
				var targetFilter = $(this).data('filter');
				//If user clicks on same button return
				if (self.options.filter === targetFilter - 1 || self._isAnimating) return;
				//Update current filter and filter items
				self.options.filter = targetFilter - 1;
	            self.filterItems(self._getCollectionByFilter(targetFilter));
				//Finally calculate new height for .snap-container
				self._calcNewHeight();
	        });
		},
		//Sets up resize events for window and container for its height
        _setResizeEvents: function() {
            var self   = this;
			//Window resize event
			$(global).resize(function() {
				if (self._lastWidth !== self._jq.width()) {
					self._lastWidth = self._jq.width();
					self._jq.trigger('resizeSnapContainer');
				}
			});
			//setup container height resize event
			self._jq.on('resizeSnapContainer', function() {
				//Recalculate items per row, grid positions and move items to new positions
				self._itemsPerRow   = self._calcItemsPerRow();
				self._itemPositions = self._calcItemPositions();
				self._placeItems(self._activeCollection);
				//Set new container height
				self._calcNewHeight();
			});
        },
		//Calculates the positions on the grid and returns
		//them as an array
        _calcItemPositions: function() {
            var self = this,
			//boolean used for responsive breakpoint
		 	itemsHaveContainerWidth = self._mainCollection[0].outerWidth() === self._jq.outerWidth(),
		 	posArray = [],
		 	left = 0,
		 	top = 0;

			//If items are 100% width itemsPerRow = 1, else recalculate how many there are
			self._itemsPerRow = itemsHaveContainerWidth ? 1 : self._calcItemsPerRow();

            for (var i = 1; i <= self._mainCollection.length; i++) {
				//Push first point at (left: 0, top: 0)
                posArray[i-1] = {
                    left: left  + '%',
                    top: top
                };
				//Set left and top properties for next point before next iteration
				left += 100 / self._itemsPerRow;

                if (i % self._itemsPerRow === 0) { //when i is a multiple of itemsPerRow
					//If items have full width
					top += self._itemsPerRow === 1 ?
					self._mainCollection[0].outerHeight() :
					self._mainCollection[i - self._itemsPerRow].outerHeight();
					//Reset left
                    left = 0;
                }
            }
			return posArray;
        },
		//Places .snap-item elements on the grid positions
		//@param snapItemsArray an array consisting of .snap-item elements
        _placeItems: function(snapItemsArray) {
            var self = this;
			self._isAnimating = true;

            for (var i = 0; i < snapItemsArray.length; i++) {
				//If minimized play maximization animation
				if (snapItemsArray[i]._isMinimized) snapItemsArray[i]._filterIn();
				//move item to new position
				snapItemsArray[i].css(self._itemPositions[i]);
            }
        },
		//////////////////////////////////////////////////////////
		// 					Helper methods
		/////////////////////////////////////////////////////////
		//Returns how many items there are in a row
		_calcItemsPerRow: function() {
			var self = this;
			return Math.round(self._jq.width() / self._jq.find('.snap-item').outerWidth());
		},
		//Returns the number of rows visible on screen
		_calcVisibleRows: function() {
			var self = this, rows = 0, i = 0;
			while (i < self._activeCollection.length) {
				i+= self._itemsPerRow;
				rows++;
			}
			return rows;
		},
		//Returns item collection based on filter
		//@param filter can be 'all' or in the range of number of categories
		_getCollectionByFilter: function(filter) {
			var self = this, r;
			r = filter === 'all' ? self._mainCollection : self._subCollections[filter - 1];
			return r;
		},
		//Resolves new height for .snap-container
		_calcNewHeight: function() {
			var self = this,
				newHeight = self._itemsPerRow > 1 ?
								//height for more than 1 item per row
								newHeight = self._calcVisibleRows() * self._activeCollection[0].outerHeight() + 'px' :
								//height for when there's 1 item per row
								newHeight = self._activeCollection.length * self._activeCollection[0].outerHeight() + 'px';
			self._jq.css('height', newHeight);
		},
		//Modified version of Jeffery To's array intersection method
		//(source: http://www.falsepositives.com/index.php/2009/12/01/javascript-function-to-get-the-intersect-of-2-arrays/)
		//Returns a disjoint array contain the elements of the
		//first array which are not found in the second
		//@param arr1 the first array
		//@param arr2 the second array, against which to compare
		//@return array containing the items of arr1, not found in arr2
		_getArrayOfUniqueItems: function(arr1, arr2) {
		    var r = [], o = {}, l = arr2.length, i, v;
		    for (i = 0; i < l; i++) {
		        o[arr2[i]._index] = true;
		    }
		    l = arr1.length;
		    for (i = 0; i < l; i++) {
		        v = arr1[i];
		        if (!(v._index in o)) {
		            r.push(v);
		        }
		    }
		    return r;
		}
    };

	/*************************************************************
    * SnapItem Prototype
    **************************************************************/
    var SnapProto = {
		//Filtering out animation
        _filterOut: function() {
            var self   		 = this,
				filterOutCss = self._parentGridSnapper.options.filterOutCss;
			//Play animation
			if (self._parentGridSnapper.options.animationOn) {
				self.css(filterOutCss);
			}
			//Tag as filteringOut for transitionend event
			self.addClass('snap-filteringOut');
        },
		//Filtering in animation
        _filterIn: function() {
            var self   = this;
				filterInCss = self._parentGridSnapper.options.filterInCss;
			//Tag as filteringIn for transitionend event
            self.show().addClass('snap-filteringIn');
			//Play animation
			if (self._parentGridSnapper.options.animationOn) {
				//force browser to read properties before altering them to avoid setTimeout
				for (var cssProp in filterInCss) {
					self.css(cssProp);
				}
				//animate maximization
	            self.css(filterInCss);
			}
        }
    };

	//Extract GridSnapper constructor for use, both as
	//constructor and as jQuery extension.
    global.GridSnapper  = GridSnapper;
	global.jQuery.prototype.gridSnapIt = function(options) {
		//setup GridSnapper!
		this.gridSnapper = new GridSnapper(this.selector, options);
	};

})(this);
