define(["jquery", "jquery-cookie"], function(){
	var submenu = function(){
		$.ajax({
			url: "data/submenu.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="submenu_item submenu_item'+(i+1)+'"  ><b></b><a>'+res[i].title+'</a><i style=""></i><div class="item item'+(i+1)+'"></div></li>';
				}
				$("#sub1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			type:"get",
			url:"data/submenu.json",
			success:function(res){
				var html = "";
				for (var i = 0; i < res[0].subtitle.length; i++) {
					html += '<div class="showshop"><h2>'+res[0].subtitle[i].title+'</h2><div class="showbag showbag'+(i+1)+'"></div></div>';
				}
				$(".item1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			type:"get",
			url:"data/submenu.json",
			success:function(res){
				var html = "";
//				alert(res[0].subtitle[0].child.length);
				for (var i = 0; i < res[0].subtitle[0].child.length; i++) {
					html += '<a href="javascript:;">'+res[0].subtitle[0].child[i]+'</a>';
				}
				$(".showbag1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			type:"get",
			url:"data/submenu.json",
			success:function(res){
				var html = "";
//				alert(res[0].subtitle[1].child.length);
				for (var i = 0; i < res[0].subtitle[1].child.length; i++) {
					html += '<a href="javascript:;">'+res[0].subtitle[1].child[i]+'</a>';
				}
				$(".showbag2").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			type:"get",
			url:"data/submenu.json",
			success:function(res){
				var html = "";
//				alert(res[0].subtitle[2].child.length);
				for (var i = 0; i < res[0].subtitle[2].child.length; i++) {
					html += '<a href="javascript:;">'+res[0].subtitle[2].child[i]+'</a>';
				}
				$(".showbag3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		
		$(".menu_item1").hover(function(){
//			$(".menu_item1 .sub1").css("display","block");
		alert($(".menu_item1").html());
		},function(){
//			$(".menu_item1 .sub1").css("display","none");
		})
	}
	return{
		submenu:submenu
	}
})