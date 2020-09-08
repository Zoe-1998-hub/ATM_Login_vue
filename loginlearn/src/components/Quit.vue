<template>
  <div class="quit">
    <el-card shadow="always" style="height: 300px;width: 450px">
      <div style="font-family: 幼圆;font-size: 30px;position: relative;top: 50px;">确认注销此账户？</div>
      <div style="position: relative;top: 100px">
        <el-button type="primary" round plain
                   @click.native="open1">确认</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Quit',
  methods: {
    open1 () {
      this.$notify({
        title: '此账户已成功注销',
        message: '此账户已成功注销',
        type: 'success'
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.quit{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
