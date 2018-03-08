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
.rollNumberList li.active {
    color: #ffdf00;
    background: url(../assets/flower.png) no-repeat left bottom;
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
a {
    text-decoration: none;
    color: #A7A9AC;
}
</style>

<template>
    <div class="JMHome" >
        <swiper :options="swiperOption" ref="mySwiper" style="width:80%;height:400px;">
            <!-- slides -->
             <swiper-slide  style="width:80%;min-height:400px;background:black;">
                 <img src="../assets/index1.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:red;">
                 <img src="../assets/index2.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:blue;">
                 <img src="../assets/index3.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <!-- Optional controls -->
        </swiper>

        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>

        <div class="numberListContainer">
            <ul id="rollNumberList" class="rollNumberList">
                <li num="1">
                    <span>设计发现</span>
                    <p class="date">3.10-4.30</p>
                </li>
                <li num="2">
                    <span>作品征集</span>
                    <p class="date">5.10-7.7</p>
                </li>
                <li num="3">
                    <span>创新设计优秀奖评审</span>
                    <p class="date">7.10-8.12</p>
                </li>
                <li num="4">
                    <span>孵化项目评审及工作营</span>
                    <p class="date">8.20-9.20</p>
                </li>
                <li num="5">
                    <span>终评与成果推广</span>
                    <p class="date">10.8-10.10</p>
                </li>
            </ul>
            <h2 class="scheduleTip">2014芙蓉杯日程安排</h2>
        </div>

        <div class="content newsContainer">
            <h3 class="newsTitle">新闻</h3>
            <ul id="newsList" class="newsList">



                <li class="hidden">
                    <a title="转|国际工业设计协会ICSID关于第四届“芙蓉杯”国际工业设计创新大赛作品征集" href="http://www.lotusprize.com/2014/archives/754">
                        2014-05-26                            &nbsp;&nbsp;&nbsp;
                        转|国际工业设计协会ICSID关于第四届“芙蓉杯”国际工业设计创新大赛作品征集</a>
                </li>

                <li class="hidden">
                    <a title="湖南日报：范石钟——第四届“芙蓉杯”大赛奖杯设计进行时" href="http://www.lotusprize.com/2014/archives/739">
                        2014-05-23                            &nbsp;&nbsp;&nbsp;
                        湖南日报：范石钟——第四届“芙蓉杯”大赛奖杯设计进行时</a>
                </li>

                <li class="hidden">
                    <a title="转|国际艺术设计联盟（Cumulus）关于第四届“芙蓉杯”国际工业设计创新大赛作品征集" href="http://www.lotusprize.com/2014/archives/735">
                        2014-05-23                            &nbsp;&nbsp;&nbsp;
                        转|国际艺术设计联盟（Cumulus）关于第四届“芙蓉杯”国际工业设计创新大赛作品征集</a>
                </li>

                <li class="hidden">
                    <a title="融合，“芙蓉杯”集结国际设计创客推动“创新湖南”！" href="http://www.lotusprize.com/2014/archives/350">
                        2014-04-11                            &nbsp;&nbsp;&nbsp;
                        融合，“芙蓉杯”集结国际设计创客推动“创新湖南”！</a>
                </li>

                <li class="hidden">
                    <a title="天利湘绣：化茧成“蛾”" href="http://www.lotusprize.com/2014/archives/312">
                        2014-04-10                            &nbsp;&nbsp;&nbsp;
                        天利湘绣：化茧成“蛾”</a>
                </li>

                <li class="hidden">
                    <a title="2014第四届“芙蓉杯”国际工业设计创新大赛宣传片" href="http://www.lotusprize.com/2014/archives/258">
                        2014-04-04                            &nbsp;&nbsp;&nbsp;
                        2014第四届“芙蓉杯”国际工业设计创新大赛宣传片</a>
                </li>

                <li class="hidden">
                    <a title="工业设计对话互联网创客，2014第四届“芙蓉杯”国际工业设计创新大赛正式启动" href="http://www.lotusprize.com/2014/archives/218">
                        2014-03-29                            &nbsp;&nbsp;&nbsp;
                        工业设计对话互联网创客，2014第四届“芙蓉杯”国际工业设计创新大赛正式启动</a>
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
     swiperOption: {
           notNextTick: true,
           autoplay: 300,
           // direction : 'vertical',
           effect:"coverflow",
           grabCursor : true,
           setWrapperSize :true,
           autoHeight: true,
           // paginationType:"bullets",
           pagination : '.swiper-pagination',
           paginationClickable :true,
           prevButton:'.swiper-button-prev',
           nextButton:'.swiper-button-next',
           scrollbar:'.swiper-scrollbar',
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
     }
}
</script>
