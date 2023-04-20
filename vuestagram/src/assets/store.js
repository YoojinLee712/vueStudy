
import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state () {
        return {
            name: 'kim',
            age: 20,
            likes : 30,
            likestate : false,
            more : {},
        }
    },
    mutations :{
        setMore(state, data) {
            state.more = data  //data를 more이라는 state에 집어넣어줌
        },
        changeName(state){
            state.name = 'park'
        },
        likePlusOne(state){
            if ( state.likestate == false){
                state.likes++;
                state.likestate = true;
            } else {
                state.likes--;
                state.likestate = false;
            }       
        }
    },
    actions :{
        getData(context){  //서버로부터 데이터 받아옴
            axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
                a.data  //a.data 잘 받아오는지 확인했음 -> 이제 이걸 저 위의 more에 저장하려면 
                // 다시 mutation 함수 필요
                context.commit('setMore', a.data)
            })
        }
    }

})

export default store;
















/* vuex 기본 구조
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {

        }
    },

})

export default store;
*/