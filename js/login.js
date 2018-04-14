define(["jquery", "jquery-cookie"], function(){
	var login= function(){
		$(".is_user").css("display","none");
		$(".log-title").find("li").click(function(){
			$(".log-title").find("li").removeClass("list-active");
			$(this).addClass("list-active");
		})
		$(".log-title .fl").click(function(){
			$(".is-qcode").css("display","table");
			$(".is_user").css("display","none");
		})
		$(".log-title .fr").click(function(){
			$(".is-qcode").css("display","none");
			$(".is_user").css("display","block");
		})
		
		$("#username").blur(function(){
			if ($("#username").val() == "") {
				$(".error-tip-wp").css("display","block");
				$(".tip-text").html("用户名不能为空");
				setTimeout(function(){
					$(".error-tip-wp").css("display","none");
				},3000)
			}
		})
		$("#password").blur(function(){
			if ($("#password").val() == "") {
				$(".error-tip-wp").css("display","block");
				$(".tip-text").html("密码不能为空");
				setTimeout(function(){
					$(".error-tip-wp").css("display","none");
				},3000)
			}
		})
	}
return{
	login:login
}
})