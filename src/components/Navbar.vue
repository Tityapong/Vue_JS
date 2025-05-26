<template>
    <nav class="bg-white shadow-lg fixed w-full z-10">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-3xl font-extrabold text-gray-800">MyBrand</router-link>
  
        <!-- Desktop Links -->
        <ul class="hidden md:flex space-x-8 text-gray-700">
          <li>
            <router-link to="/" active-class="text-blue-600" class="hover:text-blue-600">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/about" active-class="text-blue-600" class="hover:text-blue-600">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="text-blue-600" class="hover:text-blue-600">
              Contact
            </router-link>
          </li>
        </ul>
  
        <!-- Mobile Hamburger -->
        <button
          @click="open = !open"
          class="md:hidden focus:outline-none text-gray-700"
          aria-label="Toggle menu"
        >
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <transition name="slide-fade">
        <ul
          v-show="open"
          class="md:hidden bg-white border-t"
        >
          <li class="border-b">
            <router-link to="/" class="block px-4 py-3 hover:bg-gray-100">Home</router-link>
          </li>
          <li class="border-b">
            <router-link to="/about" class="block px-4 py-3 hover:bg-gray-100">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="block px-4 py-3 hover:bg-gray-100">Contact</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return { open: false };
    }
  }
  </script>
  
  <style scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  </style>
  