/**
 * Created by ASUS on 2019-07-26.
 */

    window.onload = function () {
        // 购物车显示效果
        // var car = document.getElementById("car");
        // var cart = document.getElementById("shop_cart");
        // console.log(car);
        // console.log(cart);
        // car.onmouseover = function () {
        //     // cart.style.display = "block";
        //     cart.style.zIndex = 10;
        // };
        //
        // car.onmouseout = function () {
        //     // cart.style.display = "none";
        // };

        //搜索下拉部分
        var s_m = document.getElementsByClassName("s_m")[0];
        var ul_search = s_m.children[0];
        var li_search = ul_search.children;
        var newthing = document.getElementsByClassName("newthing")[0];
        var newthingDiv = newthing.children;
        var scrollImg = document.getElementsByClassName("scrollImg")[0];

        for(var i = 0;i<li_search.length-2;i++){
            (function (k) {
                li_search[k].onmouseover = function () {
                    newthing.style.display = "block";
                    newthing.style.zIndex = 12;
                    // newthing.className = "newthing myanimate";
                    for(var j = 0;j<newthingDiv.length;j++){
                        newthingDiv[j].style.display = "none";
                    }
                    newthingDiv[k].style.display = "block";
                    // newthingDiv[k].className = " myanimate";
                    // newthingDiv[k].style.zIndex = 11;
                }
            })(i);

            li_search[i].onmouseout = function () {
                newthing.style.display = "none";
            }
        }

        //轮播图侧边导航栏
        var sort_content = document.getElementsByClassName("sort_content")[0];
        var sortUl =document.getElementsByClassName("sort")[0].children[0];
        var sortLi = sortUl.children;
        var sort_contentUl = sort_content.children;

        for(var a =0;a<sortLi.length;a++){
            (function (k) {
                sortLi[k].onmouseover = function(){
                    sort_content.style.display = "block";
                    for(var b= 0;b<sortLi.length;b++){
                        sort_contentUl[b].style.display = "none";
                    }
                    sort_contentUl[k].style.display = "block";
                }
            })(a);

            sortLi[a].onmouseout = function () {
                sort_content.style.display = "none";
            }
        }
		
		// 倒计时
		var rest_time = document.getElementsByClassName("rest_time")[0];
		var hourDiv = document.querySelector(".hour");
		var minDiv = document.querySelector(".min");
		var secDiv = document.querySelector(".second");
		setInterval(fn,1000);

		function fn() {
			var futureTime = new Date("2019/08/07 20:00:00");
			var nowTime = new Date();

			var sumMS = futureTime.getTime()-nowTime.getTime();
			// var day = parseInt(sumMS/1000/60/60/24);
			var hour = parseInt(sumMS/1000/60/60%24);
			var minute = parseInt(sumMS/1000/60%60);
			var second = parseInt(sumMS/1000%60);
			var ms = parseInt(sumMS%1000);

			// day = day<10?"0"+day:day;
			hour = hour<10?"0"+hour:hour;
			minute = minute<10?"0"+minute:minute;
			second = second<10?"0"+second:second;
			if(ms<10){
				ms = "00"+ms;
			}else if(ms<100){
				ms = "0"+ms;
			}
			hourDiv.innerHTML = hour;
			minDiv.innerHTML = minute;
			secDiv.innerHTML = second;
		}
		
		};

