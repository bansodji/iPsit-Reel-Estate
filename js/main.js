// Owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
    });
});

// Full Page Search
$(document).ready(function () {
    $(".ful-page-search").hide();
    
    $(".fa-times").click(function () {
        $(".ful-page-search").hide();
    });
    $("#search-icn").click(function () {
        $(".ful-page-search").show();
    });
});