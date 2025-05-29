import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Request from '@/components/Request.vue'

const routes = [
  { path: '/',      component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }, 
  {path:'/request' , component: Request}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
