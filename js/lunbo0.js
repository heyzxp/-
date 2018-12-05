// 记录当前图片的索引，默认 0
var index = 0;

// 找到最大的图片的索引
var maxIndex = $('.slider li').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.slider .arrow-right').click(function () {
  // 当前图图片
  $('.slider li')
    .eq(index)
    .fadeOut();

  // 找到下一张图片，把索引记录

  if (index < maxIndex) {
    index++;
  } else {
    index = 0;
  }
  $('.slider li')
    .eq(index)
    .fadeIn();
  $('.slider .control > a')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
// 点击圆点
$('.slider .control > a').click(function () {
  $('.slider li')
    .eq(index)
    .fadeOut();
  $('.slider .control > a')
    .eq(index)
    .removeClass('active');
  index = $(this)
    .index()
  $('.slider li')
    .eq(index)
    .fadeIn()
  $('.slider li')
    .eq(index)
  $('.slider .control > a')
    .eq(index)
    .addClass('active')
  console.log($(this)
    .index())

})
// 上一张
$('.slider .arrow-left').click(function () {
  // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
  $('.slider li')
    .eq(index)
    .fadeOut();

  // 找到上一张图片
  if (index > 0) {
    index--;
  } else {
    // 当前已经是第一张图片，要获取最后一张图片的索引
    index = maxIndex;
  }
  $('.slider li')
    .eq(index)
    .fadeIn();
  $('.slider .control > a')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
});