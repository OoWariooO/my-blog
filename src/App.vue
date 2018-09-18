<template>
  <div id="app">
    <blog-header></blog-header>
    <!--<add-blog></add-blog>-->
    <!--<show-blog></show-blog>-->
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'
import SingelBlog from './components/SingelBlog'
import AddBlog1 from './components/AddBlog1'

export default {
  name: 'App',
  components: {
  AddBlog,
  ShowBlog,
    BlogHeader,
    SingelBlog
  }
}
</script>

<style>

</style>
