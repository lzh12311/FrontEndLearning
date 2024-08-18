<template>
  <transition-group
    tag="ul"
    :class="[
      'c-upload-list',
      'c-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="c-list"
  >
    <li
      v-for="(file, index) in files"
      :class="['c-upload-list__item', 'is-' + file.status, listType]"
      :key="file.uid"
      tabindex="0"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <a href="javascript:void(0)" style="display:block" v-if="isImage" class="img-upload">
          <img
            class="c-upload-list__item-thumbnail"
            :src="getImage(file)" alt=""
            v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
            @click.stop="handleClick(file)"
          >
          <span class="icon-corner" v-if="!disabled && isImage && file.status !== 'uploading'" @click="handleRemoveClick(file)">X</span>
        </a>
        <a class="c-upload-list__item-name" v-if="isText" href="javascript:void(0)">
          <span @click.stop="handleClick(file)"><i class="iconfont iconfujian icon-attachment"></i>{{file.name}}</span>
          <span style="float: right">
            <!-- <i class="iconfont iconyanjing-liulan" @click.stop="handleClick(file)"></i> -->
            <i class="iconfont iconshanchu-lajitong" @click.stop="handleRemoveClick(file)" v-if="!disabled"></i>
            <!-- <i class="iconfont iconxiazai" @click.stop="handleRemoveClick(file)"></i> -->
          </span>
        </a>
        <el-progress
          v-if="file.status === 'uploading' && autoUpload"
          :type="isImage ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)"
          :width="100">
        </el-progress>
      </slot>
      <div v-if="showComment && isImage">
        <el-input placeholder="请输入内容"
          ref="comment"
          class="comment-content"
          v-model="file.comment"
          maxlength="20"
          v-show="file.isShow"
          @blur="handleEdit(file, false, index)">
        </el-input>

        <div v-show="!file.isShow" class="comment-content">
          <div class="comment-text">{{file.comment}}</div>
          <div class="icon-container" v-show="!disabled" @click="handleEdit(file, true, index)">
            <div class="edit-icon">
              <i class="el-icon-edit"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
    
  </transition-group>
</template>
<script>
// import CProgress from './Progress'
import { Progress as ElProgress, Input as ElInput } from 'element-ui'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
import { findIndex, map, filter, isEmpty }  from 'lodash-es'
Vue.use(VueViewer, {
  defaultOptions: {
    zIndex: 9999,
  }
})
const prefixCls = 'c-upload-list'
const IMAGE_TYPES = 'jpeg, png, gif, jpg, svg'
const RAW_IMAGE_TYPES = 'image/jpeg, image/svg+xml, image/png, image/gif'

export default {

  name: 'UploadList',

  data() {
    return {
      focusing: false,
      prefixCls: prefixCls,
      imagePlaceholder: 'https://image.fuchuang.com/prod/ac9495b9_empty20210603102850.png'
    }
  },
  components: { ElProgress, ElInput },

  props: {
    files: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: Function,
    handleRemove: Function,
    listType: String,
    autoUpload: {
      type: Boolean,
      default: true
    },
    showComment: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isImage() {
      return this.listType === 'picture-card' || this.listType === 'picture'
    },
    isText() {
      return this.listType === 'text'
    },
    imageList() {
      let files = map(this.files, file => this.checkIsImage(file) ? { src: file.url, alt: file.name } : {})
      files = filter(files, file => !isEmpty(file)) || []
      return files
    }
  },
  methods: {
    checkIsImage(file) {
      const fileType = `${(file.url || '').split('.').reverse()[0]}`
      const typeOfFileName = `${(file.name || '').split('.').reverse()[0]}`

      // 兼容详情和上传图片两种场景，详情没有raw的属性
      if ((file.raw && RAW_IMAGE_TYPES.includes(file.raw.type)) || 
        (!file.raw && 
        (IMAGE_TYPES.includes(fileType.toLowerCase()) || (typeOfFileName && IMAGE_TYPES.includes(typeOfFileName)))
         )) {
        return true
      } else {
        return false
      }
    },
    getImage(file) {
      return this.checkIsImage(file) ? file.url : this.imagePlaceholder
    },
    parsePercentage(val) {
      return parseInt(val, 10)
    },
    handleClick(file) {
      const idx = findIndex(this.imageList, item => item.src === file.url)

      if(file.status !== 'uploading') {
        if(this.checkIsImage(file)) {
          this.$viewerApi({
            options: {
              initialViewIndex: idx
            },
            images: this.imageList
          })
        } else {
          window.open(file.url)
        }
      } 
      // this.handlePreview && this.handlePreview(file)
    },
    handleRemoveClick(file) {
      this.handleRemove && this.handleRemove(file)
    },
    handleEdit (file, isEdit, index) {
      if (this.disabled) return
      this.$set(file,'isShow', isEdit)

      if (isEdit) {
        this.$nextTick(() => {
          this.$refs.comment[index].focus()
        })
      }
    },
    
  }
}
</script>
<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.c-upload-list {
  &.c-upload-list--picture-card {
    margin: 0;
    display: inline;
    vertical-align: top;
  }
  &.c-upload-list--picture {
    margin: 0;
    display: inline;
    vertical-align: top;
  }
  &.c-upload-list--text {
    width: 100%;
    padding-right: 10px;
    color: #666666;
    font-size: 14px;
    margin-top: 8px
  }
  .c-upload-list__item {
    background-color: #fff;
    border: none;
    width: auto;
    height: auto;
    display: inline-block;
    margin: 0 24px 8px 0;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    vertical-align: top;
    img {
      width: 104px;
      display: block;
    }
    &:hover {
      .c-upload-list__item-status-label {
        display: none;
      }
    }
    &.text {
      width: 100%;
      margin-top: 8px;
      padding: 0 4px;
      font-size: 14px;
      color: #666666;
      line-height: 22px;
      &:hover {
        background: #f5f7fa;
        border-radius: 2px;
      }
    }
  
    .c-upload-list__item-name {
      display: block;
      text-decoration: none;
      color: #666666;
      &:hover {
        .iconshanchu-lajitong {
          color: #F34B38
        }
      }
      i {
        line-height: 1;
        position: relative;
        color: #999999
      }
      .icon-attachment {
        color: #999999;
        font-size: 16px;
        margin-right: 6px
      }       
    }

    .c-upload-list__item-thumbnail {
      width: 104px;
      height: 104px;
      cursor: pointer;
      border-radius: 3px;
      width: 104px;
      &:hover {
        width: 104px
      }
    }
  }
.picture-card {
  position: relative;
  .icon-corner{
   content: "X";
    line-height: 50px;
    text-align: center;
    width: 30px;
    background-color: red;
    position: absolute;
    top: -16px;
    right: -6px;
    color: white;
    height: 50px;
    height: 36px;
    border-radius: 0 0 0 24px;
    font-size: 13px;
    font-weight: 800;
  }
}
.picture {
  position: relative;
  .icon-corner{
   content: "X";
    line-height: 50px;
    text-align: center;
    width: 30px;
    background-color: red;
    position: absolute;
    top: -16px;
    right: -6px;
    color: white;
    height: 50px;
    height: 36px;
    border-radius: 0 0 0 24px;
    font-size: 13px;
    font-weight: 800;
  }
}

.comment-content {
  position: relative;
  max-width: 104px;
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .comment-text {
    max-width: 104px;
    word-break: break-all;
    font-size: 12px;
  }
  .el-icon-edit {
    line-height: inherit;
    &:hover {
      color:#1989fa
    }
  }
}

}
</style>
