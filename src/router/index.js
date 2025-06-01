// File: src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home      from '@/views/Home.vue'
import About     from '@/views/About.vue'
import Contact   from '@/views/Contact.vue'
import Request   from '@/components/Request.vue'

// ← Add “.vue” here:
import DashboardLayout from '@/components/DashboardLayout.vue'
import Overtime from '@/components/Overtime.vue'
import AvailableDay from '@/components/AvailableDay.vue';
import Calender from '@/components/Calender.vue'

const routes = [
  { path: '/',         component: Home },
  { path: '/about',    component: About },
  { path: '/contact',  component: Contact },
  { path: '/request',  component: Request },

  { path: '/dashboard', component: DashboardLayout
  , children: [
      { path: 'overtime', component: Overtime  },
      { path: 'available', component: AvailableDay },
      {path:'public-holiday' , component  : Calender}

   
    ]
 }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
