<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<template>
  <div class="drawpanel">
    <el-card shadow="always" style="height: 300px;width: 450px">
      <div style="font-family: 幼圆;font-size: 30px;position: relative;top: 30px">请输入取款金额</div>
      <el-input v-model="input" placeholder="请输入取款金额" style="position: relative;top: 60px"></el-input>
      <el-button type="primary" round plain
                 @click="drawmoney()" style="position: relative;top: 80px;">确认</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DrawMoney',
  methods: {
    draw () {
      this.$alert('已取款金额', '已取款金额', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<style scoped>
.drawpanel{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
