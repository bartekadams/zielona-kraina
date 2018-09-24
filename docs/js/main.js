$(document).ready(function(){
  $('.mySlides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });


  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-button").style.display = "block";
    } else {
        document.getElementById("back-to-top-button").style.display = "none";
    }
  }

  $('#back-to-top-button').on('click', function() {
    document.querySelector('#top-page').scrollIntoView({
      behavior: 'smooth'
    });
  });

  $('#menu-list > a').each(function() {
    $(this).on('click', function() {
      //console.log($(this)[0].dataset.scrollTo);
       document.querySelector('#' + $(this)[0].dataset.scrollTo).scrollIntoView({
         behavior: 'smooth'
       });
    });
  });

  $('#menu-list-new > .segment > a').each(function() {
    $(this).on('click', function() {
      //console.log($(this)[0].dataset.scrollTo);
       document.querySelector('#' + $(this)[0].dataset.scrollTo).scrollIntoView({
         behavior: 'smooth'
       });
    });
  });

  $('#menu-list-new > .segment').each(function() {
    $(this).on('click', function() {
       console.log($(this)[0].dataset.scrollTo);
       document.querySelector('#' + $(this)[0].dataset.scrollTo).scrollIntoView({
         behavior: 'smooth'
       });
    });
  });
});
