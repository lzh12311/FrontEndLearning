home
```html
<template>
  <div>Home page</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>
<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFA500;
    height: 100vh;
    font-size: 100px;
    color: #fff;
  }
</style>
```
list
```html
<template>
  <div>UserList page</div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {}
  }
}
</script>
<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00BFFF;
    height: 100vh;
    font-size: 100px;
    color: #fff;
  }
</style>
```
form
```html
<template>
  <div>UserForm page</div>
</template>
<script>
export default {
  name: 'Form',
  data () {
    return {}
  }
}
</script>
<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00BFFF;
    height: 100vh;
    font-size: 100px;
    color: #fff;
  }
</style>
```

commonAside区域
```html
<template>
  <el-menu
    height="100%"
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item @click="handleClick('home')" index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu  index="2">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>用户</span>
      </template>  
      <el-menu-item-group>
        <el-menu-item @click="handleClick('list')" index="1-1">列表</el-menu-item>
        <el-menu-item @click="handleClick('form')" index="1-2">表单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'commonAside',
  methods: {
    handleClick(route) {
      if (route !== this.$router.currentRoute.name) {
        this.$router.push('/'+route)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      height: 100%;
      border: none;
      h3 {
          color: #fff;
          text-align: center;
          line-height: 48px
      }
  }
</style>
```
commonHeader区域
```html
<template>
  <div class="header">
    <div class="l-content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>面包屑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "commonHeader",
  data() {
    return {
      userImg: require("../assets/user.png"),
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
/deep/ .el-breadcrumb__item {
  .el-breadcrumb__inner {
    font-weight: normal;
    &.is-link {
      color: #666;
    }
    a {
      color: #666;
    }
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>

```
