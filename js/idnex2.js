$('.one_box3').click(function () {
    $('.sharebutton').fadeIn();
})
// 点击隐藏div
$('.sharebuttonbox3').click(function () {
    $('.sharebutton').fadeOut();
})
$('.sharebuttonbox1').click(function () {
    $('.sharebutton').fadeOut();
})

switch(localStorage.a){
    case "0" :
    break;
    case "1" :
    var $qwe = $('.two_boxp').offset().top;
    $('body,html').animate({
        scrollTop:$qwe
    })
    break;
    case "2" :
    var $qwe = $('.three_box2').offset().top;
    $('body,html').animate({
        scrollTop:$qwe
    })
    break;
    case "3" :
    var $qwe = $('.four_box').offset().top;
    $('body,html').animate({
        scrollTop:$qwe
    })
    break;
    case "4" :
    var $qwe = $('.five_box').offset().top;
    $('body,html').animate({
        scrollTop:$qwe
    })
    break;
}
localStorage.a = ''
    
