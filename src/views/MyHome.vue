<template>
  <div class="box">
    <el-container>
      <!-- 左侧 -->
      <el-aside width="200px">
        <div class="header">ElementUi管理后台</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1">文章列表</el-menu-item>
              <el-menu-item index="1-2">多层路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <div class="btm">←</div>
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <div class="conTitle">文章列表</div>
        <div class="titleBox">
          <div>
            <el-button type="primary">编辑添加，字段各种规则验证示例</el-button>
            <el-button type="primary">本地导出表格</el-button>
          </div>
          <div>
            <el-input v-model="input" placeholder="请输入文档标题"></el-input>
            <template>
              <el-select v-model="value" placeholder="请选择类型">
                <!-- <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> -->
              </el-select>
            </template>
            <el-button type="success">查询</el-button>
            <el-button type="warning">重置</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
  .el-container,
  .el-aside {
    height: 100%;
  }
  .menu {
    height: 100%;
  }
  .header {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: #0079d9;
    color: #fff;
    text-align: center;
  }
  .el-menu {
    height: 85%;
  }
  .btm {
    height: 50px;
    padding: 0 20px;
    font-size: 20px;
    box-sizing: border-box;
    line-height: 50px;
    text-align: right;
    background: #0079d9;
    color: #fff;
  }
  .conTitle {
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .titleBox {
    display: flex;
    justify-content: space-between;
    .titleBox > div {
      display: flex;
    }
  }
  .el-input {
    width: 150px;
    margin-right: 10px;
  }
}
</style>
