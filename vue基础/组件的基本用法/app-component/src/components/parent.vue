<template>
    <div class="child">
        <h4> this is the Parent component </h4>
        <input type="text" v-model="mseeage"/>
        <p>字组件的消息：{{ messageFromChild }} </p>
        <!-- <Child :messageFromParent="mseeage" @on-recevie="receive"/> -->
        <Child :value="messageFromChild" v-on:input="receive"/>
        <!-- <Child v-model="messageFromChild"/> -->
    </div>
</template>
<script>

import Child from "./childOne.vue";

export default{
    data(){
        return {
            mseeage: "",
      messageFromChild: "",
        };
    },
    components:{
        Child
    },
    methods:{
        receive(msg){
            this.messageFromChild =msg
        }
    }
};
</script>