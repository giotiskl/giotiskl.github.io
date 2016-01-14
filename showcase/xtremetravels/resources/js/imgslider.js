$(document).ready(function() {
    
    //Slider settings
    var imageSlider = $('.image-slider');
    var images = [$('.frame-whales'), $('.frame-freefalling'),  //cache images in slider
                  $('.frame-safari-two'), $('.frame-mountain-climbing')];
    
    for (var i = 1; i < images.length - 1; i++) $(images[i]).css({opacity: "0"}); //init all imges to zero opacity
    
    var animationDuration = 1000; //effect duration
    var currentImg = 0;           //current img
    
    //Add frame pick buttons and cache them into an array
    imageSlider.append('<div class=\"pick-btn-container\"><div class=\"pick-frame-btn active\"></div><div class=\"pick-frame-btn\"></div><div class=\"pick-frame-btn\"></div><div class=\"pick-frame-btn\"></div></div>');
    
    var frameButtons = $('.pick-frame-btn');
    
    //add the loading bar and cache it
    imageSlider.append('<div id=\"loading-bar\"></div>');
    var loadingBar = $('#loading-bar');
    
    
    //set up play slider function
    function playSlider() {
        loadingBar.animate({width: "100%"}, 5000, function() {
            //animate image change, repeat counter if needed
            images[currentImg].animate({opacity: "0"}, animationDuration);
            $(frameButtons[currentImg]).removeClass('active');
            currentImg < (images.length - 1) ? ++currentImg : currentImg = 0;
            //images[currentImg].fadeIn(animationDuration);
            images[currentImg].animate({opacity: "1"}, animationDuration);
            $(frameButtons[currentImg]).addClass('active');
            
            //reset bar and play recursively
            loadingBar.css({width: "0%"});
            playSlider();
        });
    }
    
    playSlider();
    
    //Set up frame pick buttons click event
    frameButtons.click(function() {
        //if the active button is clicked return
        if ($(this).hasClass('active')) return;
        //else cache this and find index of clicked item in frameButtons array
        var self = this;
        var index = function() {
            for (var i = 0; i < frameButtons.length; i++) {
                if (self === frameButtons[i]) return i;
            }
        }();
        
        frameButtons.removeClass('active');
        $(this).addClass('active');
        
        images[currentImg].animate({opacity: "0"}, animationDuration);
        currentImg = index;
        images[currentImg].animate({opacity: "1"}, animationDuration);
        
        loadingBar.stop(true).css({width: "0%"});
        playSlider();
    });
    
});