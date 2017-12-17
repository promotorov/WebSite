$(document).ready(function(){
	var hidden=false;
	var height=$(".news-list").outerHeight();
	$(".news-add").css("height", height +"px");
	$(window).click(function(){
	  if( $(".selected").css('display') == 'none' && hidden==true){
	  	$(".unselected").css("display", "none");
		$(".selected").css("display", "block");
		//$("#open-list").attr('id', 'close-list');
		$(".test-container ul li").css("width", "60px");
	  }
	  if(hidden==true) hidden=false;
	  else hidden=true;
	});
	$(window).scroll(function () {
    	if ($(window).scrollTop() > 84) {
    		$('.header-navigation').css('position', 'fixed');
        	$('.header-navigation').css('top', '0');
        	$('#slideshow-wrap').css('margin-top', '70px');
        	$(".champions-menu").css('top', '70px');
            $(".items-menu").css('top', '70px');
            $(".guides-menu").css('top', '70px');
            $('.register').css('margin-top', '70px');
						$('.replays').css('margin-top', '70px');
						$('.login').css('margin-top', '70px');
            $('.champions-header').css('margin-top', '70px');
            $('.champion-content').css('margin-top', '70px');
            $('.item-content').css('margin-top', '70px');
            $('.items-header').css('margin-top', '70px');
            $('.stream-container').css('margin-top', '70px');
    	}
    	if ($(window).scrollTop() <= 84) {
    		var x=$(window).scrollTop();
    		x=152-x;
    		$('.header-navigation').css('position', 'relative');
    		$('#slideshow-wrap').css('margin-top', '0px');
            $('.register').css('margin-top', '0px');
						$('.login').css('margin-top', '0px');
            $('.champions-header').css('margin-top', '0px');
						$('.replays').css('margin-top', '0px');
            $('.items-header').css('margin-top', '0px');
            $(".champions-menu").css('top', x + 'px');
            $(".items-menu").css('top', x + 'px');
            $(".guides-menu").css('top', x + 'px');
            $('.champion-content').css('margin-top', '0px');
            $('.item-content').css('margin-top', '0px');
            $('.stream-container').css('margin-top', '0px');
    	}
    	if ($(window).scrollTop()>560){
    		$('.side-add img').css('position', 'fixed');
    		$('.side-add img').css('top', '70px');
    	}
    	if ($(window).scrollTop()<=560){
    		$('.side-add img').css('position', 'relative');
    		$('.side-add img').css('top', '0px')
    	}
	}
	);
    $("#statistics-search").focus(function(){
    	$(".test-container").css("left", "260px");
	});
	$("#statistics-search").focusout(function(){
    	$(".test-container").css("left", "220px");
	});
    $(".social-networks").click(function(){

    })
	$(".selected").click(function(){
		//$(".header-statistics").css('height', '360px');
		//$(".header-navigation").css('margin-top', '-276px');
    	$(".unselected").css("display", "block");
    	var x = $(".social-networks").position();
    	xCor=x.left-150;
    	$(".selected").css("display", "none");
  		//$("#close-list").attr('id', 'open-list');
  		$(".test-container ul li").css("width", "150px");
    	$("#open-list").css("left", xCor+"px");
	});
	$(".unselected").click(function(){
		$(".unselected").css("display", "none");
		$(".selected").css("display", "block");
		$(".test-container ul li").css("width", "60px");
		var newString;
		if($(this).text()=="Europe West"){
			newString="euw";
		}
		else if($(this).text()=="Europe Nord"){
			newString="eun";
		}
		else if($(this).text()=="Brazil"){
			newString="br";
		}
		else if($(this).text()=="Korea"){
			newString="kr";
		}
		else if($(this).text()=="Turkey"){
			newString="tk";
		}
		else if($(this).text()=="Russia"){
			newString="rus";
		}
		else if($(this).text()=="Oceania"){
			newString="oc";
		}
		else if($(this).text()=="Japan"){
			newString="jap";
		}
		else if($(this).text()=="Latin America"){
			newString="la";
		}
		else if($(this).text()=="North America"){
			newString="na";
		}
		$(".selected").text(newString);
	});
	$("#button-1").click(function(){
	  	$("#description-slide1").show(500);
	  	$("#description-slide2").css("display", "none");
	  	$("#description-slide3").css("display", "none");
	});
	$("#button-2").click(function(){
	  	$("#description-slide2").show(500);
	  	$("#description-slide1").css("display", "none");
	  	$("#description-slide3").css("display", "none");
	});
	$("#button-3").click(function(){
	  	$("#description-slide3").show(500);
	  	$("#description-slide2").css("display", "none");
	  	$("#description-slide1").css("display", "none");
	});
  $("#stat-href").click(function(){
        var server = $("li.selected").text();
        var name = $('#statistics-search').val();
        var order = {
            name: name,
            server: server
        };
        $(this).attr("href", "http://localhost:8178/"+server+"/"+name);
        /*$.ajax({
            url: 'http://localhost:8177/euw/JekLucky',
            dataType: "json",
            type: 'POST',
            data: order,
            success: function(data) {

            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('error ' + textStatus + " " + errorThrown);
            }
        });*/
  });
	$("#showmore-button").click(function(){
        $('#loading').css('display', 'block');
        $("#showmore-button").css("display", "none");
        var h=$(".news-list").outerHeight();
        $(".news-add").css("height", h +"px");
        var order = {
            count: $(".recent-new").length
        };
        $.ajax({
            url: 'http://localhost:8178/loadNewArticles',
            dataType: "json",
            type: 'POST',
            data: order,
            success: function(data) {
                for(i = 0; i < data.count; i++){
                    $('<a />').addClass('inv-a').appendTo($('.recentnews'));
                    $('<div />').addClass('recent-new inv-rn').appendTo($('.inv-a'));
                    $('<div />').addClass('image-recent inv-img').appendTo($('.inv-rn'));
                    $('.inv-img').prepend('<img src="../images/slide3.jpg" />');
                    $('<div />').addClass('describe-recent inv-d').appendTo($('.inv-rn'));
                    $('<div />').addClass('header-recent inv-h').appendTo($('.inv-d'));
                    $('<div />').addClass('text-recent inv-t').appendTo($('.inv-d'));
                    $('<p />').addClass('inv-p').appendTo($('.inv-t'));
                    $('.inv-a').attr("href", "/news/"+data.articles[i].id);
                    var src = "../" + data.articles[i].image;
                    $('.inv-h').text(data.articles[i].title);
                    $('.inv-t').text(data.articles[i].body);
                    $('.inv-img img').attr("src", src);

                    $('.inv-t').removeClass('inv-t');
                    $('.inv-h').removeClass('inv-h');
                    $('.inv-rn').removeClass('inv-rn');
                    $('.inv-img').removeClass('inv-img');
                    $('.inv-d').removeClass('inv-d');
                    $('.inv-p').removeClass('inv-p');
                    $('.inv-a').removeClass('inv-a');
                }


                if(data.count < 3){
                    $("#showmore-button").css("display", "none");
                }
                else{
                    $("#showmore-button").css("display", "block");
                }

                $('#loading').css('display', 'none');
                $(".invisible").css("display", "block");
                var height=$(".news-list").outerHeight();
                $(".news-add").css("height", height +"px");

            } ,
            error: function(jqXHR, textStatus, errorThrown) {
                alert('error ' + textStatus + " " + errorThrown);
            }
        });
	});
    $('#guide').mouseenter(function(){
        $(".guides-menu").slideDown();
        $(".guides-menu").mouseleave(function() {
            $(".guides-menu").slideUp();
            $('#guide').mouseenter(function(){
                $(".guides-menu").stop();
                $(".guides-menu").slideDown();
            });
        });
    });
    $('#guide').mouseleave(function(){
        $(".guides-menu").slideUp();
        $('.guides-menu').mouseenter(function(){
            //alert("dsd");
            $(".guides-menu").stop();
            $(".guides-menu").slideDown();
        });
    });

    $('#items').mouseenter(function(){
        $(".items-menu").slideDown();
        $(".items-menu").mouseleave(function() {
            $(".items-menu").slideUp();
            $('#items').mouseenter(function(){
                $(".items-menu").stop();
                $(".items-menu").slideDown();
            });
        });
    });
    $('#items').mouseleave(function(){
        $(".items-menu").slideUp();
        $('.items-menu').mouseenter(function(){
            //alert("dsd");
            $(".items-menu").stop();
            $(".items-menu").slideDown();
        });
    });




    $('#champions').mouseenter(function(){
        $(".champions-menu").slideDown();
        $(".champions-menu").mouseleave(function() {
            $(".champions-menu").slideUp();
            $('#champions').mouseenter(function(){
                $(".champions-menu").stop();
                $(".champions-menu").slideDown();
            });
        });
    });
    $('#champions').mouseleave(function(){
        $(".champions-menu").slideUp();
        $('.champions-menu').mouseenter(function(){
            //alert("dsd");
            $(".champions-menu").stop();
            $(".champions-menu").slideDown();
        });
    });
    $('.champions-menu-block-top').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).find("img").finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(209, 153, 55, 0.4)");
       $(this).find("img").animate({
        height: "150%",
      }, 300);
       $(this).animate({
        top: "-=10px",
      }, 300);
    });
    $('.champions-menu-block-top').mouseleave(function(){
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

    $('.items-menu-block-top').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).find("img").finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(198, 126, 199, 0.4)");
       $(this).find("img").animate({
        height: "150%",
      }, 300);
       $(this).animate({
        top: "-=10px",
      }, 300);
    });
    $('.items-menu-block-top').mouseleave(function(){
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

    $('.guide-block').mouseenter(function(){
       $(this).css("position", "relative");
       $(this).finish();
       $(this).find("img").finish();
       $(this).css("box-shadow", "8px 8px 15px 0px rgba(65, 9, 168, 0.4)");
       $(this).find("img").animate({
        height: "150%",
      }, 300);
       $(this).animate({
        top: "-=10px",
      }, 300);
    });
    $('.guide-block').mouseleave(function(){
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
