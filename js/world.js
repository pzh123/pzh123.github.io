$(function () {


   let $swiper_navbar=$(".swiper_navbar");
   let $lis=$(".swiper_navbar li");
   let $detail_box=$(".detail_box");
   let $close_detail=$(".close_detail");
   let $tip=$(".page1 .tip");
   let $city_details=$(".city_details");

   console.log($(".swiper-scrollBox"))
    var swiperPage = new Swiper('.swiper-page',{
        scrollbar:'.swiper-scrollbar',
        direction: 'vertical',
        mousewheelControl: true,
        scrollbarHide : false,
        scrollbarDraggable : true ,
        scrollbarSnapOnRelease : true ,
        slidesPerView :'auto',
        simulateTouch : false,//禁止滑动
        onSlideChangeStart: function (swiper){
            console.log(swiper.activeIndex);
            $lis.removeClass("active");
            $($lis[swiper.activeIndex]).addClass("active");
            if(swiper.activeIndex==0||swiper.activeIndex==4){
                $swiper_navbar.removeClass("active");
            }else {
                $swiper_navbar.addClass("active");
            }
        },
        onSlideChangeEnd:function (swiper) {
            $lis.removeClass("active");
            $($lis[swiper.activeIndex]).addClass("active");
            if(swiper.activeIndex==0||swiper.activeIndex==4){
                $swiper_navbar.removeClass("active");
            }else {
                $swiper_navbar.addClass("active");
            }
        },
        onScroll: function(swiper){
            //console.log('您通过滚轮操作了swiper');
            // console.log("scroll: ",swiper.activeIndex)
        },
        onTransitionEnd: function(swiper){
            console.log("transitionEnd: ",swiper.activeIndex);
            if(swiper.progress==1){
                swiper.activeIndex=swiper.slides.length-1
            }
        }
    });
    var swiperScroll1 = new Swiper('.swiper-scrollBox1', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbarHide : false,
        scrollbarDraggable : true ,
    });
    var swiperScroll2 = new Swiper('.swiper-scrollBox2', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbarHide : false,
        scrollbarDraggable : true ,
    });
    var swiperScroll3 = new Swiper('.swiper-scrollBox3', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbarHide : false,
        scrollbarDraggable : true ,
    });

    //手动轮播
    $tip.on("click",function () {
        swiperPage.slideTo(1);
    })
    $lis.each((index,item)=>{
        item.index=index;
    })
    $lis.on("click",function () {
        if(this.index<4){
            swiperPage.slideTo(this.index);
        }

    })


    // 打开城市详情视图
    $city_details.each((index,item)=>{
        item.index=index;
    });
    $city_details.on("click",function () {
        $detail_box.hide();
        $($detail_box[this.index]).show();
        swiperScroll1.onResize();
        swiperScroll2.onResize();
        swiperScroll3.onResize();
    })

    $close_detail.on("click",function () {
        $detail_box.hide();
    })


    window.onresize=function () {
        swiperPage.onResize();
        swiperScroll1.onResize()
    }
})
