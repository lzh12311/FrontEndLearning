<template>
   <el-container style="height: 100%">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
    <el-container>
        <el-header>
            <common-header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>
<script>
import CommonAside from '../components/commonAside'
import CommonHeader from '../components/commonHeader'
export default {
    name: 'Main',
    components: {
        CommonAside,
        CommonHeader
    },
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: #333;
}
.el-main {
    padding: 0;
}
</style>