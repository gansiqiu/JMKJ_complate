
<style lang="css">

ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
}

a {
    text-decoration: none;
    color: #A7A9AC;
}
div, p{
    display: block;
}
.JMJudge{
    max-width: 1280px;
    min-height: 900px;
    margin: 40px auto;
    background: gray;
}
.judgeList {
    font-size: 0px;
    width: 70%;
    padding: 50px 0px;
    margin-left: 2.3%;
}
.judgeList .title:first-child {
    margin-top: 0px;
}
.judgeList .title{
    color: #00A67F;
    margin-bottom: 20px;
    margin-top: 50px;
    margin-left: 0.83%;
    font-size: 18px;
}
.judgeList li {
    width: 18%;
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 5px;
    vertical-align: top;
    margin: 0.83%;
}
.judgeList .thumb {
    font-size: 0px;
}
.judgeList .thumb img {
    width: 100%;
    border: none;
}
/*.judgeList .infoContainer {
    position: absolute;
    top: 100%;
    background: #ffdf00;
    color: #fff;
    width: 90%;
    height: 90%;
    padding: 5%;
    opacity: .9;
    border-radius: 5px;
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=90);
    -webkit-transition: all .4s ease-out;
    -moz-transition: all .4s ease-out;
    -ms-transition: all .4s ease-out;
    transition: all .4s ease-out;
}
 .judgeList .info {
    position: absolute;
    bottom: 10px;
    width: 90%;
}
.judgeList .info h4 {
    font-size: 12px;
    font-weight: normal;
    color: #fff;
}
.judgeList .info p {
    white-space: normal;
    font-size: 12px;
    line-height: 18px;
    max-height: 54px;
    overflow: hidden;
    color: #fff;
} */
</style>

<template lang="html">
    <div class="JMJudge">
        <ul class="judgeList">
            <h3 class="title">国际评委</h3>
            <li>
                <a class="judgeItem" href="http://www.lotusprize.com/2014/archives/140">
                    <div class="thumb">
                        <img src="http://www.lotusprize.com/2014/wp-content/uploads/sites/2/2014/03/Ralph-Wiegmann-500x500.jpg">
                    </div>
                    <div class="infoContainer">
                        <div class="info">
                            <h4>Ralph Wiegmann</h4>
                            <p>德国IF国际设计机构CEO，ICSID执委</p>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a class="judgeItem" href="http://www.lotusprize.com/2014/archives/140">
                    <div class="thumb">
                        <img src="http://www.lotusprize.com/2014/wp-content/uploads/sites/2/2014/03/Ralph-Wiegmann-500x500.jpg">
                    </div>
                    <div class="infoContainer">
                        <div class="info">
                            <h4>Ralph Wiegmann</h4>
                            <p>德国IF国际设计机构CEO，ICSID执委</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"JMJudge"
}
</script>
