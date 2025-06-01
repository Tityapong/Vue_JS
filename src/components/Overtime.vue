<template>
    <div class="p-6">
      <h1 class="mb-4 text-2xl font-bold">Overtime Day</h1>
      <div class="flex items-center justify-between mb-4">
        <div class="flex space-x-2">
          <span class="text-blue-500">PUBLIC HOLIDAY</span>
          <span class="text-red-500">SATURDAY & SUNDAY</span>
        </div>
       
      </div>
  
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="p-2 text-left">Date</th>
              <th class="p-2 text-left">Check In</th>
              <th class="p-2 text-left">Check Out</th>
              <th class="p-2 text-left">Total</th>
              <th class="p-2 text-left">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in overtimeRecords" :key="index" :class="{
              'bg-red-100': record.type === 'SATURDAY & SUNDAY',
              'bg-blue-100': record.type === 'PUBLIC HOLIDAY'
            }">
              <td class="p-2">{{ record.date }}</td>
              <td class="p-2">{{ record.checkIn }}</td>
              <td class="p-2">{{ record.checkOut }}</td>
              <td class="p-2">{{ record.total }}</td>
              <td class="p-2">{{ record.reason }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Overtime",
    data() {
      return {
        overtimeRecords: [
          {
            date: "04/25/2021",
            checkIn: "8:10 AM",
            checkOut: "5:03 PM",
            total: "8:13",
            type: "SATURDAY & SUNDAY",
            reason: ""
          },
          {
            date: "04/26/2021",
            checkIn: "8:00 AM",
            checkOut: "8:00 PM",
            total: "3:00",
            type: "SATURDAY & SUNDAY",
            reason: ""
          },
          {
            date: "04/13/2021",
            checkIn: "8:10 AM",
            checkOut: "12:10 PM",
            total: "4:00",
            type: "PUBLIC HOLIDAY",
            reason: ""
          },
          {
            date: "04/10/2021",
            checkIn: "9:00 AM",
            checkOut: "7:00 PM",
            total: "1:00",
            type: "SATURDAY & SUNDAY",
            reason: ""
          },
          {
            date: "04/09/2021",
            checkIn: "8:00 AM",
            checkOut: "6:03 PM",
            total: "1:03",
            type: "SATURDAY & SUNDAY",
            reason: ""
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Ensure the table rows align with the background colors */
  tbody tr {
    background-color: inherit;
  }
  </style>