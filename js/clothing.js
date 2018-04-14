define(["jquery", "jquery-cookie"], function(){
	var clothing= function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
//				alert(res[3].subtitle.length);
				for(var i = 0; i < res[3].subtitle.length; i++){
					html += '<div class="showshop"><h2>'+res[3].subtitle[i].title+'</h2><div class="showbag'+(i+1)+'"></div></div>';
				}
				$(".item4").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[0].child.length);
				for(var i = 0; i < res[3].subtitle[0].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[0].child[i]+'</a>';
				}
				$(".showbag1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[1].child.length);
				for(var i = 0; i < res[3].subtitle[1].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[1].child[i]+'</a>';
				}
				$(".showbag2").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[1].child.length);
				for(var i = 0; i < res[3].subtitle[2].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[2].child[i]+'</a>';
				}
				$(".showbag3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[1].child.length);
				for(var i = 0; i < res[3].subtitle[3].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[3].child[i]+'</a>';
				}
				$(".showbag4").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[6].child.length);
				for(var i = 0; i < res[3].subtitle[6].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[6].child[i]+'</a>';
				}
				$(".showbag7").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[3].subtitle[6].child.length);
				for(var i = 0; i < res[3].subtitle[7].child.length; i++){
					html += '<a href="javascript:;">'+res[3].subtitle[7].child[i]+'</a>';
				}
				$(".showbag8").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	clothing:clothing
}
})