$(document).ready(function(){
  $('#button').on('click', function(){
    $('#login-error2').css('display', 'none');
    $('#login-error').css('display', 'none');
      var order = {
          name: $("#loginname").val(),
          password: $("#password").val()
      };
      var ok = true;
      if(order.name.trim().length < 4 || order.name.trim().length > 11) {
        ok = false;
      }
      if(order.password.trim().length < 4 || order.password.trim().length > 17) {
        ok = false;
      }
      if(ok==true){
        $('#login-error2').css('display', 'none');
        $.ajax({
          url: 'http://localhost:8178/findUser',
          dataType: "json",
          type: 'POST',
          data: order,
          success: function(data) {
            if(data.suc == "false"){
              $('#login-error').css('display', 'block');
            }
            else window.location.href = "../";
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
      alrt("dsd");
  });
});
