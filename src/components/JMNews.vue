<style media="screen">
ul {
	margin: 0px;
	padding: 0px;
}

li {
	list-style: none;
	display: inline-block;
}
a {
    text-decoration: none;
    color: #A7A9AC;
}
a:link {text-decoration: none}
.JMNews{

    	margin: 0 auto;
    	max-width: 1280px;
}
.JMPort1{
    width: 100%;
    height: 80px;
    background: #F7F8F8;
    margin: 40px auto;
    padding:40px 0px 50px 20px;
}
.JMPort1Row1, .JMPort1Row2{
    margin: 20px auto;
}
.JMPort1Row1 .txtGreen{
    color: #00A67F;
}

.JMPort1 label{
    display: inline-block;
}
.JMPort1Row2 a.active,
.JMPort1Row2 a:hover{
    color: #ffdf00;
}

.JMPort1Row2 .sortPanel,
.JMPort1Row2 .searchTxt{
    margin-left: 20px;
}

/* JMPort2 */
.JMPort2{
    width: 100%;
    height: 1000px;
    padding: 20px 10px;
    background: #F7F8F8;
}
.JMPort2 .JMitem{
    margin: 20px 30px;
    width: 20%;
    height: 300px;
    border: 2px solid #fff;
    border-radius: 10px;
    background: #fff;
}
.JMPort2 .JMitem:hover{
    background: #FFDF00;
    border: 2px solid #FFDF00;
}
.JMPort2 .JMitem .JMthumb{
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 160px;
}
.JMPort2 .JMitem .JMcompanyLogo{
    width: 40px;
    height: 40px;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
}
.JMPort2 .JMitem .JMCompanyBox .JMcompany{
    margin-top:5px;
}
.JMPort2 .JMitem .JMCompanyBox .JMcompany span{
    margin-left: 40px;
}
.JMPort2 .JMitem .JMCompanyBox .JMcompany .companyName,
.JMPort2 .JMitem .JMCompanyBox .JMdesign .designType{
    color:#787878;
}
.JMPort2 .JMitem .JMCompanyBox .JMdesign{
    margin-top:5px;
}
.JMPort2 .JMitem .JMCompanyBox .JMdesign span{
    margin-left: 40px;
}
.JMPort2 .JMitem .JMCompanyBox .JMcompany .componyMoney,
.JMPort2 .JMitem .JMCompanyBox .JMdesign .designName{
    color:#00A67F;
}

</style>

<template>
<div class="JMNews">
        <div class="JMPort1">
            <div class="JMPort1Row1">
                <span>请参照<a href="#" id="guide" class="txtGreen">新手上路</a>进行作品上传。</span>
            </div>
            <div class="JMPort1Row2">
                <label class="txtGray">类别：</label>
                <a href="#" class="category active" data-category="">全部</a>
                &nbsp;|&nbsp;
                <a href="#" class="category" data-category="1">A1 数字化制造与设计创新</a>
                &nbsp;|&nbsp;
                <a href="#" class="category" data-category="2">A2 智能产品与服务设计创新</a>
                &nbsp;|&nbsp;
                <a href="#" class="category" data-category="3">B 社会创新</a>

                <span class="sortPanel">
                    <label class="txtGray">排序：</label>
                    <a href="#" class="DES active" data-order-by="jiangjin" id="orderByMoney">奖金</a>
                </span>
                <div class="input-grounp" style="display:inline-block">
                    <input type="text" id="searchTitle" class="searchTxt" placeholder="搜索标题">
                </div>
            </div>
        </div>
        <div class="JMPort2">
            <ul class="JMitemList">
                <li class="JMitem" v-for="productionItem in productionList">
                    <img src="../assets/productionImg1.png" class="JMthumb">
                    <a href="#">
                        <div class="JMCompanyBox">
                            <img src="../assets/productionImg2.png" class="JMcompanyLogo">
                            <div class="JMcompany">
                                <span class="companyName">{{productionItem.companyName}}</span>
                                <span class="componyMoney">{{productionItem.componyMoney}}</span>
                            </div>
                            <div class="JMdesign">
                                <span class="designName">{{productionItem.designName}}</span>
                                <span class="designType">{{productionItem.designType}}</span>
                            </div>
                        </div>
                    </a>
                </li>

            </ul>
        </div>

</div>
</template>

<script>
export default {
    name: 'JMNews',
    data () {
      return {
            productionList:[
                {companyName:"公司名字", componyMoney:"30000", designName:"设计名称", designType:"A2"},
                {companyName:"公司名字", componyMoney:"30000", designName:"设计名称", designType:"A2"},
                {companyName:"公司名字", componyMoney:"30000", designName:"设计名称", designType:"A2"},
                {companyName:"公司名字", componyMoney:"30000", designName:"设计名称", designType:"A2"},
                {companyName:"公司名字", componyMoney:"30000", designName:"设计名称", designType:"A2"}
            ]
      }
  }

}
</script>
