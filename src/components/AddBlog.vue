<template>

  <div class="add-blog">



    <el-form ref="form" :model="blog" label-width="80px" v-if="!submited">
      <h2>添加博客</h2>
      <el-form-item label="博客标题">
        <el-input v-model="blog.title"></el-input>
      </el-form-item>

      <el-form-item label="博客正文">
        <el-input type="textarea" v-model="blog.content"></el-input>
      </el-form-item>
      <el-form-item label="博客分类">
        <el-checkbox-group v-model="checkedBlogs" @change="handleCheckedBlogChange">
          <el-checkbox v-for="blog in blogs" :label="blog" :key="blog">{{blog}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="作者">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">添加博客</el-button>
      </el-form-item>
    </el-form>
    <div v-if="submited">
      <h1>您的博客发布成功！！</h1>
    </div>
    <el-card class="box-card">

      <div slot="header" class="clearfix">
        <span>博客预览</span>
      </div>
      <div class="text item">
        <p>博客标题：{{blog.title}}</p>
        <p>博客正文：{{blog.content}}</p>
        <p>博客分类
          <ul>
              <li v-for="i in  checkedBlogs ">{{i}}</li>
          </ul>
        </p>
        <p>作者：{{value}}</p>
      </div>
    </el-card>

  </div>

</template>

<script>

    export default {
        name: "add-blog",

      data () {
        return {
        blog:{
          title:'',
          content:''
        },
        checkAll: false,
        checkedBlogs: [],
        blogs:['Vue.js', 'Node.js', 'React.js', 'Angular4'],
        isIndeterminate: true,
        options: [{
          value: 'Hemiah',
          label: 'Hemiah'
        }, {
          value: 'Henry',
          label: 'Henry'
        }, {
          value: 'Bucky',
          label: 'Bucky'
        }],
        value: '',
        submited:false
      }},
      methods:{
          handleCheckAllChange(val) {
            this.checkedBlogs = val ? blogs: [];
            this.isIndeterminate = false;
          },
          handleCheckedBlogChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.blogs.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.blogs.length;
          },
        submit(){
              this.$http.post(
                'http://jsonplaceholder.typicode.com/posts',{
                  id:1111,
                  uid:54,
                  title:this.blog.title,
                  body:this.blog.content,
                }
              ).then(
                (res)=>{
                  console.log(res);
                  this.submited = true;
                }
              ).catch(
                ()=>{console.log('失败了')}
              )
            }
      }
    }
</script>

<style>
  .el-textarea__inner{resize:none!important;}
</style>
<style scoped>
  /* 本地样式 */
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>
