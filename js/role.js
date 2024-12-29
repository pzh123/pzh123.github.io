$(function () {
    // 解析url参数
    let urlSearchParams = new URLSearchParams(location.search);
    let id;
    if(!urlSearchParams.get("id")){
        id=0;
    }else {
        id=urlSearchParams.get("id");
    }
    let $lia=$(".city_select li");
    $lia.each((index,item)=>{
        item.index=index;
    })
    $lia.removeClass("active");
    $($lia[parseInt(id)]).addClass("active");
    $lia.on("click",function () {
        if(this.index==3||parseInt(id)==this.index){
            return;
        }
        window.open(`./role.html?id=${this.index}`,"_self")
    })



    $fire=$(".swiper-slide .fire");
    // function leftRe() {
    //     console.log($("body").width())
    //     if($("body").width()>=1280){
    //         let fireK=144/1280;
    //         $fire.css("left",fireK*$("body").width()+"px");
    //         console.log(fireK*$("body").width())
    //     }else {
    //         $fire.css("left","144px")
    //     }
    // }
    // leftRe();
    // window.onresize=function () {
    //     leftRe();
    // }


    let page=[
        {
            id:1,
            name:"琴",
            cvzhname:"林簌",
            cvriname:"斋藤千和",
            roleImg:"./images/role/role_item/role_item_role_01.png",
            nameIcon:"./images/role/role_item/role_item_name_01.png",
            headImg:"./images/role/page/role_page_01.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_01(01).mp3","./images/role/audio/role_item_audio_zh_01(02).mp3","./images/role/audio/role_item_audio_zh_01(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_01(01).mp3","./images/role/audio/role_item_audio_ri_01(02).mp3","./images/role/audio/role_item_audio_ri_01(03).mp3"],
            descript:"<p>身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。<br>\n" +
                "当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。</p>",
        },
        {
            id:2,
            name:"安柏",
            cvzhname:"CV: 蔡书瑾",
            cvriname:"CV: 石见舞菜香",
            roleImg:"./images/role/role_item/role_item_role_02.png",
            nameIcon:"./images/role/role_item/role_item_name_02.png",
            headImg:"./images/role/page/role_page_02.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_02(01).mp3","./images/role/audio/role_item_audio_zh_02(02).mp3","./images/role/audio/role_item_audio_zh_02(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_02(01).mp3","./images/role/audio/role_item_audio_ri_02(02).mp3","./images/role/audio/role_item_audio_ri_02(03).mp3"],
            descript:"<p>活泼率直的少女，是蒙德城中唯一的侦察骑士。<br>擅长使用风之翼的安柏，连续三年蝉联蒙德城的「飞行冠军」。<br>作为西风骑士团的新星，今天的安柏依然活跃在第一线。</p>",
        },
        {
            id:3,
            name:"丽莎",
            cvzhname:"CV: 钟可",
            cvriname:"CV: 田中理惠",
            roleImg:"./images/role/role_item/role_item_role_03.png",
            nameIcon:"./images/role/role_item/role_item_name_03.png",
            headImg:"./images/role/page/role_page_03.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>她是钟情于睡眠的知性魔女。<br>\n" +
                "作为西风骑士团图书馆的管理员，聪明的丽莎总能以最有效的方式将遇到的问题统统解决。<br>\n" +
                "虽然看似慵懒，但处变不惊的她似乎早已将一切尽数掌控。</p>",
        },
        {
            id:4,
            name:"凯亚",
            cvzhname:"CV: 孙晔",
            cvriname:"CV: 鸟海浩辅",
            roleImg:"./images/role/role_item/role_item_role_04.png",
            nameIcon:"./images/role/role_item/role_item_name_04.png",
            headImg:"./images/role/page/role_page_04.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>在西风骑士团里，凯亚是代理团长最信任的副手。凡是交托于他的任务，总能得到解决。<br>\n" +
                "在蒙德城中，风趣幽默的他同样深受人们的喜爱，然而这位谈吐不凡的骑士隐约有着什么不为人知的秘密。</p>",
        },
        {
            id:5,
            name:"芭芭拉",
            cvzhname:"CV: 宋媛媛",
            cvriname:"CV: 鬼头明里",
            roleImg:"./images/role/role_item/role_item_role_05.png",
            nameIcon:"./images/role/role_item/role_item_name_05.png",
            headImg:"./images/role/page/role_page_05.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:6,
            name:"迪卢克",
            cvzhname:"CV: 马洋",
            cvriname:"CV: 小野贤章",
            roleImg:"./images/role/role_item/role_item_role_06.png",
            nameIcon:"./images/role/role_item/role_item_name_06.png",
            headImg:"./images/role/page/role_page_06.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。</p>\n" + "\n" + "<p>然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，令他能以恐怖的攻势，毫不留情地将一切敌人击溃。</p>\n",
        },
        {
            id:7,
            name:"雷泽",
            cvzhname:"CV: 周帅",
            cvriname:"CV: 内山昂辉",
            roleImg:"./images/role/role_item/role_item_role_07.png",
            nameIcon:"./images/role/role_item/role_item_name_07.png",
            headImg:"./images/role/page/role_page_07.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:8,
            name:"温迪",
            cvzhname:"CV: 喵☆酱",
            cvriname:"CV: 村濑步",
            roleImg:"./images/role/role_item/role_item_role_08.png",
            nameIcon:"./images/role/role_item/role_item_name_08.png",
            headImg:"./images/role/page/role_page_08.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:9,
            name:"可莉",
            cvzhname:"CV: 花玲",
            cvriname:"CV: 久野美咲",
            roleImg:"./images/role/role_item/role_item_role_09.png",
            nameIcon:"./images/role/role_item/role_item_name_09.png",
            headImg:"./images/role/page/role_page_09.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:10,
            name:"班尼特",
            cvzhname:"CV: 穆雪婷",
            cvriname:"CV: 逢坂良太",
            roleImg:"./images/role/role_item/role_item_role_10.png",
            nameIcon:"./images/role/role_item/role_item_name_10.png",
            headImg:"./images/role/page/role_page_10.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:11,
            name:"诺艾尔",
            cvzhname:"CV: 宴宁",
            cvriname:"CV: 高尾奏音",
            roleImg:"./images/role/role_item/role_item_role_11.png",
            nameIcon:"./images/role/role_item/role_item_name_11.png",
            headImg:"./images/role/page/role_page_11.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:12,
            name:"菲谢尔",
            cvzhname:"CV: Mace&赵悦程",
            cvriname:"CV: 内田真礼&增谷康纪",
            roleImg:"./images/role/role_item/role_item_role_12.png",
            nameIcon:"./images/role/role_item/role_item_name_12.png",
            headImg:"./images/role/page/role_page_12.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p> <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p> <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>",
        },
        {
            id:13,
            name:"砂糖",
            cvzhname:"CV: 小敢",
            cvriname:"CV: 藤田茜",
            roleImg:"./images/role/role_item/role_item_role_13.png",
            nameIcon:"./images/role/role_item/role_item_name_13.png",
            headImg:"./images/role/page/role_page_13.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:14,
            name:"莫娜",
            cvzhname:"CV: 陈婷婷",
            cvriname:"CV: 小原好美",
            roleImg:"./images/role/role_item/role_item_role_14.png",
            nameIcon:"./images/role/role_item/role_item_name_14.png",
            headImg:"./images/role/page/role_page_14.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:15,
            name:"迪奥娜",
            cvzhname:"CV: 诺亚",
            cvriname:"CV: 井泽诗织",
            roleImg:"./images/role/role_item/role_item_role_15.png",
            nameIcon:"./images/role/role_item/role_item_name_15.png",
            headImg:"./images/role/page/role_page_15.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:16,
            name:"阿贝多",
            cvzhname:"CV: Mace",
            cvriname:"CV: 野岛健儿",
            roleImg:"./images/role/role_item/role_item_role_16.png",
            nameIcon:"./images/role/role_item/role_item_name_16.png",
            headImg:"./images/role/page/role_page_16.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:17,
            name:"罗莎莉亚",
            cvzhname:"CV: 张安琪",
            cvriname:"CV: 加隈亚衣",
            roleImg:"./images/role/role_item/role_item_role_17.png",
            nameIcon:"./images/role/role_item/role_item_name_17.png",
            headImg:"./images/role/page/role_page_17.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:18,
            name:"优菈",
            cvzhname:"CV: 子音",
            cvriname:"CV: 佐藤利奈",
            roleImg:"./images/role/role_item/role_item_role_18.png",
            nameIcon:"./images/role/role_item/role_item_name_18.png",
            headImg:"./images/role/page/role_page_18.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
        {
            id:19,
            name:"埃洛伊",
            cvzhname:"CV: 沐霏",
            cvriname:"CV: 高垣彩阳",
            roleImg:"./images/role/role_item/role_item_role_19.png",
            nameIcon:"./images/role/role_item/role_item_name_19.png",
            headImg:"./images/role/page/role_page_19.png",
            zhaudioarr:["./images/role/audio/role_item_audio_zh_03(01).mp3","./images/role/audio/role_item_audio_zh_03(02).mp3","./images/role/audio/role_item_audio_zh_03(03).mp3"],
            riaudioarr:["./images/role/audio/role_item_audio_ri_03(01).mp3","./images/role/audio/role_item_audio_ri_03(02).mp3","./images/role/audio/role_item_audio_ri_03(03).mp3"],
            descript:"<p>对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。<br>\n" +
                "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。<br>\n" +
                "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。</p>\n",
        },
    ]


    let $swiperWrapper=$(".swiper_m .swiper-wrapper");
    let $swiperWrapperPage=$(".myswiper_page .swiper-wrapper");
    let sliderS="";
    let sliderPageS="";
    page.forEach((item,index)=>{
        let active=index==0?" active":"";
        let temp=`<div class="swiper-slide">
                            <img class="fire" src="./images/role/role_swiper_fire.png" alt="">
                            <img  class="role" src="${item.roleImg}" alt="">
                            <div class="role_descirpt_box">
                                <div class="yellow_line"></div>
                                <img src="${item.nameIcon}" alt="" class="role_name_icon">
                                <div class="cv_box">
                                    <div class="cv_name cv_zh_name active">${item.cvzhname}</div>
                                    <div class="cv_name cv_ri_name">${item.cvriname}</div>
                                    <div class="audio_box">
                                        <div class="audio_btn audio_btn_one"></div>
                                        <div class="audio_btn audio_btn_active"></div>
                                        <div class="andio_group zh_andio_group" style="display: none">
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.zhaudioarr[0]}">
                                            </audio>
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.zhaudioarr[1]}">
                                            </audio>
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.zhaudioarr[2]}">
                                            </audio>
                                        </div>
                                        <div class="andio_group ri_andio_group" style="display: none">
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.riaudioarr[0]}">
                                            </audio>
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.riaudioarr[1]}">
                                            </audio>
                                            <audio   preload="preload" controls="controls" hidden>
                                                <source src="${item.riaudioarr[2]}">
                                            </audio>
                                        </div>
                                    </div>
                                    <div class="language_box">
                                        <span class="zh_swich">中</span>
                                        <span class="ri_swich active">日</span>
                                    </div>
                                </div>
                                <div class="role_descipt">
                                  ${item.descript}
                                </div>
                            </div>
                        </div>`;

        let temp2=`<div class="swiper-slide">
                                <div class="role_page_box${active}">
                                    <img src="${item.headImg}" alt="">
                                    <p>${item.name}</p>
                                </div>
                            </div>`
        sliderS+=temp;
        sliderPageS+=temp2;
    })
    $swiperWrapper.html(sliderS);
    $swiperWrapperPage.html(sliderPageS);


    // CV: 鸟海浩辅
    // 诺艾尔
    let activeIndex=0;
    let $role_page_box=$(".myswiper_page .swiper-slide .role_page_box");
    var myswiper_page = new Swiper('.myswiper_page',{
        simulateTouch : false,//禁止滑动
        slidesPerView: 6,
        spaceBetween: 38,
        onSlideChangeStart: function(swiper){
            // alert(swiper.activeIndex);
        }
    })
    var myswiper_role = new Swiper('.swiper_m',{
        loop : true,
        effect : 'fade',
        simulateTouch : false,//禁止滑动
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onSlideChangeStart: function(swiper){
            /**
             *  因为开启loop第一张索引是 1
             *  因为page的swiper在之前初始化了可以不用setTimeout
             */
            // alert(swiper.activeIndex);
            console.log(swiper.activeIndex);
            $role_page_box.removeClass("active");//清除所有active
            if(swiper.activeIndex==0){//等于零切换到最后张
                $($role_page_box[page.length-1]).addClass("active");
                activeIndex=page.length-1;
                setTimeout(()=>{
                    myswiper_page.slideTo(page.length-1,500);
                },0)
            }else if(swiper.activeIndex==page.length+1){//超过数组长度即（等于数组长度加一） 切换到第一张
                $($role_page_box[0]).addClass("active");
                activeIndex=0;
                setTimeout(()=>{
                    myswiper_page.slideTo(0,500);
                },0)
            }else {
                $($role_page_box[swiper.activeIndex-1]).addClass("active");
                activeIndex=swiper.activeIndex-1;
            }

            if((swiper.activeIndex-1)<=2&&(swiper.activeIndex-1)>=0){//在左边三张区间
                setTimeout(()=>{
                    myswiper_page.slideTo(0,500);
                },0)
            }
            if((swiper.activeIndex-1)>=(page.length-3)&&(swiper.activeIndex-1)<=(page.length-1)){//在右边三张区间
                setTimeout(()=>{
                    myswiper_page.slideTo(page.length-1,500);
                },0)
            }

            if((swiper.activeIndex-1)>2&&(swiper.activeIndex-1)<(page.length-3)){//可以滑动的区间
                setTimeout(()=>{
                    myswiper_page.slideTo(swiper.activeIndex-3,500);
                },0)
            }
        }
    });

    //点击滑块进行切换
    $role_page_box.each((index,item)=>{
        item.index=index;
    })
    $role_page_box.on("click",function () {
        console.log(this.index);
        activeIndex=this.index;
        $role_page_box.removeClass("active");
        $($role_page_box[this.index]).addClass("active");
        if(this.index>=0&&this.index<=2){
            myswiper_page.slideTo(0,500);
            myswiper_role.slideTo(this.index+1);
        }else if(this.index<=page.length-1&&this.index>=page.length-3){
            myswiper_page.slideTo(page.length-1,500);
            myswiper_role.slideTo(this.index+1);
        }else {
            myswiper_page.slideTo(this.index,500);
            myswiper_role.slideTo(this.index+1);
        }
    })


    // 声优信息切换
    let $language_box=$(".language_box");
    let $zh_swich=$(".zh_swich");
    let $ri_swich=$(".ri_swich");
    let $cv_name=$(".cv_name");
    let $cv_zh_name=$(".cv_zh_name");
    let $cv_ri_name=$(".cv_ri_name");
    console.log($cv_name.length)
    console.log($cv_ri_name.length)
    console.log($cv_zh_name.length)
    let isZH=true;//是否是中CV

    $language_box.on("click",function () {
        if(isZH){//切换日语
            $zh_swich.addClass("active");
            $ri_swich.removeClass("active");
            $cv_name.removeClass("active");
            $cv_ri_name.addClass("active");
        }else {
            $zh_swich.removeClass("active");
            $ri_swich.addClass("active");
            $cv_name.removeClass("active");
            $cv_zh_name.addClass("active");
        }
        isZH=!isZH;
    });

    //播放声优mp3
    let audioArr=[];
    let comonAudio=null;
    page.forEach(item=>{
        audioArr.push({z:0,r:0});
    })
    let $audio_btn_one=$(".audio_btn_one");
    let $audio_btn_active=$(".audio_btn_active");
    $audio_btn_one.on("click",function () {
        $audio_btn_one.hide();
        $audio_btn_active.show();
        if(isZH){
            if(audioArr[activeIndex].z>2){
                audioArr[activeIndex].z=0;
            }
            comonAudio=$(this).nextAll(".zh_andio_group").find("audio")[audioArr[activeIndex].z];
            comonAudio.play();
            audioArr[activeIndex].z++;
        }else {
            if(audioArr[activeIndex].r>2){
                audioArr[activeIndex].r=0;
            }
            comonAudio=$(this).nextAll(".ri_andio_group").find("audio")[audioArr[activeIndex].r];
            comonAudio.play();
            audioArr[activeIndex].r++;
        }
    })
    $audio_btn_active.on("click",function () {
        $audio_btn_active.hide();
        $audio_btn_one.show();
        comonAudio.pause();
    })
    $(".andio_group audio").on("ended",function () {
        console.log("end");
        $audio_btn_active.hide();
        $audio_btn_one.show();
    });

})
