$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    navText : "",
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        },
        1200:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
  $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".main-footer .toggle-mnu").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
/*---мышка скрол-*/
    $(".arrow-button").click(function() {
        $("html, body").animate({ 
            scrollTop:  $(".st-about").offset().top
        }, 600);
    });
/*---*/
$('.gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true,
     removalDelay: 100
  }
});


$('.test-popup-link').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
     removalDelay: 100
  }
  // other options
});


});