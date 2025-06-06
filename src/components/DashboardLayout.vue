<template>
  <div class="flex min-h-screen bg-gray-100">
    <aside
      :class="['bg-white shadow-lg flex flex-col transition-all duration-300', isSidebarOpen ? 'w-64' : 'w-[60px]']">
      <div class="h-[74px] flex items-center bg-custom px-4 mb-0 space-x-2">
        <button @click="toggleSidebar" class="focus:outline-none">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 v-if="isSidebarOpen" class="text-2xl font-bold text-white text-center">COTAFER</h2>
      </div>
      <nav class="flex-1">
        <ul class="space-y-2">
          <li>
            <router-link to="/dashboard/checkin"
              :class="['relative flex items-center space-x-2 py-2 px-4 hover:bg-sky-100 text-gray-700 font-medium group', { 'bg-custom-active text-custom-active font-bold': $route.path === '/dashboard/checkin' }]">
              <svg class="w-5 h-5 text-sky-800" :class="{ 'text-white': $route.path === '/dashboard/checkin' }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span v-if="isSidebarOpen">Check In & Out</span>
              <span v-else
                class="absolute z-10 px-2 py-1 ml-4 text-sm text-white transition-opacity duration-300 bg-gray-700 rounded opacity-0  left-full whitespace-nowrap group-hover:opacity-100">
                Check In & Out
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/leave"
              :class="['relative flex items-center space-x-2 py-2 px-4 hover:bg-sky-100 text-gray-700 font-medium group', { 'bg-custom-active text-custom-active font-bold': $route.path === '/dashboard/leave' }]">
              <svg class="w-5 h-5 text-sky-800" :class="{ 'text-white': $route.path === '/dashboard/leave' }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" fill="none" />
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" />
                <path d="M12 14v4m2-2h-4" stroke="currentColor" stroke-linecap="round" />
              </svg>
              <span v-if="isSidebarOpen">Leave Request</span>
              <span v-else
                class="absolute z-10 px-2 py-1 ml-4 text-sm text-white transition-opacity duration-300 bg-gray-700 rounded opacity-0  left-full whitespace-nowrap group-hover:opacity-100">
                Leave Request
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/public-holiday"
              :class="['relative flex items-center space-x-2 py-2 px-4 hover:bg-sky-100 text-gray-700 font-medium group', { 'bg-custom-active text-custom-active font-bold': $route.path === '/dashboard/public-holiday' }]">
              <svg class="w-5 h-5  text-sky-800" :class="{ 'text-white': $route.path === '/dashboard/public-holiday' }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span v-if="isSidebarOpen">Public Holiday</span>
              <span v-else
                class="absolute z-10 px-2 py-1 ml-4 text-sm text-white transition-opacity duration-300 bg-gray-700 rounded opacity-0  left-full whitespace-nowrap group-hover:opacity-100">
                Public Holiday
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/available-day"
              :class="['relative flex items-center space-x-2 py-2 px-4 hover:bg-sky-100 text-gray-700 font-medium group', { 'bg-custom-active text-custom-active font-bold': $route.path === '/dashboard/available-day' }]">
              <svg class="w-5 h-5 text-sky-800" :class="{ 'text-white': $route.path === '/dashboard/available-day' }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span v-if="isSidebarOpen">Available Day</span>
              <span v-else
                class="absolute z-10 px-2 py-1 ml-4 text-sm text-white transition-opacity duration-300 bg-gray-700 rounded opacity-0  left-full whitespace-nowrap group-hover:opacity-100">
                Available Day
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/ot"
              :class="['relative flex items-center space-x-2 py-2 px-4 hover:bg-sky-100 text-gray-700 font-medium group', { 'bg-custom-active text-custom-active font-bold': $route.path === '/dashboard/ot' }]">
              <svg class="w-5 h-5 text-sky-800" :class="{ 'text-white': $route.path === '/dashboard/ot' }" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span v-if="isSidebarOpen">Overtime Day</span>
              <span v-else
                class="absolute z-10 px-2 py-1 ml-4 text-sm text-white transition-opacity duration-300 bg-gray-700 rounded opacity-0  left-full whitespace-nowrap group-hover:opacity-100">
                Overtime Day
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col">
      <header class="flex items-center justify-between bg-custom shadow px-8 py-4">
        <div class="flex ml-24  items-center space-x-2">
          <input type="text" placeholder="Search..."
            class=" px-5 py-2  w-[400px] border rounded focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <button class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
            </svg>
          </button>
        </div>
        <div class="relative flex items-center space-x-2">
          <button @click="toggleProfileDropdown"
            class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-200 focus:outline-none">
            <img :src="userProfileImage" alt="User profile" class="w-full h-full rounded-full object-cover" />
          </button>
          <span class="text-white">Baleze</span>
          <div v-if="isProfileDropdownOpen" class="absolute right-0 top-full mt-2 w-48 bg-white  z-20">
            <a href="#" @click.prevent="viewProfile" class="block px-4 py-2 text-gray-800 hover:bg-sky-100">Profile</a>
            <a href="/setting"  class="block px-4 py-2 text-gray-800 hover:bg-sky-100">Settings</a>
            <div class="border-t border-gray-200 "></div>
            <a href="#" @click.prevent="logout" class="block px-4 py-2 text-red-600 hover:bg-sky-100">Logout</a>
          </div>
        </div>
      </header>
      <main class="flex-1 p-5">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
      isProfileDropdownOpen: false,
      userProfileImage: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleProfileDropdown() {
      this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    },
    viewProfile() {
      this.$router.push('/dashboard/profile');
    },
    logout() {
      this.$router.push('/');
    },
  },

};
</script>

<style scoped>
.text-custom-active {
  color: white;
  background-color: #10366d;
}

.bg-custom-active {
  background-color: #10366d;
}

.router-link-active:hover,
.router-link-exact-active:hover {
  background-color: #10366d !important;

}

.bg-custom {
  background-color: #10366d;
}
</style>
