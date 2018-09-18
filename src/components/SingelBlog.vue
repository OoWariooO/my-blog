<template>
    <div id="singel-blog">
        <h1>{{blog.title}}</h1>
        <div>{{blog.body}}</div>
    </div>
</template>

<script>
    export default {
        name: "singel-blog",
      data(){
            return{
              id:this.$route.params.id,
              blog:{}
            }
        },
      created(){
        this.$http.get(
          'http://jsonplaceholder.typicode.com/posts/'+this.id
        ).then(
          (data)=>{
            console.log(data);
            this.blog = data.data;
            // console.log(this.blogs);
          }
        ).catch(
          ()=>{console.log('失败了')}
        )
      }
    }
</script>

<style scoped>

</style>
