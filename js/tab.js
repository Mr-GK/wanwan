define(["jquery", "jquery-cookie"], function(){
	var tab = function(){
		$.ajax({
			url: "data/tab.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<dl class="tab'+(i+1)+'" id="tab'+(i+1)+'"><dt><a href="'+res[i].a+'">'+res[i].t+'</a></dt><div class=subtab'+(i+1)+'><ul></ul></div></dl>';
				}
				$(".tab_1210").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/tab5_menu.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a>'+res[i]+'</a></li>';
				}
				$(".subtab5 ul").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}
	
	return{
		tab:tab
	}
})