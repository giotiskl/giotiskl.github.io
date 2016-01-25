/***************************************************** 
** TypeWriter.js is a jQuery plug-in used to achieve
** animated typewriting effect.
** Author: Yiotis Kaltsikis
** Email: giotisgr@gmail.com
*****************************************************/

(function(global) {
    
    /* Make sure jQuery is installed before initializing */
    if (!global.jQuery)
        throw new Error('TypeWriter.js requires jQuery to work');
    
    /* TypeWriter object constructor */
    function TypeWriter(selector, speed, caretOn) {
        
        //Get the containining element based on selector to set it up for TypeWriter
        this.container = $(selector);
        
        //Cache the contents of the container, whether multiple paragraphs or plain text
        var containerParagraphs = this.container.find('p');
        //Multiple paragraphs scenario
        if (containerParagraphs.length > 0) {
            
            this.contentArray = [];
            this.content      = null;
            
            for (var i = 0; i < containerParagraphs.length; i++) {
                this.contentArray[i] = $(containerParagraphs[i]).text();
            }
            
            
        }
        //Plain text scenario
        else {
            this.contentArray = null;
            this.content      = $(selector).text();
        }
        
        //Object properties
        this.speed = speed || 80;
        (typeof caretOn === 'boolean') ? this.caretOn  = caretOn : this.caretOn = true;
        //set up the TypeWriter component and return it
        return setupTypeWriter(this);
    }

    TypeWriter.prototype = {
        //This function types out the content for both multiple paragraphs
        //and plain text scenario
        type: function(callback, offset) {
            var self = this;
            var contentSpan = self.container.find('.tw-content');
            
            var typeSentence = function(index, sentence) {
                if (index < sentence.length) {
                    contentSpan.append(sentence[index++]);
                    setTimeout(function() {
                        typeSentence(index, sentence);
                    }, self.speed);
                }
                else {
                    if (callback) callback();
                }
            }
            
            //Multiple paragraphs scenario
            if (self.content === null) {
                
                var typeSentenceRecursive = function(index) {
                    
                    if (index < self.contentArray.length) {
                        
                        self.content = self.contentArray[index];
                        index++;
                        
                        self.type(function() {
                            
                            if (index < self.contentArray.length) {
                                
                                setTimeout(function() {
                                    self.erase(function() {
                                        typeSentenceRecursive(index);
                                    });
                                }, 500);
                                
                            }
                            else {
                                if (callback) callback();
                            }
                            
                        });
                    }
                };
                
                typeSentenceRecursive(0);
            }
            //Plain text scenario
            else typeSentence(offset || 0, self.content);
        },
        //Plain text erase effect
        erase: function(callback, offset) {
            var self = this;
            var contentSpan = self.container.find('.tw-content');
            
            var eraseSentence = function(index, sentence) {
                if (index > -1) {
                    contentSpan.text(self.content.substr(0, index--));
                    setTimeout(function() {
                        eraseSentence(index, sentence);
                    }, self.speed);
                }
                else {
                    if (callback) callback();
                }
            }
            
            //TODO: multiple paragraphs erase
            
            eraseSentence(offset || self.content.length - 1, self.content);
        },
        hideCaret: function() {
            var self = this;
            var caret = self.container.find('#tw-caret');
            
            caret.removeClass('tw-caret').animate({opacity: 0}, 500);
            self.caretOn = false;
            
            return self;
        },
        showCaret: function() {
            var self = this;
            var caret = self.container.find('#tw-caret');
            
            caret.addClass('tw-caret');
            self.caretOn = true;
            
            return self;
        }
    };
    
    /* Called in the constructor, sets up the HTML in the container
    ** and prepares the TypeWriter for use.
    */
    function setupTypeWriter(TypeWriter) {
        TypeWriter.container.css({'visibility': 'hidden'});
        TypeWriter.container.empty();
        
        TypeWriter.container.append('<span class="tw-span" style="visibility: visible; width: 100%">' 
                            +
                            '<span class="tw-content"></span>'
                            + 
                            (
                            TypeWriter.caretOn ?
                            '<span class="tw-caret" id="tw-caret" style="visibility: visible;">|</span>' : '' //TODO: add onCaret false caret existence
                            )
                            + 
                            '</span>');
        
        return TypeWriter;
    }
    
    //Extract library by extracting constructor and setting up jQuery
    //functions to make calling them on jQuery objects more natural
    global.TypeWriter = TypeWriter;
    
    //Register library functions on jQuery prototype
    global.jQuery.prototype.type = function(callback, speed, offset, caretOn) {
        
        //if non-existent create internal TypeWriter
        this.hiddenTypeWriter = this.hiddenTypeWriter || new TypeWriter(this.selector, speed, caretOn);
        
        this.hiddenTypeWriter.type(callback, offset);
        
        return this;
    }
    global.jQuery.prototype.erase = function(callback, speed, offset, caretOn) {
        
        //if non-existent create internal TypeWriter
        this.hiddenTypeWriter = this.hiddenTypeWriter || new TypeWriter(this.selector, speed, caretOn);
        
        this.hiddenTypeWriter.erase(callback, offset);
        
        return this;
    }
    global.jQuery.prototype.getTypeWriter = function() {
        return this.hiddenTypeWriter;
    }
    
})(this);