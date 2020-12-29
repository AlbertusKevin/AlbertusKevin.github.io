// event link diklik
$(".page-scroll").on("click", function (e) {
  //ambil tulisan link yang diklik
  let dest = $(this).attr("href");
  //ambil element tujuan
  let elDest = $(dest);

  $("html, body").animate(
    {
      scrollTop: elDest.offset().top - 50,
    },
    1000,
    "easeInOutExpo"
  );
  e.preventDefault();
});

// efek parallax
$(window).on("load", () => {
  $(".navbar-brand").addClass("navbar-brand-show");
  $(".page-scroll-nav").each((i) => {
    setTimeout(() => {
      $(".page-scroll-nav").eq(i).addClass("page-scroll-show");
    }, 300 * (i + 1));
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop(); // untuk mendapatkan jarak scroll saat ini terhadap document paling atas

  $(".jumbotron img").css({
    transform: `translate(0px, ${wScroll / 8}% )`,
  });

  $(".jumbotron h1").css({
    transform: `translate(0px, ${wScroll / 4}% )`,
  });

  $(".jumbotron p").css({
    transform: `translate(0px, ${wScroll / 2}% )`,
  });

  if (
    wScroll > $(".about").offset().top - 400 &&
    wScroll < $(".about").offset().top + 75
  ) {
    $(".heading-about").addClass("heading-about-show");
    $(".about-left").addClass("p-show");
    $(".about-right").addClass("p-show");
  } else {
    $(".heading-about").removeClass("heading-about-show");
    $(".about-left").removeClass("p-show");
    $(".about-right").removeClass("p-show");
  }

  if (wScroll > $(".card").offset().top - 600) {
    $(".heading-portfolio").addClass("heading-portfolio-show");
    $(".card").each((i) => {
      setTimeout(() => {
        $(".card").eq(i).addClass("show");
      }, 500 * (i + 1));
    });
  } else {
    $(".heading-portfolio").removeClass("heading-portfolio-show");
    $(".card").each((i) => {
      setTimeout(() => {
        $(".card").eq(i).removeClass("show");
      }, 500 * (i + 1));
    });
  }
});
