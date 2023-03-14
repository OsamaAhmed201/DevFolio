let sec1 = $('.ABOUT').offset().top;
$(window).scroll(function () {
  let wscrol = $(window).scrollTop();
  if (wscrol > sec1 ) {
    $("#icon-scrol").css('backgroundColor', 'black')
  
  }
  else {
    $("#icon-scrol").css('backgroundColor', 'transparent')
 

  }
})


$(document).ready(function () {
    $('.load .lds-dual-ring').fadeOut(1000, function () {
      $('.load').fadeOut(1000, function () {
        $('.load').remove();
        $('body').css('overflow-y', 'auto')
      })
    })
  })
