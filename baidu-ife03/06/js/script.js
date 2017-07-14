/**
 * Created by zxh_s on 2017/7/13.
 */
var btn = document.getElementById("start");
var popover = document.getElementById("popover");
var shadow = document.getElementById("shadow");
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancel");
var title = document.getElementById("title");
var right = document.getElementById("popover-right");
var bottom =document.getElementById("popover-bottom");
var X,Y;

btn.addEventListener("click",function () {
    popover.style.display = "block";
    shadow.style.display = "block";
});

cancel.addEventListener("click",function () {
    popover.style.display = "none";
    shadow.style.display = "none";
});

confirm.addEventListener("click",function () {
    popover.style.display = "none";
    shadow.style.display = "none";
});
title.onmousedown=function(){
    var mouseLeft=event.clientX-popover.offsetLeft;
    var mouseTop=event.clientY-popover.offsetTop;
    var width=popover.offsetWidth;
    var height=popover.offsetHeight;
    title.onmousemove=function(){
        var event=event || window.event;
        var screenX=shadow.offsetWidth;
        var screenY=shadow.offsetHeight;
        window.getSelection?window.getSelection().removeAllRanges(): document.selection.empty();
        if(screenX>=(event.clientX-mouseLeft+width) && event.clientX-mouseLeft>=0){
            popover.style.left=event.clientX-mouseLeft+"px";
        }
        if(screenY>=(event.clientY-mouseTop+height) && event.clientY-mouseTop>=0){
            popover.style.top=event.clientY-mouseTop+"px";
        }
    }
};
title.onmouseup=document.body.onmouseup=function(){
    title.onmousemove=null;
}


var mouseStart={};
var divStart={};
var rightStart={};
var bottomStart={};
function mouseDown(e) {
    X=e.clientX-popover.offsetLeft;
    Y=e.clientY-popover.offsetTop;
    popover.style.left = (e.clientX-X)+'px';
    popover.style.top=(e.clientY-Y)+'px';
}
right.onmousedown = function (e) {
    var oEvent = e||event;
    mouseStart.x = oEvent.clientX;
    mouseStart.y = oEvent.clientY;
    rightStart.x = right.offsetLeft;
    if(right.setCapture){
        right.onmousedown=doDragRight;
        right.onmouseup = stopDragRight;
        right.setCapture();
    }
    else {
        document.addEventListener("mousemove",doDragRight,true);
        document.addEventListener("mouseup",stopDragRight,true);
    }
};
function doDragRight(e) {
    var oEvent=e||event;
    var l = oEvent.clientX-mouseStart.x+rightStart.x;
    var w=l+popover.offsetWidth;
    if(w<popover.offsetWidth)
    {
        w=popover.offsetWidth;
    }
    // else if(w>document.documentElement.clientWidth-oDiv2.offsetLeft)
    // {
    //     w=document.documentElement.clientWidth-oDiv2.offsetLeft-2;
    // }
    popover.style.width=w+"px";
}
function stopDragRight() {
    if(right.releaseCapture){
        right.onmousemove =null;
        right.onmouseup = null;
        right.releaseCapture();
    }
    else {
        document.removeEventListener("mousemove",doDragRight,true);
        document.removeEventListener("mouseup",stopDragRight,true);
    }
}


