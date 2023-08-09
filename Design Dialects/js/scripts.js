(function($) {
	$(document).ready(function() {
		"use strict";
		
		
		
		$('#nav, #main, #footer').addClass('visible');

		// PAGE TRANSITION
		$('.navigation-menu ul li a').on('click', function(e) {
			$('.transition-overlay').toggleClass("open");
			});
			$('.navigation-menu ul li a').on('click', function(e) {
				e.preventDefault();                  
				var goTo = this.getAttribute("href"); 
				setTimeout(function(){
					window.location = goTo;
				},1000);       
			});

		
			//////////////testimonilas//////////

			$('.multiple-items').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(255,255,255,1)"></path></svg></button>',
				nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="rgba(255,255,255,1)"></path></svg></button>',
				dots: false,
				autoplay: true,
				autoplaySpeed: 100000,
				pauseOnFocus: false,
				pauseOnHover: false, 
				pauseOnDotsHover: false,
				responsive: [
					{
						breakpoint: 768, // This is the breakpoint for mobile devices (you can adjust this value if needed)
						settings: {
							slidesToShow: 2,
							
						}
					}
				]
			});
			
			  

			//////////////testimonilas//////////
		
		/*********************
		  Thumbnails slider
		*********************/
		// Change the main image whenever a thumbnail button is activated
		$('.thumbnails-slider').on('init', function(e, slider) {
			$(slider.$slides.find('.thumbnail-button')).each(function(index) {
			  $(this).on('click', function() {
				// Move aria-current="true" to this button
				$(slider.$slides.find('.thumbnail-button').removeAttr('aria-current'));
				$(this).attr('aria-current', true);
		
				// Change the main image to match this thumbnail button
				var index = $(this).closest('.slick-slide').data('slick-index');
				$('.main-image-slider').slick('slickGoTo', index);
			  });
			});
		  });
		  
		  // Initialize the slider
		  $('.thumbnails-slider').slick({
			vertical: true,
			slidesToShow: 1,
			autoplay: true,
  			autoplaySpeed: 5000,
  			speed: 1000,
			loop:true,
  			slidesToScroll: 1,
			cssEase: 'ease-in-out',
  			infinite: true,
			arrows: false,
			swipe: false,
			instructionsText: 'This carousel contains a column of small thumbnails. Selecting a thumbnail will change the main image in the carousel that follows. Use the Previous and Next buttons to cycle through all the thumbnails, use Enter to select.',
			regionLabel: 'thumbnails carousel'
		  });
		  
		  
		  /********************
			Main image slider
		  *********************/
		  $('.main-image-slider').slick({
			slidesToShow: 1,
			loop:true,
			autoplay: true,
			swipe: false,
  			pauseOnHover: false, 
			autoplaySpeed: 5000,
			arrows: false,
			autoplayButton: false,
			fade: true,
			speed: 1000,
			dots:true,
			instructionsText: 'This carousel shows one large product image at a time. Use the Previous and Next buttons to move between images, or use the preceding thumbnails carousel to select a specific image to display here.',
			regionLabel: 'main image carousel',
		  });
		  
			// Update the thumbnail slider when the user changes the main slider directly.
			$('.main-image-slider').on('beforeChange', function(e, slider, currentSlide, nextSlide) {
			  // Remove aria-current from the last selected thumbnail image button
			  $('.thumbnails-slider .thumbnail-button[aria-current="true"]').removeAttr('aria-current');
			  
			  // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
			  $('.thumbnails-slider').slick('slickGoTo', nextSlide);
		
			  // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
			  $('.thumbnails-slider .thumbnail-button:eq(' + nextSlide + ')').attr('aria-current', true);
			}); 


		
			
	
		
			// about banner

			$('.about-slideshow').slick({
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
				arrows: false,
				dots: false,
			  });


		
		
			
	});
	// END JQUERY		





	













	$(window).scroll(function() {
		if ($(window).scrollTop() > 300 && $(window).width() > 1334) {
		  $('.left-bar').css('display', 'flex');
		} else {
		  $('.left-bar').css('display', 'none');
		}
	  });
	  







	


	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 50) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});




	
	

	setTimeout(function(){
		$("body").addClass("page-loaded");
	}, time);

	
	// WOW ANIMATION 
	var wow = new WOW(
	{
		animateClass: 'animated',
		offset:       50
	}
	);
	wow.init();


	


	

       
    
})(jQuery);



  
