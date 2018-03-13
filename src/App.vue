<template>
  <div id="app">
    <div class="JMHeader">
        <div class="JMLogo">
          <router-link :to="{ name: 'home'}">
              <img src="./assets/scrollImg1.png" alt="">
          </router-link>
        </div>
        <div class="JMNoticeBoard">
            <div class="JMNoticeBoardLeft"><a href="#">报名参赛</a></div>
            <div class="JMNoticeBoardRight">
               <div class="JMItem">
                    <span class="countDown">{{timeData}}</span>
                             征稿截止剩余天数
               </div>
            </div>
        </div>
        <div class="JMTopNav">
            <ul class="JMMenu">
                <li class="JMItem" v-for="(item, index) in dataList" @click="headerChange(index)">
                    <router-link :class="{JMLink:item.isJMLink, JMActive:item.isJMActive}" :to="item.dataPageName" replace>{{item.title}}</router-link>
                </li>
            </ul>
            <!--登陆-->
            <ul class="JMUserMenu" v-cloak>
                <!-- <li class="JMItem" v-show="test"><router-link class="JMLink JM20C7BE" :to="{ name: 'works'}">[ gansiqiu ]</router-link></li>
                <li class="JMItem" v-show="test"><router-link class="JMLink" :to="{ name: 'logout'}">退出</router-link></li> -->
                <li class="JMItem" v-show="!test"><router-link class="JMLink JMIconUser" :to="{ name: 'login'}"></router-link></li>
            </ul>
        </div>
    </div>
    <router-view/>
    <div id="JMFooter">&copy;湖南省科学技术厅</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      test:false,
      timeData:"100",
      indexFlag:0,
      dataList:[
        {isJMLink:true, isJMActive:true, dataPageName:"../home", title:'首页', replace:true},
        {isJMLink:true, isJMActive:false, dataPageName:"../news", title:'选题', replace:false},
        {isJMLink:true, isJMActive:false, dataPageName:"../rule", title:"章程", replace:false},
        {isJMLink:true, isJMActive:false, dataPageName:"../judge", title:"评委", replace:false}
      ]
    }
  },
	methods:{
		headerChange(n){
			this.dataList[this.indexFlag].isJMActive = false;
		    this.dataList[n].isJMActive = true;
		    this.indexFlag = n;

		}
	},
	created: function () {
	  this.$router.push('/home');
	}
}
</script>

<style>
html, div, ul, li, a, span, img{
	margin: 0px;
	padding: 0px;
}
a{
	text-decoration: none;
}
li{
	list-style: none;
    display: inline-block;
}
body{
    margin: 0px auto;
    padding: 0px;
    font-size: 14px;
    font-family: "Arail","Microsoft YaHei","Heiti";
    padding-top:160px;
    display: flex;
    min-height: 83vh;
    flex-direction: column;
}
/***************************
 * 			header
 * ***********************/
.JMHeader{
	 position: absolute;
    top:0;
    left: 0;
    right:0;
    height: 160px;
    background:.fff;
    z-index: 99;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    /*
      背景图片设置
     */
    /* background-image: url("./assets/logo0.png");
    background-size:100% 100%; */
}
/*
  logo图片设置
 */
.JMLogo{
  text-align: center;
	width: 120px;
	height: 120px;
  max-width: 50%;
  display: inline-block;
  position: absolute;
  top:10px;
  left: 20px;
}
.JMLogo img{
    max-height:100%;
    max-width:100%;
}
/*报名时间*/
.JMNoticeBoard{
    border: 1px solid #ECC95D;
    background-color: #ECC95D;
    width: 240px;
    height: 60px;
    position: absolute;
    top:20px;
    right: 20px;
}
.JMNoticeBoardLeft{
    color: #ECC95D;
    font-size: 12px;
    margin: auto;
    text-align: center;
    width: 50%;
    position: absolute;
    left: 0;
    top:50%;
    transform: translateY(-50%)
}
.JMNoticeBoardLeft a{
    display: inline-block;
    width:100%;
    color: #fff;
    line-height: 60px;
    height:60px;
    font-size: 18px;
}

.JMNoticeBoardRight{
    color: #e9608d;
    background:#fff;
    font-size: 12px;
    text-align: center;
    width: 50%;
    height: 100%;
    position: absolute;
    top:0;
    right:0;
}
.JMNoticeBoardRight .JMItem{
    font-weight:bold;
    color: #515151;
    margin: 0;
    width:100%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.JMNoticeBoardRight .countDown{
  color: #ECC95D;
    font-size: 36px;
    display: block;
    line-height: 1em;
}
/*li选项*/
.JMTopNav{
  width: 40%;
    background: #ECC95D;
    height: 50px;
    position: absolute;
    right:0;
    bottom:10px;
    display: flex;
}
.JMMenu{
    height: 100%;
    font-size: 14px;
    margin-right:20px;
    flex: 1;
}
.JMMenu .JMItem{
  width: 25%;
	list-style: none;
    display: inline-block;
}
.JMMenu .JMItem .JMLink{
    font-size: 18px;
    display: block;
    width: 100%;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: #fff;
    position: relative;
}
.JMMenu .JMItem .JMLink::before{
    content: "";
    width:100%;
    height:0;
    /* 选项下方颜色配置 */
    background:#e9608d;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.2s ease-out;

}
/*li下面的弹出效果*/
.JMMenu .JMItem .JMLink:hover::before,
.JMMenu .JMItem .JMLink.JMActive::before{
    color: #fff;
    /* 与上方配置一样 */
    background: #e9608d;
    height:8px;
}
/*
 * 	登陆部分
 */
.JMUserMenu{
    display: inline-block;
	  height: 100%;
    line-height: 50px;
}
.JMUserMenu .JMItem{
	margin-right:10px;
  vertical-align: middle;
}
.JMUserMenu .JMItem .JMLink{
    cursor: pointer;
    line-height: 50px;
    vertical-align: middle;
    display: block;
    color: #6d6d6d;
    padding: 0px 0px 0px 10px;
}
/* [ gansiqu ] 样式*/
.JM20C7BE{
    color: #fff!important;
}
/*登陆按钮样式*/
.JMUserMenu .JMItem .JMLink.JMIconUser{
  width: 50px;
  height: 50px;
  border-left:#fff 1px solid;
  background-size:36%;
}
.JMIconUser{
	background: url(./assets/scrollImg1.png)center center no-repeat;
  background-size: 100%;
}

/*footer*/
#JMFooter{
	height: 80px;
  background: #1e1a13;
  color: #fff;
  text-align: center;
  line-height: 80px;
}
</style>
