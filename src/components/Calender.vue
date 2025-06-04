<template>
  <div class="flex w-full mx-auto mt-8">
    <div class="w-3/4 bg-white rounded-lg shadow-sm">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="mb-1 text-sm font-medium text-gray-600">Public holiday</h1>
            <h2 class="text-2xl font-bold text-gray-900">
              {{ monthName }} {{ currentYear }}
            </h2>
          </div>
          <div class="flex items-center space-x-2">
            <button @click="previousMonth" class="p-2 transition-colors rounded-md hover:bg-gray-100">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <span class="px-2 text-sm text-gray-500">
              {{ monthName.slice(0, 3) }} {{ currentYear }}
            </span>
            <button @click="nextMonth" class="p-2 transition-colors rounded-md hover:bg-gray-100">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Weekday Labels -->
      <div class="grid grid-cols-7 border-t border-l border-gray-300 bg-gray-50">
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="py-3 text-sm font-medium text-center text-gray-700 border-b border-r border-gray-300"
        >
          {{ day }}
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="relative">
        <!-- Holiday Banners -->
        <div class="absolute inset-0 grid grid-cols-7 grid-rows-6 pointer-events-none z-1">
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

        <!-- Day Cells -->
        <div class="relative z-0 grid grid-cols-7 border-l border-gray-300">
          <div
            v-for="(day, idx) in calendarDays"
            :key="idx"
            :class="[
              'relative border-b border-r border-gray-300 h-24 transition-colors',
              day.isCurrentMonth ? 'cursor-pointer  text-gray-900' : 'bg-gray-50 cursor-default text-gray-400',
              day.isToday ? 'bg-yellow-100 ring-2 ring-yellow-400' : ''
            ]">
            <div class="flex flex-col p-2">
              <span class="mb-1 text-sm font-medium">
                {{ day.day }}
              </span>
              <!-- Single-day holiday: show inside cell if no multi-day banner -->
              <div v-if="day.isSingleHoliday && day.isCurrentMonth" class="flex-1">
                <div class="px-2 py-1 text-xs text-center text-blue-800 bg-blue-100 rounded">
                  {{ day.holidayName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    <div class="w-1/4 p-4 rounded-r-lg shadow-sm bg-gray-50">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">
        Holidays (Jan - Apr)
      </h3>
      <div class="space-y-3">
        <div v-for="(month, idx) in months.slice(0, 4)" :key="month">
          <h4 class="text-sm font-medium text-gray-700">{{ month }}</h4>
          <div v-if="getMonthHolidays(idx).length > 0" class="pl-2 space-y-2">
            <div
              v-for="holiday in getMonthHolidays(idx)"
              :key="holiday.name + holiday.startDay"
              class="p-3 text-sm text-blue-800 bg-blue-100 rounded">
              <p class="font-medium">{{ holiday.name }}</p>
              <p>
                <span v-if="holiday.startDay === holiday.endDay">
                  {{ months[holiday.month].slice(0, 3) }} {{ holiday.startDay }}
                </span>
                <span v-else>
                  {{ months[holiday.month].slice(0, 3) }} {{ holiday.startDay }} - {{ holiday.endDay }}
                </span>
              </p>
            </div>
          </div>
          <p v-else class="pl-2 text-sm text-gray-600">
            No holidays
          </p>
        </div>
        <button
          @click="showModal = true"
          class="mt-4 text-sm text-blue-600 hover:text-blue-800"
        >
          Show More
        </button>
      </div>
    </div>
  </div>



  <!-- Modal content updated for simpler holiday list layout -->
<div
  v-if="showModal"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div class="relative w-full max-w-4xl p-6 bg-white rounded-lg max-h-[80vh] overflow-y-auto">
    <button
      @click="showModal = false"
      class="absolute text-2xl text-gray-400 top-3 right-3 hover:text-gray-700 focus:outline-none"
      aria-label="Close" >
      &times;
    </button>
    <h3 class="pb-3 mb-6 text-xl font-semibold text-gray-900 border-b">
      All Holidays (Jan - Dec)
    </h3>
    <div class="grid grid-cols-4 gap-x-10 gap-y-6">
      <div v-for="(month, idx) in months" :key="month">
        <h4 class="pb-1 mb-3 text-base font-bold text-gray-900 border-b border-gray-300">
          {{ month }}
        </h4>
        <div v-if="getMonthHolidays(idx).length > 0" class="space-y-3">
          <div
            v-for="holiday in getMonthHolidays(idx)"
            :key="holiday.name + holiday.startDay"
            class="text-gray-900">
            <p class="text-sm font-semibold leading-tight">{{ holiday.name }}</p>
            <p class="text-xs text-gray-600">
              <span v-if="holiday.startDay === holiday.endDay">
                {{ months[holiday.month].slice(0, 3) }} {{ holiday.startDay }}
              </span>
              <span v-else>
                {{ months[holiday.month].slice(0, 3) }} {{ holiday.startDay }} - {{ holiday.endDay }}
              </span>
            </p>
          </div>
        </div>
        <p v-else class="text-sm text-gray-400">
          No holidays
        </p>
      </div>
    </div>
  </div>
</div>

  
 
</template>

<script setup name="Calendar">
import { ref, computed } from 'vue'

const todayDate = new Date()
const currentMonth = ref(todayDate.getMonth())
const currentYear = ref(todayDate.getFullYear())
const showModal = ref(false)

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const daysOfWeek = [
  'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
]
const holidays = ref([
  {
    name: "New Year's Day",
    month: 0,
    startDay: 1,
    endDay: 1
  },
  {
    name: "Victory Day",
    month: 0,
    startDay: 7,
    endDay: 7
  },
  {
    name: "International Women's Day",
    month: 2,
    startDay: 8,
    endDay: 8
  },
  {
    name: "Khmer New Year",
    month: 3,
    startDay: 13,
    endDay: 16
  },
  {
    name: "International Labour Day",
    month: 4,
    startDay: 1,
    endDay: 1
  },
  {
    name: "King's Birthday",
    month: 4,
    startDay: 14,
    endDay: 14
  },
  {
    name: "King's Coronation Day",
    month: 4,
    startDay: 13,
    endDay: 13
  },
  {
    name: "Queen Mother's Birthday",
    month: 5,
    startDay: 18,
    endDay: 18
  },
  {
    name: "Pchum Ben",
    month: 8,
    startDay: 25,
    endDay: 27
  },
  {
    name: "Constitutional Day",
    month: 8,
    startDay: 24,
    endDay: 24
  },
  {
    name: "King Father's Commemoration Day",
    month: 9,
    startDay: 15,
    endDay: 15
  },
  {
    name: "Independence Day",
    month: 10,
    startDay: 9,
    endDay: 9
  },
  {
    name: "Water Festival",
    month: 10,
    startDay: 12,
    endDay: 14
  }
]);

const monthName = computed(() => months[currentMonth.value])
console.log(monthName.value)

const calendarDays = computed(() => {
  const firstDow = new Date(currentYear.value, currentMonth.value, 1).getDay()
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  const daysInPrev = new Date(currentYear.value, currentMonth.value, 0).getDate()
  const cells = []

  // Previous month's trailing days
  for (let i = firstDow - 1; i >= 0; i--) {
    cells.push({
      day: daysInPrev - i,
      isCurrentMonth: false,
      isPrevMonth: true,
      isSingleHoliday: false,
      holidayName: null,
      isToday: false
    })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const singleMatch = holidays.value.find(h =>
      h.month === currentMonth.value &&
      h.startDay === h.endDay &&
      d === h.startDay
    )
    const isToday =
      d === todayDate.getDate() &&
      currentMonth.value === todayDate.getMonth() &&
      currentYear.value === todayDate.getFullYear()
    cells.push({
      day: d,
      isCurrentMonth: true,
      isPrevMonth: false,
      isSingleHoliday: !!singleMatch,
      holidayName: singleMatch ? singleMatch.name : null,
      isToday
    })
  }

  // Cell length 
  const filled = cells.length
  const toFill = 42 - filled
  for (let i = 1; i <= toFill; i++) {
    cells.push({
      day: i,
      isCurrentMonth: false,
      isPrevMonth: false,
      isSingleHoliday: false,
      holidayName: null,
      isToday: false
    })
  }

  return cells
})

const holidayBars = computed(() => {
  const bars = []
  const cells = calendarDays.value

  holidays.value.forEach((h) => {
    if (h.month !== currentMonth.value || h.endDay <= h.startDay) {
      return
    }
    const startIndex = cells.findIndex(c =>
      c.isCurrentMonth && c.day === h.startDay
    )
    const endIndex = cells.findIndex(c =>
      c.isCurrentMonth && c.day === h.endDay
    )
    if (startIndex < 0 || endIndex < 0) return

    const row = Math.floor(startIndex / 7) + 1
    const colStart = (startIndex % 7) + 1
    const colEnd = (endIndex % 7) + 2

    const monAbbrev = months[currentMonth.value].slice(0, 3)
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

// Get holidays for a given month index
function getMonthHolidays(monthIdx) {
  return holidays.value.filter(h => h.month === monthIdx)
}

function previousMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}
</script>