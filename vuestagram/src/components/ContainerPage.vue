<template>
  git vuestagram 수정 테스트
  <div>
    <div v-if= " step == 0 ">
        <PostPage :posting="posting[i]" v-for="(a,i) in posting" :key="i"/>
   </div>

  <!-- 필터선택페이지를 탭으로 구현 -->
  <div v-if= "step == 1" >
    <div :class="selected" class="upload-image" :style="`background-image:url(${imageURL})`"></div>
    <div class="filters">
        <FilterBox v-for="filter in filters" :key="filter" :imageURL="imageURL" :filter="filter">
          {{ filter }}
        </FilterBox>
    </div>
  </div>

<!-- 글작성페이지를 탭으로 구현 -->
  <div v-if="step==2">
  <div :class="selected" class="upload-image" :style="`background-image:url(${imageURL})`"></div>
  <div class="write">
    <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
  </div>
  </div>
  </div>
</template>

<script>
import PostPage from "./PostPage.vue";
import FilterBox from "./FilterBox.vue";
export default {
    name : 'ContainerPage',
    data() {
        return {
            filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            selected: '',
        }
    },
    mounted(){
    this.emitter.on('boxClicked', (a)=>{
      this.selected = a
    })
    },
    components : {
        PostPage : PostPage,
        FilterBox : FilterBox,
    },
    props : {
        posting: Array,
        step: Number,
        imageURL: String,
    },
}

</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>