<template>
    <div class="JMLogin">

      <!-- <div>
          <a href="" class="btn" style="color:white;font-size:14px;margin-top:15px;margin-right:15px;float:right">关闭</a>
      </div>
      <form class="form-horizontal text-center">
        <h1 class="appTitle">系统登录</h1>
        <div class="form-group">
            <div class="col-sm-10">
                <input v-validate="'required|email'" type="email" class="form-control ctrlInput icon1" placeholder="邮箱">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-10">
                <input type="password" class="form-control ctrlInput icon2" placeholder="密码">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="ctrlBtn btn btn-primary">登录</button>
                <label class="error tCenter">${error}</label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="ctrlBtn btn btn-default" style="float: left">注册</button>
            <button type="submit" class="ctrlBtn btn btn-default" style="float: right">忘记密码</button>
            </div>
        </div>
      </form> -->
        <input type="email" name="email" placeholder="您的邮箱" v-validate="'required|email'">
        <span v-show="errors.has('email')">{{errors.first('email')}}</span>
    </div>
</template>

<script>
export default {
  name: 'JMLogin',
  data() {
    return {

    }
  }
};
</script>

<style>
form {
  width: 20%;
  height: 400px;
  margin: 60px auto;
  padding-top: 40px;
}

form div {
  margin-top: 20px;
}

.JMLogin {
  max-width: 1280px;
  margin: 40px auto;
  background: gray;
}
</style>
