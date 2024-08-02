<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card>
        <div class="user">
          <img src="../assets/images/user.png" alt="" />
          <p>Admin</p>
          <p>超级管理员</p>
        </div>
        <div class="user-info">
          <p>
            Address :
            <span>Australian </span>
          </p>
          <p>
            Last time Login :
            <span> 2024-04 </span>
          </p>
        </div>
      </el-card>

      <el-table :data="tableData">
        <el-table-column
          v-for="(val, key) in tableLabel"
          :key="key"
          :label="val"
          :prop="key"
        >
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

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

const { proxy } = Vue.getCurrentInstance();

const getTableData = async () => {
  const data = await proxy.$api.getTableData();
  tableData.value = data.tableData;
  console.log(data);
};

const getCountData = async () => {
  const data = await proxy.$api.getCountData();
  courtData.value = data.tableData;
  console.log(data);
};

Vue.onMounted(() => {
  getTableData();
  getCountData();
});
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 8px;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
  }
}
.user-info {
  margin-top: 12px;
  p {
    color: grey;
    font-size: 16px;
    line-height: 30px;
    span {
      color: blue;
      font-size: 16px;
    }
  }
}
</style>