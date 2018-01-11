$(document).ready(function(){ 
     $(window).scroll(function(){
       $('.coverBottom').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)');
       if($(window).scrollTop()){
       		$('.SecondImg').animate({height: '100%', width: '100%'}, { duration: 10, queue: false });
       	}
    }).scroll();
});










