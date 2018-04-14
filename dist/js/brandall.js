define(["jquery", "jquery-cookie"], function(){
	var brandall= function(){
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[1].subtitle.length);
				for(var i = 0; i < res.length; i++){
					html += '<li class="brandwrap"><div class="brandwrap_l">'+res[i].title+'</div><div class="brandwrap_r"><div class="brandtext brandtext'+(i+1)+'"></div></div></li>';
				}
				$(".brandall ul").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[0].title);
				for(var i = 0; i < res[0].child.length; i++){
					html += '<a href="javascript:;">'+res[0].child[i]+'</a>';
				}
				$(".brandtext1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[0].title);
				for(var i = 0; i < res[1].child.length; i++){
					html += '<a href="javascript:;">'+res[1].child[i]+'</a>';
				}
				$(".brandtext2").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[0].title);
				for(var i = 0; i < res[2].child.length; i++){
					html += '<a href="javascript:;">'+res[2].child[i]+'</a>';
				}
				$(".brandtext3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[0].title);
				for(var i = 0; i < res[3].child.length; i++){
					html += '<a href="javascript:;">'+res[3].child[i]+'</a>';
				}
				$(".brandtext4").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/brandall.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res[0].title);
				for(var i = 0; i < res[4].child.length; i++){
					html += '<a href="javascript:;">'+res[4].child[i]+'</a>';
				}
				$(".brandtext5").html(html);
			},error:function(e){
				alert(e.status);
			}
		})			
	}

return{
	brandall:brandall
}
})