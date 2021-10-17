let $eventcontainer = $('.eventcontainer')
let $events = $eventcontainer.find('.events')
let $event = $events.find('.event')

let $width = $event.width()
let $currSlide = 0
let $totalSlide = $event.length

$events.css({
    width : ($totalSlide * $width) + 'px'
})

setInterval(function(){
    if($currSlide == $totalSlide){
        $currSlide = 0,
        $events.css({ //biar gaada efek slider jadi lgsg pindah gambarnya
        marginLeft: 0
        })
    }
    $events.animate({
        'margin-left' : -($currSlide * $width)
    }, 2000)
    
    $currSlide++
}, 2500)
