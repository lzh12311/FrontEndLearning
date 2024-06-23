<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="kerwinative">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="kerwinative">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
      <router-link to="/account" tag="li" active-class="kerwinative">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
 <style lang="less" scoped>
nav {
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 50px;
    text-align: center;

  line-height: 20px;
  background: #fff;
  left: 0px;
  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      flex: 1;
      i {
        font-size: 20px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
.kerwinative {
  color: red;
}
</style> 