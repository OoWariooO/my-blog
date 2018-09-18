<template>
    <div id="blog-header">

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" router>
        <el-menu-item index="/add">创建博客</el-menu-item>
        <el-menu-item  index="/index">我的博客
        </el-menu-item >
        </el-menu>
      <!--<router-link to="/index">博客</router-link>-->
      <!--<router-link to="/add">写博客</router-link>-->
    </div>
</template>

<script>
    export default {
      name: "blog-header",
      data(){
        return {
          activeIndex: 'index'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          //console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

</style>
