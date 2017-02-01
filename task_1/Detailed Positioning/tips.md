一个常见的方法是将定义一个类名，把这个类名加到需要清除浮动的容器上。例如使用“clearfix”清除浮动，Dan Cederholm为容器设置了一个类名“group”。在需要清除浮动的容器上添加这个类名“group”。

.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  *zoom: 1;
}
原文: http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html © w3cplus.com