$(document).ready(function(){
  $('#send').on('click', function(){
     $('#login-error2').css('display', 'none');
     $('#login-error').css('display', 'none');
      var order = {
          password: $("#password").val().trim(),
          repassword: $("#repassword").val().trim(),
          nick: $("#nick").val().trim(),
          fn: $("#fn").val().trim(),
          sn: $("#sn").val().trim(),
          age: $("#number").val().trim(),
      };
      var ok = true;
      if (order.password.length < 4 || order.password.length >17) ok = false;
      if (order.repassword != order.password) ok = false;
      if (order.nick.length < 4 || order.password.length >11) ok = false;
      if (order.fn.length < 4 || order.fn.length >11) ok = false;
      if (order.sn.length < 4 || order.sn.length >11) ok = false;
      if(Math.floor(order.age) != order.age || $.isNumeric(order.age)!=true) ok = false;
      if(ok==true){
        $('#login-error2').css('display', 'none');
        $.ajax({
          url: 'http://localhost:8178/registerUser',
          dataType: "json",
          type: 'POST',
          data: order,
          success: function(data) {
              if(data.suc == "false"){
                $('#login-error').css('display', 'block');
              }
              else window.location.href = "../login";
          } ,
          error: function(jqXHR, textStatus, errorThrown) {
          }
        });
      }
      else {
        $('#login-error2').css('display', 'block');
      }
  });
  $('#reset').on('click', function(){
      $('input').val("");
  });
});
