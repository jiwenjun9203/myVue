

export default {
  //总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, item) => preTotal + item.count, 0)
  },

  // 总价格
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, item) => preTotal + item.count*item.price, 0)
  }
}
