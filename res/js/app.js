$(function() {
    $('body').css({overflow: 'hidden'});
});

$(window).load(function() {

    //Deactivate loader
    $('.loader-screen').fadeOut();
    $('body').css({overflow: 'auto'}); //restore scrollability

    //BEGIN APP
    var onMobile = $(window).width() < 768;

    /*******************************************
                    NAVIGATION
    *******************************************/
    var nav = $('.navbar');
    var isNavOpen = false;

    //Mobile nav "toggle button"
    var toggleBtnHandler = (function() {

        var openNavBtn = $('.nav-open');
        var closeNavBtn = $('.nav-close');
        var overlay = $('.overlay');

        return function() {
            if (!isNavOpen) {
                openNavBtn.animate({opacity: 0});
                closeNavBtn.animate({opacity: 1});
                $('body').addClass('stop-scrolling');
                overlay.fadeIn();
            }
            else {
                closeNavBtn.animate({opacity: 0});
                openNavBtn.animate({opacity: 1});
                $('body').removeClass('stop-scrolling');
                overlay.fadeOut();
            }
            isNavOpen = !isNavOpen;
        };
    })();

    $('.nav-toggle-btn').click(toggleBtnHandler);

    //enable sticky nav on desktops
        var navIsSticky = false;

        var navWp = $('.main-header').waypoint(function(dir) {
            if (dir === 'down') {
                navIsSticky = true;
                nav.addClass('navbar-fixed-top navbar-sticky animated slideInDown');
            }
            else {
                navIsSticky = false;
                nav.addClass('animated slideOutUp');
            }
        }, { offset: '-100%' });

        nav.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if (navIsSticky) {
                nav.removeClass('animated slideInDown slideOutUp');
            }
            else {
                nav.removeClass('navbar-fixed-top navbar-sticky animated slideInDown slideOutUp');
            }
        });

    //Navigation Scroll
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (onMobile && isNavOpen) $('.nav-toggle-btn').click(); //toggle the mobile navigation bar
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    /*******************************************
                    EFX
    *******************************************/
    //particles
    particlesJS.load('main-header', 'ext/js/particleconfignasa.json');

    //Portfolio Shuffle-Plugin Config use DeSandro's plugin to make sure
    //images have loaded before instantiating shuffle to avoid height bugs
    $('#showcase-container').imagesLoaded(function() {

		var filtrOptions = {
			delay: 25,
			filterOutCss: {
				opacity: 0,
				transform: 'scale(0.75) skewY(20deg)'
			},
			filterInCss: {
				opacity: 1,
				transform: 'scale(1) skewY(0)'
			}
		};

		var filterizd = $('.showcase-container').filterizr(filtrOptions);

        $('.portfolio-nav li').click(function() {
            var item = $(this);

            $('.portfolio-nav li').removeClass('active-tab');
            item.addClass('active-tab');
        });

    });


    //typewriter
    $('.welcome-box p').type(function() {
        $('.welcome-box h1').animate({opacity: 1}, 2000, function() {
            $('.social-nav ul').removeClass('invisible').addClass('animated flipInX');
        });
    }, 70);

    /*******************************************
                    ANIMATIONS
    *******************************************/
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-me').removeClass('invisible').addClass('animated slideInRight');
    }, {offset: '60%'});
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-whatido').removeClass('invisible').addClass('animated slideInLeft');
    }, {offset: '30%'});
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-facts').removeClass('invisible').addClass('animated slideInRight');
    }, {offset: '-5%'});

    $('.tools').waypoint(function(dir) {
        $('.js-tool-logo').removeClass('invisible').addClass('animated zoomIn');
    }, {offset: '40%'});
});
