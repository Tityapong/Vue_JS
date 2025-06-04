<template>
    <div class="flex min-h-screen">
      <!-- LEFT PANEL -->
      <div class="relative flex flex-col w-1/2 bg-white">
        <!-- “COTAFER Logo” in top‐right -->
        <div class="absolute top-6 right-8">
          <h1 class="text-2xl font-bold tracking-wide text-gray-800">
            COTAFER Logo
          </h1>
        </div>
  
        <!-- Login Form Container -->
        <div class="flex flex-col justify-center flex-1 px-16">
          <h2 class="mb-8 text-3xl font-semibold text-gray-800">Login</h2>
  
          <!-- Email Input -->
          <label class="block mb-2 text-sm font-medium text-gray-600" for="email">
            Email address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter email address"
            class="block w-full px-4 py-3 mb-6 text-gray-700 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
  
          <!-- Password Input -->
          <label class="block mb-2 text-sm font-medium text-gray-600" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
  
          <!-- Forgot Password -->
          <div class="flex justify-end mt-2 mb-6">
            <a href="#" class="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
  
          <!-- Login Button -->
          <button
            @click="handleLogin"
            class="w-full py-3 font-semibold text-white uppercase transition-colors duration-200 bg-gray-800 rounded-lg  hover:bg-gray-900"
          >
            Login
          </button>
        </div>
      </div>
  
      <!-- RIGHT PANEL -->
      <div class="relative w-1/2 overflow-hidden bg-gray-900">
        <!-- Big white circle to create the curved “cut‐out” -->
        <div
          class="
            absolute
            -left-40 -top-40
            w-[200%] h-[200%]
            bg-white
            rounded-full
          "
        ></div>
  
        <!-- Illustration (replace with your own SVG/PNG) -->
        <div class="absolute bottom-0 right-0 p-12">
          <!-- 
            In your screenshot, there’s a stylized illustration of a person sitting. 
            Below is a placeholder SVG. Swap it out with your actual asset.
          -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 w-72 h-72"
            fill="none"
            viewBox="0 0 200 200"
          >
            <path
              fill="currentColor"
              d="M100 0C44.771 0 0 44.771 0 100s44.771 100 100 100 100-44.771 100-100S155.229 0 100 0zm0 15c25.405 0 46 20.595 46 46s-20.595 46-46 46-46-20.595-46-46 20.595-46 46-46zm0 170c-25.405 0-46-20.595-46-46h92c0 25.405-20.595 46-46 46z"
            />
          </svg>
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
        // Replace this with your real authentication logic:
        console.log("Attempting to log in with:", this.email, this.password);
        // e.g. call an API, perform validation, etc.
      }
    }
  };
  </script>
  
  <!--
    No separate CSS needed—everything comes from Tailwind utility classes.
    If you want to hide the native “month” picker icon (for example), you could add custom styles here.
  -->
  <style>
  </style>
  