define(["jquery", "jquery-cookie"], function(){
	var acc= function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[5].subtitle.length);
				for(var i = 0; i < res[5].subtitle.length; i++){
					html += '<div class="showshop"><h2>'+res[5].subtitle[i].title+'</h2><div class="showbag'+(i+1)+'"></div></div>';
				}
				$(".item6").html(html);
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
				for(var i = 0; i < res[5].subtitle[0].child.length; i++){
					html += '<a href="javascript:;">'+res[5].subtitle[0].child[i]+'</a>';
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
				for(var i = 0; i < res[5].subtitle[1].child.length; i++){
					html += '<a href="javascript:;">'+res[5].subtitle[1].child[i]+'</a>';
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
				for(var i = 0; i < res[5].subtitle[2].child.length; i++){
					html += '<a href="javascript:;">'+res[5].subtitle[2].child[i]+'</a>';
				}
				$(".showbag3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	acc:acc
}
})