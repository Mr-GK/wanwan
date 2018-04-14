define(["jquery", "jquery-cookie"], function(){
	var shopcenter = function(){
		$.ajax({
			url: "data/shopcenter.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><div class="shopcenterbox"><a href="" class="quicktab"><div class="topbox">'+res[i].t+'</div></a><a href="" class="quicktab"><div class="bottombox"><div class="border"><p class="en">'+res[i].b+'</p></div></div></a></div></li>';
				}
				$(".shopcenter").html(html);
			}
		})
	}
	return{
		shopcenter:shopcenter
	}
})