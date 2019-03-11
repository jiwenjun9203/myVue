import {reqShops, reqAddress, reqCategorys,reqGoods,reqRatings,reqInfo} from '../api'
import {RECEIVE_SHOPS, RECEIVE_CATEGORYS, RECEIVE_ADDRESS,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,REDUCE_FOOD_COUNT,ADD_FOOD_COUNT} from './mutauions-type'


export default {
  // 异步获取商品的action
  async getShops({commit, state}) {
    // 1. 发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      commit(RECEIVE_SHOPS, result.data)
    }
  },

  // 异步获取地址的action
  async getAddress({commit, state}) {
    // 1. 发ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      commit(RECEIVE_ADDRESS, result.data)
    }
  },
  //异步获取分类的action
  async getCategorys({commit}) {
    // 1. 发ajax请求
    const result = await reqCategorys()
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },
  //异步获取商家详情的action
  async getShopInfo({commit}){
      const result = await reqInfo()
      if (result.code === 0){
        const info = result.data
        commit(RECEIVE_INFO,{info})
      }
    },
  async getShopGoods({commit},callback){
    const result = await reqGoods()
    if (result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,goods)
      callback()
    }
  },
  async getShopRatings({commit},callback){
    const result = await reqRatings()
    if (result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      callback&&callback()
    }
  },

  updateFoodCount({commit},{isAdd,food}){
    if (isAdd) {
      commit(ADD_FOOD_COUNT,{food})
    }else {
      commit(REDUCE_FOOD_COUNT,{food})
    }
  }
}
