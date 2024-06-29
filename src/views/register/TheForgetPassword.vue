<template>
  <div class="max-w-2xl mx-auto py-8 px-4 rtl text-center rtl">
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
            ادخال البريد الإلكتروني او رقم الجوال
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

        <div
          class="flex-auto border-t-2 transition duration-500 ease-in-out"
          :class="{ 'border-teal-600': currentStep > 1 }"
        ></div>
        <div class="flex items-center">
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
            ادخال رمز التحقق
          </div>
        </div>
        <div
          class="flex-auto border-t-2 transition duration-500 ease-in-out"
          :class="{ 'border-teal-600': currentStep > 2 }"
        ></div>
        <div class="flex items-center">
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
            تغيير كلمه المرور
          </div>
        </div>
      </div>

      <!-- Form title -->
      <div class="text-center text-3xl font-semibold mb-6">
        ادخل بريدك الإلكتروني او رقم الجوال
      </div>

      <!-- Input with icon -->
      <div
        class="flex items-center relative border-2 border-gray-300 mb-4 rounded-xl"
      >
        <!-- Email/Mobile SVG icon -->
        <div class="absolute left-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z"
              fill="black"
            />
            <path
              d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
              fill="black"
            />
          </svg>
        </div>
        <input
          type="text"
          class="w-full py-4 pl-12 pr-4 rounded-xl text-gray-700 leading-tight focus:outline-none"
          placeholder="البريد الإلكتروني أو رقم الجوال"
        />
      </div>

      <!-- Buttons container -->
      <div class="flex justify-between mt-4 space-x-4">
        <!-- Confirm Button -->
        <button
          class="bg-black text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-opacity-90 focus:outline-none transition duration-150 ease-in-out flex-1 mr-2"
          type="button"
        >
          تأكيد
        </button>

        <!-- Cancel Button -->
        <button
          class="bg-white text-black py-3 px-8 rounded-xl text-lg font-semibold hover:bg-opacity-70 focus:outline-none transition duration-150 ease-in-out flex-1 ml-2"
          type="button"
        >
          إلغاء
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      emailOrMobile: "",
      otp: "",
      message: "",
      isSuccess: false,
      isError: false,
    };
  },
  methods: {
    verifyOtp() {
      if (this.otp === "1234") {
        this.message = "تم تأكيد الرمز بنجاح!";
        this.isSuccess = true;
        this.isError = false;
        this.currentStep = 2; // Go to the next step
      } else {
        this.message = "الرمز الذي أدخلته غير صحيح.";
        this.isError = true;
        this.isSuccess = false;
      }
      // Clear the input
      this.otp = "";
    },
    // Add methods for subsequent steps here...
  },
};
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>
