$(document).ready(function() {
    
    //cache nav open status
    var navIsOpen = false;
    var onMobile = $(window).width() < 768;
    
    /////////////////////////////////////
    //          NAVIGATION             //
    /////////////////////////////////////
    //sticky navigation    
    $('.features').waypoint(function(dir) {
        var nav = $('.navbar');
        if (dir === "down") {
            nav.hide();
            $('#white-logo').hide();
            $('#black-logo').show();
            nav.addClass('sticky').fadeIn(500);
        }
        else { 
            nav.fadeOut(500, function() {
                $('#black-logo').hide();
                $('#white-logo').show();
                nav.removeClass('sticky');
                nav.show();
            });
        }
    }, {
        offset: '10%'
    });
    
    //mobile navigation
    $(".btn-minify").click(stickyNavBtnHandler);
    
    //hack-fix for navbar display due to mobile-first
    $(window).resize(function() {
        onMobile = $(window).width() < 768;
        
        if ($(document).width() >= 768) {
            $(".main-nav").css({"display": "block"});
        }
        else {
            $(".main-nav").css({"display": navIsOpen ? "block" : "none"});
        }
        
    });
    
    //Navigation Scroll
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            if (onMobile) stickyNavBtnHandler();
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /////////////////////////////////////
    //          GOOGLE MAPS            //
    /////////////////////////////////////
    var map = new GMaps({
        div: '#gmaps',
        lat: 40.706169,
        lng: -73.8863027,
        zoom: 12
    });
    
    map.addMarker({
        lat: 40.706169,
        lng: -73.8863027,
        title: 'NY Central Office',
        infoWindow: {
            content: '<p>Our headquarters in NYC</p>'
        }
    });
    
    var mapStyles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];
    
    map.setOptions({styles: mapStyles, draggable: onMobile ? false : true});
    
    /////////////////////////////////////
    //          ANIMATIONS             //
    /////////////////////////////////////
    $('.features').waypoint(function(dir) {
        $('#features .to-fade-in').addClass('animated fadeIn');
    }, { offset: '40%' });
    
    $('.book-trips').waypoint(function(dir) {
        $('#latest-package').addClass('animated pulse');
    });
    
    $('.testimonials').waypoint(function(dir) {
        $('#testimonials .to-fade-in').addClass('animated fadeIn');
    }, { offset: '40%' });
    
    /////////////////////////////////////
    //          WEBSITE FNS            //
    /////////////////////////////////////
    function stopScrolling(bool) {
        bool ? $('body').addClass('stop-scrolling') : $('body').removeClass('stop-scrolling');
    }
    
    function stickyNavBtnHandler() {
        var nav = $(".main-nav");
        var overlay = $(".overlay");
        
        nav.slideToggle(200);
        
        var btn = $(".btn-minify");
        btn.hasClass("ion-navicon-round") ?
            btn.attr("class", "ion-close-round btn-minify") :
            btn.attr("class", "ion-navicon-round btn-minify");
        
        navIsOpen = !navIsOpen;
        
        stopScrolling(navIsOpen);
        navIsOpen ? overlay.fadeIn(500) : overlay.fadeOut(500);
    }
    
});