<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" active-class="kerwinative">
                <i class="iconfont icon-training"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="kerwinative">
                <i class="iconfont icon-all"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/login" tag="li" active-class="kerwinative">
                <i class="iconfont icon-account"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background-color: #fff;
    z-index: 99;
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