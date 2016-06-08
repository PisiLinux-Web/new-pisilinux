$(document).ready(function () {
    if($(document).width() > 768) {
        checkScrool();
        $(window).scroll(function () {
            checkScrool();
        });
    } else {
        fixedNav();
    }
});

function checkScrool(){
    if ( $(document).scrollTop() > 50) {
        fixedNav();
    } else {
        staticNav();
    }
}

function staticNav(){
    $("#topNav").addClass("static-nav").removeClass("navbar navbar-default navbar-header navbar-fixed-top");
}

function fixedNav(){
    $("#topNav").addClass("navbar navbar-default navbar-header navbar-fixed-top").removeClass("static-nav");
}