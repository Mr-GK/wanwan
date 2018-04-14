define(["jquery", "jquery-cookie"], function(){
	var brandfilter= function(){
		$.ajax({
			url: "data/brandfilter.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<a href="javascript:;"><li class="sort_desc">'+res[i]+'<b></b></li></a>';
				}
				$(".brandfilter_l").html(html);
			},error:function(e){
				alert(e.status);
			}
		})
	}
return{
	brandfilter:brandfilter
}
})