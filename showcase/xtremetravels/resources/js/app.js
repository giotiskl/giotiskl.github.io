$(document).ready(function() {
    
    //cache nav open status
    var navIsOpen = false;
    
    //mobile nav
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
    
});


    