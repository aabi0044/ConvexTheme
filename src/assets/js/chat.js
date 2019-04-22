( function ( $ ) {
    'use strict';

	$(document).ready(function(){
		// Chat application height
		$('.chat-application').height( $(window).height() - $('.navbar').outerHeight() - 60 );

		// Window Resize
		$(window).resize(function(){
			// Adjust height
		    $('.chat-application').height( $(window).height() - $('.navbar').outerHeight() - 60 );
		});

		// Apply scrollbar to chat sidebar
		if($('.chat-sidebar').length > 0){
			$('.chat-sidebar').perfectScrollbar();
		}

		// Toggle chat sidebar
		$('.chat-app-sidebar-toggle').on('click', function(){
	        $('.chat-sidebar').removeClass('d-none d-sm-none').addClass('d-block d-sm-block');
	        $('.content-overlay').addClass('show');
	    });

		// chat overlay
	    $('.content-overlay').on('click', function(){
	        $(this).removeClass('show');
	        $('.chat-sidebar').removeClass('d-block d-sm-block').addClass('d-none d-sm-none');
	    });
	});

} ( jQuery ) );