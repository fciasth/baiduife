var bannerGroup=document.querySelector('.banner-group');
var next=document.getElementById('next');
var pre=document.getElementById('pre');

var current=(function(){
    //通过闭包构造私有变量
    var index=0;
    return {
        //下一页
        next: function(){
            index++;
            return index;
        },

        //上一页
        pre: function(){
            index--;
            return index;
        }
    };
})();
next.addEventListener('click',function(){
    // bannerGroup.classList.remove('group-animation');
    bannerGroup.classList.add('group-transform');
    bannerGroup.style.transform='rotateY('+current.next()*72+'deg)';
});

pre.addEventListener('click',function(){
    // bannerGroup.classList.remove('group-animation');
    bannerGroup.classList.add('group-transform');
    bannerGroup.style.transform='rotateY('+current.pre()*72+'deg)';
});