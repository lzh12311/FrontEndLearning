<template>
    <button @click="handleClick">计数{{count}}</button>
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    // data: {
    //     count: 0
    // },
    methods: {
        handleClick() {
            this.count++
        }
    }
}
</script>