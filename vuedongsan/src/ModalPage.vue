<template>
  git vuedongsan 수정테스트
  <div class="black-bg" v-if="modalox == true">
    <div class="white-bg">
      <h4>{{원룸들[pushnum].title }}</h4>
      <p>{{ 원룸들[pushnum].content }}</p>
      <input v-model.number="month">
      <!--<input @input="month = $event.target.value">-->
      <p>{{ month }}개월 선택함 : {{ 원룸들[pushnum].price * month}}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalPage',
    data() {
        return { 
            month: 1, 
        }
    },
    watch: {
        month(a) {
            if ( isNaN(a) == true ){
                alert("문자 입력 금지")
                this.month = 1
            }
        },

    },
    beforeUpdate() {
        if  ( this.month ==2 ){
                alert("2개월은 너무 적대요!")
            }
    },
    props: {
        원룸들 : Array,
        pushnum : Number,
        modalox : Boolean,
    }

}
</script>

<style>

</style>