define(["jquery", "jquery-cookie"], function(){
	var storesame= function(){
		$.ajax({
			url: "data/storesame.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				var txt = "";
				$(".storesameb_left").html("<img src='"+res[0].img1+"'/>");
				for(var i = 0; i < res[1][0].child.length; i++){
					html += '<div class="storesame_top1"><div class="storesametoptxt"><p class="enbrand">'+ res[1][0].child[i].p1+'</p><p>'+ res[1][0].child[i].p2+'</p><p>'+ res[1][0].child[i].p3+'</p></div><div class="storesametoppic"><a href="http://www.5lux.com/good/detail/3943072"><img src="'+ res[1][0].child[i].img+'"/></a></div></div>';
				}
				$(".storesameb_top").html(html);
				for (var j = 0; j < res[2][0].child.length; j++) {
					txt +='<div class="storesamebottom1"><div class="storesametoptxt"><p class="enbrand">'+res[2][0].child[j].p1+'</p><p>'+res[2][0].child[j].p2+'</p><p>'+res[2][0].child[j].p3+'</p></div><div class="storesametoppic"><a href="http://www.5lux.com/good/detail/3942453"><img src="'+res[2][0].child[j].img+'"/></a></div></div>';
				}
				$(".storesameb_bottom").html(txt);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			type:"get",
			url:"data/storesame1.json",
			success:function(res){
				var html = "";
				var txt = "";
				$(".storesameb1_left").html("<img src='"+res[0].img1+"'/>");
				for(var i = 0; i < res[1][0].child.length; i++){
					html += '<div class="storesame_top1"><div class="storesametoptxt"><p class="enbrand">'+ res[1][0].child[i].p1+'</p><p>'+ res[1][0].child[i].p2+'</p><p>'+ res[1][0].child[i].p3+'</p></div><div class="storesametoppic"><a href="http://www.5lux.com/good/detail/3943072"><img src="'+ res[1][0].child[i].img+'"/></a></div></div>';
				}
				$(".storesameb1_top").html(html);
				for (var j = 0; j < res[2][0].child.length; j++) {
					txt +='<div class="storesamebottom1"><div class="storesametoptxt"><p class="enbrand">'+res[2][0].child[j].p1+'</p><p>'+res[2][0].child[j].p2+'</p><p>'+res[2][0].child[j].p3+'</p></div><div class="storesametoppic"><a href="http://www.5lux.com/good/detail/3942453"><img src="'+res[2][0].child[j].img+'"/></a></div></div>';
				}
				$(".storesameb1_bottom").html(txt);
			},error:function(e){
				alert(e.status);
			}
		});	
		
		$.ajax({
			type:"get",
			url:"data/storesame2.json",
			success:function(res){
				var html = "";
				var txt = "";
				$(".darwin_one").html('<dl><dd><a href="#"><img src="'+res[0].img+'"/></a></dd><dt><a href="#"><ul><li>'+res[0].p1+'</li><li>'+res[0].p2+'</li><li><b></b></li><li><span class="fsize14">"'+res[0].p3+'"</span></li></ul></a></dt></dl>');	
				for (var i = 0; i < res[1][0].child.length; i++) {
						html +='<div class="darwin_two"><dl><dd><a href="#"><img src="'+res[1][0].child[i].img+'"/></a></dd><dt><a href="#"><ul><li>'+res[1][0].child[i].p1+'</li><li>'+res[1][0].child[i].p2+'</li><li><b></b></li><li><span class="fsize14">'+res[1][0].child[i].p3+'</span></li></ul></a></dt></dl></div>';
				}
				$("#darwin1").html(html);
				for (var j= 0; j < res[2][0].child.length; j++) {
					txt +='<div class="darwin_two"><dl><dd><a href="#"><img src="'+res[2][0].child[j].img+'"/></a></dd><dt><a href="#"><ul><li>'+res[2][0].child[j].p1+'</li><li>'+res[2][0].child[j].p2+'</li><li><b></b></li><li><span class="fsize14">'+res[2][0].child[j].p3+'</span></li></ul></a></dt></dl></div>';
				}
				$("#darwin2").html(txt);
		},error:function(e){
				alert(e.status);
			}
	})
		
	$(".storesame_link").find("li").mouseover(function(){
		$(".storesame_link").find("li").attr("class", "");
		$(this).attr("class", "active")	
		$(".storesame_box").stop().animate({
			left:-1210*$(this).index()
		},300)
		})
	
	
	}
return{
	storesame:storesame
}
})

