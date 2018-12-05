//获取分享按钮 点击显示
$('.one2_box2').click(function () {
    $('.sharebutton').fadeIn();
})
// 点击隐藏div
$('.sharebuttonbox3').click(function () {
    $('.sharebutton').fadeOut();
})
$('.sharebuttonbox1').click(function () {
    $('.sharebutton').fadeOut();
})



// 点击图片跳转wangye
$('.one2_box3').click(function () {
    $(this).children().attr('href', './idnex2.html');
    localStorage.a = 0;
})
$('.four_box1').click(function () {
    $(this).children().attr('href', './idnex2.html');
    localStorage.a = 1;
})
$('.four_box2').click(function () {
    $(this).children().attr('href', './idnex2.html');
    localStorage.a = 2;
})
$('.four_box3').click(function () {
    $(this).children().attr('href', './idnex2.html');
    localStorage.a = 3;
})
$('.four_box4').click(function () {
    $(this).children().attr('href', './idnex2.html');
    localStorage.a = 4;
})