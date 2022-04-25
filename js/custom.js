$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 50){
      $(".navbar").addClass("sticky-header");
    }else{
      $(".navbar").removeClass("sticky-header");
    }
  });
});


$('#testimonials').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }

});

$( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

$(document).ready(function() {
  $('.trigger').click(function() {
    $('.overlay2').fadeIn(300);  
  });
  $('.close').click(function() {
    $('.overlay2').fadeOut(300);
  });
});

$(".video-modal").click(function () {
  var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal).on('hidden.bs.modal', function () {
    $(theModal + ' iframe').attr('src', videoSRC);
  });
});

$(document).ready(function () {
      var max = 0,
          $els = $('.contentlistSEv');
      $els.each(function () {
          max = Math.max($(this).height(), max); 
      });

      $els.height(max)
  });
  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



//new WOW().init();




