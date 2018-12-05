// 记录当前图片的索引，默认 0
var index2 = 0;

// 找到最大的图片的索引
var maxindex2 = $('.slider2 li').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.slider2 .arrow-right').click(function () {
  // 当前图图片
  $('.slider2 li')
    .eq(index2)
    .fadeOut();

  // 找到下一张图片，把索引记录

  if (index2 < maxindex2) {
    index2++;
  } else {
    index2 = 0;
  }
  $('.slider2 li')
    .eq(index2)
    .fadeIn();
  $('.slider2 .control > a')
    .eq(index2)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
// 点击圆点
$('.slider2 .control > a').click(function () {
  $('.slider2 li')
    .eq(index2)
    .fadeOut();
  $('.slider2 .control > a')
    .eq(index2)
    .removeClass('active');
  index2 = $(this)
    .index2()
  $('.slider2 li')
    .eq(index2)
    .fadeIn()
  $('.slider2 li')
    .eq(index2)
  $('.slider2 .control > a')
    .eq(index2)
    .addClass('active')
  console.log($(this)
    .index2())

})
// 上一张
$('.slider2 .arrow-left').click(function () {
  // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
  $('.slider2 li')
    .eq(index2)
    .fadeOut();

  // 找到上一张图片
  if (index2 > 0) {
    index2--;
  } else {
    // 当前已经是第一张图片，要获取最后一张图片的索引
    index2 = maxindex2;
  }
  $('.slider2 li')
    .eq(index2)
    .fadeIn();
  $('.slider2 .control > a')
    .eq(index2)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
console.log($('.control > a'))