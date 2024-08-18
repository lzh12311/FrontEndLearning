<template>
  <div :class="[prefixCls]">
    <div
      :class="classes"
      @drop.prevent="onDrop"
      @paste="handlePaste"
      @dragover.prevent="onDragover"
      @dragleave.prevent="dragOver = false"
    >
      <slot v-if="listType==='text' && !hide">
        <el-button class="upload-file-btn" :disabled="uploadDisabled" v-if="listType==='text'" @click="handleClick"><i class="iconfont iconshangchuan"></i> {{uploadText}}</el-button>
      </slot>
      <slot name="tip" class="upload-tips" v-if="!hide"></slot>
      <upload-list
        :files="uploadFileList"
        :list-type="listType"
        :handleRemove="handleRemove"
        :handlePreview="handlePreview"
        :disabled="uploadDisabled"
        :auto-upload="autoUpload"
        :show-comment="showComment"
        v-if="showFileList"
      >
      </upload-list>
      <slot v-if="showUploadImgBtn">
        <div class="c-upload upload-pic-box" @click="handleClick">
          <ul>
            <li>
              <i class="iconfont icontianjia-cu icon-upload-pic"></i>
            </li>
            <li>
              <span class="upload-pic-text">{{uploadText}}</span>
            </li>
          </ul>
        </div>
      </slot>
    </div>
    <slot name="tip-bottom" v-if="!hide"></slot>
    <input
      ref="input"
      type="file"
      :class="[prefixCls + '-input']"
      @change="handleChange"
      :multiple="multiple"
      :accept="acceptTypes">
    <el-dialog append-to-body width="70%" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
import UploadList from './upload-list.vue'
import ajax from './ajax'
import Emitter from './mixins/emitter'
import Cookies from './cookies'
import { Button as ElButton, Dialog as ElDialog, Message } from 'element-ui'
const prefixCls = 'c-upload'
const IMAGE_TYPES = 'jpeg, .png, gif, jpg, svg'
const RAW_IMAGE_TYPES = 'image/jpeg, image/svg+xml, image/png, image/gif'

const DEFAULT_TYPE_MAP = {
  'picture-card': '.jpeg, .jpg, .png',
  'picture': '.jpeg, .jpg, .png',
  'text': '.xls, .xlsx'
}

const SYS_MAP = {
  'MD_': 'store_pc',
  'COOP_': 'ex_pc',
  'SAAS_': 'dms_pc',
  'JV_': 'fc_pc'
}
export default {
  name: 'Uploader',
  mixins: [ Emitter ],
  components: { UploadList, ElButton, ElDialog },
  props: {
    action: {
      type: String,
      default: '/api/saas-mpf-product/admin/cloudSdk/uploadByToken',
    },
    headers: {
      type: Object,
      default () {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    name: {
      type: String,
      default: 'file'
    },
    dragable: {
      type: Boolean,
      default: false
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    showFileList: {
      type: Boolean,
      default: true
    },

    format: {
      type: Array,
      default () {
        return []
      }
    },
    accept: {
      type: String
    },
    maxSize: {
      type: Number,
      default: 5
    },
    limit: {
      type: Number,
      default: 10
    },
   buttonText: {
      type: String,
      default: ''
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default: () => ({})
    },
    onSuccess: {
      type: Function,
      default: () => ({})
    },
    onError: {
      type: Function,
      default: () => ({})
    },
    onRemove: {
      type: Function,
      default: () => ({})
    },
    onPreview: {
      type: Function,
      default: () => ({})
    },
    onExceededSize: {
      type: Function,
      default: () => ({})

    },
    onExceededLimit: {
      type: Function,
      default: () => ({})
    },
    onFormatError: {
      type: Function,
      default: () => ({})
    },
    onChange: {
      type: Function,
      default: () => ({})
    },
    fileList: {
      type: Array,
      default: () => ([])
    },
    paste: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    listType: {
      type: String,
      default: 'text'
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    hide: {
      type: Boolean,
      default: false,
    },
    /**
			控制图片下方的comment组件是否显示，默认不显示
		*/
    showComment: {
      type: Boolean,
      default: false,
    }
  },
  inject: {
    elForm: {
      default: ''
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      dragOver: false,
      uploadFileList: [],
      tempIndex: 1,
      dialogVisible: false,
      dialogImageUrl: '',
      reqs: {},
    }
  },
  computed: {
    acceptTypes() {
      return this.accept ? this.accept : DEFAULT_TYPE_MAP[this.listType]
    },
    classes () {
      return [
        `${prefixCls}`
        // {
        //   [`${prefixCls}-select`]: !this.dragable,
        //   [`${prefixCls}-drag`]: this.dragable,
        //   [`${prefixCls}-dragOver`]: this.dragable && this.dragOver
        // }
      ]
    },
    isImage() {
      return this.listType==='picture-card' || this.listType==='picture'
    },
    showUploadImgBtn() {
      return this.isImage && !this.hide && this.limit > (this.uploadFileList || []).length
    },
    uploadDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    uploadText() {
      return this.buttonText ? this.buttonText : (this.listType === 'picture' || this.listType === 'picture-card' ? '上传照片' : '上传文件')
    }

  },
  watch: {
    listType(type) {
      if (type === 'picture-card' || type === 'picture') {
        this.uploadFileList = this.uploadFileList.map(file => {
          if (!file.url && file.raw) {
            try {
              file.url = URL.createObjectURL(file.raw);
            } catch (err) {
              console.error('[Element Error][Upload]', err);
            }
          }
          return file;
        });
      }
    },
    fileList: {
      immediate: true,

      handler(fileList) {
        // 区分filelist是否只有纯链接地址
        let list = []
        if(fileList && Array.isArray(fileList)){
          fileList.forEach((item,index)=>{
            if(Object.prototype.toString.call(item) === '[object Object]'){
              list = fileList
            }else{
              const fileType = item.substring(item.lastIndexOf('.') + 1)
              list.push({
                url:item,
                name:`文件${index+1}.${fileType}`
              })
            }
          })
        }
        this.uploadFileList = list.map(item => {
          item.status = item.status || 'finished';
          item.percentage = 100
          item.uid = item.uid || Date.now() + this.tempIndex++
          return item
        })
      }
    }
  },
  methods: {
    onDragover() {
      if (!this.uploadDisabled) {
        this.dragover = true
      }
    },

    handleClick () {
      if (this.uploadDisabled) return
      this.$refs.input.value = null;
      this.$refs.input.click()
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
    },
    onDrop (e) {
      this.dragOver = false
      if (this.uploadDisabled) return
      this.uploadFiles(e.dataTransfer.files)
    },
    handlePaste (e) {
      if (this.uploadDisabled) return
      if (this.paste) {
        this.uploadFiles(e.clipboardData.files)
      }
    },
    uploadFiles (files) {
      // check limit
      if (this.limit && this.uploadFileList.length + files.length > this.limit) {
        Message({
          message: `最多只能选择上传${this.limit}份文件`,
          type: 'warning'
        })
        this.onExceededLimit && this.onExceededLimit(files, this.uploadFileList);
        return;
      }

      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

      if (postFiles.length === 0) { return; }
      try {
        postFiles.forEach(file => {
          this.handleStart(file)
          if (this.autoUpload) {
            this.upload(file)
          }
        })
      } catch (e) {
        Message({
          message: e && e.message,
          type: 'warning'
        })
        return
      }
    },
    upload (rawFile) {
      this.$refs.input.value = null;

      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(processedFile => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
              this.post(processedFile);
          } else {
              this.post(rawFile);
          }
        }, () => {
          // this.$emit('cancel', file);
        });
      } else if (before !== false) {
          this.post(rawFile);
      } else {
        // this.$emit('cancel', file);
      }
    },
    post (rawFile) {

      // check format
      if (this.format.length) {
        const fileFormat = rawFile.name.split('.').pop().toLocaleLowerCase()
        const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat)
        if (!checked) {
          this.onFormatError(rawFile, this.uploadFileList)
          return false
        }
      }

      const { uid } = rawFile;
      const options = {
        headers: this.getUserToken(),
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, rawFile);
        },
        onSuccess: res => {
          this.handleSuccess(res, rawFile);
        },
        onError: err => {
          this.handleError(err, rawFile)
        }
      };
      const req = ajax(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },

    handleStart(rawFile) {
      // check maxSize
      const fileType = `.${rawFile.name.split('.').reverse()[0]}`
      if(!this.acceptTypes.includes(fileType.toLowerCase())) {
        throw new Error(`文件类型不正确, 请选择${this.acceptTypes}为后缀的文件`)
      }
      if (this.maxSize) {
        if (rawFile.size > this.maxSize * 1024 * 1024) {
          this.onExceededSize(rawFile, this.uploadFileList)
          throw new Error(`文件大小不能超过${this.maxSize}MB`)
        }
      }
      rawFile.uid = Date.now() + this.tempIndex++;
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error('[Element Error][Upload]', err);
        return;
      }

      this.uploadFileList.push(file);
      this.onChange(file, this.uploadFileList)
    },
    getFile(file) {
      const uploadFileList = this.uploadFileList
      let target
      uploadFileList.every(item => {
        target = file.uid === item.uid ? item : null
        return !target
      })
      return target
    },
    handleProgress(ev, rawFile) {
      const file = this.getFile(rawFile);
      this.onProgress(ev, file, this.uploadFileList);
      file.status = 'uploading';
      file.percentage = ev.percent || 0;
    },
    handleSuccess(res, rawFile) {
      const file = this.getFile(rawFile);
      if (file) {
        file.status = 'finished';
        file.response = res;
        if(res && !res.success) {
          this.handleError({...res}, rawFile)
        } else {
          this.onSuccess(res, file, this.uploadFileList);
          this.onChange(file, this.uploadFileList);
        }
      }
    },
     handleError(err, rawFile) {
      const file = this.getFile(rawFile);
      const fileList = this.uploadFileList;

      file.status = 'fail';

      fileList.splice(fileList.indexOf(file), 1);
      Message({
        message: err.message || '上传失败',
        type: 'error'
      })
      this.onError(err, file, this.uploadFileList);
      this.onChange(file, this.uploadFileList);

    },
    handleRemove(file, raw) {
      if (raw) {
        file = this.getFile(raw);
      }
      let doRemove = () => {
        this.abort(file);
        let fileList = this.uploadFileList;
        fileList.splice(fileList.indexOf(file), 1);
        this.onRemove(file, fileList);
      };

      if (!this.beforeRemove) {
        doRemove();
      } else if (typeof this.beforeRemove === 'function') {
        const before = this.beforeRemove(file, this.uploadFileList);
        if (before && before.then) {
          before.then(() => {
            doRemove();
          }, noop);
        } else if (before !== false) {
          doRemove();
        }
      }
      this.onChange(file, this.uploadFileList)
    },
    abort(file) {
      const { reqs } = this;
      if (file) {
        let uid = file;
        if (file.uid) uid = file.uid;
        if (reqs[uid]) {
          reqs[uid].abort();
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid]) reqs[uid].abort();
          delete reqs[uid];
        });
      }
    },
    clearFiles() {
      this.uploadFileList = [];
    },
    submit() {
      this.uploadFileList
        .filter(file => file.status === 'ready')
        .forEach(file => {
          this.upload(file.raw);
        });
    },
    handlePreview(file) {
      if (file.status !== 'uploading') {
        // 兼容详情和上传图片两种场景，详情没有raw的属性
        const fileType = `${(file.url || '').split('.').reverse()[0]}`
        const isPicture = (file.raw && RAW_IMAGE_TYPES.includes(file.raw.type)) ||
          (!file.raw && IMAGE_TYPES.includes(fileType.toLowerCase()))
        if (this.isImage && isPicture) {
          this.dialogImageUrl = file.url
          this.dialogVisible = true
        } else {
          window.open(file.url)
        }
      }
    },
    clearFiles() {
      this.uploadFileList = []
    },
    getUserToken() {
      let headers = { ...this.headers }

      if (!this.headers.Authorization) {
        const systemType= SYS_MAP[PREFIX]
        if (PREFIX === 'MD_') {
          const newCookies = new Cookies(window.PREFIX)
          if (newCookies.get('accessToken')) {
            headers.Authorization = `Bearer${newCookies.get('accessToken')}`
            headers.loginPlatform = systemType
          }
        } else {
          const type = sessionStorage.getItem(`${PREFIX}token_type`)
          const token = sessionStorage.getItem(`${PREFIX}access_token`)
          const tokenType = type.slice(0, 1).toUpperCase() + type.slice(1)
          headers.Authorization = tokenType + token
          headers.loginPlatform = systemType
        }
      }
      return headers
    },
    beforeDestroy() {
      this.uploadFileList.forEach(file => {
        if (file.url && file.url.indexOf('blob:') === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    },
  }
}
</script>
<style lang="less" scoped>
// @upload-prefix-cls: ~"@c-upload";
@border-radius-small: 4px;
@ease-in-out: ease-in-out;
@transition-time: .2s;
@text-color: #515a6e;
@font-size-small: 12px;
@input-disabled-bg: #f3f3f3;
@primary-color: #2d8cf0;
@legend-color: #999;
@border-color-base:#dcdee2;
@font-size-small: 12px;
.c-upload {
  display: inline-block;
  width: 100%;
  input[type="file"]{
    display: none;
  }
  &-list{
      // margin-top: 8px;
      &-file{
          padding: 4px;
          color: @text-color;
          border-radius: @border-radius-small;
          transition: background-color @transition-time @ease-in-out;
          overflow: hidden;
          position: relative;

          & > span{
              cursor: pointer;
              transition: color @transition-time @ease-in-out;
              i{
                  display: inline-block;
                  width: @font-size-small;
                  height: @font-size-small;
                  color: @text-color;
                  text-align: center;
              }
          }

          &:hover{
              background: @input-disabled-bg;
              & > span{
                  color: @primary-color;
                  i{
                      color: @text-color;
                  }
              }
              .c-upload-list-remove{
                  opacity: 1;
              }
          }
      }
      &-remove{
          opacity: 0;
          font-size: 18px;
          cursor: pointer;
          float: right;
          margin-right: 4px;
          color: @legend-color;
          transition: all @transition-time ease;
          &:hover{
              color: #444;
          }
      }
  }

    &-select {
      display: flex;
  }

  &-drag{
      background: #fff;
      border: 1px dashed @border-color-base;
      border-radius: @border-radius-small;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: border-color @transition-time ease;

      &:hover{
          border: 1px dashed @primary-color;
      }
  }
  &-dragOver{
      border: 2px dashed @primary-color;
  }
}
.upload-pic-box {

  width: 104px;
  height:104px;
  border: 2px dashed #c0c4cc;
  border-radius: 3px;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  ul {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    list-style: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  &:hover{
    cursor: pointer
  }
  .upload-pic-text {
    color: #666666;
    font-size: 14px;
    text-align: center;
  }
  .icon-upload-pic {
    color: #c0c4cc;
    font-size: 24px;
  }
  .upload-file-btn {
    color: #666666
  }
  .upload-tips {
    color: #999999
  }

}

</style>
