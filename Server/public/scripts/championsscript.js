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

    var mylist = $('.champions-list-wrap');
    var listitems = mylist.children('div').get();

    listitems.sort(function(a, b) {
       return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    });

    $.each(listitems, function(index, item) {
       mylist.append(item);
    });

    var divs = $('.champion-wrap');

    $('#sortAsc').on('click', function(){
        alert($(divs[0]).find(".champion-name p").text());
        //alert(divs[5].find("p").text());
        /*var alphabeticallyOrderedDivs = divs.sort(function(a,b){
          return $(a).find("p").text() > $(b).find("p").text();
        });
        $('.champions-list-wrap').html(alphabeticallyOrderedDivs);*/
    });
    $('#champion-search-button').on('click', function(){
        //alert($(divs[0]).find(".champion-name p").text());
        // alert(($divs[0]).find(".championRoleAttribute p").text());
        var j;
        var t1 = $(".champion-search-block input").val();
        var t2;
        for(j=0; j<divs.length; j++){
          t2 = $(divs[j]).find(".champion-name p").text();
          if(t2===t1) {
            $(divs[j]).find(".champion-name p").css("color", "white");
            $('html, body').animate({
                scrollTop:  $(divs[j]).offset().top - 40
            },200);
          }
          else {
            $(divs[j]).find(".champion-name p").css("color", "#eabc00");
          }
        }
    });

    $('div.champion-search-block input').keypress(function (e) {
  	  if (e.which == 13) {
  			$("#champion-search-button").trigger("click");
  	  }
  	});

    $('#top-role').on('click', function(){
      for(j=0; j<divs.length; j++){
          $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
          var t3 = $(divs[j]).find(".championRoleAttribute p").text();
          if(t3==='1') {
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(125, 94, 94, 1)");
            $(divs[j]).find(".champion-item").css("background", "rgb(26, 23, 58)");
          }
          else {
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
          }
        }
    });
    $('#jungle-role').on('click', function(){
      $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
      for(j=0; j<divs.length; j++){
          var t3 = $(divs[j]).find(".championRoleAttribute p").text();
          if(t3==='2') {
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(125, 94, 94, 1)");
            $(divs[j]).find(".champion-item").css("background", "rgb(26, 23, 58)");
          }
          else {
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
          }
        }
    });
    $('#mid-role').on('click', function(){
      $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
      for(j=0; j<divs.length; j++){
          var t3 = $(divs[j]).find(".championRoleAttribute p").text();
          if(t3==='3') {
           $(divs[j]).find(".champion-item").css("border", "1px solid rgba(125, 94, 94, 1)");
            $(divs[j]).find(".champion-item").css("background", "rgb(26, 23, 58)");
          }
          else {
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
          }
        }
    });
    $('#adc-role').on('click', function(){
      $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
      for(j=0; j<divs.length; j++){
          var t3 = $(divs[j]).find(".championRoleAttribute p").text();
          if(t3==='4') {
           $(divs[j]).find(".champion-item").css("border", "1px solid rgba(125, 94, 94, 1)");
            $(divs[j]).find(".champion-item").css("background", "rgb(26, 23, 58)");
          }
          else {
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
          }
        }
    });
    $('#sup-role').on('click', function(){
      $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
      for(j=0; j<divs.length; j++){
          var t3 = $(divs[j]).find(".championRoleAttribute p").text();
          if(t3==='5') {
           $(divs[j]).find(".champion-item").css("border", "1px solid rgba(125, 94, 94, 1)");
            $(divs[j]).find(".champion-item").css("background", "rgb(26, 23, 58)");
          }
          else {
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
          }
        }
    });
    $('#all-role').on('click', function(){
      $(".filter-type-way").find(".filter-type-logo").css("background", "#1a1a1a")
          $(this).find(".filter-type-logo").css("background", "#008df3");
      for(j=0; j<divs.length; j++){
            $(divs[j]).find(".champion-item").css("background", "#1a1a1a");
            $(divs[j]).find(".champion-item").css("border", "1px solid rgba(255, 255, 255, 0.14)");
        }
    });
});

rgba(125, 94, 94, 1)
