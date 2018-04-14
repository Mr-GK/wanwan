define(["jquery", "jquery-cookie"], function(){
	var cart = function(){
		console.log("首页");
		//加载数据解析数据

			sc_car();

			$.ajax({
				url: "data/goodslist.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += '<li class="goods_item" ><div class="goods_pic"><img src="'+res[i].src+'" alt=""></div><div class="goods_title"><p>'+res[i].txt+'</p></div><div class="sc"><div class="sc_btn" id="'+res[i].id+'" >加入购物车</div></div></li>';
					}
					$(".goods_box ul").html(html);
				},error:function(e){
//					alert(e.status);
				}
			})

			//给购物车按钮添加事件
			//页面控件非常多，非常容易叠加，很容易造成事件冒泡
			$(".goods_box").on("click", ".sc_btn", function(){
//				ballMove($(this));
//				//是否是第一次添加cookie
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加  [{id:id,num:2}]
					$.cookie("goods", '[{id:' + id + ',num:1}]', {
						expires: 7
					});
				}else{
					var str = $.cookie("goods");
					var arr = eval(str);
//					alert(typeof arr);
					var same = false; 
//					代表是否有相同商品
//					遍历所有的对象，判断是否id相同，num++
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num = arr[i].num + 1;
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr,  {
								expires: 7
							});
//							alert(arr[i].num);
							same = true;
							break;
						}
					}
//					没有相同的商品
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}	
				}
				sc_car();
//				alert($.cookie("goods"));
				return false;
			})

//			function ballMove(node){
//			//抛物线运动
//			$("#ball").css({
//				display: "block",
//				left: $(node).offset().left,
//				top: $(node).offset().top
//			})
//			var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
//			var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;
//
//			//【注】配置参数的
//			var bool = new Parabola({
//				el: "#ball",
//				targetEl: null,
//				offset: [offsetX, offsetY],
//				curvature: 0.0005,
//				duration: 400,
//				callback: function(){
//					$("#ball").css("display", "none")
//				}
//				
//			})
//			bool.start();
//		}


			/*
				mouseenter  移入
				mouseleave  移出
			*/
			$(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				})
				sc_msg();
			});
			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -270
				})
			});

			//购物车数字
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){ //判断字符串是否存在
					var sc_arr = eval(sc_str);
					var sc_num = 0;
					for(var i in sc_arr){
						sc_num = Number(sc_arr[i].num) + sc_num;
					}
					$(".sc_num").html(sc_num);
					$("#cart_number").html(sc_num);
				}
			}

			//已经存储在cookie数据进行加载
			function sc_msg(){
				$.ajax({
					url: "data/goodslist.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));
						var html = '';
						for(var i in sc_arr){
//							alert(sc_arr[i].id);
							html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].src+'" alt=""></div><div class="sc_goodsTitle"><p>笔记本</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">数量:'+sc_arr[i].num+'</div></li>';
						}
						$(".sc_right ul").html(html);
					},error:function(e){
//						alert(e.status);
					}
				})
			}
	}
	return {
		cart: cart
	}
})