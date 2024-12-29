window=onload=function(){

}
$(function () {
    let $music = document.getElementById("music");
    let $hideMusic=$(".hideMucis");
    let $showMucis=$(".showMucis");

    //nav active 蓝色线移动
    let navActiveIndex=0;
    let $buleLine = $(".buleLine");
    let $lis=$("header ul li");
    let firstX=$($lis[navActiveIndex]).position().left;
    $buleLine.css("left",`${firstX}px`);
    $lis.on("mouseover",function (e) {
        $buleLine.css({
            transition:"all .3s linear",
            left:`${$(this).position().left}px`
        })
    })
    $lis.on("mouseout",function (e) {
        $buleLine.css({
            transition:"all .3s linear",
            left:`${firstX}px`
        })
    })

    // 音乐自动播放
    setTimeout(()=>{
        console.log($music.paused)
        if($music.paused){
            $hideMusic.show();
            $showMucis.hide();
        }else {
            $hideMusic.hide();
            $showMucis.show();
        }
    },0)
    $hideMusic.on("click",function () {
        $music.play();
        if(!$music.paused){
            $hideMusic.hide();
            $showMucis.show();
        }
    })
    $showMucis.on("click",function () {
        $music.pause();
        if($music.paused){
            $hideMusic.show();
            $showMucis.hide();
        }
    })
    //轮播图
    var mySwiper1 = new Swiper('.swiperone',{
        autoplay : 3000,
        loop : true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    })
    var mySwiper2 = new Swiper('.swipertwo',{
        simulateTouch : false,//禁止滑动
    })
    // tab控制轮播图
    let $tablis=$(".contentBar li");
    console.log("list");
    console.log($tablis)
    $tablis.on("click",function () {
        $tablis.removeClass("active");
        $(this).addClass("active");
        let index = $(this).attr("data-index");
        mySwiper2.slideTo(parseInt(index),0)
    })

    //登录
    let $loginBox2=$(".loginBox2");
    let $loginBox=$(".loginBox");
    let $closeLoginView=$(".closeLoginView");
    let $tabItems=$(".toogle .tabItem");
    let $tabItemContent=$(".tabItemContent");
    console.log($tabItems)
    $loginBox2.on("click",function () {
        console.log("close")
        $loginBox.css("display","block")
    })
    $closeLoginView.on("click",function () {
        $loginBox.css("display","none")
    });
    $tabItems.on("click",function () {
        console.log("remove")
        $tabItems.removeClass("active");
        let $this=$(this)
        $this.addClass("active")
        if($(this).attr("data-index")==="0"){
            $tabItemContent.css("display","none");
            $($tabItemContent[0]).css("display","block")
        }else {
            $tabItemContent.css("display","none");
            $($tabItemContent[1]).css("display","block")
        }
    })
    //视频视图
    //btn
    let $vedioCircle=$(".vedioCircle");
    let $closeVideBtn=$(".closeVideBtn");
    //view
    let $showVideView=$(".showVideView");
    //vedio dom
    let $myvideo = document.querySelector("#myvideo");
    let $myvideJq=$("#myvideo");

    $vedioCircle.on("click",function () {
        $showVideView.show();
    })
    $closeVideBtn.on("click",function () {
        $showVideView.hide();
        $myvideo.pause();
    })
    $showVideView.on("click",function () {
        $showVideView.hide();
        $myvideo.pause();
    })
    //阻止冒泡
    $myvideJq.on("click",function (e) {
        e.stopPropagation();
    })

    //关注视图
    let $window=$(window);
    let $guanzhuWrap=$(".guanzhuWrap");
    let $rightFoldBtn=$(".rightFoldBtn");
    let $leftFoldBtn=$(".leftFoldBtn");
    let isLeft=true;
    console.log("dddd");
    function isShowGuanZhuan(){
        if($window.scrollTop()>=300){
            $guanzhuWrap.fadeIn();
        }else {
            $guanzhuWrap.fadeOut();
        }
    }
    isShowGuanZhuan();
    $window.scroll(function (e) {
        isShowGuanZhuan();
    });

    $rightFoldBtn.on("click",function () {
        console.log("right")
        console.log($rightFoldBtn.css('transform'))
        if(isLeft){
            $rightFoldBtn.css({
                transition:"transform .25s linear",
                transform:"rotate(-180deg)"
            })
            $guanzhuWrap.css({
                transition:"transform .3s linear",
                transform:"translate(100%, -50%)"
            })
            isLeft=!isLeft;
        }else {
            $rightFoldBtn.css({
                transition:"transform .25s linear",
                transform:"rotate(0deg)"
            })
            $guanzhuWrap.css({
                transition:"transform .3s linear",
                transform:"translate(0%, -50%)"
            })
            isLeft=!isLeft;
        }

    })


    $(window).on("resize",function () {
        mySwiper1.onResize();
        mySwiper2.onResize();
    })
})
