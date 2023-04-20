<template>
  <div class="nav-wrapper">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      blog파일 수정 후 브랜치에 블로그 수정본만 반영할 수 있는지 테스트
      blog 디렉토리 수정
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">List</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

  <router-link to="/">홈페이지로 </router-link>
  <router-link to="/list">리스트페이지로</router-link>
  <div class="mt-4">
    <router-view :blog="blog" :postNum="postNum"></router-view>
  </div>
  <!--<ListPage :blog="blog" />  -->
</template>

<script>
//import ListPage from './components/ListPage.vue'
import blog from './assets/blog.js'
export default {
  name: 'App',
  data() {
    return {
      blog : blog,
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
