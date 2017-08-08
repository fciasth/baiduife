(function ($) {
    var container = $(".container");
    var box = $(".box");
    var buddy = $(".buddy");
    var pop = $(".pop");
    var open = $(".btn");
    var close = $(".close");
    var imgs = pop.find('img');
    $.Velocity.RegisterUI('lixin.slideUpIn',{
        defaultDuration:500,
        calls:[
            {
                opacity:[1,0],
                translateY:[0,100]
            }
        ]
    });
    var seqInit = [{
        elements:container,
        properties:'lixin.slideUpIn',
        options:{
            delay:300
        },
    },
        {
            elements:box,
            properties:'lixin.slideUpIn',
            options:{

            },
        },
        {
            elements:buddy,
            properties:'lixin.slideUpIn',
            options:{
                delay:60
            },
        }
    ];
    $.Velocity.RunSequence(seqInit);
})(jQuery);