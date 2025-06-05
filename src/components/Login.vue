<template>
  <div class="container p-4 mx-auto mt-10">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-1/2 bg-white p-8 ">
        <h1 class="mb-6 text-2xl font-bold text-gray-800">Attendance & Leave Request</h1>

        <div class="flex flex-col sm:flex-row justify-between mb-6 gap-2">
          <input type="text" placeholder="Enter email address" class="w-full sm:w-2/5 p-2 border border-gray-300 ">
          <input type="password" placeholder="Enter password" class="w-full sm:w-2/5 p-2 border border-gray-300 ">
          <button class="w-full sm:w-1/5 p-2 text-white  bg-sky-800  ">VERIFY</button>
        </div>

        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-200">
            <h2 class="mb-3 text-xl font-semibold text-gray-700">Attendance</h2>
            <p class="mb-3 text-gray-600">10:04:27 AM | 4/5/2021</p>
            <div class="mb-4">
              <input type="checkbox" id="overtime" class="mr-2 h-4 w-4 text-gray-600 ">
              <label for="overtime" class="text-gray-700">Over Time (Optional)</label>
            </div>
            <div class="flex space-x-2">
              <button class="flex-1 p-2 text-white bg-sky-800  ">Check In</button>
              <button class="flex-1 p-2 text-white bg-sky-800 ">Check Out</button>
            </div>
          </div>

          <div class="w-full md:w-1/2 p-4">
            <h2 class="mb-3 text-xl font-semibold text-gray-700">Leave request</h2>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <select v-model="form.count" class="w-full p-2 border border-gray-300 rounded-md " required>
                  <option value="" disabled>Count *</option>
                  <option value="hour">Hour</option>
                  <option value="day">Day</option>
                </select>
              </div>
              <div class="mb-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <div class="w-full sm:w-1/2">
                  <label class="block text-sm text-gray-600 mb-1" for="startDate">Start date *</label>
                  <input v-model="form.startDate" type="date" id="startDate"
                    class="w-full p-2 border border-gray-300 rounded-md" required>
                </div>
                <div class="w-full sm:w-1/2">
                  <label class="block text-sm text-gray-600 mb-1" for="endDate">End date</label>
                  <input v-model="form.endDate" type="date" id="endDate"
                    class="w-full p-2 border border-gray-300 rounded-md ">
                </div>
              </div>
              <div class="mb-3">
                <select v-model="form.leaveType" class="w-full p-2 border border-gray-300 rounded-md " required>
                  <option value="" disabled>Leave type *</option>
                  <option value="sick">Sick</option>
                  <option value="vacation">Vacation</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
              <div class="mb-3">
                <select v-model="form.personInCharge" class="w-full p-2 border border-gray-300 rounded-md ">
                  <option value="" disabled>Person in charge (Optional)</option>
                  <option value="manager">Manager</option>
                  <option value="hr">HR</option>
                </select>
              </div>
              <div class="mb-4">
                <textarea v-model="form.notes" placeholder="Notes *"
                  class="w-full h-24 p-2 border border-gray-300 rounded-md resize-y " required></textarea>
                <p class="text-sm text-right text-gray-500">{{ form.notes.length }}/100</p>
              </div>
              <button type="submit" class="w-full p-2 text-white bg-sky-800 ">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 bg-white p-8 border-l">
        <h2 class="text-2xl font-bold mb-6 text-start text-gray-800">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input id="email" v-model="email" type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email" />
            <span v-if="emailError" class="text-sm text-red-500 mt-1 block">Incorrect email format</span>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2" for="password">Password</label>
            <input id="password" v-model="password" type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password" />
            <div class="flex justify-end mt-2">
              <a href="#" class="text-sky-600 hover:underline text-sm">Forgot password?</a>
            </div>
            <span v-if="passwordError" class="text-sm text-red-500 mt-1 block">Incorrect password</span>
          </div>
          <!-- <button type="submit" class="w-full bg-sky-800 text-white py-2">
            Login
          </button> -->
          <button type="submit" class="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-700 transition"
            :disabled="loading" :class="{ 'opacity-50 cursor-not-allowed': loading }">
            <span v-if="loading">Login...</span>
            <span v-else>Login</span>
          </button>
          <span v-if="loginError" class="block mt-4 text-sm text-red-500 text-center">Invalid email or password</span>
        </form>
        <p class="mt-4 text-center text-gray-500 text-sm">
          Don't have an account?
          <a href="#" class=" text-sky-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeaveRequest',
  data() {
    return {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      loginError: false,
      loading: false,
      Email: 'test@example.com',
      Password: '12345678',
      form: {
        count: '',
        startDate: '',
        endDate: '',
        leaveType: '',
        personInCharge: '',
        notes: ''
      }
    }
  },
  methods: {
    handleSubmit() {

      if (this.form.notes.length > 100) {
        alert('Notes cannot exceed 100 characters.');
        return;
      }

      console.log('Form submitted:', this.form);
      this.form = {
        count: '',
        startDate: '',
        endDate: '',
        leaveType: '',
        personInCharge: '',
        notes: ''
      };
      alert('Leave request submitted!');
    },
    handleLogin() {
      this.emailError = false;
      this.passwordError = false;
      this.loginError = false;
      this.loading = true;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(this.email)) {
        this.emailError = true;
        this.loading = false;
        return;
      }
      if (!this.password) {
        this.passwordError = true;
        this.loading = false;
        return;
      }

      setTimeout(() => {
        if (this.email === this.Email && this.password === this.Password) {
          this.$router.push('/dashboard/checkin');
        } else {
          this.loginError = true;
        }
        this.loading = false;
      }, 2000);
    }
  }
}
</script>
