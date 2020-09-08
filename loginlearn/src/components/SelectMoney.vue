<template>
  <div class="select_panel">
    <el-card shadow="always" style="height: 300px;width: 450px">
      <div style="font-family: 幼圆;font-size: 30px;position: relative;top: 50px;left: 70px">请点击按钮查询余额</div>
      <div class="select_result"></div>
      <div style="position: relative;top:120px;left:170px">
        <el-button type="primary" round @click="select()">确定</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SelectMoney',
  methods: {
    select () {
      this.$alert('查询结果', '查询结果', {
        confirmButtonText: '确定'
      })
    }
  }
}

</script>

<style scoped>
.select_panel{
  ext-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
