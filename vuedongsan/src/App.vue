<template>
  <transition name="fade">
    <ModalPage @closeModal="modalox = false" :원룸들="원룸들" :pushnum="pushnum" :modalox="modalox"/>
  </transition>
  <div class="menu">
    <a v-for="a in menu" :key = "a">{{ a }}</a>
  </div>
  vuedongsan도 수정한 다음 blog 브랜치에 업데이트 할 때 vuedongsan 빼놓고 업데이트 할 수 있는지 테스트
  
  <DiscountBanner v-if="showDiscount == true"/>
  <button @click="priceSort">가격낮은순</button>
  <button @click="priceSortRev">가격높은순</button>
  <button @click="ganada">가나다순</button>

  <button @click="sortBack">되돌리기</button>
  <div v-for="(a,i) in 원룸들" :key="i">
    <ProductCard @openModal="modalox = true; pushnum=$event" :원룸="원룸들[i]"/>
  </div>

</template>

<script>

import data from './assets/oneroom.js';
import DiscountBanner from './DiscountBanner.vue';
import ModalPage from './ModalPage.vue';
import ProductCard from './ProductCard.vue';

setTimeout(function(){},2000);

export default {
  
  name: 'App',
  data(){
    return {
      showDiscount : true,
      oneroomsOriginal : [...data],
      오브젝트 : { name :'yys', age: 34 },
      pushnum : 0,
      원룸들 : data,
      modalox : false,
      신고수 : [0,0,0],
      menu : ['Home','Shop', 'About', 'Mypage'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },
  methods : {
    increase(i){
      this.신고수[i] +=1;
    },
    priceSort(){
      this.원룸들.sort(function(a,b) 
      { return a.price - b.price })
    },
    sortBack(){
      this.원룸들 = [...this.oneroomsOriginal];
    },
    priceSortRev(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })
    },
    ganada(){
    }

  },
  
  mounted() {
    setTimeout(()=>{
      this.showDiscount = false;
    }, 30000);
  },
  components: {
    DiscountBanner : DiscountBanner,
    ModalPage : ModalPage,
    ProductCard : ProductCard,
  }
}
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}
/* */

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
/*css 애니메이션 추가
.start { 
  opacity: 0;
  transition: all 2s;
  여기에 있는 모든 사항이 변하는데 걸리는 시간 1초 
}
.end {
  opacity: 1;
  
}

*/
</style>
