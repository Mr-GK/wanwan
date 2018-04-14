define(["jquery", "jquery-cookie"], function(){
	var hotflag= function(){
		$.ajax({
			url: "data/hotflag.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="hotflagli"><div class="hotflagson"><img src="'+res[i].img+'" alt="'+res[i].alt+'"/><div  class="hostmiddle" id=><a href="'+res[i].a+'"><p class="brandname">'+res[i].brandname+'</p><div class="blackline"><span></span></div></a></div><div class="topline"></div><div class="rightline"></div><div class="bottomline"></div><div class="leftline"></div></div></li>';
					
				}
				$(".hotflagbox").html(html);
				var oul = document.getElementById("hotflagbox");
//				var lis = oul.getElementsByTagName("li");
					$("#hotflagbox").find("li").hover(
							function(){
								$(this).find(".topline").stop().animate({
									width:166
								},300),
								$(this).find(".bottomline").stop().animate({
									width:166
								},300),
								$(this).find(".leftline").stop().animate({
									height:84
								},300),
								$(this).find(".rightline").stop().animate({
									height:84
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
				alert(e+" "+e.status);
			}
	})
		$(".hot_next").click(function(){
			if ($(".hotflagbox").offsetLeft > -3630) {
				$(".hotflagbox").offsetLeft = -3630;
			} else{
				$(".hotflagbox").stop().animate({
					left:-1210
				},300)
			}
		})
		$(".hot_pre").click(function(){
			if ($(".hotflagbox").offsetLeft > 0) {
				$(".hotflagbox").offsetLeft = 0;
			} else{
				$(".hotflagbox").stop().animate({
					left:0
				},300)
			}
		})
}

return{
	hotflag:hotflag
}
})