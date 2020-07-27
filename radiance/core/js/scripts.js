

$(document).ready(function(){

	// $('#test-button').on('click',function(){
	// 	$('.top-nav .nav-content').toggleClass('invisible visible');
	// });

	// var $defaultpage = $('.default-page'),
			// $formpage = $('.top-page'),
	var	$basepage = $('.base-page');


	// page transition

	
	// name of the transition type

	// $('#test-2').on('click',function(){
		// $defaultpage.addClass('fadeOut').removeClass('page-scaleUpfromHide');
		//page-scaleUpfromHide still exists after one cycle, but no conflict due to this
	//   $formpage.addClass('animation-delay page-on-top page-scaleUpshow');
 //  	$formpage.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
 //  		function() {    
 //  		 	$formpage.removeClass('page-scaleUpshow animation-delay');
	// 			$defaultpage.removeClass('fadeOut');
 //  	});
	// });

	// name of the transition type

	$('#test-3').on('click',function(){
	  		 	console.log('clicked!');

		$basepage.addClass('scaleDownandhide');		
		// $defaultpage.addClass('page-scaleUpfromHide animation-delay');
	  	$basepage.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
	  		function() {    
					// $defaultpage.removeClass('fadeOut animation-delay');
	  		 	// $formpage.removeClass('page-on-top fadeOut');
	  		 	console.log('finished!');
	  	});
	});

	
	// table


	// normal table

	$('.table-format tbody tr').hover(function(){
		$(this).removeClass('fadetd').siblings().addClass('fadetd');
		},function(){
			console.log('asd');
			$('.table-format tbody tr').removeClass('fadetd');
		});



	// PLUGINS


	// DataTable
	
	$('table.scheme-schedule').DataTable({
	  lengthChange: false,
			// scrollY: 100,
			scrollCollapse: true,
	    paging: false,
	    responsive: true,
	    columnDefs: [
	      { width: 20, targets: 0 }
	      ],
	      info: false
  	});
  	// DataTable placeholder
	$( ".dataTables_filter label input").attr('placeholder','Search');


  	// flickity


		// $('.scheme-carousel').flickity({
		//   cellAlign: 'left',
		//   contain: true,
		//   prevNextButtons: true,
		// 	pageDots: false
		// });

	var $carousel = $('.flickity').flickity({
  	cellSelector: 'img',
  	imagesLoaded: true,
  	// percentPosition: false,
  	cellAlign: 'left',
  	// wrapAround: true,
  	on: {
	    ready: function() {
		  	$('.flickity-slider').css({
		  		//'left':($(window).outerWidth() - 40 - $('.center-content').outerWidth())/2,
		  		'opacity': '1'
		  	});
		  	$('.flickity-slider > .slide').css({		  		
		  		'opacity': '1'
		  	});
	    }
	  }	  
	});
	var $caption = $('.flickity-caption');
	// Flickity instance
	var flkty = $carousel.data('flickity');
		$carousel.on( 'select.flickity', function() {
	  	$caption.text( flkty.selectedElement.alt )
	});




	// NATIVE SCRIPTS

	
	// launchpad	

	var Oupfrontmargin = $('.upfront .launch-pad-links');
	var upfrontmargin = (-(Oupfrontmargin.find('li').first().width() - Oupfrontmargin.find('li').first().find('img').width())/2);

	$('.launch-pad-links').css({
	'margin-right': upfrontmargin,
	'margin-left': upfrontmargin
	});


	// sidebar

	
	$('.sidebar.normal-menu .menu-list li a:not(.sub-menu)').click(function(){
		$('.sidebar .menu-list li a').removeClass('active');
		$(this).addClass('active');          
	});


	//sidebar with scrollspy - check this

	$('.sidebar.scrollspy .menu-list li a').click(function(){
		// $(this).blur();
		$('.form-content').hide();
		$('.form-content').fadeIn('100');

	  	$('html, body').stop().animate({
		  	scrollTop: $( $(this).attr('href') ).offset().top - 126
		}, 120);
		
		return false;
	});




});