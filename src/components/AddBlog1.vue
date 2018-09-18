<template>

  <div class="add-blog1">

      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
  {{a}}
  </div>

</template>

<script>
  // import {mapGetters,mapActions} from 'vuex'
  // //const BlogOptions = ['Vue.js', 'Node.js', 'React.js', 'Angular4'];
  const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
      data() {
        return {
          checkAll: false,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true,
          a:''
        };
      },
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];

          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.a = value;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
