<template>
  <div class="bg-white my-5 rounded-xl">
    <!-- Header -->
    <div
      class="flex justify-end h-[32px] py-10 bg-white items-center"
      style="border-bottom: #3c757d 4px solid"
    >
      <div
        class="pr-5"
        style="
          font-family: 'Montserrat-Arabic';
          font-size: 18px;
          font-weight: 500;
          line-height: 18px;
          text-align: right;
        "
      >
        <h1>شهادة الاعفاء الضريبي</h1>
      </div>
      <div
        class="h-[37px]"
        style="
          border-left: 5px solid #3c757d !important;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          font-family: 'Montserrat-Arabic';
          font-size: 18px;
          font-weight: 500;
          line-height: 18px;
          text-align: right;
        "
      ></div>
    </div>

    <!-- Main content -->
    <div class="py-6 mr-6">
      <div
        class="flex justify-end flex-col gap-7 items-end divide-y divide-solid divide-gray-300"
      >
        <div class="w-[30%] gap-3 flex flex-col">
          <h1 class="text-right text-lg">هل لديك اعفاء ضريبي</h1>
          <div class="flex justify-between items-center flex-row-reverse">
            <div class="flex items-center flex-row-reverse">
              <input
                id="default-radio-1"
                type="radio"
                value="yes"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @change="toggleUpfile"
              />
              <label
                for="default-radio-1"
                class="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >نعم لدي اعفاء ضريبي
              </label>
            </div>
            <div class="flex items-center flex-row-reverse">
              <input
                id="default-radio-2"
                type="radio"
                value="no"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @change="toggleUpfile"
                checked
              />
              <label
                for="default-radio-2"
                class="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >لا امتلك اعفاء ضريبي
              </label>
            </div>
          </div>
        </div>
        <transition name="fade">
          <div class="w-[98%] py-8 upfile" v-show="showUpfile">
            <label
              for="fileInput"
              class="w-[98%] h-[100px] flex flex-row-reverse items-center gap-2 border-dashed border-2 justify-center rounded-2xl cursor-pointer"
            >
              <input
                type="file"
                id="fileInput"
                class="hidden"
                @change="handleFileChange"
              />
              <img
                src="/img/icons/document-cloud.png"
                alt="asd"
                class="w-[64px] h-[64px]"
              />
              <p>ارفق شهادة الاعفاء الضريبي</p>
            </label>
          </div>
        </transition>
        <transition name="fade">
          <div class="w-[98%] py-8 upfile" v-show="showUpfile">
            <div
              for="fileInput"
              class="w-[98%] h-[100px] flex flex-row-reverse items-center gap-2 border-dashed border-2 justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/building.png"
                alt="asd"
                class="w-[64px] h-[64px]"
              />
              <p>لا توجد وحدات مختارة للعميل حتى الان</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUpfile: false, // Initially hide the upfile div
    };
  },
  methods: {
    toggleUpfile(event) {
      // Check if the "yes" radio button is selected
      if (event.target.value === "yes") {
        this.showUpfile = true; // Show the upfile div
      } else {
        this.showUpfile = false; // Hide the upfile div
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
