<style lang="css">
body {
    font-family: 微软雅黑, 黑体, Arial, "Times New Roman", Verdana;
    color: rgb(167, 169, 172);
    min-width: 960px;
    max-width: 1300px;
    font-size: 14px;
    width: 100%;
    padding: 0px;
    margin: 160px auto;
    background: rgb(255, 255, 255);
}

h3 {
    color: #ffdf00;
    font-weight: normal;
    font-size: 24px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
a {
    text-decoration: none;
    color: #A7A9AC;
}
.numberListContainer {
    width: 100%;
    background: #f7f8f8;
    padding: 20px 0px 0px 3%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
}
.rollNumberList li {
    display: inline-block;
    width: auto;
    padding-right: 50px;
    font-size: 12px;
    vertical-align: top;
    cursor: pointer;
    position: relative;
    top: 5px;
}
.rollNumberList li:hover{
    color: #ffdf00;
}
.rollNumberList li.active {
    color: #ffdf00;
}
.scheduleTip {
    display: inline-block;
    font-weight: normal;
    margin: 0px;
    font-size: 19px;
    width: auto;
    position: absolute;
    left: 750px;
    top: 0px;
    line-height: 88px;
    height: 100%;
    background: #f7f8f8;
}
.newsList li {
    height: 48px;
    line-height: 48px;
    font-size: 16px;
}
.newsList a {
    /* color: #00bc6f; */
    font-size: 14px;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
}
.newsList a:hover{
        color: #ffdf00
}
</style>

<template>
    <div class="JMHome" >
        <swiper :options="swiperOption" ref="mySwiper" style="width:100%;height:400px;">
             <swiper-slide  style="width:80%;min-height:400px;background:black;">
                 <img src="../assets/scrollImg1.png" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:red;">
                 <img src="../assets/scrollImg2.png" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:blue;">
                 <img src="../assets/scrollImg3.png" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:blue;">
                 <img src="../assets/scrollImg4.png" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:blue;">
                 <img src="../assets/scrollImg5.png" alt="" style="width:100%;height:400px;">
             </swiper-slide>
        </swiper>
        <div class="numberListContainer">
            <ul id="rollNumberList" class="rollNumberList">
                <li v-for="(item, index) in processList" @click="change(index)" :class="{active: item.isJMActive}">
                    <span>{{item.title}}</span>
                    <p class="date">{{item.timeDate}}</p>
                </li>
            </ul>
            <h2 class="scheduleTip">2014芙蓉杯日程安排</h2>
        </div>

        <div class="content newsContainer">
            <h3 class="newsTitle">新闻</h3>
            <ul id="newsList" class="newsList">
                <li v-for="item in newsList">
                    <a title="转|国际工业设计协会ICSID关于第四届“芙蓉杯”国际工业设计创新大赛作品征集" href="http://www.lotusprize.com/2014/archives/754">{{item.timeData}}&nbsp;&nbsp;&nbsp;{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name: 'JMHome',
 data() {
   return {
        processList:[
            {title:"设计发现", timeDate:"3.10-4.30", isJMActive:false},
            {title:"作品征集", timeDate:"5.10-7.7", isJMActive:false},
            {title:"创新设计优秀奖评审", timeDate:"7.10-8.12", isJMActive:false},
            {title:"孵化项目评审及工作营", timeDate:"8.20-9.20", isJMActive:false},
            {title:"终评与成果推广", timeDate:"10.8-10.10", isJMActive:false}
        ],
        newsList:[
            {title:"转|国际工业设计协会ICSID关于第四届“芙蓉杯”国际工业设计创新大赛作品征集", timeData:"2014-05-26"},
            {title:"湖南日报：范石钟——第四届“芙蓉杯”大赛奖杯设计进行时", timeData:"2014-05-23"},
            {title:"转|国际艺术设计联盟（Cumulus）关于第四届“芙蓉杯”国际工业设计创新大赛作品征集", timeData:"2014-05-23"}
        ],
        activeFlag:0,
        swiperOption: {
           notNextTick: true,
           effect:"coverflow",
           grabCursor : true,
           setWrapperSize :true,
           autoHeight: true,
           observeParents:true,
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
     computed: {
           swiper() {
             return this.$refs.mySwiper.swiper
           }
     },
    mounted() {
        console.log('mounted');
    },
    methods:{
        change(index){
            this.processList[this.activeFlag].isJMActive = false;
            this.swiper.slideToLoop(index, 1000, false);
            this.processList[index].isJMActive = true;
            this.activeFlag = index;
        }
    }
}
</script>
