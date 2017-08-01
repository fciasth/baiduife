
//全局取消浏览器默认的右键事件
window.oncontextmenu = function(){
    return false;
};
window.onload = function(){
    var area = document.getElementById('menu');
    var bd = document.getElementsByTagName('body')[0];
    eventDeal.addHandler(bd,"contextmenu",rightClick);
    eventDeal.addHandler(bd,"click",clickRemove);
};
function clickRemove(event){
    area.style.display = "none";
    menu.style.display = "none";

}
var eventDeal = {
    getEvent:function (event) {
        return event?event:window.event;
    },
    // 1.IE浏览器的事件处理程序和其他的浏览器不同，在IE浏览器中，使用attachEvent()这个方法
    // 设置事件监听，而在其他的浏览器中，使用addEventListener()进行处理
    addHandler:function (element,type,handler) {
        if (element.addEventListener){
            element.addEventListener(type,handler,false);
        }
        else if (element.attachEvent){
            element.attachEvent()
        }
        else{
            element['on'+type] = handler;
        }
    },
    getTarget:function (event) {
        return event.target||event.srcElement;
    },
    preventDefault:function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    }
};

function rightClick(event) {
    var e = eventDeal.getEvent();
    eventDeal.preventDefault(event);
    var winW = document.body.clientWidth,
        winH = document.body.clientHeight;
    // 鼠标指针位置：
    // screenX/Y: 参照点也就是原点是整个屏幕的左上角，不限于浏览器内。
    // clientX/Y: 参照点是浏览器内容区域的左上角（浏览器显示区域的左上角），该参照点会随之滚动条的移动而移动。
    // pageX/Y：参照点也是浏览器内容区域的左上角（整个页面的左上角），但它不会随着滚动条而变动
    var pageX = event.pageX,
        pageY = event.pageY;
    // var site = GetObjPos(eventDeal.getTarget(bd));
    // console.log(site.x,site.y)
    if(winW-pageX<=480 && winH-pageY<=200){
        area.style.top = pageY-200 + 'px';
        area.style.left = pageX-480 + 'px';
    }else if(winW-pageX<=480){
        area.style.left = pageX-480 + 'px';
        area.style.top = pageY + 'px';
    }else if(winH-pageY<=200){
        area.style.top = pageY-200 + 'px';
        area.style.left = pageX + 'px';
    }else{
        area.style.top = pageY + 'px';
        area.style.left = pageX + 'px';
    }
    area.style.display = 'block';
}