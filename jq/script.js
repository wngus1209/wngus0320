$(function () {
  $(".lnb").mouseleave(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:first-child").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "1");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(2)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "1");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(3)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "1");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(4)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "1");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(5)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "1");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(6)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "1");
    $(".lnb_wrap_seven").css("opacity", "0");
  });
  $(".gnb ul li:nth-child(7)").mouseover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "1");
  });

  $(".mainbanner").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    speed: 500,
    pause: 4000,
    auto: true,
    autoHover: true,
    pager: true,
    touchEnabled: true,
    pagerType: "long",
  });

  var num = 0;

  setInterval(function () {
    if (num < 1) {
      num++;
    } else {
      num = 0;
    }
    $(".rank_wrap div").fadeOut();
    $(".rank_wrap div").eq(num).fadeIn();
  }, 7000);

  $(".rank_btn img").click(function () {
    if (num < 1) {
      num++;
    } else {
      num = 0;
    }
    $(".rank_wrap div").fadeOut();
    $(".rank_wrap div").eq(num).fadeIn();
  });
});
