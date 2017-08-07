(function ($) {
   $('#div1').on('mouseover',function () {
       $(this).velocity('callout.shake');
   });
   $.Velocity.RegisterEffect('lixin.pulse',{
       defaultDuration:300,
       calls:[
           [{scaleX:1.1},0.5],
           [{scaleX:1.0},0.5]
       ]
   });
    $('#div2').on('mouseover',function () {
        $(this).velocity('lixin.pulse');
    });
})(jQuery);