var gulp = require("gulp");

//拷贝HTML文件
gulp.task("copy-index",function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-login",function(){
	return gulp.src("login.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-regester",function(){
	return gulp.src("regester.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-goods",function(){
	return gulp.src("showgoods.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-cart",function(){
	return gulp.src("cart.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-goodsdetail",function(){
	return gulp.src("goodsdetail.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
//拷贝图片
var imagemin = require("gulp-imagemin");
gulp.task("images", function(){
	return gulp.src("images/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//拷贝数据
gulp.task("data",function(){
	return gulp.src("json/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
});
//拷贝js 
gulp.task("scripts", function(){
	return gulp.src(["jquery/*.js", "js/**"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

var scss = require("gulp-sass-china");
var minify = require("gulp-minify-css");
gulp.task("scss",function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("regester-scss",function(){
	return gulp.src("stylesheet/regester.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("regester.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("cart-scss",function(){
	return gulp.src("stylesheet/cart.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("cart.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("login-scss",function(){
	return gulp.src("stylesheet/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("footer-scss",function(){
	return gulp.src("stylesheet/footer.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("footer.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("header-scss",function(){
	return gulp.src("stylesheet/header.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("header.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("showgoods-scss",function(){
	return gulp.src("stylesheet/showgoods.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("showgoods.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("goodsdetail-scss",function(){
	return gulp.src("stylesheet/goodsdetail.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("goodsdetail.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// gulp.task("scripts", function(){
// 	return gulp.src(["jquery/*.js", "js/*.js"])
// 	.pipe(gulp.dest("dist/js"))
// 	.pipe(connect.reload())
// })

//
gulp.task("build",["copy-index","images","data","scss","scripts","regester-scss","login-scss","copy-login","copy-regester","footer-scss","copy-goods","header-scss","cart-scss","copy-cart","showgoods-scss","copy-goodsdetail","goodsdetail-scss"],function(){
	console.log("编译成功");
});

gulp.task("watch", function(){
	gulp.watch("index.html", ["copy-index"]);
	gulp.watch("login.html", ["copy-login"]);
	gulp.watch("cart.html", ["copy-cart"]);
	gulp.watch("regester.html", ["copy-regester"]);
	gulp.watch("showgoods.html", ["copy-goods"]);
	gulp.watch("goodsdetail.html", ["copy-goodsdetail"]);
	gulp.watch("json/*.json", ["data"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("stylesheet/index.scss", ["scss"]);
	gulp.watch(["jquery/*.js", "js/*.js"], ["scripts"]);
	gulp.watch("stylesheet/regester.scss", ["regester-scss"]);
	gulp.watch("stylesheet/login.scss", ["login-scss"]);
	gulp.watch("stylesheet/footer.scss", ["footer-scss"]);
	gulp.watch("stylesheet/header.scss", ["header-scss"]);
	gulp.watch("stylesheet/showgoods.scss", ["showgoods-scss"]);
	gulp.watch("stylesheet/goodsdetail.scss", ["goodsdetail-scss"]);
	gulp.watch("stylesheet/cart.scss", ["cart-scss"]);
})

var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'dist',
		livereload:true,
		port:8888
	})
})
//默认任务不用写任务
gulp.task("default",["server","watch"]);



