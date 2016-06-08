$(document).ready(function () {
    checkScrool();
});

$(window).scroll(function() {
    checkScrool();
});

function checkScrool(){
    if ( $(document).scrollTop() > 50) {
        $("#topNav").addClass("navbar navbar-default navbar-header navbar-fixed-top").removeClass("static-nav");
    } else {
        $("#topNav").addClass("static-nav").removeClass("navbar navbar-default navbar-header navbar-fixed-top");
    }
}