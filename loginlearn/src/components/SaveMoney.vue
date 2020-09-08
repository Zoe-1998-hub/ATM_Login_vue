<template>
  <div class="savepanel">
    <el-card shadow="always" style="height: 300px;width: 450px">
      <div style="font-family: 幼圆;font-size: 30px;position: relative;top: 30px">请输入存款金额</div>
      <el-input v-model="input" placeholder="请输入存款金额" style="position: relative;top: 60px"></el-input>
      <el-button type="primary" round plain
                 @click="savemoney()" style="position: relative;top: 80px;">确认</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SaveMoney',
  methods: {
    savemoney () {
      this.$alert('已存入金额', '已存入金额', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<style scoped>
.savepanel{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
