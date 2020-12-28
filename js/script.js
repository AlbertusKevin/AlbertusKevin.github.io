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
