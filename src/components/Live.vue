<template>
    <div class='wrapper'>
        <a :href="liveInfo.url" target="_blank">
            <img :src='liveInfo.img' class='liveImg' :alt='liveInfo.owner'>
        </a>
        <div>
            <div>{{liveInfo.owner}}</div>
            <div>{{liveInfo.name}}</div>
            <div>{{liveInfo.hot}}</div>
            <div>{{liveInfo.website}}</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        liveInfo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.wrapper {
    height: 260px;
    width: 220px; 
    background-color: aqua;
    margin: 10px;
    display: block;
}

.liveImg {
    height: 150px;
    width: 200px;
    margin: 10px;
    display: block
}
</style>
