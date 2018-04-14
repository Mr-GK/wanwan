define(["jquery", "jquery-cookie"], function(){
	var goodslist= function(){
		$.ajax({
			url: "data/goodslist.json",
			type: "GET",
			success: function(res){
				var html = "";
//				alert(res.length);
				for(var i = 0; i < res.length; i++){
					html += '<dd><div class="v30_pitem"><div class="v30p_inbox"><ul><li class="v30pi_img"><a href="javascript:;" target="_blank"><img src="'+res[i].src+'"></li><li class="fsize12 co666 mtop55"><a href="http://www.5lux.com/flagship/detail/118" target="_blank"></a></li><li class="w500"><a href="http://www.5lux.com/brand/detail/965" target="_blank">'+res[i].title+'</a></li><li class="w500"><a href="javascript:;" target="_blank">'+res[i].txt+'</a></li><li class="fsize">'+res[i].price+'</li><div class="join">加入购物车</div></ul></div></div></dd>';
				}
//				alert(1);
				$(".goodslist_body dl").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}
return{
	goodslist:goodslist
}
})