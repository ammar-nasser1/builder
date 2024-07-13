<template>
  <div class="w-[100%] flex flex-col items-center justify-center">
    <bread-crumb :data="breadcrumb" />
    <div class="w-[96%] flex flex-col items-center">
      <div
        class="flex lg:justify-between justify-center flex-wrap items-center w-[100%]"
      >
        <div class="w-[100%] justify-between flex flex-wrap gap-2">
          <div
            v-for="card in [1, 2]"
            :key="card.id"
            class="w-[100%] md:w-[48%] h-[150px] bg-[#FFFFFF] flex flex-col justify-evenly px-[18px] py-2 rounded-[16px]"
          >
            <div class="flex flex-row justify-between">
              <div
                class="w-[72px] h-[28px] rounded-[8px] bg-[#3C757D24] flex items-center justify-center"
                style="
                  font-family: Montserrat-Arabic;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 14px;
                  letter-spacing: 0em;
                  text-align: right;
                "
              >
                +16,5 %
              </div>
              <div class="card-name flex items-center justify-center">
                متاحة للبيع
              </div>
            </div>
            <div class="card-num">10</div>
            <div class="card-foot">مقارنة بالشهر السابق (750)</div>
          </div>
        </div>
      </div>
      <div class="w-[100%]">
        <div
          class="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 border border-green-400 dark:border-gray-700"
        >
          <div
            class="flex justify-end h-[32px] py-10 bg-white items-center border-b shadow-sm"
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
              <h1>قائمة عروض وخصومات</h1>
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
                <th scope="col" class="px-6 py-3">اسم العميل</th>
                <th scope="col" class="px-6 py-3">رقم هاتف العميل</th>
                <th scope="col" class="px-6 py-3">اسم المشروع</th>
                <th scope="col" class="px-6 py-3">اسم الوحدة</th>
                <th scope="col" class="px-6 py-3">طريقة الوصول</th>
                <th scope="col" class="px-6 py-3">الاجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="data in tabledata"
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
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ data.cust_name }}
                </th>
                <td class="px-6 py-4">{{ data.phone }}</td>
                <td class="px-6 py-4">{{ data.pr_name }}</td>
                <td class="px-6 py-4">{{ data.unit_name }}</td>
                <td class="px-6 py-4">{{ data.way_connect }}</td>

                <td
                  class="flex items-center px-6 py-4"
                  @click="navigateTo('ShowOffer')"
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
const tabledata = require("/public/data/tabledata.json");
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import BreadCrumb from "@/components/BreadCrumb.vue";
export default {
  data() {
    return {
      tabledata: tabledata,
      breadcrumb: {
        levels: [
          { name: "المستوى الأول", route: "level1" },
          { name: "المستوى الثاني", route: "level2" },
          { name: "المستوى الثالث", route: "level3" },
        ],
        name: "عروض وخصومات",
        btn: {
          isfuc: false,
          isbtn: true,
          name: "إضافة عرض جديد",
          route: "AddOffer",
        },
      },
    };
  },
  components: {
    BreadCrumb,
  },
  methods: {
    navigateTo(name) {
      this.$router.push({ name: name });
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* Add this to your CSS */
/* Add this to your CSS */

@font-face {
  font-family: "Montserrat-Arabic";

  src: url("/public/Montserrat-ArabicRegular/Montserrat-Arabic-Regular.ttf")
    format("truetype");
}
* {
  font-family: Montserrat-Arabic;
}
.card-name {
  font-family: Montserrat-Arabic;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;
}
.card-num {
  font-family: Montserrat-Arabic;
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: right;
  color: #3c757d;
}
.card-foot {
  font-family: Montserrat-Arabic;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
}
</style>
