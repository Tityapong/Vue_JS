<template>
    <div class="container p-4 mx-auto mt-10 ">
      <h1 class="mb-4 text-2xl font-bold">Attendance & Leave request</h1>
      <div class="flex justify-between mb-4">
        <input type="text" placeholder="Enter email address" class="w-1/3 p-2 mr-2 border">
        <input type="password" placeholder="Enter password" class="w-1/3 p-2 mr-2 border">
        <button class="w-1/6 p-2 text-white bg-gray-800">VERIFY</button>
      </div>z
      <div class="flex">
        <div class="w-1/2 p-4 border-r">
          <h2 class="mb-2 text-xl font-semibold">Attendance</h2>
          <p class="mb-2">10:04:27 AM | 4/5/2021</p>
          <div class="mb-2">
            <input type="checkbox" id="overtime" class="mr-2">
            <label for="overtime">Over Time (Optional)</label>
          </div>
          <div class="flex space-x-2">
            <button class="p-2 text-white bg-gray-800">Check In</button>
            <button class="p-2 text-white bg-gray-800">Check out</button>
          </div>
        </div>
        <div class="w-1/2 p-4">
          <h2 class="mb-2 text-xl font-semibold">Leave request</h2>
          <div class="mb-2">
            <input type="number" placeholder="Count *" class="w-full p-2 mb-2 border" required>
          </div>
          <div class="mb-2">
            <input type="date" placeholder="Start date *" class="w-full p-2 mb-2 border" required>
            <input type="date" placeholder="End date" class="w-full p-2 mb-2 border">
          </div>
          <div class="mb-2">
            <select class="w-full p-2 mb-2 border" required>
              <option value="" disabled selected>Leave type *</option>
              <option value="sick">Sick</option>
              <option value="vacation">Vacation</option>
              <option value="personal">Personal</option>
            </select>
          </div>
          <div class="mb-2">
            <select class="w-full p-2 mb-2 border">
              <option value="" disabled selected>Person in charge (Optional)</option>
              <option value="manager">Manager</option>
              <option value="hr">HR</option>
            </select>
          </div>
          <div class="mb-2">
            <textarea placeholder="Notes *" class="w-full h-24 p-2 border" required></textarea>
            <p class="text-sm text-right text-red-500">0/100</p>
          </div>
          <button class="w-full p-2 text-white bg-gray-800">SUBMIT</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Request'
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>