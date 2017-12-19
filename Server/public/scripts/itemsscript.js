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

    $('#sort').on('click', function(){
        alert("ds");
        var $divs = $('.test-item');
        var alphabeticallyOrderedDivs = $divs.sort(function(a,b){
          return $(a).find("p").text() > $(b).find("p").text();
        });
        $('div.test-wrap').html(alphabeticallyOrderedDivs);
    });

		var divs = $('.item-wrap');

		$('#item-search-button').on('click', function(){
        //alert($(divs[0]).find(".champion-name p").text());
        // alert(($divs[0]).find(".championRoleAttribute p").text());
        var j;
        var t1 = $(".item-search-block input").val();
        var t2;
        for(j=0; j<divs.length; j++){
          t2 = $(divs[j]).find(".item-name p").text();
          if(t2===t1) {
            $(divs[j]).find(".item-name p").css("color", "white");
            $('html, body').animate({
                scrollTop:  ($(divs[j]).offset().top - 80)
            },200);
          }
          else {
            $(divs[j]).find(".item-name p").css("color", "#eabc00");
          }
        }
    });

    $('div.item-search-block input').keypress(function (e) {
  	  if (e.which == 13) {
  			$("#item-search-button").trigger("click");
  	  }
  	});
});
