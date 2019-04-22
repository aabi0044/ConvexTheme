/*!
 ================================================================================================
 * Convex - Angular 6+ & Bootstrap 4 Admin Dashboard Template - V1.0
 ================================================================================================

 * Product Page: http://pixinvent.com/demo/convex-angular-bootstrap-admin-dashboard-template
 * Copyright 2017 PIXINVENT (http://pixinvent.com)

 ================================================================================================
*/

( function ( $ ) {
    'use strict';

    $(document).ready( function(){

        // Declare variables
        var $sidebar = $('.app-sidebar'),
        $sidebar_content = $('.sidebar-content'),
        $sidebar_img = $sidebar.data('image'),
        $sidebar_img_container = $('.sidebar-background'),
        $wrapper = $('.wrapper');

        // Apply scrollbar to sidebar menu
        $sidebar_content.perfectScrollbar();

        // Set background image
        if( $sidebar_img_container.length !== 0 && $sidebar_img !== undefined ){
            $sidebar_img_container.css('background-image','url("' + $sidebar_img + '")');
        }

        // Add open classes to menu items
        if(!$wrapper.hasClass('nav-collapsed')){
            $sidebar_content.find('li.active').parents('li').addClass('open');
        }

        // Menu item click event
        $sidebar_content.on('click', '.navigation li a',function(){
            var $this = $(this),
            listItem = $this.parent('li');

            if(listItem.hasClass('has-sub') && listItem.hasClass('open')){
                collapse(listItem);
            }
            else{
                if(listItem.hasClass('has-sub')){
                    expand(listItem);
                }

                // If menu collapsible then do not take any action
                if ($sidebar_content.data('collapsible')) {
                    return false;
                }
                // If menu accordion then close all except clicked once
                else {
                    var openListItems = listItem.siblings('.open');
                    collapse(openListItems);
                    listItem.siblings('.open').find('li.open').removeClass('open');
                }
            }

            // Update scroll position on each menu item click to avoid big scroll gap
            $sidebar_content.perfectScrollbar('update');
        });

        // Collpase menu item
        function collapse($listItem, callback) {
            var $subList = $listItem.children('ul');

            $subList.show().slideUp(200, function() {
                $(this).css('display', '');

                $(this).find('> li').removeClass('is-shown');

                $listItem.removeClass('open');

                if (callback) {
                    callback();
                }
            });
        }

        // Expand menu item
        function expand($listItem, callback) {
            var $subList = $listItem.children('ul');
            var $children = $subList.children('li').addClass('is-hidden');

            $listItem.addClass('open');

            $subList.hide().slideDown(200, function() {
                $(this).css('display', '');

                if (callback) {
                    callback();
                }
            });

            setTimeout(function() {
                $children.addClass('is-shown');
                $children.removeClass('is-hidden');
            }, 0);
        }

        // Add / remove logo text on menu collapse and expand
        $('.logo-text').on('click',function(){

            var listItem = $sidebar_content.find('li.open.has-sub'),
            activeItem = $sidebar_content.find('li.active');

            if(listItem.hasClass('has-sub') && listItem.hasClass('open')){
                collapse(listItem);
                listItem.removeClass('open');
                if(activeItem.closest('li.has-sub')){
                    openItem = activeItem.closest('li.has-sub');
                    expand(openItem);
                    openItem.addClass('open');
                }
            }
            else{
                if(activeItem.closest('li.has-sub')){
                    openItem = activeItem.closest('li.has-sub');
                    expand(openItem);
                    openItem.addClass('open');
                }
            }
        });

        // change menu collapsed / expanded icon
        $('.nav-toggle').on('click',function(){
            var $this = $(this),
            toggle_icon= $this.find('.toggle-icon'),
            toggle = toggle_icon.attr('data-toggle'),
            compact_menu_checkbox = $('.cz-compact-menu');

            if(toggle === 'expanded'){
                $wrapper.addClass('nav-collapsed');

                $('.nav-toggle').find('.toggle-icon').removeClass('ft-disc').addClass('ft-circle');
                toggle_icon.attr('data-toggle', 'collapsed');
                if(compact_menu_checkbox.length > 0){
                    compact_menu_checkbox.prop('checked',true);
                }
            }
            else{
                $wrapper.removeClass('nav-collapsed menu-collapsed');   

                $('.nav-toggle').find('.toggle-icon').removeClass('ft-circle').addClass('ft-disc');
                toggle_icon.attr('data-toggle', 'expanded');
                if(compact_menu_checkbox.length > 0){
                    compact_menu_checkbox.prop('checked',false);
                }
            }
        });

        // Slide in / Slide out menu sidebar when menu is in collapsed mode
        $sidebar.on('mouseenter', function() {
            if($wrapper.hasClass('nav-collapsed')){
                $wrapper.removeClass('menu-collapsed');
                setTimeout(function(){ 
                    $wrapper.removeClass('menu-animation');
                }, 150);
                var $listItem = $('.navigation li.nav-collapsed-open'),
                $subList = $listItem.children('ul');

                $subList.hide().slideDown(300, function() {
                    $(this).css('display', '');
                });

                $sidebar_content.find('li.active').parents('li').addClass('open');
                $listItem.addClass('open').removeClass('nav-collapsed-open');

                $('.user-settings-wrap').removeClass('d-none');
            }
        }).on('mouseleave', function(event) {
            if($wrapper.hasClass('nav-collapsed')){
                $wrapper.addClass('menu-collapsed');
                setTimeout(function(){ 
                    $wrapper.addClass('menu-animation');
                }, 150);
                var $listItem = $('.navigation li.open'),
                $subList = $listItem.children('ul');
                $listItem.addClass('nav-collapsed-open');

                $subList.show().slideUp(300, function() {
                    $(this).css('display', '');
                });

                $listItem.removeClass('open');

                $('.user-settings-wrap').addClass('d-none');
            }
        });


        // Hide menu when window width is less than 992px
        if (window.innerWidth < 992) {
            $sidebar.addClass('hide-sidebar');
            $wrapper.removeClass('nav-collapsed menu-collapsed');
        }

        // Window resize
        $( window ).resize(function() {
            // Hide menu when window width is less than 992px
            if (window.innerWidth < 992) {
                $sidebar.addClass('hide-sidebar');
                $wrapper.removeClass('nav-collapsed menu-collapsed');
            }

            // Show menu when window width is greater than 992px
            if (window.innerWidth > 992) {
                $sidebar.removeClass('hide-sidebar');
                if( $('.toggle-icon').attr('data-toggle') === 'collapsed' &&  $wrapper.not('.nav-collapsed menu-collapsed')){
                    $wrapper.addClass('nav-collapsed menu-collapsed');
                }
            }
        });

        // Hide menu on clicking menu item
        $(document).on('click', '.navigation li:not(.has-sub)', function(){
            if( window.innerWidth < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });

        // Hide menu on clicking logo text
        $(document).on('click', '.logo-text', function(){
            if( window.innerWidth < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });

        // Toggle Sidebar
        $('.navbar-toggle').on('click',function(e){
            e.stopPropagation();
            $sidebar.toggleClass('hide-sidebar');
        });

        // Hide sidebar on clicking Content part when screen size is less than 992px
        $('html').on('click', function (e) {
            if (window.innerWidth < 992) {
                if (!$sidebar.hasClass('hide-sidebar') && $sidebar.has(e.target).length === 0) {
                    $sidebar.addClass('hide-sidebar');
                }
            }
        });

        // Manually close sidebar
        $('#sidebarClose').on('click', function(){
            $sidebar.addClass('hide-sidebar');
        });

        // Apply scrollbar to notification drawer
        $('.noti-list').perfectScrollbar();

        // Navbar search icon click 
        $('#search').click(function(event) {
            $('#navbar-search').focus();
        });

        //Hide navbar search box on close click
        var toogleBtn = $(".header-navbar .navbar-search-close");
        $(toogleBtn).click(function(event) {
            $('.navbar-search .dropdown-toggle').click();
        });
    });

} ( jQuery ) );