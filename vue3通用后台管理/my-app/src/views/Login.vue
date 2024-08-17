<template>
  <div class="login-container">
    <el-form :model="loginForm" class="login-form">
      <h1>Login</h1>
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入Account" />
      </el-form-item>

      <el-form-item prop="pwd">
        <el-input v-model="loginForm.password" placeholder="请输入Password" />
      </el-form-item>
      <el-form-item>
        <div class="button-div">
          <el-button type="primary" @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import * as Vue from "vue";

const loginForm = Vue.reactive({
  name: "",
  password: "",
});
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/background.png");
  background-size: 100%;
  overflow: hidden;
}
.login-form {
  width: 600px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  margin: 400px auto;
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>