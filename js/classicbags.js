define(["jquery", "jquery-cookie"], function(){
	var classicbags= function(){
		$.ajax({
			url: "data/classicbags.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a href="#">'+res[i].p+'</a></li>';
				}
				$(".baglinks").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/classicbagsm.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<div class="bag2viewport"><ul class="bag2slider"><li><a href="#"><img src="'+res[i].img+'"/></a><div class="slider_bord"><dl><dd>'+res[i].d1+'</dd><dd><b></b></dd><dd>'+res[i].d2+'</dd><dt>'+res[i].d3+'</dt></dl></div></li></ul></div>';
				}
				$(".bag2warpper").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	classicbags:classicbags
}
})
