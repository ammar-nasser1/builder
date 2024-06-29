<template>
  <div class="w-[100%] flex flex-col items-center justify-center">
    <div class="w-full flex flex-col items-center">
      <div class="w-[100%]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-xl mt-24">
          <div
            class="flex justify-end h-[32px] py-10 bg-white items-center border-b"
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
              <h1>{{ tabledata.name }}</h1>
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
          <table
            dir="rtl"
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-[#D9E1E74D] dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="p-4"></th>
                <th
                  scope="col"
                  class="px-6 py-3"
                  v-for="head in tabledata.headers"
                  :key="head.id"
                >
                  {{ head }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="data in tabledata.data"
                :key="data.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only"
                      >checkbox</label
                    >
                  </div>
                </td>

                <td
                  v-for="(value, key) in data"
                  v-show="key !== 'id'"
                  :key="key"
                  class="px-6 py-4"
                >
                  {{ value }}
                </td>

                <td
                  class="flex items-center px-6 py-4"
                  @click="navigateTo('PaymentDetails')"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="7.5"
                      fill="white"
                      stroke="#CECECE"
                    />
                    <path
                      d="M7.80156 10.8C7.14156 10.8 6.60156 11.34 6.60156 12C6.60156 12.66 7.14156 13.2 7.80156 13.2C8.46156 13.2 9.00156 12.66 9.00156 12C9.00156 11.34 8.46156 10.8 7.80156 10.8Z"
                      fill="#BDBDBD"
                    />
                    <path
                      d="M16.2 10.8C15.54 10.8 15 11.34 15 12C15 12.66 15.54 13.2 16.2 13.2C16.86 13.2 17.4 12.66 17.4 12C17.4 11.34 16.86 10.8 16.2 10.8Z"
                      fill="#BDBDBD"
                    />
                    <path
                      d="M12.0008 10.8C11.3408 10.8 10.8008 11.34 10.8008 12C10.8008 12.66 11.3408 13.2 12.0008 13.2C12.6608 13.2 13.2008 12.66 13.2008 12C13.2008 11.34 12.6608 10.8 12.0008 10.8Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["tabledata"],
  methods: {
    navigateTo(name) {
      this.$router.push({ name: name });
    },
  },
  mounted() {},
};
</script>

<style scoped>
@font-face {
  font-family: "Montserrat-Arabic";

  src: url("/public/Montserrat-ArabicRegular/Montserrat-Arabic-Regular.ttf")
    format("truetype");
}
* {
  font-family: Montserrat-Arabic;
}
</style>
