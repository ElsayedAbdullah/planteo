$(document).ready(function () {

  // open menu in small screen when click on menu button
  $('.navbar-toggler').on('click', function() {
    $('.navbar .navbar-collapse').addClass('active')
  })

  // close menu in small screen when click on close button
  $('.close-btn').on('click', function() {
    $('.navbar .navbar-collapse').removeClass('active')
  })
  
  // $(document).on("click", function (e) {
  //   var $currEl = $(e.currentTarget);
  //   if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
  //     $('.navbar .navbar-collapse').removeClass('active')
  //   }
  // });

  // $(".navbar").on("click", function (e) {
  //   e.stopPropagation();
  // });

  // PreLoading
  $(window).on('load', function() {
    setTimeout(() => { 
      $('.loading').fadeOut(1000) 
    }, 2000)
  })

  // add class sticky to navbar when scroll down
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 150) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }

    // show and hide scroll-to-top button when scrolling
    if($(this).scrollTop() > 300) {
      $('.scrolltop').fadeIn()
    } else {
      $('.scrolltop').fadeOut()
    }
  })

  // scroll to top button
  $('.scrolltop').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800)
  })

})

