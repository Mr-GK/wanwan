define(["jquery", "jquery-cookie"], function(){
	var promotion= function(){
		$.ajax({
			url: "data/promotion.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res[0].length; i++){
					html += '<div class="promotion1pic"><a href="#"><img src="'+res[0][i].img+'"/></a></div>';
				}
				$(".promotiontitle1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/promotion.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res[1].length; i++){
					html += '<div class="promotion1pic"><a href="#"><img src="'+res[1][i].img+'"/></a></div>';
				}
				$(".promotiontitle2").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/promotion3.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<div class="proleftpic"><div class="proleftpicbox"><a href="'+res[i].a+'" target="_blank"><img src="'+res[i].img+'" alt=""></a><div class="topline" style="width: 0px;"></div><div class="rightline" style="height: 0px;"></div><div class="bottomline" style="width: 0px;"></div><div class="leftline" style="height: 0px;"></div></div></div>';
				}
				$(".proleft").html(html);
				
				$(".proleftpic").hover(
							function(){
								$(this).find(".topline").stop().animate({
									width:193
								},300),
								$(this).find(".bottomline").stop().animate({
									width:193
								},300),
								$(this).find(".leftline").stop().animate({
									height:64
								},300),
								$(this).find(".rightline").stop().animate({
									height:64
								},300),
								$(this).find(".hostmiddle").stop().animate({
									opacity:1
								},300),
								$(this).find(".hotflagson img").stop().animate({
									opacity:0
								})
						},
							function(){
								$(this).find(".topline").add(".bottomline").stop().animate({
									width:0
								},300),
								$(this).find(".leftline").add(".rightline").stop().animate({
									height:0
								},300),
								$(this).find(".hostmiddle").stop().animate({
									opacity:0
								},300),
								$(this).find(".hotflagson img").stop().animate({
									opacity:1
								})
						}
					)
				
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	promotion:promotion
}
})