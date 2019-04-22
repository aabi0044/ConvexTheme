( function ( $ ) {
    'use strict';

    // Define the tour!
    var tour = {
        id: "demo-tour",
        showPrevButton: true,
        steps: [
            {
                title: "Notifications Sidebar",
                content: "Click here to check notification sidebar option.",
                target: "navbar-notification-sidebar",
                placement: "left"
            },
            {
                title: "Footer",
                content: "Footer content of this site is shown here.",
                target: "pixinventLink",
                placement: "top"
            },
            {
                title: "Avatar",
                content: "Avatar for current logged in user is shown here.",
                target: "navbar-avatar",
                placement: "left"
            },
            {
                title: "Customizer",
                content: "This is the customizer for the theme where you can customize menu options.",
                target: "customizer-toggle-icon",
                placement: "left"
            },
            {
                title: "Sidebar Toggle",
                content: "To toggle sidebar.",
                target: "sidebarToggle",
                placement: "right"
            }
            
            
            
        ]
    };

    // Start the tour
    $('#btnStartTour').on('click', function (e) {
        hopscotch.startTour(tour);
    });

} ( jQuery ) );
