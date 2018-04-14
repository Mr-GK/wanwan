console.log("载入成功");

// 配置路径
require.config({
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		index : "index",
		cart : "cart",
		login:"login",
		regester:"regester",
		showgoods:"showgoods",
		goodsdetail:"goodsdetail",
		"parabola": "parabola"
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		/*
			js文件，声明不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})
//首页
require(["menu"], function(menu){
	menu.menu();
})
require(["tab"], function(tab){
	tab.tab();
})
require(["seach"], function(seach){
	seach.seach();
})
require(["submenu"], function(submenu){
	submenu.submenu();
})
//二级菜单
require(["bags"], function(bags){
	bags.bags();
})
require(["beauty"], function(beauty){
	beauty.beauty();
})
require(["clothing"], function(clothing){
	clothing.clothing();
})
require(["watch"], function(watch){
	watch.watch();
})
require(["acc"], function(acc){
	acc.acc();
})
require(["shoes"], function(shoes){
	shoes.shoes();
})
require(["baby"], function(baby){
	baby.baby();
})
require(["wine"], function(wine){
	wine.wine();
})
require(["food"], function(food){
	food.food();
})
require(["home"], function(home){
	home.home();
})
require(["electronic"], function(electronic){
	electronic.electronic();
})
require(["work"], function(work){
	work.work();
})
require(["present"], function(present){
	present.present();
})
require(["overseas"], function(overseas){
	overseas.overseas();
})
//二级菜单
require(["slider"], function(slider){
	slider.slider();
})
require(["brand"], function(brand){
	brand.brand();
})
require(["hotflag"], function(hotflag){
	hotflag.hotflag();
})
require(["oversealist"], function(oversealist){
	oversealist.oversealist();
})
require(["storesame"], function(storesame){
	storesame.storesame();
})
require(["shopcenter"], function(shopcenter){
	shopcenter.shopcenter();
})
require(["classicbags"], function(classicbags){
	classicbags.classicbags();
})
require(["promotion"], function(promotion){
	promotion.promotion();
})
//登录
require(["login"], function(login){
	login.login();
})
//注册
require(["regester"], function(regester){
	regester.regester();
})
//商品列表
require(["brandall"], function(brandall){
	brandall.brandall();
})
require(["brandfilter"], function(brandfilter){
	brandfilter.brandfilter();
})
require(["goodslist"], function(goodslist){
	goodslist.goodslist();
})
//商品详情展示
require(["goodsdetail"], function(goodsdetail){
	goodsdetail.goodsdetail();
})
require(["cart"], function(cart){
	cart.cart();
})


















