<!-- File: src/components/Calendar.vue -->
<template>
    <div class="bg-white rounded-lg shadow-sm">
      <!-- Header: “Public holiday” title + Month/Year + nav arrows -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="mb-1 text-sm font-medium text-gray-600">Public holiday</h1>
            <h2 class="text-2xl font-bold text-gray-900">
              {{ monthName }} {{ currentYear }}
            </h2>
          </div>
          <div class="flex items-center space-x-2">
            <button
              @click="previousMonth"
              class="p-2 transition-colors rounded-md hover:bg-gray-100"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
  
            <span class="px-2 text-sm text-gray-500">
              {{ monthName.substr(0, 3) }} {{ currentYear }}
            </span>
  
            <button
              @click="nextMonth"
              class="p-2 transition-colors rounded-md hover:bg-gray-100"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Weekday Labels (Sun–Sat) -->
      <div class="grid grid-cols-7 border-t border-l border-gray-300 bg-gray-50">
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="py-3 text-sm font-medium text-center text-gray-700 border-b border-r border-gray-300"
        >
          {{ day }}
        </div>
      </div>
  
      <!-- Calendar Grid Container -->
      <div class="relative ">
        <!-- ======== Holiday Banners (on top of cells) ========
             We place these in a 7×6 CSS Grid, absolutely layered above the transparent cells.
        -->
        <div class="absolute inset-0 z-10 grid grid-cols-7 grid-rows-6 pointer-events-none">
          <div
            v-for="(bar, i) in holidayBars"
            :key="i"
            class="h-12 px-2 py-2 mx-1 mt-10 overflow-hidden text-xs text-blue-800 bg-blue-100 rounded whitespace-nowrap"
            :style="{
              gridColumnStart: bar.colStart,
              gridColumnEnd: bar.colEnd,
              gridRowStart: bar.row
            }"
          >
            <div>{{ bar.label }}</div>
            <div>{{ bar.name }}</div>
          </div>
        </div>
  
        <!-- ======== Day Cells (transparent backgrounds) ======== -->
        <div class="relative z-0 grid grid-cols-7 border-l border-gray-300">
          <div
            v-for="(day, idx) in calendarDays"
            :key="idx"
            @click="toggleCheckIn(day)"
            :class="[
              'relative border-b border-r border-gray-300 h-24 transition-colors',
              day.isCurrentMonth ? 'cursor-pointer hover:bg-gray-50 text-gray-900' : 'bg-gray-50 cursor-default text-gray-400'
            ]"
          >
            <div class="flex flex-col p-2">
              <span class="mb-1 text-sm font-medium">
                {{ day.day }}
              </span>
  
              <!-- Single-day holiday: show inside cell if no multi-day banner -->
              <div v-if="day.isSingleHoliday && day.isCurrentMonth" class="flex-1">
                <div
                  class="px-2 py-1 text-xs text-center text-blue-800 bg-blue-100 rounded"
                >
                  {{ day.holidayName }}
                </div>
              </div>
  
              <!-- Check‐in indicator (small dot) -->
              <div
                v-if="day.isCheckedIn && day.isCurrentMonth"
                class="absolute top-2 right-2"
              >
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup name="Calendar">
  import { ref, computed } from 'vue'
  
  // 0-indexed month (0 = January, 3 = April, etc.)
  const currentMonth = ref(3)
  const currentYear = ref(2021)
  
  // “Checked in” days, just for demonstration
  const checkedInDates = ref([9, 23])
  
  // Month names for header
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  // Days of week
  const daysOfWeek = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
  ]
  
  // Holiday data: each may span multiple days (inclusive)
  // If startDay === endDay, it’s a single‐day holiday.
  const holidays = ref([
    {
      name: "New Year's Day",
      month: 0,
      startDay: 1,
      endDay: 1,
      date: "Fri, 1 Jan 2021"
    },
    {
      name: "Victory Day",
      month: 0,
      startDay: 7,
      endDay: 7,
      date: "Thu, 7 Jan 2021"
    },
    {
      name: "International Women's Day",
      month: 2,
      startDay: 8,
      endDay: 8,
      date: "Mon, 8 Mar 2021"
    },
    {
      name: "Khmer New Year’s",
      month: 3,
      startDay: 13,
      endDay: 15,
      date: "13 Apr – 15 Apr 2021"
    }
  ])
  
  // Computed: current month name
  const monthName = computed(() => months[currentMonth.value])
  
  /**
   * Build 42 “day cells” (6 rows × 7 columns) including:
   *  - trailing days from previous month
   *  - days of this month
   *  - leading days for next month
   *
   * Mark each cell:
   *  - isCurrentMonth: true/false
   *  - isSingleHoliday: true if this exact day is a single‐day holiday
   *  - holidayName: the name (only for single‐day holiday)
   */
  const calendarDays = computed(() => {
    // Which weekday does the 1st of this month fall on? (0=Sun … 6=Sat)
    const firstDow = new Date(currentYear.value, currentMonth.value, 1).getDay()
    // How many days in this month?
    const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
    // How many days in the previous month?
    const daysInPrev = new Date(currentYear.value, currentMonth.value, 0).getDate()
  
    const cells = []
  
    // 1) Fill trailing days from previous month
    for (let i = firstDow - 1; i >= 0; i--) {
      cells.push({
        day: daysInPrev - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        isCheckedIn: false,
        isSingleHoliday: false,
        holidayName: null
      })
    }
  
    // 2) Fill days for the current month
    for (let d = 1; d <= daysInMonth; d++) {
      // Check if this d is a single‐day holiday (startDay === endDay)
      const singleMatch = holidays.value.find(h =>
        h.month === currentMonth.value &&
        h.startDay === h.endDay &&
        d === h.startDay
      )
  
      cells.push({
        day: d,
        isCurrentMonth: true,
        isPrevMonth: false,
        isCheckedIn: checkedInDates.value.includes(d),
        isSingleHoliday: !!singleMatch,
        holidayName: singleMatch ? singleMatch.name : null
      })
    }
  
    // 3) Fill overflow into next month to total 42 cells
    const filled = cells.length
    const toFill = 42 - filled
    for (let i = 1; i <= toFill; i++) {
      cells.push({
        day: i,
        isCurrentMonth: false,
        isPrevMonth: false,
        isCheckedIn: false,
        isSingleHoliday: false,
        holidayName: null
      })
    }
  
    return cells
  })
  
  /**
   * Build “holidayBars” for multi‐day holidays.
   * For each holiday with startDay < endDay:
   *  - find the index of the start‐day cell in calendarDays
   *  - find the index of the end‐day cell
   *  - compute row = Math.floor(index/7)+1, colStart = (index%7)+1, colEnd = (endIdx%7)+2
   *  - label = "<startDay> <MonAbbrev> – <endDay> <MonAbbrev>"
   */
  const holidayBars = computed(() => {
    const bars = []
    const cells = calendarDays.value
  
    holidays.value.forEach((h) => {
      // Skip if not this month or if a single-day holiday
      if (h.month !== currentMonth.value || h.endDay <= h.startDay) {
        return
      }
  
      // Find the cell index for startDay and endDay
      const startIndex = cells.findIndex(c =>
        c.isCurrentMonth && c.day === h.startDay
      )
      const endIndex = cells.findIndex(c =>
        c.isCurrentMonth && c.day === h.endDay
      )
      if (startIndex < 0 || endIndex < 0) return
  
      // Compute grid row/column
      const row = Math.floor(startIndex / 7) + 1       // 1..6
      const colStart = (startIndex % 7) + 1            // 1..7
      const colEnd = (endIndex % 7) + 2                // exclusive (one past)
  
      // Build label, e.g. "13 Apr – 15 Apr"
      const monAbbrev = months[currentMonth.value].substr(0, 3)
      const label = `${h.startDay} ${monAbbrev} – ${h.endDay} ${monAbbrev}`
  
      bars.push({
        row,
        colStart,
        colEnd,
        label,
        name: h.name
      })
    })
  
    return bars
  })
  
  // Navigate to previous month
  const previousMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }
  
  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }
  
  // Toggle a “checked-in” dot for a given day cell
  const toggleCheckIn = (day) => {
    if (!day.isCurrentMonth) return
    const idx = checkedInDates.value.indexOf(day.day)
    if (idx > -1) {
      checkedInDates.value.splice(idx, 1)
    } else {
      checkedInDates.value.push(day.day)
    }
  }
  </script>
  
  <style scoped>
  /* No extra CSS needed—Tailwind’s utility classes cover all styling. */
  </style>
  