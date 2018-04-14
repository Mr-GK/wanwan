define(["jquery", "jquery-cookie"], function(){
	var baby= function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[5].subtitle.length);
				for(var i = 0; i < res[7].subtitle.length; i++){
					html += '<div class="showshop"><h2>'+res[7].subtitle[i].title+'</h2><div class="showbag'+(i+1)+'"></div></div>';
				}
				$(".item8").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[4].subtitle[0].child.length);
				for(var i = 0; i < res[7].subtitle[0].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[0].child[i]+'</a>';
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
				for(var i = 0; i < res[7].subtitle[1].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[1].child[i]+'</a>';
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
				for(var i = 0; i < res[7].subtitle[2].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[2].child[i]+'</a>';
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
				for(var i = 0; i < res[7].subtitle[3].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[3].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[7].subtitle[4].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[4].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[7].subtitle[5].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[5].child[i]+'</a>';
				}
				$(".showbag6").html(html);
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
				for(var i = 0; i < res[7].subtitle[6].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[6].child[i]+'</a>';
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
//				alert(res[1].subtitle[0].child.length);
				for(var i = 0; i < res[7].subtitle[7].child.length; i++){
					html += '<a href="javascript:;">'+res[7].subtitle[7].child[i]+'</a>';
				}
				$(".showbag8").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	baby:baby
}
})