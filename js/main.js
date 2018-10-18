$(document).ready(function(){
    ScrollPosStyler.init();
    $('.myCarousel').slick({responsive:[{breakpoint:768,settings:{arrows:false,slidesToShow:1}},{breakpoint:480,settings:{arrows:false,slidesToShow:1}}]});
});