/**
 * Created by zxh_s on 2017/7/21.
 */
// //请求（require)Node.js自带的http模块，并赋值给http
 var http = require("http");
// //createrServer这个函数会返回一个对象，这个对象有一个数值参数，指定这个HTTP服务器监听的端口号
// http.createServer(function (request,response) {
//    response.writeHead(200,{"content-Type":"text/plain"});
//    response.write("hello world");
//    response.end();
// }).listen(8888);
function start() {
    function onRequest(request,response) {
        console.log("Request received");
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
exports.start = start;