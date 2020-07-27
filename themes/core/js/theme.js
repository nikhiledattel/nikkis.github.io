
$(document).ready(function(){
		
	var transend = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

	// navigation menu bottom

	var menu_item = $('.bottom-navbar .child > a');
	var prev_link = null;
	var current_link = null;
	var menumodal = $('#menu-modal');
	var modal_content = $('.modal-content');
	var active_modals_content = null;

	menu_item.on('click', function(e){
		
// .modal.slide-from-below

		current_link = $(e.target).attr("id");
		active_modals_content = ".selector[content="+$(e.target).attr("id")+"]";

		if(!$('body').hasClass('modal-open'))
		{	
			$('body').toggleClass('menu-modal');
			modal_content.children(active_modals_content).show();
			menumodal.modal('show');
			modalopacity(current_link);
		}
		else if ($(e.target).attr("id") != prev_link)
		{
			//console.log("different and "+$(e.target).attr("id"));
			modal_content.children().not(active_modals_content).css('opacity',0).hide();
			modal_content.children(active_modals_content).css('opacity',1).show();
		}
		else{			
			menumodal.modal('hide');
			$('body').toggleClass('menu-modal');
		}

		prev_link = $(e.target).attr("id");

		//hidden state
		menumodal.on('hidden.bs.modal', function (e) {
			modal_content.children().css('opacity',0).hide();
		});
		//content 
		function modalopacity(current_link){
			menumodal.on('shown.bs.modal', function (e) {
				modal_content.children(".selector[content="+current_link+"]").css('opacity',1);
			});			
		}		
	});
	

	// dynamically adding pages for flickity
	
	var carousel = $('.carousel-fullpage').flickity({
	  	pageDots: false,
	  	prevNextButtons: false,
	  	wrapAround: true
	});

	// //mouse wheel based flickty trigger
	
	// var left = 0, right = 0, i=0;

	// carousel.on('mousewheel', function(e) {	    

	// 	// console.log("i "+i++);

	//     if (e.deltaY>0) {
	//     	left++;
	//     	if(left>40){
	//     		left = 1;
	//     	}
	//     	if(left == 1)
 //    		carousel.flickity('next');
	//     } else {
	//     	right++;
	//     	if(right>40){
	//     		right = 1;
	//     	}	    	
	//     	if(right == 1)
 //    		carousel.flickity('previous');
	//     }
	// });

	// //finish mouse wheel trigger







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

















	// zoominmodal

	var zoominmodal = $('.zoom-in');
	
	// zoominmodal.on('shown.bs.modal', function (e) {
	//   	$(this).children('.modal-dialog').addClass('shown');	
	// })
	$(document).on('keyup',function(evt) {
	    if (evt.keyCode == 27) {
		    // $('.zoom-in').modal('hide');		    	    	
			// zoominmodal.children('.modal-dialog').removeClass('shown');				
		}
		zoominmodal.children('.modal-dialog').one(transend, function(e) {
		    // $('.zoom-in').modal('hide');		    
		});
	});


})