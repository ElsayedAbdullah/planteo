$(document).ready(function () {
  // open menu in small screen when click on menu button
  $(".navbar-toggler").on("click", function () {
    $(".navbar .navbar-collapse").addClass("active");
  });

  // close menu in small screen when click on close button
  $(".close-btn").on("click", function () {
    $(".navbar .navbar-collapse").removeClass("active");
  });

  $(".navbar").on("click", ".navbar-nav > li", function () {
    if ($(window).width() < 992) {
      $(this).toggleClass("active").siblings().removeClass("active");
    }
  });

  $(document).on("click", function (e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $(".navbar .navbar-collapse").removeClass("active");
    }
  });

  $(".dropdown--menu,.navbar").on("click", function (e) {
    e.stopPropagation();
  });
  $(".nav-link.dropdown-toggle").on("click", function (e) {
    e.preventDefault();
  });

  // PreLoading
  $(window).on("load", function () {
    setTimeout(() => {
      $(".loading").fadeOut(1000);
    }, 2000);
  });

  // add class sticky to navbar when scroll down
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // show and hide scroll-to-top button when scrolling
    if ($(this).scrollTop() > 300) {
      $(".scrolltop").fadeIn();
    } else {
      $(".scrolltop").fadeOut();
    }
  });

  // scroll to top button
  $(".scrolltop").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  // $(".navbar-nav .nav-link").on("click", function () {
  //   let id = $(this).attr("id");
  //   $("html,body").animate(
  //     {
  //       scrollTop: $("." + id).offset().top
  //     },
  //     800
  //   );
  // });

  // add active class to navlink when reach its section during scrolling
  $(".navbar-nav .nav-lnk").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      800
    );
    return false;
  });

  // Cache selectors
  var topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 70,
    // All list items
    menuItems = topMenu.find(".nav-lnk"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  });

  // Convert all jquery to pure javascript
  // toggle Menu button
  // let toggleMenu = document.querySelector(".navbar-toggler");
  // let theLinks = document.querySelector(".navbar-collapse");
  // toggleMenu.onclick = function (e) {
  //   e.stopPropagation();
  //   theLinks.classList.add("active");
  // };

  // document.onclick = function (e) {
  //   if (
  //     e.target != toggleMenu &&
  //     e.target != theLinks
  //   ) {
  //     if (theLinks.classList.contains("active")) {
  //       theLinks.classList.toggle("active");
  //     }
  //   }
  // };
});
