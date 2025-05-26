<template>
    <footer class="bg-gray-800 text-gray-300 mt-auto">
      <div class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Brand & Social -->
        <div>
          <h2 class="text-xl font-bold mb-2">MyBrand</h2>
          <p class="mb-4">Building awesome experiences.</p>
          <div class="flex space-x-4">
            <a href="#" aria-label="Twitter" class="hover:text-white">
              <!-- Replace with actual icons -->
              <span>🐦</span>
            </a>
            <a href="#" aria-label="GitHub" class="hover:text-white">
              <span>🐙</span>
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:text-white">
              <span>💼</span>
            </a>
          </div>
        </div>
  
        <!-- Links -->
        <div>
          <h3 class="font-semibold mb-2">Quick Links</h3>
          <ul class="space-y-1">
            <li><router-link to="/" class="hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-white">About</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
          </ul>
        </div>
  
        <!-- Contact -->
        <div>
          <h3 class="font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@mybrand.com" class="hover:text-white">info@mybrand.com</a></p>
          <p>Phone: <a href="tel:+123456789" class="hover:text-white">+1 (234) 567-89</a></p>
        </div>
      </div>
  
      <div class="border-t border-gray-700 text-center py-4 text-sm">
        © {{ new Date().getFullYear() }} MyBrand. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  