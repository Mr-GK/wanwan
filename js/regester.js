define(["jquery", "jquery-cookie"], function(){
	var regester= function(){
		$("#userName").blur(function(){
			$(".error_tip_mobile").css("display","table-cell");
			setTimeout(function(){
				$(".error_tip_mobile").css("display","none");
				$("#userName").val() == "";
			},3000)
			if($("#userName").val() == ""){
				$(".error_tip_mobile p").html("请输入手机号");
			}else if($("#userName").val().length < 11){
				$(".error_tip_mobile p").html("手机号输入错误");
			}
		})
		$("#pwd").focus(function(){
			$(".seg-tip").css("display","table")
		})
		$("#pwd").blur(function(){
			if($("#pwd").val().length < 6 || $("#pwd").val().length > 20){
				$(".seg-tip").css("display","table");
				$(".seg-tip i").css("background","url(../images/login/close.png)");
				$(".seg-tip p").css("color","#f62b0f");
				$(".seg-tip p").html("密码输入错误");
			}else{
				$(".seg-tip").css("display","none");
			}
		})
		$("#pwd2").blur(function(){
			if ($("#pwd2").val() == $("#pwd").val()) {
				$("#password_confirm_error").css("display","none");
			}else{
				$("#password_confirm_error").css("display","table-cell");
			}
		})
//		$(".textcode").blur(function(){
//			if($(".textcode").val() == ""){
//				$(".error_tip_mobile").css("display","table-cell");
//			}
//		})
		
	}
return{
	regester:regester
}
})