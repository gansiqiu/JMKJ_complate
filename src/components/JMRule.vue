<template>
  <div class="JMRule">
    <ul class="JMRuleTip" id="JMRuleTip">
      <li class="JMItem" v-for="(item, index) in itemList">
          <a :class="{ JMLink: item.isJMLink, JMActive:item.isJMActive }" @click="change(index)">
              {{item.title}}
          </a>
      </li>
    </ul>
    <div class="JMRuleContent">
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
            {isJMLink:true, isJMActive:true, title:"大赛简介"},
            {isJMLink:true, isJMActive:false, title:"大赛主题"},
            {isJMLink:true, isJMActive:false, title:"参赛类别"},
            {isJMLink:true, isJMActive:false, title:"本届大赛特点"},
            {isJMLink:true, isJMActive:false, title:"大赛组织"},
            {isJMLink:true, isJMActive:false, title:"赛制日程"},
            {isJMLink:true, isJMActive:false, title:"奖项设置"},
            {isJMLink:true, isJMActive:false, title:"联系方式"}
          ]
        }
      },
    methods:{
        change(n){
          this.itemList[this.flag].isJMActive = false;
          this.itemList[n].isJMActive = true;
          this.flag=n;
          this.urlBox = this.$route.path;
          console.log(n);
          this.$router.push({
              path: "../ruleDetail/"+n
          });
        }
    },
    created(){
      this.$router.push({
          path: "../ruleDetail/"+0
      });
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
.JMRule{
    max-width: 1280px;
    margin: 0 auto;
}
/*右侧锚点*/
.JMRuleTip{
    position: fixed;
    left: 25%;
    top: 180px;
    /* border-left: 1px solid #6d6d6d; */
    padding: 30px 0px;
    text-align: right;
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
    color: #FFDF00;
}
.JMRuleTip .JMItem .JMLink.JMActive:before{
    border:1px solid #FFDF00;
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
.JMRuleContent{
    width: 50%;
margin-left: 30%;
margin-top: 60px;
min-height: 755px;
}
</style>
