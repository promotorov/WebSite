$(document).ready(function(){
    $('.champion-item').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).find("img").finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(63, 186, 124, 0.4)");
       $(this).find("img").animate({ 
        height: "150%",
      }, 300);
       $(this).animate({ 
        top: "-=10px",
      }, 300);
    });
    $('.champion-item').mouseleave(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).find("img").finish();
       $(this).find("img").animate({ 
        height: "100%",
      }, 300);
       $(this).animate({ 
        top: "+=10px",
      }, 300);
       $(this).css("box-shadow", "none");
    });
});