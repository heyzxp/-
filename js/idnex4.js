var lis = document.querySelector('.two_box > ul');
var right = document.querySelector('.two_boxleft');
var left = document.querySelector('.two_boxright');
var two_box = document.querySelector('.two_box');
var div = document.querySelector('.two_dian')
var lisdian = document.querySelectorAll('.two_dian a')
var index = 0;
console.log(lisdian);
right.onclick = function () {
    if (index == 0) {
        lis.style.left = 0 + 'px';
      }
    clearInterval(qeqe);

    lisdian[index].className = '';
    index++;
    
    var wwwe = index * -1904;
    move(lis, wwwe);
    if(index == 6){
        index = 0;
    }
    lisdian[index].className = 'trr';
}

left.onclick = function () {
    lisdian[index].className = '';
    index--;
    if (index < 0) {
        lis.style.left = -11424 + 'px';
        index = 5;
    }
    var er = index * -1904;
    move(lis, er);
    lisdian[index].className = 'trr';
}
for (let i = 0; i < lisdian.length; i++) {
    lisdian[i].num = i
    
}
div.onclick = function(e) {
    var t = e.target;
    if(t.nodeName == "A"){
        lisdian[index].className = '';
       index =  t.num;
       var fff = index * - 1904;
       move(lis,fff);
       lisdian[index].className = 'trr';
    }
}




var qeqe = setInterval(function () {
    right.onclick();
}, 2000)

two_box.onmouseenter = function () {
    clearInterval(qeqe);
}

two_box.onmouseleave = function () {

    qeqe = setInterval(function () {
        right.onclick();
    }, 2000)
}