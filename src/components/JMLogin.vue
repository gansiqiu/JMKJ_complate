<template>
    <div class="JMLogin">

      <div>
          <a class="btn btn-danger" style="color:white;font-size:14px;margin-right:15px;float:right">关闭</a>
      </div>
      <form class="form-horizontal text-center">
        <h1 class="appTitle">系统登录</h1>
        <div class="form-group">
            <div class="col-sm-10">
                <p :class="{ 'control': true }">
                    <input class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="邮箱">
                    <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-10">
                <p :class="{ 'control': true }">
                    <input class="form-control" v-validate="'required|password'" :class="{'input': true, 'is-danger': errors.has('password') }" name="password" type="text" placeholder="密码">
                    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                </p>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="ctrlBtn btn btn-primary">登录</button>
                <label class="error tCenter">{{error}}</label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="ctrlBtn btn btn-default" style="float: left;margin-left:20px;">注册</button>
            <button type="submit" class="ctrlBtn btn btn-default" style="float: right;margin-right:20px;">忘记密码</button>
            </div>
        </div>
      </form>
    </div>
</template>

<script>
//  成功的语句
import Vue from "vue";
import VeeValidate, { Validator } from 'vee-validate';
import messages from './../../node_modules/vee-validate/dist/locale/zh_CN';
import en from './../../node_modules/vee-validate/dist/locale/en';
Validator.updateDictionary({
    zh_CN: {
        messages
    }
});
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VeeValidate,config);

export default {
  name: 'JMLogin',
  data() {
    return {

    }
  }
};
</script>

<style>
.JMLogin {
  max-width: 1280px;
  margin: 20px auto;
}
form {
  width: 25%;
  height: 400px;
  margin: 60px auto;
  padding-top: 40px;
  /* background: gray; */
}
.form-group span{
    position: absolute;
    margin-left: 10px;
}

form div {
  margin-top: 20px;
}
</style>
