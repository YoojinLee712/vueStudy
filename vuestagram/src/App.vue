<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right"> 
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish"> 발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ name }}</p>
<!--mutation 부탁은 commit 
     actions 부탁은 dispatch-->
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">  더보기버튼 </button>
 
  <ContainerPage @write="newContent = $event" :imageURL="imageURL" :posting="posting" :step="step" />
  <button @click="more">더보기</button>

  
  <!-- <p> {{ now2 }} {{ counter }}</p>
  <button @click="counter++">버튼</button> -->


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!--버튼 0을 누르면 내용 0만 보임-->
  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 0"></divv-if>>내용1</div>
  <div v-if="step == 0"></div>>내용2</div>
  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button> -->
</template>


<script>
import posting from './assets/posting.js'
import ContainerPage from "./components/ContainerPage.vue";
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'App',

  data() {
    return {
      step : 0, //어떤 탭이 보이고 있는지 알려주는 변수
      posting: posting,
      num: 0,
      imageURL: '',
      newContent: '',
      selected: '',
      counter: 0,
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    }
  },
  mounted(){
    this.emitter.on('boxClicked', (a)=>{
      this.selected = a
    })
  },
  props: {

  },

  components: {
    ContainerPage : ContainerPage,
  },
  computed : {   //계산 결과 저장용 함수들임
    name() { //주로 store.js에 있는 데이터 가져다 쓸 때 이렇게 함수로 처리
      return this.$store.state.name
    },
    ...mapState(['name','age','likes']),
    ...mapState({ myname : 'name',}) //이거 쓰려면 import 해줘야함
  },
  methods : {
    now(){ return new Date() },  //현재 시간 출력 -> 사용할때마다 실행
    ...mapMutations(['setMore','likePlusOne']),
    more(){
      //axios.post('URL', {name : 'kim' }).then(성공시코드).catch((err)=>{})
      axios.get(`https://codingapple1.github.io/vue/more${this.num}.json`)
      .then( (result) => { //받아온 데이터가 result 변수에 담김
        this.posting.push(result.data); //원래있던 posting 데이터에 한개 더 추가
        this.num+=1;
      })
    },
    upload(e){
      let files = e.target.files;
      let url = URL.createObjectURL(files[0]);
      this.imageURL= url;
      this.step = 1;
    }, 
    publish() {
      var mypost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageURL,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.newContent,
        filter: this.selected
    };
    //unshift는 posting이라는 array 에 mypost 데이터를 넣음
      this.posting.unshift(mypost)
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
