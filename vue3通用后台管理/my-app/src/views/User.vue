<script setup>
import * as Vue from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

const tableData = Vue.ref(null);

const tableLabel = Vue.ref([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sex",
    label: "性别",
  },
  {
    prop: "birth",
    label: "出生日期",
    width: 200,
  },
  {
    prop: "addr",
    label: "地址",
    width: 400,
  },
]);

const { proxy } = Vue.getCurrentInstance();
const inputData = Vue.ref(null);
const config = Vue.reactive({
  name: "",
  total: 0,
  page: 1,
});

const getUserList = async (config) => {
  const data = await proxy.$api.getUserData(config);
  tableData.value = data.list.map((item) => {
    return {
      ...item,
      sex: item.sex === 1 ? "male" : "female",
    };
  });
  config.total = data.count;
  console.log(config);
};

const handleChange = (page) => {
  config.page = page;
  getUserList(config);
};

const deleteUser = async (data) => {
  const result = await proxy.$api.deleteUser(data);
  console.log(result);
  getUserList(config);

  //   console.log(result);
  //   ElMessageBox.confirm("你确定要删除吗?").then(async () => {
  //     const data1 = await proxy.$api.deleteUser({ id: data.id });
  //     console.log(data1);
  //     ElMessage({
  //       showClose: true,
  //       message: "删除成功",
  //       type: "success",
  //     });
  //     getUserList(config);
  //   });
};

Vue.onMounted(() => {
  getUserList(config);
});
</script>

<template>
  <div class="user-container">
    <div class="form">
      <el-button type="primary">新增</el-button>
      <el-form :inline="true">
        <el-form-item label="活动名称">
          <el-input placeholder="请选择活动区域" v-model="inputData"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-button type="primary" class="serach-button">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="table">
      <el-table class="table-user" :data="tableData" style="width: 100%">
        <el-table-column
          v-for="item in tableLabel"
          :key="item.prop"
          :prop="item.prop"
          :width="item.width ? item.width : 125"
          :label="item.label"
        >
        </el-table-column
        >`
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #="scope">
            <el-button
              type="primary"
              size="small"
              @click="deleteUser(scope.row)"
            >
              edit
            </el-button>
            <el-button
              type="primary"
              size="small"
              @click="deleteUser(scope.row)"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pager"
        background
        layout="prev, pager, next"
        size="small"
        :total="config.total"
        @current-change="handleChange"
      >
      </el-pagination>
    </div>
  </div>
</template>


<style lang="less" scoped>
.form {
  display: flex;
  justify-content: space-between;
}
.table {
  position: relative;
  .table-user {
    height: 500px;
  }
  .pager {
    position: absolute;
    bottom: 10px;
    right: 0px;
  }
}
</style>