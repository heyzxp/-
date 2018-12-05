// 记录当前图片的索引，默认 0
var index3 = 0;

// 找到最大的图片的索引
var maxindex3 = $('.slider3 li').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.slider3 .arrow-right').click(function () {
  // 当前图图片
  $('.slider3 li')
    .eq(index3)
    .fadeOut();

  // 找到下一张图片，把索引记录

  if (index3 < maxindex3) {
    index3++;
  } else {
    index3 = 0;
  }
  $('.slider3 li')
    .eq(index3)
    .fadeIn();
  $('.slider3 .control > a')
    .eq(index3)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
// 点击圆点
$('.slider3 .control > a').click(function () {
  $('.slider3 li')
    .eq(index3)
    .fadeOut();
  $('.slider3 .control > a')
    .eq(index3)
    .removeClass('active');
  index3 = $(this)
    .index3()
  $('.slider3 li')
    .eq(index3)
    .fadeIn()
  $('.slider3 li')
    .eq(index3)
  $('.slider3 .control > a')
    .eq(index3)
    .addClass('active')
  console.log($(this)
    .index3())

})
// 上一张
$('.slider3 .arrow-left').click(function () {
  // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
  $('.slider3 li')
    .eq(index3)
    .fadeOut();

  // 找到上一张图片
  if (index3 > 0) {
    index3--;
  } else {
    // 当前已经是第一张图片，要获取最后一张图片的索引
    index3 = maxindex3;
  }
  $('.slider3 li')
    .eq(index3)
    .fadeIn();
  $('.slider3 .control > a')
    .eq(index3)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
console.log($('.control > a'))