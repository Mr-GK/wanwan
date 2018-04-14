define(["jquery", "jquery-cookie"], function(){
	var beauty= function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[2].subtitle.length);
				for(var i = 0; i < res[2].subtitle.length; i++){
					html += '<div class="showshop"><h2>'+res[2].subtitle[i].title+'</h2><div class="showbag'+(i+1)+'"></div></div>';
				}
				$(".item3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[2].subtitle[0].child.length);
				for(var i = 0; i < res[2].subtitle[0].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[0].child[i].title+'</a>';
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
//				alert(res[2].subtitle[1].child.length);
				for(var i = 0; i < res[2].subtitle[1].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[1].child[i].title+'</a>';
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
//				alert(res[2].subtitle[2].child.length);
				for(var i = 0; i < res[2].subtitle[2].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[2].child[i].title+'</a>';
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
//				alert(res[2].subtitle[3].child.length);
				for(var i = 0; i < res[2].subtitle[3].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[3].child[i].title+'</a>';
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
//				alert(res[2].subtitle[3].child.length);
				for(var i = 0; i < res[2].subtitle[4].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[4].child[i].title+'</a>';
				}
				$(".showbag5").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[2].subtitle[5].child.length);
				for(var i = 0; i < res[2].subtitle[6].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[6].child[i].title+'</a>';
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
//				alert(res[2].subtitle[5].child.length);
				for(var i = 0; i < res[2].subtitle[7].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[7].child[i].title+'</a>';
				}
				$(".showbag8").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[2].subtitle[5].child.length);
				for(var i = 0; i < res[2].subtitle[8].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[8].child[i]+'</a>';
				}
				$(".showbag9").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[2].subtitle[5].child.length);
				for(var i = 0; i < res[2].subtitle[9].child.length; i++){
					html += '<a href="javascript:;">'+res[2].subtitle[9].child[i]+'</a>';
				}
				$(".showbag10").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	beauty:beauty
}
})