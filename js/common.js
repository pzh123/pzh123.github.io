$(function () {
    // 播放音乐
    let $music = document.getElementById("music");
    let $hideMusic=$(".hideMucis");
    let $showMucis=$(".showMucis");

    //nav active 蓝色线移动

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

})
