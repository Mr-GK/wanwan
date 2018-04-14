define(["jquery", "jquery-cookie"], function(){
	var menu = function(){
		$.ajax({
			url: "data/menu.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="menu_item'+(i+1)+'"  ><b></b><a>'+res[i]+'</a><ul id="sub'+(i+1)+'"></ul></li>';
				}
				$(".menu").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}
	return{
		menu:menu
	}
}
)