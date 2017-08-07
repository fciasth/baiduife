(function ($) {
    $('#div1').velocity({
        width:'300px',
        height:'300px'
    },{
        duration:3000
        //  时长三秒
    });
    $('#div2').velocity({
        width:'300px',
        height:'300px'
    },{
        delay:3000,
        //延迟三秒
        duration:3000
    });
})(jQuery);