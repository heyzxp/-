$(".yes-no").click(function () {
  $(this)
    .toggleClass("mapyes")
    .find("div")
    .toggleClass("right");
  if ($(this).hasClass("mapyes")) {
    $(this)
      .find("div")
      .text("√");
  } else {
    $(this)
      .find("div")
      .text("x");
  }
});
$(".nums >ul >li a").click(function () {
  $(this)
    .addClass("liclass")
    .parent()
    .siblings()
    .children()
    .removeClass("liclass");
  anum = $(this)
    .parent()
    .index();
});
var anum = 0;
$(".nums > a").click(function () {
  $(".nums >ul >li")
    .eq(anum)
    .children()
    .removeClass("liclass");
  anum++;
  if (anum > 8) {
    anum = 0;
  }
  $(".nums >ul >li")
    .eq(anum)
    .children()
    .addClass("liclass");
});
$(".option-box > .acca >div").click(function () {
  $(this)
    .addClass("addoption-boxclass")
    .siblings()
    .removeClass("addoption-boxclass");
});
// 房源类型导航栏
$(".house-class").click(function () {
  $(".fylx").fadeIn(500);
  $(".kf").fadeOut(500);
  $(".sd").fadeOut(500);
  $(".lclx").fadeOut(500);
  $(".gd").fadeOut(500);
});
$(".fylx-bg").click(function () {
  $(".fylx").fadeOut(500);
  $(".house-class").removeClass("addoption-boxclass");
});
$(".fylx-index > span").click(function () {
  $(".fylx").fadeOut(500);
  $(".house-class").removeClass("addoption-boxclass");
});
// 房客类型导航栏
$(".fk-jian").prop("disabled", true);
$(".fk-jia").click(function () {
  // alert('aa')
  var index = $(this)
    .siblings("span")
    .text();
  index++;
  $(this)
    .siblings("span")
    .text(index);
  // console.log(index)
  $(".fk-jian").prop("disabled", false);
});
// 购物车添加
$(".fk-jian").click(function () {
  // alert('aa')
  var index = $(this)
    .siblings("span")
    .text();
  if (index == 0) {
    $(this).prop("disabled", true);
    return;
  }
  index--;
  $(this)
    .siblings("span")
    .text(index);
  // console.log(index)
});
$(".fk-bg").click(function () {
  $(".kf").fadeOut(500);
  $(".house-people").removeClass("addoption-boxclass");
});
$(".house-people").click(function () {
  $(".kf").fadeIn(500);
  $(".fylx").fadeOut(500);
  $(".sd").fadeOut(500);
  $(".lclx").fadeOut(500);
  $(".gd").fadeOut(500);
});
$(".fk-out").click(function () {
  $(".kf").fadeOut(500);
  $(".house-people").removeClass("addoption-boxclass");
});

$(".fk-ok").click(function () {
  $(".kf").fadeOut(500);
  $(".house-people").removeClass("addoption-boxclass");
  $(".house-people").text(
    $(".kf-a").text() +
    $(".kf-b").text() +
    "位房客，" +
    ($(".kf-c").text() + "名婴幼儿")
  );
});

// 闪订 导航栏
$(".reservation").click(function () {
  // alert('a');
  $(".sd").fadeIn(500);
  $(".fylx").fadeOut(500);
  $(".kf").fadeOut(500);
  $(".lclx").fadeOut(500);
  $(".gd").fadeOut(500);
});
$(".fylx-bg").click(function () {
  $(".sd").fadeOut(500);
  $(".reservation").removeClass("addoption-boxclass");
});
$(".sd h1").click(function () {
  $(".sd").fadeOut(500);
  $(".reservation").removeClass("addoption-boxclass");
});
// 旅程类型
$(".trip-class").click(function () {
  // alert('a');
  $(".lclx").fadeIn(500);
  $(".sd").fadeOut(500);
  $(".fylx").fadeOut(500);
  $(".kf").fadeOut(500);
  $(".gd").fadeOut(500);

});
$(".fylx-bg").click(function () {
  $(".lclx").fadeOut(500);
  $(".trip-class").removeClass("addoption-boxclass");
});
$(".lclx h2").click(function () {
  $(".lclx").fadeOut(500);
  $(".trip-class").removeClass("addoption-boxclass");
});
// 更多筛选条件
$(".more-sereen").click(function () {
  // alert('a');
  $(".gd").fadeIn(500);
  $(".lclx").fadeOut(500);
  $(".sd").fadeOut(500);
  $(".fylx").fadeOut(500);
  $(".kf").fadeOut(500);
});
$(".fylx-bg").click(function () {
  $(".gd").fadeOut(500);
  $(".more-sereen").removeClass("addoption-boxclass");
});
$(".x").click(function () {
  $(".gd").fadeOut(500);
  $(".more-sereen").removeClass("addoption-boxclass");
});