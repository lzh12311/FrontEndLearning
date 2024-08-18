<template>
  <div>
    <span class="base-icon" :class="tagClass">
      {{ returnNormalTags('goods', productSource) }}
    </span>
    <span>{{ row.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'type',
  props: ['row', 'index'],
  data () {
    return {
      productSource: this.row.productSource
    }
  },
  computed: {
    tagClass () {
      return this.productSource === 'jv' ? 'fuchuang-icon' : 'waicai-icon'
    }
  },
  methods: {
    returnNormalTags (type, params) {
      if (type === 'goods') {
        return params === 'jv' ? '孚创' : '外采'
      } else {
        return params === 1 ? '已上线' : '未上线'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.base-icon {
  display: inline-block;
  text-align: center;
  font-size: 12px;
  margin-right: 3px;
  padding: 0 8px;
  border-radius: 2px;
}
.fuchuang-icon {
  color: #fff;
  background: #1989fa;
}

.waicai-icon {
  color: #1989fa;
  background: #fff;
  border: 1px solid #1f88ee;
}
</style>
