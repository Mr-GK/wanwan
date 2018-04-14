define(["jquery", "jquery-cookie"], function(){
	var goodsdetail= function(){
		$.ajax({
			url: "data/goodsinfo_top1.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<dd class="goodsinfo_top1_dd'+(i+1)+'"><a href="javascript:;">'+res[i]+'</a></dd>';
				}
				$(".goodsinfo_top1 dl").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/goodsinfo_top2.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<span class=""><i></i><b></b><p>'+res[i]+'</p></span>';
				}
				$(".goodsinfo_top2").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/goodsinfo_top3.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<span class="">'+res[i]+'</span>';
				}
				$(".goodsinfo_top3").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/goodsinfo_top5.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<div class="color_size"><a href="javascript:;" class="color_attr ">'+res[i]+'</a></div>';
				}
				$(".goodsinfo_top5 .gd_dd").html(html);
				$(".color_size").eq(1).addClass("ed");
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/goodsinfo_top7.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<dl><dt>'+res[i].dt+'</dt><dd>'+res[i].dd+'</dd></dl>';
				}
				$(".goodsinfo_top7").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/right_a_bottom.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="right_a_bottom'+(i+1)+'"><i></i><p>'+res[i]+'</p></li>';
				}
				$(".right_a_bottom").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		$.ajax({
			url: "data/singlepic.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="singlepic"><div class="gimg_wrap"><img src="'+res[i]+'"/></div></li>';
				}
				$(".showpic").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
		
		$("#s_box").hover(function(){
			$(".position_box").stop().animate({
				width:100,
				height:120
			},300)
			$(".mark_box").css("color","white");
			$(".position_box").css("display","block");
			$("#b_box").css("display","block");
			$("#b_box").stop().animate({
				width:478,
				height:478
			},300)
		},function(){
			$(".position_box").css("display","none");
			$("#b_box").css("display","none");
			$(".position_box").stop().animate({
				width:0,
				height:0
			},300)
			$("#b_box").stop().animate({
				width:0,
				height:0
			},300)
		})
		var oS_box=document.getElementById('s_box');
		var oS_position=$("#s_box").find(".position_box");
		var oS_mark=$("#s_box").find(".mark_box");
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all');
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';
		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}
		oS_mark.onmousemove=function(event){
			var evt=event||window.event;
			var left=evt.offsetX-oS_position.offsetWidth/2;
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			oS_position.style.left = left+'px';
			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top < 0){
				top = 0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top = oS_box.offsetHeight-oS_position.offsetHeight
			}
			oS_position.style.top = top + 'px';
			var proportionX = left/(oS_box.offsetWidth-oS_position.offsetWidth);
			var proportionY = top/(oS_box.offsetHeight-oS_position.offsetHeight);
			oB_box_all.style.left = -proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';
			oB_box_all.style.top = -proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';

		}
		
	}

return{
	goodsdetail:goodsdetail
}
})