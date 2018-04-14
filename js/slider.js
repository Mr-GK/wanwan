define(["jquery", "jquery-cookie"], function(){
	var slider = function(){
		$.ajax({
			url: "data/sliderpic.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<dd><a href="javascript:;"><img src="'+res[i].img+'"></a></dd>';
				}
				$("#sliderpic").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		var lis = $(".slidernav").find("li");
		var odl = $("#sliderwall").find("dl");
		$("#sliderright").click(function(){
			$("#sliderpic").stop().animate({"left":"-1343px"},1000,function(){
				$(this).find("dd").eq(0).appendTo($(this));
				$("#sliderpic").css("left","0");				
			})
		})
		$("#sliderleft").click(function(){
			$("#sliderpic").stop().animate({"left":"0px"},1000,function(){
				$(this).find("dd").eq(6).prependTo($(this));
				$("#sliderpic").css("left","-1343px");
			})
		})
		
		var iNow = 0;
		var timer = null;
//		lis.hover(function(){
//				clearInterval(timer);
//				iNow = $(this).index();
//				tab();
//			},function(){
//				timer = setInterval(timerInner, 4000);
//			})
		function tab(){
				lis.removeClass("active").eq(iNow).addClass("active");
				if(iNow == 6){
					lis.eq(0).addClass("active");
						iNow = 0;
						odl.css("left", 0);
					}
				odl.stop().animate({
					left: -1343 * iNow
				},1000)
			}
		function timerInner(){
				iNow++;
				tab();
			}
		timer = setInterval(timerInner, 4000);
		$("#sliderwall").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 4000);
			})
	}
return{
	slider:slider
}
})