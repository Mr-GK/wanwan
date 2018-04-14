define(["jquery", "jquery-cookie"], function(){
	var seach= function(){
		$.ajax({
			url: "data/seach_menu.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a href="http://www.5lux.com/good/list/138" target="_blank">'+res[i]+'</a></li>';
				}
				$(".in_list").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	seach:seach
}
})