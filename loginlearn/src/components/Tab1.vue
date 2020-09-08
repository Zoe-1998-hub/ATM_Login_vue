<template>
  <el-scrollbar style="height:100%">
    <div class="main">
      <el-carousel class="lun_imgs" :interval="5000" arrow="always" ref="carousel" autoplay="true" @click.native="linkTo" height="zmdHeight + 'px'">
        <el-carousel-item class="lun_img" v-for="item in imgs" v-bind:key="item.url" >
          <img :src="item.url"/>
        </el-carousel-item>
      </el-carousel>
      <div class="block1">
        <div class="info">
          系统服务
        </div>
        <div class="pro_info">
          为用户提供查询余额，存钱，取钱，以及操作历史查询服务
        </div>
        <div id="tab">
          <div class="tab-tit">
            <a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}"><img src="../image/chazhao.png"></a>
            <a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}"><img src="../image/qiandai.png"></a>
            <a href="javascript:;" @click="curId=2" :class="{'cur':curId===2}"><img src="../image/yinhangqia.png"></a>
            <a href="javascript:;" @click="curId=3" :class="{'cur':curId===3}"><img src="../image/lishijilu.png"></a>
            <a href="javascript:;" @click="curId=4" :class="{'cur':curId===4}"><img src="../image/yuangongchelianglika.png"></a>
          </div>
      </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'Tab1',
  data: function () {
    return {
      platform: 'pc',
      curId: 0,
      imgs: [
        {url: require('../image/1.jpg'), link: '/components/Tab2'},
        {url: require('../image/2.jpg'), link: '/components/Tab2'},
        {url: require('../image/3.jpg'), link: '/components/Tab2'},
        {url: require('../image/4.jpg'), link: '/components/Tab2'}
      ]
    }
  },
  methods: {
    linkTo () {
      let activeIndex = this.$refs.carousel.activeIndex
      this.$router.push(this.imgs[activeIndex].link)
    },
    setSize: function () {
      this.bannerHeight = 100 / 1920 * this.screenWidth
    },
    mounted () {
      this.screenWidth = window.innerWidth
      this.setSize()
      // 窗口大小发生改变时,调用一次
      window.onresize = () => {
        this.screenWidth = window.innerWidth
        this.setSize()
      }
    }
  }

}
</script>

<style scoped>
  .el-carousel__item h3 {
    font-size: 14px;
    width: 100%;
    opacity: 0.75;
  }
  .lun_imgs{
    height: 400px;
  }
  img{
    /*设置图片宽度和浏览器宽度一致*/
    width:100%;
    height:inherit;
  }
  .pro_info{
    text-align: center;
    font-size:16px;
    font-family: 微软雅黑;
    height: 42px;
    margin: 20px;
  }
  .info{
   text-align: center;
    color: #2c3e50;
    font-size: 28px;
    font-family: 微软雅黑;
    height: 22px;
    line-height: 22px;
    opacity: 0.77;
  }
   .block1{
     margin: 0px;
   }
  #tab{
    display: flex;
    width: 800px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tab-tit{
    display: flex;
    width: 300px;
    left: 200px;
  }
  .container1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .plane1{
    width: 50%;
    height: 100%;
  }
  .tab-con{
    width: 50%;
    height: 100%;
  }
  .main{
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
  a{
    padding: 20px;
  }
  *{
    padding: 0;
    margin: 0;
  }
</style>
