// 记录当前图片的索引，默认 0
var index1 = 0;

// 找到最大的图片的索引
var maxindex1 = $('.slider1 li').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.slider1 .arrow-right').click(function () {
  // 当前图图片
  $('.slider1 li')
    .eq(index1)
    .fadeOut();

  // 找到下一张图片，把索引记录

  if (index1 < maxindex1) {
    index1++;
  } else {
    index1 = 0;
  }
  $('.slider1 li')
    .eq(index1)
    .fadeIn();
  $('.slider1 .control > a')
    .eq(index1)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
// 点击圆点
$('.slider1 .control > a').click(function () {
  $('.slider1 li')
    .eq(index1)
    .fadeOut();
  $('.slider1 .control > a')
    .eq(index1)
    .removeClass('active');
  index1 = $(this)
    .index1()
  $('.slider1 li')
    .eq(index1)
    .fadeIn()
  $('.slider1 li')
    .eq(index1)
  $('.slider1 .control > a')
    .eq(index1)
    .addClass('active')
  console.log($(this)
    .index1())

})
// 上一张
$('.slider1 .arrow-left').click(function () {
  // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
  $('.slider1 li')
    .eq(index1)
    .fadeOut();

  // 找到上一张图片
  if (index1 > 0) {
    index1--;
  } else {
    // 当前已经是第一张图片，要获取最后一张图片的索引
    index1 = maxindex1;
  }
  $('.slider1 li')
    .eq(index1)
    .fadeIn();
  $('.slider1 .control > a')
    .eq(index1)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
console.log($('.control > a'))