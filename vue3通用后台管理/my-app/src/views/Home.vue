<script setup>
import * as Vue from "vue";
import * as echarts from "echarts";

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

const xOptions = Vue.reactive({
  // 图例文字颜色
  textStyle: {
    color: "#333",
  },
  legend: {},
  grid: {
    left: "20%",
  },
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series: [],
});

const pieOptions = Vue.reactive({
  tooltip: {
    trigger: "item",
  },
  legend: {},
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: [],
});

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
  const { orderData, userData, videoData } = await proxy.$api.getChartData();
  chartData.value = orderData;

  xOptions.xAxis.data = orderData.date;
  console.log(orderData);
  xOptions.series = Object.keys(orderData.data[0]).map((val) => {
    return {
      name: val,
      data: orderData.data.map((item) => item[val]),
      type: "line",
    };
  });
  const firstChart = echarts.init(proxy.$refs["echart-line"]);
  firstChart.setOption(xOptions);

  const secondChart = echarts.init(proxy.$refs["echart-bar"]);
  xOptions.xAxis.data = userData.map((item) => {
    return item.date;
  });

  xOptions.series = [
    {
      name: "新增用户",
      data: userData.map((item) => item.new),
      type: "bar",
    },
    {
      name: "活跃用户",
      data: userData.map((item) => item.active),
      type: "bar",
    },
  ];
  secondChart.setOption(xOptions);

  pieOptions.series = [
    {
      data: videoData.map((item) => {
        return {
          value: item.value,
          name: item.name,
        };
      }),
      type: "pie",
    },
  ];
  const pieChart = echarts.init(proxy.$refs["echart-pie"]);
  pieChart.setOption(pieOptions);

  const observe = Vue.ref(null);
  observe.value = new ResizeObserver((entry) => {
    firstChart.resize();
    secondChart.resize();
    pieChart.resize();
  });
  if (proxy.$refs["echart-line"]) {
    console.log(123);
    observe.value.observe(proxy.$refs["echart-line"]);
  }
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
      <el-card class="top-echart">
        <div ref="echart-line" style="height: 280px"></div>
      </el-card>
      <div class="barPieChart">
        <el-card class="bar-echart">
          <div ref="echart-bar" style="height: 280px"></div>
        </el-card>
        <el-card class="pie-echart">
          <div ref="echart-pie" style="height: 280px"></div>
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
  .barPieChart {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .el-card {
      width: 48%;
      height: 300px;
    }
  }
}
</style>
