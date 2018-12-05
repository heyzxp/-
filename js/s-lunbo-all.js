// 切换下一张图片
var indexs;
$('.small-slider  .arrow-right').click(function () {
    // 判断是否有indexs属性（indexs记录当前元素的图片播放位置）
    if ($(this)
        .parent()
        .parent()[0]
        .indexs === undefined) {
        $(this)
            .parent()
            .parent()[0]
            .indexs = 0;
    }
    indexs = $(this)
        .parent()
        .parent()[0]
        .indexs
    // 找到当前图片并隐藏
    $(this)
        .parent()
        .parent()
        .children('ul')
        .children('li')
        .eq(indexs)
        .fadeOut()
    // 找到当前的圆点并隐藏
    $(this)
        .parent()
        .parent()
        .children('.control')
        .children('a')
        .eq(indexs)
        .removeClass('active')
    indexs++;
    if (indexs > $(this)
        .parent()
        .parent()
        .children('ul')
        .children('li').length - 1) {
        indexs = 0;
    }
    // 找到下一个图片并显示出来
    $(this)
        .parent()
        .parent()
        .children('ul')
        .children('li')
        .eq(indexs)
        .fadeIn()
    // 找到下一个的圆点并显示
    $(this)
        .parent()
        .parent()
        .children('.control')
        .children('a')
        .eq(indexs)
        .addClass('active')

    // 最后记录图片位置（indexs）
    $(this)
        .parent()
        .parent()[0]
        .indexs = indexs;
    // console.log($(this)
    //     .parent()
    //     .parent()[0]
    //     .indexs)
    // console.log($(this)
    //     .parent()
    //     .parent())
})
$('.small-slider  .arrow-left').click(function () {
    // 判断是否有indexs属性（indexs记录当前元素的图片播放位置）
    if ($(this)
        .parent()
        .parent()[0]
        .indexs === undefined) {
        $(this)
            .parent()
            .parent()[0]
            .indexs = 0;
    }
    indexs = $(this)
        .parent()
        .parent()[0]
        .indexs
    // 找到当前图片并隐藏
    $(this)
        .parent()
        .parent()
        .children('ul')
        .children('li')
        .eq(indexs)
        .fadeOut()
    // 找到当前的圆点并隐藏
    $(this)
        .parent()
        .parent()
        .children('.control')
        .children('a')
        .eq(indexs)
        .removeClass('active')
    indexs--;
    if (indexs < 0) {
        indexs = $(this)
            .parent()
            .parent()
            .children('ul')
            .children('li').length - 1;
    }
    // 找到下一个图片并显示出来
    $(this)
        .parent()
        .parent()
        .children('ul')
        .children('li')
        .eq(indexs)
        .fadeIn()
    // 找到下一个的圆点并显示
    $(this)
        .parent()
        .parent()
        .children('.control')
        .children('a')
        .eq(indexs)
        .addClass('active')

    // 最后记录图片位置（indexs）
    $(this)
        .parent()
        .parent()[0]
        .indexs = indexs;
    // console.log($(this)
    //     .parent()
    //     .parent()[0]
    //     .indexs)
    // console.log($(this)
    //     .parent()
    //     .parent())
})