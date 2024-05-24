<template>
    <div>
        <h3>title: {{prop.title}}</h3>
        <p>tips: {{prop.tips}}</p>
    </div>
</template>
<script>
export default {
    props: ['prop'],
    data() {
        return {}
    }
}
</script>