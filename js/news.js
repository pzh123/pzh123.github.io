$(function () {
    let arr=[
        {
            imgUrl:"./images/news/new_item_newest06.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest07.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest08.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest09.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest10.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest06.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest07.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest08.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest09.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest10.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest06.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest07.jpg",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest08.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest09.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        },
        {
            imgUrl:"./images/news/new_item_newest10.png",
            title:"《原神》交响音乐会特别篇预告",
            time:"2022/01/27"
        }
    ]
    let $new_list = $(".tar_content>.new_list");
    console.log($new_list)
    let $load_more = $(".load_more");
    $load_more.on("click",function () {
        if(arr.length==0){
            return;
        }else {

            if(arr.length==0){
                $load_more.html("已全部加载。");
            }else {
                $load_more.html("正在加载中……");
            }
            let splice = arr.splice(0,5);
            console.log(splice)
            setTimeout(()=>{
                if(arr.length==0){
                    $load_more.html("已全部加载。");
                }else {
                    $load_more.html("加载更多");
                }
                splice.forEach((item,index)=>{
                    let domStr=`<a href="" class="new_item">
                            <div class="left_img">
                                <img src="${item.imgUrl}" alt="">
                            </div>
                            <div class="right">
                                <h6>${item.title}</h6>
                                <div class="time">${item.time} <span>新闻</span></div>
                            </div>
                            <div class="border_view"></div>
                        </a>`
                    $new_list.append($(domStr))
                })
            },2000)
        }
    })

})
