<template>
  <div class="purchase-handle-records">
    <!-- 操作日志 -->
    <el-collapse @change="changeActive" v-model="active" accordion :class="{'only-show': onlyShow}">
      <el-collapse-item name="1">
        <template slot="title" v-if="!onlyShow">
          <i class="el-icon-plus" v-if="!isUnfold"></i>
          <i class="el-icon-minus" v-else></i>
          <span class="records-title">操作日志</span>
        </template>
        <el-table :data="records" style="width: 100%" size="mini" v-loading="loading">
          <el-table-column prop="operater" label="操作人" width="200"></el-table-column>
          <el-table-column prop="operateTime" label="操作时间" width="200">
            <template slot-scope="scope">{{ scope.row.operateTime | formatTime }}</template>
          </el-table-column>
          <el-table-column prop="operateType" label="操作类型">
            <template slot-scope="scope">{{ scope.row.operateType }}</template>
          </el-table-column>
          <el-table-column prop="name" label="操作内容">
            <template slot-scope="scope">
              <div v-if="scope.row.displayType">{{scope.row.operateContent}}</div>
              <el-button v-else @click="handleDetails(scope.row)" type="text">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <!-- 日志详情弹窗 -->
    <el-dialog
      title="查看操作详情"
      class="handle-details"
      :visible.sync="handleDetailsVisible"
      width="800px"
      destroy-on-close
      :close-on-click-modal="false"
    >
      <div>
        <div class="details-content">
          <div class="handle-before">
            <div class="details-title">操作前内容</div>
            <div class="content">
              <div class="goods" v-html="before" v-if="before"></div>
              <div class="no-data" v-else></div>
            </div>
          </div>
          <div class="handle-after">
            <div class="details-title">操作后内容</div>
            <div class="content">
              <div class="goods" v-html="after" v-if="after"></div>
              <div class="no-data" v-else></div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDetailsVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import DAYJS from 'dayjs'

export default {
  name: 'fc-records',
  props: ['records', 'onlyShow', 'loading'],
  data() {
    return {
      isUnfold: false,
      tableData: [],
      handleDetailsVisible: false,
      before: '',
      after: '',
      active: this.onlyShow ? '1' : ''
    }
  },
  methods: {
    // 折叠板
    changeActive(name) {
      this.isUnfold = name.includes('1')
      this.$emit('clickRecords', this.isUnfold)
    },
    // 收起折叠板
    fold() {
      this.active = ''
      this.isUnfold = false
    },
    // 操作记录详情
    handleDetails(row) {
      // 操作前后内容
      let { operateBeforeContent, operateContent } = row
      this.before = this.handleStr(operateBeforeContent)
      this.after = this.handleStr(operateContent)
      this.handleDetailsVisible = true
    },
    handleStr(str) {
      if (!str) {
        return
      }
      // 处理换行&&&
      return str.replace(/&&&/g, '<br/>')
    }
  },
  filters: {
    formatTime(val) {
      return val && DAYJS(val).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style lang="less">
.purchase-handle-records {
  @titleHeight: 40px;
  .records-title {
    font-size: 14px;
    font-weight: 900;
    vertical-align: middle;
  }
  .el-icon-plus,
  .el-icon-minus {
    border: 1px solid #000;
    margin-right: 5px;
  }
  .el-icon-arrow-right {
    display: none;
  }
  .handle-details {
    .details-content {
      color: #000;
      overflow: hidden;
      border: 1px solid #EBEEF5;
      display: flex;
      .handle-before,
      .handle-after {
        width: 50%;
        .content {
          position: relative;
          padding: 15px 0;
          height: calc(100% - @titleHeight);
          .no-data {
            height: 1px;
            width: 30px;
            background-color: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      .handle-after {
        border-left: 1px solid #EBEEF5;
      }
      .details-title {
        border-bottom: 1px solid #EBEEF5;
        background: #F5F7FA;
        text-align: left;
        padding: 0 10px;
        height: @titleHeight;
        line-height: @titleHeight;
        font-weight: 600;
      }
      .info {
        padding: 15px 0;
      }
      .goods {
        padding-left: 10px;
      }
    }
  }
  .el-collapse,
  .el-collapse-item__header,
  .el-collapse-item__wrap {
    border: 0;
  }
  .el-collapse-item__header {
    height: auto;
    line-height: 1;
    margin-bottom: 16px;
  }
  .el-collapse.only-show /deep/ {
    .el-collapse-item__header {
      display: none;
    }
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
}
</style>
