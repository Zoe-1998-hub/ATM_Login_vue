<template>
  <div class="app">
      <el-container>
        <el-header class="app-header">
            <p class="atm_title" style="font-size: 20px;height: 45px;display: block;line-height: 45px;text-align: center;font-family: 微软雅黑">欢迎进入ATM系统</p>
          <el-menu default-active="defaultActive"
                   class="el-menu-demo tab-page"
                   router
                   mode="horizontal"
                   @select="handleSelect"
                   active-text-color="#409EFF"
                   background-color="#2c3e50"
                   text-color="white"
          id="nav1">
            <el-menu-item index="/components/Tab1">首页</el-menu-item>
            <el-menu-item index="/components/Tab2">系统服务</el-menu-item>
            <el-menu-item class="nav2">
              <div class="app-header-userinfo">
                <el-dropdown trigger="hover"
                             :hide-on-click="false">
              <span class="el-dropdown-link">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided
                                      @click.native="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-menu-item>
          </el-menu>
        </el-header>
          <el-main class="app-body">
            <template>
              <router-view/>
            </template>
          </el-main>
      </el-container>
    <div class="footer_panel">
      <p>2020 ATM系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      username: '',
      isCollapse: false
    }
  },
  methods: {
    toggleSideBar () {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '确认退出？', {})
        .then(() => {
          sessionStorage.removeItem('user')
          this.$router.push('/')
        })
        .catch(() => { })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted: function () {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.username = user
    }
  }
}
</script>

<style>
  .app-header{
    background-color:#2c3e50;
  }
  #nav1{
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
  }
  .nav2{
    left:200px;
  }
  .nav3{
    display: inline-block;
    vertical-align: middle;
  }
  p{
    font-family:"Times New Roman",Times,serif;
    float: left;
    color: white;
    font-size: 120%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .app-body{
    padding: 0;
    height: 90vh;
    width: 100%;
  }
  el-footer{
    padding: 0;
    width: 100%;
    margin: 0;
  }
  .footer_panel{
    background-color:#2c3e50;
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
  }
</style>
