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
});


    