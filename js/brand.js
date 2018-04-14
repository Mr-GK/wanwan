define(["jquery", "jquery-cookie"], function(){
	var brand= function(){
		$.ajax({
			url: "data/brand.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a href=""><img class="bgpic" src="'+res[i].img+'"/><div class="brand_box"><div class="brand_hide"><img class="brandlogopic" src="'+res[i].pic+'"/><p class="splitline"><span class="blackbar"></span></p><p class="endbround">'+res[i].en+'</p><p class="cnbround">'+res[i].cn+'</p></div></div></a></li>';
				}
				$(".move1").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}

return{
	brand:brand
}
})