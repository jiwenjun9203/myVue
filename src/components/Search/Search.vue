<template>
  <div class="search" @click="$router.push('/seached')">
    <i class="icon-search"></i>
    <span class="placeholder">搜索商品, 共19966款好物</span>
  </div>
</template>

<script>
    export default {
        //接受
        props: {},
        //组件
        components: {},

        data () {
            return {}
        },
        //定义函数
        methods: {},
        //计算属性
        computed: {},
        //第一次渲染结束
        mounted (){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width: 60%
    justify-content: center
    height: .74667rem
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    text-align center
    display flex
    align-items: center
    flex-grow: 1
    .icon-search
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: .37333rem;
      height: .37333rem;
      margin-right: .13333rem;

    .placeholder
      color #666
      font-size: .37333rem
</style>
