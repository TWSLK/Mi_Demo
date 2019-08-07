/**
 * Created by ASUS on 2019-07-27.
 */
$(function () {
    //购物车动画
    $("#car").mouseenter(function () {
        $("#shop_cart").slideDown(500);
        $("#shop_cart").css("zIndex", 10);
    });

    $("#car").mouseleave(function () {
        $("#shop_cart").slideUp(500);
    });

    //轮播图
    var ulLiArr = $(".scrollImg ul li");
    $(".scrollImg ul li").eq(0).clone(true).insertAfter($(".scrollImg ul li").eq(4));
    var index = 0;

    //自动播放
    $("ol li").eq(index).addClass("current");
    var timer = setInterval(play, 3000);

    function play() {
        index++;
        if (index > ulLiArr.length - 1) {
            index = 0
        }
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");

        $(".scrollImg ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    }

    $("ol li").each(function (item,element) {
        $(element).click(function () {
            index = item;
            $(this).addClass("current").siblings().removeClass("current");
            $(".scrollImg ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            clearInterval(timer);
        });
    });


      // 上一张、下一张切换
    $("#left").click(function () {
       clearInterval(timer);
        index--;
        if (index < 0)
        {
            index = ulLiArr.length-1;
        }
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".scrollImg ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    });

    $("#right").click(function () {
       clearInterval(timer);
        index++;
        if (index > ulLiArr.length-1) {
            index = 0
        }
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".scrollImg ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    });
    //鼠标移进  移出
    $(".scrollImg ").mouseenter(
        //鼠标移进
        function () {
            clearInterval(timer);
        });
    $(".scrollImg ").mouseleave(
        //鼠标移开
        function () {
            timer = setInterval(play, 3000);

        });

    //侧边栏
    $(".sideBar ul li a").each(function (a,element) {
        var b = a;
        $(element).mouseenter(function () {
            $(".sideBar ul li .hover_font").eq(b).show();
        });
        $(element).mouseleave(function () {
            $(".sideBar ul li .hover_font").eq(b).hide();
        })
    })

    //回到顶部
    $(".sideBar ul li.totop").click(function () {
        $("body").animate({
            scrollTop:0
        },1000);
    });

    //图片懒加载
    $(function(){
        // $("img").lazyload({
        //     // placeholder : "../images/placeholder.jpg",
        //     effect : "fadeIn",
        //     threshold : 3000,
        //     container: $("#lazy_img")
        // });
        $("img").lazyload();
    });
	
	//购物区滑动
	// console.log($(".click_silde ul").eq(0).width());
	// console.log(parseInt($(".click_silde ul").eq(0).css("marginLeft")));
	// console.log(target);
	
	$(".click_btn a").eq(1).click(function(){
		var count = 0;
		count++;
		$(".click_silde ul").eq(0).css({
			"marginLeft":-1000*count+"px",
			"transition":"margin-left .5s ease 0s"
		});
		var target = $(".click_silde ul").eq(0).width() - Math.abs(parseInt($(".click_silde ul").eq(0).css("marginLeft")));
		// console.log(target);
		if(target-Math.abs(parseInt($(".click_silde ul").eq(0).css("marginLeft")))<1000){
			$(".click_silde ul").eq(0).css({
				"marginLeft":-target+"px",
				"transition":"margin-left .5s ease 0s"
			},2000);
		}
	})
	
	$(".click_btn a").eq(0).click(function(){
		// console.log(parseInt($(".click_silde ul").eq(0).css("marginLeft")));
		if(parseInt($(".click_silde ul").eq(0).css("marginLeft"))==0){
			$(".click_silde ul").eq(0).css({
				"marginLeft":"0px",
				// "transition":"margin-left .5s ease 0s"
			});
			}else if(Math.abs(parseInt($(".click_silde ul").eq(0).css("marginLeft"))) == 1000){
		$(".click_silde ul").eq(0).css({
			"marginLeft":"0px",
			"transition":"margin-left .5s ease 0s"
		});
		}else{
			var time = 0;
			time++;
			$(".click_silde ul").eq(0).css({
				"marginLeft":"1000"*-time+"px",
				"transition":"margin-left .5s ease 0s"
			});
			var target = Math.abs(parseInt($(".click_silde ul").eq(0).css("marginLeft")));
			console.log(target);
			if(target<1000){
				$(".click_silde ul").eq(0).css({
					"marginLeft":"0px",
					"transition":"margin-left .5s ease 0s"
				});
			}
		}
		
	})
});