<template>
    <div class="p-6">
      <h1 class="mb-4 text-2xl font-bold">Available Day</h1>
  
      <!-- Progress Circles -->
      <div class="flex justify-start mb-6 space-x-8">
        <!-- Annual Leave -->
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center w-24 h-24">
            <div class="relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-sm font-bold">3/18</span>
              </div>
              <svg class="w-24 h-24">
                <circle
                  class="text-gray-300"
                  stroke-width="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
                <circle
                  class="text-red-500"
                  stroke-width="5"
                  stroke-dasharray="220"
                  stroke-dashoffset="183"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
              </svg>
            </div>
          </div>
          <span class="mt-2 text-sm">Annual Leave</span>
          <span class="text-sm">days per year</span>
        </div>
  
        <!-- Sick Leave -->
      l;  <div class="flex flex-col items-center">
          <div class="flex items-center justify-center w-24 h-24">
            <div class="relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-sm font-bold">1/5</span>
              </div>
              <svg class="w-24 h-24">
                <circle
                  class="text-gray-300"
                  stroke-width="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
                <circle
                  class="text-red-500"
                  stroke-width="5"
                  stroke-dasharray="220"
                  stroke-dashoffset="176"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
              </svg>
            </div>
          </div>
          <span class="mt-2 text-sm">Sick Leave</span>
          <span class="text-sm">days per year</span>
        </div>
  
        <!-- Special Leave -->
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center w-24 h-24">
            <div class="relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-sm font-bold">1/10</span>
              </div>
              <svg class="w-24 h-24">
                <circle
                  class="text-gray-300"
                  stroke-width="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
                <circle
                  class="text-red-500"
                  stroke-width="5"
                  stroke-dasharray="220"
                  stroke-dashoffset="198"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="35"
                  cx="48"
                  cy="48"
                />
              </svg>
            </div>
          </div>
          <span class="mt-2 text-sm">Special Leave</span>
          <span class="text-sm">days per year</span>
        </div>
      </div>
  
      <!-- Year Selector -->
      <div class="flex justify-end mb-4">
        <select v-model="selectedYear" class="p-1 border rounded">
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
  
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="p-2 text-left">Date</th>
              <th class="p-2 text-left">Leave type</th>
              <th class="p-2 text-left">Person in charge</th>
              <th class="p-2 text-left">Note</th>
              <th class="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in filteredRecords" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="p-2">{{ record.date }}</td>
              <td class="p-2">{{ record.leaveType }}</td>
              <td class="p-2">{{ record.personInCharge }}</td>
              <td class="p-2">{{ record.note }}</td>
              <td class="p-2">
                <span :class="{
                  'text-green-500': record.status === 'APPROVED',
                  'text-red-500': record.status === 'DECLINED',
                  'text-yellow-500': record.status === 'PENDING'
                }">
                  {{ record.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AvailableDay",
    data() {
      return {
        selectedYear: 2021,
        years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        records: [
          {
            date: "04/01/2021 - 04/01/2021",
            leaveType: "Annual leave",
            personInCharge: "Sithykun LY",
            note: "I have personal issue.",
            status: "PENDING",
            year: 2021
          },
          {
            date: "01/03/2021 - 01/05/2021",
            leaveType: "Sick leave",
            personInCharge: "-",
            note: "I have headache.",
            status: "APPROVED",
            year: 2021
          },
          {
            date: "04/01/2021 - 04/01/2021",
            leaveType: "Special leave",
            personInCharge: "Sithykun LY",
            note: "I have personal issue at university",
            status: "APPROVED",
            year: 2021
          },
          {
            date: "01/03/2021 - 01/05/2021",
            leaveType: "Annual leave",
            personInCharge: "-",
            note: "I have personal issue at university",
            status: "DECLINED",
            year: 2021
          }
        ]
      };
    },
    computed: {
      filteredRecords() {
        return this.records.filter(record => record.year === this.selectedYear);
      }
    }
  };
  </script>
  
  <style>
  svg circle:nth-child(2) {
    transform: rotate(-90deg);
    transform-origin: center;
  }
  </style>