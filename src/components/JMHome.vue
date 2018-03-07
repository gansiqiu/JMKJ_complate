<template>
  <div class="JMHome">
    <div id="JMItem">
        <img src="../assets/topShow.jpg">
        <div id="JMInfo">
            <span id="JMTitle_1">长沙-媒体艺术之都</span><br>
            <span id="JMTitle_2">视觉形象设计大赛</span>
        </div>
        <div class="photosDiv" style="position:relative;top:-110px;left:100px;">
          <div class="" style="width:44%;height:225px;background:#ECC95D;">
            <ul style="width:100%;height:90px;">
              <li style="width:32;margin-left:15px;text-align:center">
                <span style="font-size:28px;color:#4A4A4A;">Changsha</span><br>
                <span style="font-size:20px;color:#4A4A4A">Media Arts</span>
              </li>
                <li style="width:30%;height:90px;background:yellow;margin-top:20px;margin-left:3px;">
                  <img src="../assets/logo0.png" alt="">
                </li>
              <li style="width:30%;height:90px;background:yellow;margin-top:20px;margin-left:3px;">
                <img src="../assets/logo0.png" alt=""></li>
            </ul>
            <ul style="width:100%;height:90px;margin-top:7px">
              <li style="width:32%;height:90px;background:yellow;margin-top:20px;margin-left:15px;">
                <img src="../assets/logo0.png" alt=""></li>
              <li style="width:30%;height:90px;background:yellow;margin-top:20px;margin-left:3px;">
              <img src="../assets/logo0.png" alt=""></li>
              <li style="width:30%;height:90px;background:yellow;margin-top:20px;margin-left:3px;">
              <img src="../assets/logo0.png" alt=""></li>
            </ul>
          </div>
        </div>
    </div>

    <!-- 大赛目标 -->
    <div class="JMdasaimubiao" style="margin-top:-65px;">
      <div style="width:100%; height:130px;background:#4A4A4A;"></div>
      <!-- 大赛目标 -->
      <div class="JMDasaiBox1" style="width:85%; height:265px;background:#ECC95D;margin:-80px auto 10px;padding-top:15px;">
          <h1 class="JMTitle">大赛目标</h1>
          <p class="JMDasaiBox1Content1">集思广益，借助群众智慧搜集、整理、发掘反映长沙城市文化的媒体元素和艺术表现形式，为长沙城市文化积累IP资产；</p>
          <p class="JMDasaiBox1Content2">以大赛为契机，通过线上、线下各类媒体渠道的宣传推广，提升公众对长沙城市文化与湖湘历史文化的关注度，扩大长沙“媒体艺术之都”这张城市名片的影响力；</p>
          <p class="JMDasaiBox1Content3">利用大赛发掘优秀的媒体艺术人才和设计团队，为长沙“媒体艺术之都”视觉形象后续的落地工作及实施推广储备人才队伍。</p>
      </div>
      <div style="width:500px; height:280px;background:blue;margin-left:9%;margin-top:-320px;">
      </div>

      <div class="JMDasaiBox2" style="width:70%; height:285px;background:#ECC95D;margin-top:80px;margin-left:22.5%;">
        <div>
          <img src="../assets/logo0.png" style="width:135px;height:90px;position:relative;display:inline-block;margin-left:25%;margin-top:10px;">
          <p class="JMDasaiBox2Content1" style="width:38%;height:90px;position:absolute;display:inline-block; margin-left:3%;text-indent:2em;color: #635D4D;">2017年11月1日，长沙正式加入联合国教科文组织“创意城市网络”，成为我国首座获评世界“媒体艺术之都”称号的城市。“创意城市网络”致力于发挥全球创意产业对城市可持续发展的推动作用，分为媒体艺术、音乐、文学、美食、电影、设计、手工艺与民间艺术7个类别。</p>
        </div>
        <div>
          <img src="../assets/logo0.png" style="width:135px;height:90px;position:relative;display:inline-block;margin-left:25%;margin-top:30px;">
          <p class="JMDasaiBox2Content2" style="width:38%;height:90px;position:absolute;display:inline-block; margin-left:3%;text-indent:2em;color: #635D4D;">中国联合国教科文组织全国委员会秘书长杜越评价说：“长沙作为丝绸之路上的节点城市，拥有生动丰富的文化遗产和创新创意，发展文化创意将大有可为”。入选“创意城市网络”，获评“媒体艺术之都”，意味着长沙在自主创新、文化创意、传媒艺术等方面的努力，得到了国际社会和文化创意节的高度评价与认可。未来，长沙将进一步做优文创平台，做大文化产业，形成知名文化品牌，加快建设具有国际品质和湖湘文化特色的历史文化名城，将“媒体艺术之都”这张金色名片打造得更加绚丽。</p>
        </div>
        <img src="../assets/logo0.png" style="width:350px;height:250px;position:relative;top:-220px;left:-300px;" alt="">
      </div>
    </div>
    <div style="width: 80%;height:550px; background-color: #4A4A4A; margin: 40px auto;">
      <section style="color: #ECC95D; font-size: 24pt; padding-top: 30px; margin-left: 50px">NEWS | 新闻动态</section>
      <div class="">
        <ul id="JMList" style="height:220px;text-align:center;padding-top:10px;">
          <li id="JMItem" style="width:40%;margin-left:10px;">
            <router-link id="JMLink" :to="{ name: 'news', params: {} }">
                <img id="JMThumb" src="../assets/homePageNew1.jpg">
                <h3 id="JMTitle">湖南省老年服务产品设计大赛</h3>
                <span id="JMDate">2019-09-09</span>
            </router-link>
	        </li>
	        <li id="JMItem" style="width:40%;margin-left:10px;">
            <router-link id="JMLink" :to="{ name: 'news', params: {} }">
                <img id="JMThumb" src="../assets/homePageNew1.jpg">
                <h3 id="JMTitle">湖南省老年服务产品设计大赛</h3>
                <span id="JMDate">2019-09-09</span>
            </router-link>
	        </li>
        </ul>
      </div>
		</div>
    <div id="JMTCenter">
        <router-link id="JMBtn" style="margin: 40px auto;" :to="{ name: 'news'}">查看更多 》</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JMHome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
/* 大图展示 */
.JMHome{
	overflow: hidden;
  position: relative;
}
.JMHome #JMItem{
    position: relative;
}
.JMHome #JMItem img{
	width: 100%;
  height: auto;
}
.JMHome #JMItem #JMInfo{
    position: absolute;
    width: 366px;
    height:80px;
    top: 80px;
    left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    transform: translateY(-50%);
    background-color: #312745;
    opacity: 0.9;
}
.JMHome #JMItem #JMInfo #JMTitle_1{
    color: #ECC95D;
    font-size: 28px;
    margin-left: 30px;
}
.JMHome #JMItem #JMInfo #JMTitle_2{
    color: #fff;
    font-size: 28px;
    margin-left: 120px;
}

/* 大赛目标 */
.JMHome .JMdasaimubiao .JMDasaiBox1 .JMTitle{
  color: #4A4A4A;
  width: 40%;
  margin-left: 55%;
  text-align: left;

}
.JMHome .JMdasaimubiao .JMDasaiBox1 .JMDasaiBox1Content1,
.JMHome .JMdasaimubiao .JMDasaiBox1 .JMDasaiBox1Content2,
.JMHome .JMdasaimubiao .JMDasaiBox1 .JMDasaiBox1Content3{
  color: #635D4D;
  width: 40%;
  margin-left: 55%;
  text-align: left;
  text-indent:2em;
}
#JMList{
	font-size: 0px;
    padding: 50px;
}
#JMList #JMItem{
    width: 31%;
    margin: 1.1%;
}
#JMList #JMItem #JMTitle{
    margin: 20px 0px 10px 0px;
    font-size: 18px;
    color: #6d6d6d;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
#JMList #JMItem #JMDate{
    color: #6d6d6d;
    font-size: 14px;
}
#JMTCenter{
    text-align: center!important;
}
#JMBtn{
	   width: 150px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    background: #ECC95D;
    font-size: 20px;
    text-align: center;
    color: #fff;
    border: none;
}
</style>
