( function ( $ ) {
    'use strict';

    $(document).ready(function(){

        // Apply scrollbar to email sidebar
    	if( $('.email-app-sidebar-content').length > 0 ){
    		 $('.email-app-sidebar-content').perfectScrollbar();
    	}

        // Apply scrollbar to emails list
    	if($('.email-app-list').length > 0){
    		$('.email-app-list').perfectScrollbar();
    	}

        // Hide email content if window width is less than 768px
    	if (window.innerWidth < 768) {
            if( $('.email-app-mail-content').length > 0 ){
                $('.email-app-mail-content').addClass('hide-email-content');
            }
        }

        // Windw resize
        $( window ).resize(function() {
            // Hide email content if window width is less than 768px
            if (window.innerWidth < 768) {
                $('.email-app-mail-content').addClass('hide-email-content');
            }
            // Show email content if window width is greater than 768px
            if (window.innerWidth > 768) {
                $('.email-app-mail-content').removeClass('hide-email-content');
            }
        });

        // Show email content
        $('.list-group-item').on('click',function(){
        	$('.email-app-mail-content').removeClass('hide-email-content');
        });

        // Back to inbox
        $('.back-to-inbox').on('click', function(){
        	$('.email-app-mail-content').addClass('hide-email-content');
        });

        // Toggle email sidebar
        $('.email-app-sidebar-toggle').on('click', function(){
            $('.email-app-sidebar').removeClass('d-none').addClass('d-block');
            $('.content-overlay').addClass('show');
        });

        // content overlay
        $('.content-overlay').on('click', function(){
            $(this).removeClass('show');
            $('.email-app-sidebar').removeClass('d-block').addClass('d-none');
        });
    });

} ( jQuery ) );