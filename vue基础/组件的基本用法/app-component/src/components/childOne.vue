<template>
    <div class="child">
        <h4> this is the child component </h4>
        <input type="text" v-model="mseeage" @keyup="send"/>
        <p>父组件的消息： {{ value }}</p>
    </div>
</template>
<script>
export default{
    name : "Child",
    props: ["value"],
    data(){
        return {
            mseeage: ""
        };
    },
    methods: {
        send(){
            this.$emit("input", this.mseeage);
        }
    }
};
</script>