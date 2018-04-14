define(["jquery", "jquery-cookie"], function(){
	var oversealist= function(){
		$.ajax({
			url: "data/oversealist.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a href="'+res[i].a+'" target="_blank"><img class="loading" src="'+res[i].img+'"/><i></i></a></li>';
				}
				$(".oversealife_list").html(html);
				$("#oversealife_list li").hover(function(){
					$(this).find("i").animate({
						left:402
					},600)
				},function(){	
					$(this).find("i").stop().animate({
						left:-402
					},1)
				})	
			},error:function(e){
				alert(e.status);
			}
		})
	}
	
return{
	oversealist:oversealist
}
})