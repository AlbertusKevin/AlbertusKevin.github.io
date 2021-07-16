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
    }, 200 * (i + 1));
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
    wScroll < $(".about").offset().top + 600
  ) {
    $(".heading-about").addClass("heading-about-show");
    $(".about-left").addClass("p-show");
    $(".about-right").addClass("p-show");
  } else {
    $(".heading-about").removeClass("heading-about-show");
    $(".about-left").removeClass("p-show");
    $(".about-right").removeClass("p-show");
  }

  if (
    wScroll > $(".skill").offset().top - 400 &&
    wScroll < $(".skill").offset().top + 600
  ) {
    $(".heading-skill").addClass("heading-skill-show");
  } else {
    $(".heading-skill").removeClass("heading-skill-show");
  }

  if (wScroll > $(".card").offset().top - 700) {
    $(".heading-portfolio").addClass("heading-portfolio-show");
    $(".card").each((i) => {
      setTimeout(() => {
        $(".card").eq(i).addClass("show");
      }, 500 * (i + 1));
    });
  }

  if (
    wScroll > $(".mini-project").offset().top - 600 &&
    wScroll < $(".mini-project").offset().top + 1600
  ) {
    $(".heading-mini-project").addClass("heading-mini-project-show");

    $(".mini-left").each((i) => {
      setTimeout(() => {
        $(".mini-left").eq(i).addClass("mini-left-show");
      }, 300 * (i + 1));
    });
    $(".mini-right").each((i) => {
      setTimeout(() => {
        $(".mini-right").eq(i).addClass("mini-right-show");
      }, 300 * (i + 1));
    });
  }

  if (
    wScroll > $(".experience").offset().top - 600 &&
    wScroll < $(".experience").offset().top + 1500
  ) {
    $(".heading-exp").addClass("heading-exp-show");
    $(".vin-card").each((i) => {
      setTimeout(() => {
        $(".vin-card").eq(i).addClass("show-vin-card");
      }, 1000 * (i + 1));
    });
  }

  if (wScroll > $(".heading-media").offset().top - 700) {
    $(".heading-media").addClass("show-media");
    $(".image-media").each((i) => {
      setTimeout(() => {
        $(".image-media").eq(i).addClass("show-media");
      }, 300 * (i + 1));
    });
  } else {
    $(".heading-media").removeClass("show-media");
    $(".image-media").each((i) => {
      setTimeout(() => {
        $(".image-media").eq(i).removeClass("show-media");
      }, 300 * (i + 1));
    });
  }
});
