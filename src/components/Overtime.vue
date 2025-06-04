<template>
  <div class="flex min-h-screen bg-gray-50">
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">
          Overtime Day
        </h2>

        <!-- Month Picker (modern style, no icon) -->
        <div class="w-48">
      
          <input
            id="monthPicker"
            type="month"
            v-model="selectedMonth"
            placeholder="YYYY-MM"
            class="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 transition-colors duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>
      </div>

      <!-- Legend -->
      <div class="flex items-center mb-6 space-x-6">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-4 rounded-sm bg-sky-300"></div>
          <span class="text-xs text-gray-500 uppercase">
            Public Holiday
          </span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-8 h-4 bg-red-400 rounded-sm"></div>
          <span class="text-xs text-gray-500 uppercase">
            Saturday & Sunday
          </span>
        </div>
      </div>

      <!-- Table or No-Data -->
      <div v-if="filteredRecords.length > 0">
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr class="bg-sky-100">
                <th class="px-6 py-3 text-sm font-medium text-left text-gray-700 border-b">
                  Date
                </th>
                <th class="px-6 py-3 text-sm font-medium text-left text-gray-700 border-b">
                  Check In
                </th>
                <th class="px-6 py-3 text-sm font-medium text-left text-gray-700 border-b">
                  Check Out
                </th>
                <th class="px-6 py-3 text-sm font-medium text-left text-gray-700 border-b">
                  Total
                </th>
                <th class="px-6 py-3 text-sm font-medium text-left text-gray-700 border-b">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="overtime in filteredRecords" 
                :key="overtime.date"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-3 text-sm text-gray-600 border-b">
                  {{ overtime.date }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 border-b">
                  {{ overtime.checkIn }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 border-b">
                  {{ overtime.checkOut }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 border-b">
                  {{ overtime.total }}
                </td>
                <td class="px-6 py-3 text-sm text-gray-600 border-b">
                  {{ overtime.reason }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- No Data Placeholder -->
      <div 
        v-else 
        class="flex flex-col items-center justify-center py-16"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23MrQRaDLa9N4ft4HxmItdM1u8U3RNBD3CA&s"
          alt="No Data Available"
          class="object-contain w-64 h-64 opacity-60"
        />
        <p class="mt-4 text-gray-500">No overtime records for this month</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // month in "YYYY-MM" format; defaults to current month
      selectedMonth: new Date().toISOString().slice(0, 7),

      // Sample data
      overtimes: [
        { date: '2025-05-20', checkIn: '8:30am', checkOut: '5:40pm', total: '8:13', reason: 'N/A' },
        { date: '2025-04-10', checkIn: '8:00am', checkOut: '5:00pm', total: '3.00', reason: 'N/A' },
        { date: '2024-06-15', checkIn: '9:00am', checkOut: '6:30pm', total: '4.50', reason: 'Project deadline' },
        { date: '2023-03-22', checkIn: '8:45am', checkOut: '7:15pm', total: '5.30', reason: 'Client meeting' },
        { date: '2022-12-10', checkIn: '7:30am', checkOut: '4:45pm', total: '3.25', reason: 'N/A' },
        { date: '2021-11-05', checkIn: '8:15am', checkOut: '6:00pm', total: '4.00', reason: 'System maintenance' }
      ]
    };
  },
  computed: {
    filteredRecords() {
      if (!this.selectedMonth) return [];
      return this.overtimes.filter(overtime => {
        // Compare first 7 characters: "YYYY-MM"
        return overtime.date.slice(0, 7) === this.selectedMonth;
      });
    }
  }
};
</script>

<style>
/* If you’d like to tweak the native appearance of input[type="month"], you can add custom CSS here.
   For example, to hide the default picker icon in some browsers, you could try:
   
   input[type="month"]::-webkit-calendar-picker-indicator {
     display: none;
     -webkit-appearance: none;
   }
   
   But note that removing all native arrows/pickers can sometimes reduce usability on mobile.
*/
</style>
