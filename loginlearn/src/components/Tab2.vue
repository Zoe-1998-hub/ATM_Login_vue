<template>
  <div class="Tab2_plane">
    <el-container>
      <el-aside>
        <el-row >
          <el-col>
            <el-menu
              default-active="defaultActive"
              class="el-menu-vertical-demo"
              router
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/components/SelectMoney">
                <i class="el-icon-search"></i>
                <span slot="title">查询余额</span>
              </el-menu-item>
              <el-menu-item index="/components/SaveMoney">
                <i class="el-icon-sell"></i>
                <span slot="title">存钱</span>
              </el-menu-item>
              <el-menu-item index="/components/DrawMoney">
                <i class="el-icon-sold-out"></i>
                <span slot="title">取钱</span>
              </el-menu-item>
              <el-menu-item index="/components/History">
                <i class="el-icon-time"></i>
                <span slot="title">查询历史</span>
              </el-menu-item>
              <el-menu-item index="/components/Quit">
                <i class="el-icon-circle-close"></i>
                <span slot="title">注销账户</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="Tab2_main"><router-view></router-view></div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Tab2',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .Tab2_main{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
