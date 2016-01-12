$(document).ready(function() {

    //////////////////////////////////////
    //          SNIPPETS                //
    //////////////////////////////////////
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash); 
          if (target.selector.includes("carousel")) return; //carousel hack fix
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
    //          MODAL WINDOW           //
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
    $('.gallery-item').click(function() {
        var label = $('#myModalLabel');
        var img = $('#showcase-img');
        var price = $('#modal-price-tag');
        var body = $('#modalBody');
        var dataModel = $(this).find('img');
        var modelfeats = $('#model-feats').find('li');
        
        label.text('Akustix ' + $(this).find('.item-name-caption').text());
        price.text($(this).find('.item-price-caption').text());
        img.attr('src', dataModel.attr('src'));
        
        
        $(modelfeats[0]).text('Colour: ' + dataModel.data('colour')); //color
        $(modelfeats[1]).text('Weight: ' + dataModel.data('weight')); //weight
        $(modelfeats[2]).text('Top: ' + dataModel.data('top')); //top
        $(modelfeats[4]).text('Strings: ' + dataModel.data('strings')); //strings
        $(modelfeats[6]).text('Frets: ' + dataModel.data('frets')); //frets
    });
    
    /////////////////////////////////////
    //          GOOGLE MAPS            //
    /////////////////////////////////////
    var map = new GMaps({
        div: '#gmaps',
        lat: 59.909999,
        lng: 10.761536,
        zoom: 12
    });
    
    
    var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    
    map.setOptions({styles: styles});
    
    map.addMarker({
        lat: 59.912945,
        lng: 10.761536,
        title: 'Oslo HQ',
        infoWindow: {
            content: '<p>Our headquarters and main workshop situated in beautiful Oslo &hearts; Come see us!</p>'
        }
    });
    
    /////////////////////////////////////
    //          ANIMATIONS             //
    /////////////////////////////////////
    var onMobile = $(window).width() < 768;
    
    $('.features').waypoint(function(dir) {
        $('#features .to-fade-in').addClass('animated fadeIn');
    }, { offset: '60%' });
    
    $('.testimonials').waypoint(function(dir) {
        $('#testimonials .to-fade-in').addClass('animated fadeIn');
    }, { offset: '60%' });
    
    $('.store').waypoint(function(dir) {
        $('.store-btn').addClass('animated flipInY');
    }, { offset: '50%' });
    
    $('.contact').waypoint(function(dir) {
        $('#gmaps').addClass('animated fadeInRight');
    }, { offset: '50%' });
    
});
