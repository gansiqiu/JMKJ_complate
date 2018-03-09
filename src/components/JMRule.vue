<template>
  <div class="JMRule">
    <ul class="JMRuleTip" id="JMRuleTip">
      <li class="JMItem" v-for="(item, index) in itemList">
          <a :class="{ JMLink: item.isJMLink, JMActive:item.isJMActive }" @click="change(index)">
              {{item.title}}
          </a>
      </li>
    </ul>
    <div class="" style="width:60%;height:1000px;background:gray;">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name:"JMRule",
  data(){
    return{
      flag:0,
      itemList:[
        {isJMLink:true, isJMActive:true, title:"大赛介绍", href:"#JMSection1"},
        {isJMLink:true, isJMActive:false, title:"大赛目的", href:"#JMSection2"},
        {isJMLink:true, isJMActive:false, title:"大赛流程", href:"#JMSection3"},
        {isJMLink:true, isJMActive:false, title:"作品征集", href:"#JMSection4"},
        {isJMLink:true, isJMActive:false, title:"奖项设置", href:"#JMSection5"},
        {isJMLink:true, isJMActive:false, title:"评选评审", href:"#JMSection6"},
        {isJMLink:true, isJMActive:false, title:"承诺、保证与权利约定", href:"#JMSection7"}
      ]
    }
  },
  methods:{
    change(n){
      this.itemList[this.flag].isJMActive = false;
      this.itemList[n].isJMActive = true;
      this.flag=n;
      this.$router.push({path: "../rule/ruleDetial"});
    }
  }
}
</script>

<style>
body{
    margin: 0px auto;
    padding: 0px;
    font-size: 14px;
    font-family: "Arail","Microsoft YaHei","Heiti";
    max-width: 1280px;
    padding-top:160px;
    display: flex;
    min-height: 83vh;
    flex-direction: column;
}
ul{
    margin: 0px;
    padding: 0px;
}
li{
    list-style: none;
    display: inline-block;
}
a{
    text-decoration: none;
}
input:focus{
    outline: none;
}
img{
    width: 100%;
    height: auto;
    display: block;
    border: none;
}

/*右侧锚点*/
.JMRuleTip{
    position: fixed;
    right: 10%;
    top:180px;
    /* border-left:1px solid #6d6d6d; */
    padding: 30px 0px;
}

.JMRuleTip .JMItem{
    display: block;
    list-style: square;
    margin: 40px 0px;
    padding-left: 30px;
    position: relative;
    cursor: pointer;
    bottom: 20px;
}
.JMRuleTip .JMItem .JMLink{
    color: #6d6d6d;
}
.JMRuleTip .JMItem .JMLink.JMActive{
    color: #e9608d;
}
.JMRuleTip .JMItem .JMLink.JMActive:before{
    border:1px solid #e9608d;
}

/*正文文本*/
.JMRuleDetail{
    margin: 60px 0px;
}
.JMRuleDetail .JMSection{
    padding: 40px 30% 40px 60px;
}
.JMRuleDetail .JMTitle{

}
.JMRuleDetail .JMTitle .JMNum{
    font-size: 45px;
    color: #e9608d;
    vertical-align: top;
    line-height: 45px;
    margin-right: 20px;
}
.JMRuleDetail .JMTitle .JMText{
    font-size: 24px;
    color: #bb8229;
    position: relative;
}
.JMRuleDetail .JMTitle .JMText:before{
    content: "";
    position: absolute;
    bottom:-10px;
    left:0px;
    width: 50px;
    border-bottom: 2px solid #bb8229;
}
.JMRuleDetail .JMContent{
    margin-left:80px;
    font-size: 14px;
    line-height: 1.5em;
}
.JMRuleDetail .JMContent .JMText{
    color:#656564;
}
.JMRuleDetail .JMContent .JMSubTitle{
    border-left:2px solid #eace98;
    color: #bb8229;
    font-weight: bold;
    padding-left: 30px;
    font-size: 14px;
    margin: 20px 0px;
}
.JMRuleDetail .JMContent .JMSubTitle+.JMText{
    padding-left: 30px;
}
.JMRuleDetail #JMSection2,
.JMRuleDetail #JMSection4,
.JMRuleDetail #JMSection6,
.JMRuleDetail #JMSection8{
	background: #F4F4F4;
}
</style>
