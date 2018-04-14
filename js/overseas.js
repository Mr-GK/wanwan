define(["jquery", "jquery-cookie"], function(){
	var overseas= function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[1].subtitle.length);
				for(var i = 0; i < res[14].subtitle.length; i++){
					html += '<div class="showshop"><h2>'+res[14].subtitle[i].title+'</h2><div class="showbag'+(i+1)+'"></div></div>';
				}
				$(".item15").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[14].subtitle[0].child.length; i++){
					html += '<a href="javascript:;">'+res[14].subtitle[0].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[14].subtitle[1].child.length; i++){
					html += '<a href="javascript:;">'+res[14].subtitle[1].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[14].subtitle[2].child.length; i++){
					html += '<a href="javascript:;">'+res[14].subtitle[2].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[14].subtitle[3].child.length; i++){
					html += '<a href="javascript:;">'+res[14].subtitle[3].child[i]+'</a>';
				}
				$(".showbag4").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	overseas:overseas
}
})