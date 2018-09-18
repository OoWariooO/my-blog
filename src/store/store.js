import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
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
  a:''
};
const muntations = {
  // value: {
  //   get () {
  //     return this.$store.state.obj.message
  //   },
  //   set (value) {
  //     this.$store.commit('updateMessage', value)
  //   }
  // }
  // value_change(state,value){
  //   var obj = {};
  //   obj = arr.find(function(item){
  //     return item.whsCode === val
  //   });
  //   //obj 就是被选中的那个对象，
  //   console.log(obj.whsAddress)//label值
  // }
  // handleCheckAllChange(val) {
  //   state.a=val;
  //   state.checkedBlogs = val ? BlogOptions : [];
  //   state.isIndeterminate = false;
  // }
  // handleCheckedBlogChange(value) {
  //   let checkedCount = value.length;
  //   state.a = value;
  //   // state.checkAll = checkedCount === state.blogs.length;
  //   // state.isIndeterminate = checkedCount > 0 && checkedCount < state.blogs.length;
  // }
};
const actions = {
  //   submit(){
  //     // console.log('111');
  //   },
  // // handleCheckAllChange({commit}) {
  // //     commit( 'handleCheckAllChange');
  // //     },
  // value(commit,value){
  //     commit('value_change',value);
  // }
  // // handleCheckedBlogChange({commit}) {
  // //     commit('handleCheckedBlogChange');
  // //
  // // }

};
const getters = {
  // blog(state){
  //   return state.blog;
  // },
  // checkAll(state){
  //   return state.checkAll;
  // },
  // checkedBlogs(state){
  //   return state.checkedBlogs;
  // },
  // blogs(state){
  //   return state.blogs;
  // },
  // isIndeterminate(state){
  //   return state.isIndeterminate;
  // },
  // options(state){
  //   return state.options;
  // },
  // value(state){
  //   return state.value;
  // }
};
export default new Vuex.Store({
  state,
  muntations,
  actions,
  getters
})

