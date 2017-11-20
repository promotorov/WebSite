$(document).ready(function(){
	$('.item-tp-item').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(255, 255, 0, 0.4)");
       $(this).animate({ 
        top: "-=10px",
      }, 300);
    });
    $('.item-tp-item').mouseleave(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).animate({ 
        top: "+=10px",
      }, 300);
       $(this).css("box-shadow", "none");
    });

    $('.item-item').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(63, 186, 124, 0.4)");
       $(this).animate({ 
        top: "-=10px",
      }, 300);
    });
    $('.item-item').mouseleave(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).animate({ 
        top: "+=10px",
      }, 300);
       $(this).css("box-shadow", "none");
    });
});