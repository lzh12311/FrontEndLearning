<script setup>
import * as Vue from "vue";
const tableData = Vue.ref([
  {
    name: "Java",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  },
  {
    name: "Python",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  },
]);

const tableLabel = Vue.ref({
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
});

const courtData = Vue.ref([]);
const chartData = Vue.ref([]);

const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;
};
const { proxy } = Vue.getCurrentInstance();

const getTableData = async () => {
  const data = await proxy.$api.getTableData();
  tableData.value = data.tableData;
  console.log(data);
};

const getCountData = async () => {
  const data = await proxy.$api.getCountData();
  courtData.value = data;
  console.log(data);
};

const getChartData = async () => {
  const data = await proxy.$api.getChartData();
  chartData.value = data;
  console.log(data);
};

Vue.onMounted(() => {
  getTableData();
  getCountData();
  getChartData();
});
</script>

<template>
  <el-row :gutter="20" class="container">
    <el-col :span="8" style="margin-top: 20px">
      <el-card>
        <div class="user-info">
          <img :src="getImageUrl('user')" alt="user-pic" class="user-photo" />
          <div class="user-name-role">
            <p style="font-size: 35px; color: black; margin-bottom: 12px">
              Admin
            </p>
            <p style="color: grey; line-height: 40px">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <div class="login-time">
            <p>上次登录时间：</p>
            <p style="margin-left: 40px">2024-06-30</p>
          </div>
          <div class="login-time">
            <p>上次登录时间：</p>
            <p style="margin-left: 40px">2024-06-30</p>
          </div>
        </div>
      </el-card>
      <el-table :data="tableData" class="user-table">
        <el-table-column
          v-for="(val, key) in tableLabel"
          :key="key"
          :prop="key"
          :label="val"
        />
      </el-table>
    </el-col>
    <el-col :span="16">
      <div class="user-card">
        <el-card
          v-for="item in courtData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <div class="card-inside">
            <component
              :is="item.icon"
              class="card-icon"
              :style="{ background: item.color }"
            ></component>
            <div class="card-number">
              <p style="font-size: 32px; margin-bottom: 12px">
                $ {{ item.value }}
              </p>
              <p style="line-height: 15px; color: #666">$ {{ item.name }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid grey;
    .user-photo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-name-role {
      display: flex;
      flex-direction: column;
    }
  }
  .login-info {
    .login-time {
      display: flex;
      margin-top: 24px;
      p {
        line-height: 30px;
        font-size: 14px;
        color: #999;
        span {
          color: #666;
          margin-left: 60px;
        }
      }
    }
  }
  .user-table {
    margin-top: 24px;
  }
  .user-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .card-icon {
      width: 80px;
      height: 80px;
      color: #fff;
    }
    .card-inside {
      display: flex;
      align-items: center;
      .card-number {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        line-height: 30px;
      }
    }
  }
}
</style>
