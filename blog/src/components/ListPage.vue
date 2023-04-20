<template>
    git blog 수정테스트
  <div v-for="(a,i) in blog" :key="i">
    <h5 @click ="$router.push('/detail/'+i)">{{ blog[i].title }}</h5>
    <p>{{ blog[i].date }}</p>
  </div>

</template>

<script>


export default {
    name: 'ListPage',
    props: {
        blog: Array,
     },
}
</script>

<style>

</style>