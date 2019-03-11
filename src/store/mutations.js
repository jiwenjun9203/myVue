import {RECEIVE_SHOPS, RECEIVE_CATEGORYS, RECEIVE_ADDRESS,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,REDUCE_FOOD_COUNT,ADD_FOOD_COUNT} from './mutauions-type'
import Vue from  'vue'

export default {
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,categorys) {
    state.categorys = categorys
  },
  [RECEIVE_INFO] (state,{info}) {
    state.info = info
  },
  [RECEIVE_GOODS] (state,goods) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++
    }else{
       Vue.set(food,'count',1)
       state.cartFoods.push(food)
  }
  },
  [REDUCE_FOOD_COUNT](state,{food}){
   if ( food.count > 0){
     food.count--
     if (food.count === 0) {
       const index = state.cartFoods.indexOf(food)
       state.cartFoods.splice(index,1)
     }
   }
  }
}
