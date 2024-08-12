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
    prop: "sexLable",
    label: "性别",
  },
  {
    prop: "birth",
    label: "出生日期",
    width: 300,
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
      sexLable: item.sex === 1 ? "male" : "female",
    };
  });
  config.total = data.count;
};

const handleChange = (page) => {
  config.page = page;
  getUserList(config);
};

const deleteUser = async (data) => {
  ElMessageBox.confirm("你确定要删除吗?").then(async () => {
    const data1 = await proxy.$api.deleteUser({ id: data.id });
    console.log(data1);
    ElMessage({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
    getUserList(config);
  });
};

const addUser = async (data) => {
  const data1 = await proxy.$api.addUser(data);

  getUserList(config);
};

Vue.onMounted(() => {
  getUserList(config);
});

const action = Vue.ref("add");
const formUser = Vue.reactive({
  sex: "1",
});
const rules = Vue.reactive({
  name: [{ required: true, message: "姓名是必填项", trigger: "blur" }],
  age: [
    { required: true, message: "年龄是必填项", trigger: "blur" },
    { type: "number", message: "年龄必须是数字" },
  ],
  sex: [{ required: true, message: "性别是必选项", trigger: "change" }],
  birth: [{ required: true, message: "出生日期是必选项" }],
  addr: [{ required: true, message: "地址是必填项" }],
});
const dialogVisible = Vue.ref(false);

//对话框右上角的关闭事件
const handleClose = () => {
  //获取到表单dom，执行resetFields重置表单
  proxy.$refs["userForm"].resetFields();
  //关闭对话框
  dialogVisible.value = false;
};

//对话框右下角的取消事件
const handleCancel = () => {
  proxy.$refs["userForm"].resetFields();
  dialogVisible.value = false;
};

const handleEdit = (val) => {
  action.value = "edit";
  dialogVisible.value = true;
  Vue.nextTick(() => {
    Object.assign(formUser, { ...val, sex: "" + val.sex });
  });
};

const handleAdd = () => {
  action.value = "add";
  dialogVisible.value = true;
};

const timeFormat = (time) => {
  var time = new Date(time);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  function format(date) {
    return date < 10 ? "0" + date : date;
  }
  return year + "-" + format(month) + "-" + format(day);
};

const onSubmit = () => {
  proxy.$refs["userForm"].validate(async (valid) => {
    if (valid) {
      formUser.birth = timeFormat(formUser.birth);
      if (action.value === "add") {
        const res = await proxy.$api.addUser(formUser);
        if (res) {
          dialogVisible.value = false;
          getUserList(config);
          proxy.$refs["userForm"].resetFields();
        }
      } else if (action.value === "edit") {
        const res = await proxy.$api.editUser(formUser);
        if (res) {
          dialogVisible.value = false;
          getUserList(config);
          proxy.$refs["userForm"].resetFields();
        }
      }
    } else {
    }
  });
};
</script>

<template>
  <div class="user-container">
    <el-dialog
      v-model="dialogVisible"
      :title="action == 'add' ? '新增用户' : '编辑用户'"
      width="35%"
      :before-close="handleClose"
    >
      <!--需要注意的是设置了:inline="true"，
		会对el-select的样式造成影响，我们通过给他设置一个class=select-clearn
		在css进行处理-->
      <el-form :inline="true" :model="formUser" :rules="rules" ref="userForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formUser.name" placeholder="请输入姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input
                v-model.number="formUser.age"
                placeholder="请输入年龄"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="select-clearn" label="性别" prop="sex">
              <el-select v-model="formUser.sex" placeholder="请选择">
                <el-option label="男" value="1" />
                <el-option label="女" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="birth">
              <el-date-picker
                v-model="formUser.birth"
                type="date"
                placeholder="请输入"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="地址" prop="addr">
            <el-input v-model="formUser.addr" placeholder="请输入地址" />
          </el-form-item>
        </el-row>
        <el-row style="justify-content: flex-end">
          <el-form-item>
            <el-button type="primary" @click="handleCancel">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>
    <div class="form">
      <el-button type="primary" @click="handleAdd">新增</el-button>
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
        />
        <el-table-column fixed="right" label="Operations" min-width="120">
          <template #="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.row)"
            >
              编辑
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
.select-clearn {
  display: flex;
}
</style>