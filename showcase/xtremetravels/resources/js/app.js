$(document).ready(function() {
    
    //cache nav open status
    var navIsOpen = false;
    
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
    $(".btn-minify").click(function() {
        var nav = $(".main-nav");
        
        nav.slideToggle(200);
        
        var btn = $(".btn-minify");
        btn.hasClass("ion-navicon-round") ?
            btn.attr("class", "ion-close-round btn-minify") :
            btn.attr("class", "ion-navicon-round btn-minify");
        
        navIsOpen = !navIsOpen;
    });
    
    //hack-fix for navbar display due to mobile-first
    $(window).resize(function() {
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
    //          SAFARI FIX             //
    /////////////////////////////////////
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('body').prepend('hello there');
        var browserHeight = $(window).height() + 'px'; //get viewport height
        var browserWidth  = $(window).width() + 'px'; //get viewport height
        $('header').css({'height': browserHeight});
        $('header').css({'background-size': browserWidth + ' ' + browserHeight});
    }
});