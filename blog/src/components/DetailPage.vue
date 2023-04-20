<template>
  <div class="post">
    git blog 수정테스트
    <h3 class="title">{{ blog[$route.params.id].title }}</h3>
    <p class="content">{{ blog[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'DetailPage',
    props: {
        blog: Array,
    }
}
</script>

<style>
.title {
    width: 50%;
    background-color:#a9a9a9
}
.content{
    width: 50%;
    height: 200px;
    background-color: #ddd
}
</style>