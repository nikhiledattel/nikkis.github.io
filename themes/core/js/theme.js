
$(document).ready(function(){
		
	// Modals
	//1. fade-in
	
	var fadeinmodal = $("#fade-in");
	var prev_link = null;	
	$('.bottom-navbar .child a').click(function(e){
		e.preventDefault();
		// if($(e.target) != prev_link){}
		// display content
		var current_link = $(e.target).attr("data");
		fadeinmodal.modal('show');
		// preventDefaultv_link = $(e.target);
	})
	$('.fade-in .back-link').click(function(e){
		e.preventDefault();
		fadeinmodal.removeClass('show');
		setTimeout(function(){
			fadeinmodal.modal('hide');
		},500);	
	});

	//2. slide-from-right
	
	var slidefromrightobject = $("#slide-from-right");
	$('.detaillateral').click(function(e){
		e.preventDefault();
		var content = $("#"+$(this).attr("cont")).clone();
		console.log($("#"+content).clone());
		slidefromrightobject.find('.modal-content').html(content);
		slidefromrightobject.modal('show');
	})
	$('.letsgoback').click(function(e){
		e.preventDefault();
		slidefromrightobject.removeClass('show');
		setTimeout(function(){
			slidefromrightobject.modal('hide');
		},850);	
	});
	
	slidefromrightobject.on('hidden.bs.modal', function (e) {
		//clear data
	});
	
  	var navigatorsProperties=['OTransitionEnd','webkitTransitionEnd', 'transitionend'];
	for (var i in navigatorsProperties) {
	    document.querySelector('.modal-dialog').addEventListener(navigatorsProperties[i],function()
	    {	        
          console.log(' transition end');
          // display content
	    },false);
	}	




	// dynamically adding pages for flickity
	
	var carousel = $('.carousel-fullpage').flickity({
	  	pageDots: false,
	  	prevNextButtons: false,
	  	wrapAround: true
	});










	// addtion of the slides based on the slide; below is correct

	// add condition when drag is started when transition happens

	var carousel_data = carousel.data('flickity');
	var prev_highestevent = 0;

	// carousel.on( 'settle.flickity', function( event, index ) {
	// 	if (prev_highestevent < carousel_data.selectedIndex)
	// 	{
	// 		var newPage = $(addpage());
	// 		carousel.flickity( 'insert', newPage , carousel_data.slides.length );
	// 		console.log( 'Curent Index ' + carousel_data.selectedIndex + '(Slide ' + (carousel_data.selectedIndex +1) + ')');
	// 	}
	//   	//to recorder the highest reached slide
	// 	if ((carousel_data.selectedIndex - prev_highestevent) == 1)
	// 		prev_highestevent = carousel_data.selectedIndex;
	// 	});
	// 	function addpage(index) {
	// 		var content = '<div class="carousel-cell"> This is slide @ index ' + carousel_data.slides.length + ' </div>';
	// 		return content;
	// }

	
	// detail modal sliding up


	var scroll_item = $('.scroll-for-detail > div');

	var detailmodal = $('#detail-modal');
	var detail_modal_content = $('#detail-modal .modal-dialog > .modal-content');

	scroll_item.on('click', function(e){

		current_link = $(e.target).attr("to_page");

		$.get("../../../"+current_link+".html", function(data, status){
	      console.log(current_link);
	    });

		detailmodal.modal('show');
	})


















}) //document ready

	// Rellax

	// var rellax = new Rellax('.rellax-center', {
	// 	center: true
	// });
	// var rellaxNonCentered = new Rellax('.rellax', {
	// 	center: false,
	// });


	// Detail Page loading - Parallax Push and Slide

	// (function($) {
	//     'use strict';

	    var MobileView = function(element, options) {
	        var self = this;
	        self.options = $.extend(true, {}, $.fn.pgMobileViews.defaults, options);
	        self.element = $(element);
	        self.element.on('click', function(e) {
	            e.preventDefault();
	            var data = self.element.data();
	            var el = $(data.viewPort);
	            var toView = data.toggleView;
	            if (data.toggleView != null) {
	                el.children().last().children('.view').hide();
	                $(data.toggleView).show();                
	            }
	            else{
	                 toView = el.last();
	            }
	            el.toggleClass(data.viewAnimation);
	            self.options.onNavigate(toView, data.viewAnimation);
	            return false;
	        })
	        return this; // enable chaining
	    };
	    $.fn.pgMobileViews = function(options) {
	        return new MobileView(this, options);
	    };

	    $.fn.pgMobileViews.defaults = {
	        //Returns Target View & Animation Type
	        onNavigate: function(view, animation) {            
	        }
	    }
	    // MOBILE VIEW DATA API
	    //===================

	    $(window).on('load', function() {	    	
	        $('[data-navigate="view"]').each(function() {
	            var $mobileView = $(this)
	            $mobileView.pgMobileViews();
	        })
	    });
	// })(window.jQuery);


	// $('.to-view-2 a[data-view-animation="push-parrallax"]').on('click', function(){
	// 	var link = $(this).attr("newcontent");
	// 	$.ajax({
	//         url: $(this).attr("newcontent")+'.html',
	//         type: 'GET',
	//         //data: yourData,
	//         datatype: 'html',
	//         success: function (data) { 
	//         	$('.ct').html(data);
	//         },
	//         error: function (jqXHR, textStatus, errorThrown) { console.log('Sorry! Things didn\'t work as expected'); }
	//     });			
	// })

