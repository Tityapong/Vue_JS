<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar (fixed width, full height) -->
      <div class="flex flex-col w-64 h-full text-white bg-gray-800">
        <div class="p-4 text-xl font-bold">COTAFER</div>
        <nav class="flex-1 mt-4">
          <router-link
            to="/dashboard/check-in-out"
            class="flex items-center p-4 hover:bg-gray-700"
          >
            📅 Check In & Out
          </router-link>
          <router-link
            to="/dashboard/leave"
            class="flex items-center p-4 hover:bg-gray-700"
          >
            <span class="mr-2">📋</span> Leave Request
          </router-link>
          <router-link
            to="/dashboard/public-holiday"
            class="flex items-center p-4 hover:bg-gray-700"
          >
            <span class="mr-2">📅</span> Public Holiday
          </router-link>
          <router-link
            to="/dashboard/available"
            class="flex items-center p-4 hover:bg-gray-700"
          >
            <span class="mr-2">📆</span> Available Day
          </router-link>
          <router-link
            to="/dashboard/overtime"
            class="flex items-center p-4 hover:bg-gray-700"
          >
            <span class="mr-2">⏰</span> Overtime Day
          </router-link>
        </nav>
      </div>
  
      <!-- Right‐Hand Content (fills remaining width, full height) -->
      <div class="flex flex-col flex-1">
        <!-- Header (fixed height) -->
        <div class="flex items-center justify-between p-4 bg-white shadow">
          <div class="flex items-center">
            <input
              type="text"
              placeholder="Search"
              class="p-2 mr-4 border rounded"
            />
          </div>
          <div class="flex items-center">
            <span class="mr-4">{{ currentMonthYear }}</span>
            <div class="flex items-center">
              <span class="mr-2">👤</span>
              <span>BALEZE</span>
            </div>
          </div>
        </div>
  
        <!-- Main Scrollable Area -->
        <div class="flex-1 overflow-auto bg-gray-100">
          <!-- We add padding here so all pages (eg. Calendar.vue) get the same spacing -->
          <div class="p-6">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardLayout",
    computed: {
      currentMonthYear() {
        const date = new Date();
        return date.toLocaleString("default", { month: "short", year: "numeric" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* No extra styles needed—Tailwind classes do the job */
  </style>
  