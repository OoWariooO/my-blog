<template>
    <div id="show-blog">

        <h1>博客总览</h1>

      <el-input v-model="search" placeholder="请输查询内容"></el-input>
        <div v-for="blog in filteredBlog" class="single-blog">
            <h2>{{blog.title|toupcase}}</h2>
            <div>{{blog.body|snippet}}</div>
            <router-link :to="'/blog/'+blog.id">查看详情</router-link>
        </div>
      <div class="block">
        <span>总数量：{{blogs.length}}个</span>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="total">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
        name: "show-blog",
        data(){
          return{
              blogs:[],
              blog1:[],
              search: '',
            currentPage1: 1,
            total: 100,
            page: 1,
            pageSize: 10,
            pageNum:1

          }
        },
      methods:{
        //获取列表数据
        getUser: function () {
         let startCurrent =(this.pageNum-1)*this.pageSize;
         let stopCurrent =this.pageNum*this.pageSize;

           this.blog1 = this.blogs.slice(startCurrent,stopCurrent);
          console.log(this.blog1);
         // this.blog1 = this.blogs.slice(this.pageNum*(this.pageSize-1,this.pageNum*this.pageSize);
        },

        //条目改变时
        handleCurrentChange(val) {
          this.pageNum = val;
          this.getUser();
        }


      },
        created(){
          this.$http.get(
            './../static/posts.json'
          ).then(
            (data)=>{
              console.log(data);
              //this.blogs = data.data.slice(0,10);
              this.blogs = data.data;
              this.blog1 = data.data.slice(0,10);
              console.log(this.blogs);
            }
          ).catch(
            ()=>{console.log('失败了')}
          )

        },
      computed:{
          filteredBlog:function(){
            return this.blog1.filter(
              (blog)=>{
                return blog.title.match(this.search);
              }
            )
          }
      },

    }
</script>

<style scoped>
#show-blog{
  max-width: 800px;
  margin: 0 auto;
}
  .single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
