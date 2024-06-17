<template>
    <ul>
        <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
        <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
ul {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    li {
        flex: 1
    }
}
.active {
    color: red;
    border-bottom: 3px solid red;
}
</style>