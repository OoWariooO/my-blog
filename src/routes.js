import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import SingelBlog from './components/SingelBlog.vue'
export default[
  {path:'/index',component:ShowBlog},
  {path:'/add',component:AddBlog},
  {path:'/blog/:id',component:SingelBlog}
  ]
