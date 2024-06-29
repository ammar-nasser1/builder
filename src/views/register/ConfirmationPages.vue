<template>
  <div
    class="max-w-2xl mx-auto py-8 px-4 rtl text-center h-[100vh] flex flex-col justify-center"
  >
    <div class="flex justify-center mb-6">
      <svg
        width="78"
        height="52"
        viewBox="0 0 78 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="64"
          y="21.668"
          width="15.1177"
          height="25.1962"
          rx="7.55886"
          transform="rotate(30 64 21.668)"
          fill="#3C757D"
        />
        <rect
          x="25.1953"
          width="15.1177"
          height="50.3924"
          rx="7.55886"
          transform="rotate(30 25.1953 0)"
          fill="#3C757D"
        />
        <rect
          x="50.8984"
          width="15.1177"
          height="50.3924"
          rx="7.55886"
          transform="rotate(30 50.8984 0)"
          fill="#3C757D"
        />
      </svg>
    </div>
    <!-- Progress tracker -->
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <!-- Repeat this block for each step -->
        <div class="flex flex-col items-center">
          <div
            :class="{
              'bg-teal-600 text-white': currentStep >= 1,
              'bg-white text-gray-500': currentStep < 1,
            }"
            class="rounded-full h-10 w-10 flex items-center justify-center border-2 border-teal-600 font-bold"
          >
            1
          </div>
          <div
            class="text-xs mt-2"
            :class="{
              'text-teal-600': currentStep >= 1,
              'text-gray-500': currentStep < 1,
            }"
          >
            تفعيل البريد الإلكتروني
          </div>
        </div>
        <!-- Add connecting line here -->
        <div
          class="flex-auto border-t-2"
          :class="{
            'border-teal-600': currentStep > 1,
            'border-gray-300': currentStep <= 1,
          }"
        ></div>

        <div class="flex items-center flex-col">
          <div
            :class="{ 'bg-teal-600 text-white': currentStep >= 2 }"
            class="rounded-full h-10 w-10 flex items-center justify-center border-2 font-bold"
          >
            2
          </div>
          <div
            class="text-xs mt-2"
            :class="{
              'text-teal-600': currentStep >= 2,
              'text-gray-500': currentStep < 2,
            }"
          >
            تفعيل رقم الجوال
          </div>
        </div>
        <div
          class="flex-auto border-t-2 transition duration-500 ease-in-out"
          :class="{ 'border-teal-600': currentStep > 2 }"
        ></div>
        <div class="flex items-center flex-col">
          <div
            :class="{ 'bg-teal-600 text-white': currentStep >= 3 }"
            class="rounded-full h-10 w-10 flex items-center justify-center border-2 font-bold"
          >
            3
          </div>
          <div
            class="text-xs mt-2"
            :class="{
              'text-teal-600': currentStep >= 3,
              'text-gray-500': currentStep < 3,
            }"
          >
            انشاء كلمة المرور
          </div>
        </div>
      </div>
    </div>

    <!-- Step Content -->
    <!-- Step 1: Email Verification -->
    <div v-if="currentStep === 1">
      <input
        type="email"
        v-model="formData.email"
        placeholder="بريدك الإلكتروني"
        class="mb-4 block w-full px-4 py-3 rounded-lg border shadow-sm focus:teal-teal-500"
        required
      />
      <input
        type="text"
        v-model="formData.emailOtp"
        placeholder="رمز التحقق"
        class="mb-6 block w-full px-4 py-3 rounded-lg border shadow-sm focus:teal-teal-500"
        required
      />
      <button
        @click="verifyEmail"
        class="mb-2 w-full bg-black text-white px-4 py-3 rounded-lg"
      >
        تأكيد
      </button>
      <p v-if="otpStatus === 'error'" class="text-red-500">
        الرمز الذي أدخلته غير صحيح
      </p>
    </div>

    <!-- Step 2: Mobile Verification -->
    <div v-else-if="currentStep === 2">
      <input
        type="tel"
        v-model="formData.mobile"
        placeholder="رقم الجوال"
        class="mb-4 block w-full px-4 py-3 rounded-lg border shadow-sm focus:teal-teal-500"
        required
      />
      <input
        type="text"
        v-model="formData.mobileOtp"
        placeholder="رمز التحقق"
        class="mb-6 block w-full px-4 py-3 rounded-lg border shadow-sm focus:teal-teal-500"
        required
      />
      <button
        @click="verifyMobile"
        class="mb-2 w-full bg-black text-white px-4 py-3 rounded-lg"
      >
        تأكيد
      </button>
      <p v-if="otpStatus === 'error'" class="text-red-500">
        الرمز الذي أدخلته غير صحيح
      </p>
    </div>

    <!-- Step 3: Password Creation -->
    <div v-else-if="currentStep === 3">
      <input
        type="password"
        v-model="formData.password"
        placeholder="كلمة السر"
        class="mb-4 block w-full px-4 py-3 rounded-lg border shadow-sm focus:border-teal-500"
        required
      />
      <input
        type="password"
        v-model="formData.confirmPassword"
        placeholder="تأكيد كلمة السر"
        class="mb-6 block w-full px-4 py-3 rounded-lg border shadow-sm focus:border-teal-500"
        required
      />
      <button
        @click="createPassword"
        class="w-full bg-black text-white px-4 py-3 rounded-lg"
      >
        انشاء كلمه المرور
      </button>
      <p v-if="otpStatus === 'success'" class="text-green-500">
        تم إنشاء كلمة المرور بنجاح
      </p>
      <p v-if="otpStatus === 'error'" class="text-red-500">
        كلمة المرور غير صحيحة
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      otpStatus: "",
      formData: {
        email: "",
        emailOtp: "",
        mobile: "",
        mobileOtp: "",
        password: "",
        confirmPassword: "",
      },
      // Fixed values for demo purposes
      correctEmailOtp: "123456",
      correctMobileOtp: "123456",
      fixedPassword: "password123",
    };
  },
  methods: {
    verifyEmail() {
      if (this.formData.emailOtp === this.correctEmailOtp) {
        this.currentStep++;
        this.otpStatus = "";
      } else {
        this.otpStatus = "error";
      }
    },
    verifyMobile() {
      if (this.formData.mobileOtp === this.correctMobileOtp) {
        this.currentStep++;
        this.otpStatus = "";
      } else {
        this.otpStatus = "error";
      }
    },
    createPassword() {
      if (
        this.formData.password === this.fixedPassword &&
        this.formData.password === this.formData.confirmPassword
      ) {
        this.otpStatus = "success";
        // You might want to handle the successful password creation here.
      } else {
        this.otpStatus = "error";
      }
    },
    // Call this method if you want to go back to the previous step.
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.otpStatus = "";
      }
    },
  },
};
</script>

<style scoped>
/* Scoped styles for your form elements */
.rtl {
  direction: rtl;
}
</style>
