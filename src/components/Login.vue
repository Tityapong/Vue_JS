<template>
    <div class="flex min-h-screen py-36">
      <!-- LEFT PANEL -->
      <div class="relative flex flex-col w-1/2 bg-white">
        <!-- “COTAFER Logo” in top‐right -->
        <div class="absolute top-6 right-8">
          <h1 class="text-2xl font-bold tracking-wider text-gray-800">
            COTAFER Logo
          </h1>
        </div>
  
        <!-- Login Form Container -->
        <div class="flex flex-col justify-center flex-1 px-16">
          <!-- Login Heading -->
          <h2 class="mb-8 text-3xl font-semibold text-gray-800">Login</h2>
  
          <!-- Email Input -->
          <label for="email" class="block mb-2 text-sm font-medium text-gray-600">
            Email address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter email address"
            class="block w-full px-4 py-3 mb-6 text-gray-700 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
  
          <!-- Password Input -->
          <label for="password" class="block mb-2 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
  
          <!-- Forgot Password Link -->
          <div class="flex justify-end mt-2 mb-6">
            <a href="#" class="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
  
          <!-- Login Button -->
          <button
            @click="handleLogin"
            class="w-full py-3 font-semibold text-white uppercase transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-900"
          >
            Login
          </button>
        </div>
  
        <!-- CLOCK & LAMP ICONS (stacked) -->
        <div class="flex flex-col items-center pb-16 space-y-8">
          <!-- Clock Icon -->
          <img
            src="https://img.icons8.com/ios-filled/100/4a5568/clock.png"
            alt="Clock"
            class="object-contain w-20 h-20 opacity-80"
          />
  
          <!-- Lamp Icon -->
          <img
            src="https://img.icons8.com/ios-filled/100/4a5568/lamp.png"
            alt="Lamp"
            class="object-contain w-16 h-16 opacity-70"
          />
        </div>
      </div>
  
      <!-- RIGHT PANEL -->
      <div class="relative w-1/2 overflow-hidden bg-gray-900">
        <!-- Big white circle to create the curved “cut‐out” -->
        <div
          class="absolute -left-40 -top-40 w-[200%] h-[200%] bg-white rounded-full"
        ></div>
  
        <!-- Person Illustration at bottom‐right -->
        <div class="absolute bottom-0 right-0">
          <img
            src="https://img.icons8.com/fluency/240/ffffff/user-male-circle.png"
            alt="Person Illustration"
            class="object-contain w-80 h-80"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      handleLogin() {
        // TODO: Replace with actual authentication logic
        console.log("Logging in with:", this.email, this.password);
      }
    }
  };
  </script>
  
  <style>
  /* 
    No extra CSS needed—Tailwind utility classes handle all styling.
    If you want to tweak scrollbars or hide browser‐specific icons, you can do so here.
  */
  </style>
  