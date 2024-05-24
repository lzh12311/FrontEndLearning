<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 这里也要写成cartProducts -->
    <el-table
      :data="[]"
      style="width: 100%"
    >
      <el-table-column
        width="55">
        <template v-slot:header>
          <!-- 这里绑定一个v-model，计算属性 -->
          <el-checkbox size="mini" v-model="checkedAll">
          </el-checkbox>
        </template>
        <template v-slot="scope">
          <el-checkbox
            size="mini"
            :value="scope.row.isChecked"
          >
          </el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
        <!-- 这里先定义一个插槽，绑定value是count，定义一个改变的change方法，将updateProduct传入两个参数，一个是id，一个是当前input的值$event -->
        <template v-slot="scope">
          <el-input-number :value="scope.row.count" size="mini"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="小计">
      </el-table-column>
      <el-table-column
        label="操作">
        <!-- 定义一个插槽，删除按钮绑定事件，传入商品id -->
        <template v-slot="scope">
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <p>已选 <span>0</span> 件商品，总价：<span>0</span></p>
      <el-button type="danger">结算</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {},
  methods: {}
}
</script>

<style></style>
