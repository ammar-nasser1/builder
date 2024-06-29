<template>
  <div class="mb-11">
    <!-- <h1>Welcome to the Primary Data</h1>
    <input
      v-model="data1"
      @input="updateData('data1', $event.target.value)"
      type="text"
      placeholder="Data 1"
    />
    <input
      v-model="data2"
      @input="updateData('data2', $event.target.value)"
      type="text"
      placeholder="Data 2"
    />
    <input
      v-model="data3"
      @input="updateData('data3', $event.target.value)"
      type="text"
      placeholder="Data 3"
    /> -->
    <div class="flex flex-col bg-white rounded-xl mt-12">
      <div
        class="flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>تحديد الجهة المختصة</h1>
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

      <div class="w-full flex justify-between gap-5 items-center py-5 px-3">
        <button class="bg-[#3C757D] text-white rounded-[8px] px-14 py-2 ml-2">
          التالي
        </button>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> نمط البناء</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="selectedCountry"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> نمط البناء</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="selectedCountry"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex flex-col h-[308px] gap-5 bg-white rounded-xl mt-12">
      <div
        class="flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>سجل الاستلام</h1>
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

      <div class="w-full flex justify-end gap-5 items-center"></div>
    </div>

    <div class="w-full flex justify-start gap-3">
      <button
        @click="navigateTo('sendingTechnician')"
        class="bg-[#3C757D] text-white shadow-sm rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        التالي
      </button>
      <button
        @click="navigateTo('createOrder')"
        class="border-[#3C757D] border text-teal-600 shadow-sm rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        السابق
      </button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" dir="rtl">
            <h1 class="modal-title fs-5" id="exampleModalLabel">بحث الوحدات</h1>
            <button
              class="btn-close m-0 bg-slate-50"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="bg-white rounded-xl w-full mx-auto">
              <!-- Header -->

              <!-- Main content -->
              <div class="">
                <div
                  class="flex justify-end flex-col gap-7 items-end divide-y divide-solid divide-gray-300"
                >
                  <div class="w-[100%] lg:w-[60%] gap-3 flex flex-col">
                    <h1 class="text-right text-lg">نوع البحث</h1>
                    <div class="flex justify-between items-center flex-row">
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
                          >حسب المشروع
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
                        >
                          حسب البيانات المدخلة
                        </label>
                      </div>
                    </div>
                  </div>
                  <transition name="fade">
                    <div class="w-full py-1 upfile" v-show="showUpfile">
                      <div
                        class="w-full mx-auto flex flex-col items-end gap-4 py-4"
                      >
                        <div class="input-wrapper lg:w-[43%] w-full">
                          <label for="selectField" class="label">
                            اختار المشروع</label
                          >
                          <select
                            id="selectField"
                            class="select-field w-full"
                            v-model="selectedCountry"
                          >
                            <option value="" disabled selected>
                              اختار المشروع
                            </option>
                            <option
                              v-for="option in options"
                              :value="option.value"
                              :key="option.value"
                            >
                              {{ option.label }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </transition>
                  <div class="w-[100%] pt-4">
                    <div class="relative overflow-x-auto sm:rounded-lg">
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
                          <h1>الوحدات المشابة</h1>
                        </div>
                        <div
                          class="h-[37px]"
                          style="
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
                            <th scope="col" class="px-6 py-3">
                              رقم هاتف العميل
                            </th>
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
                                <label
                                  for="checkbox-table-search-1"
                                  class="sr-only"
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

                            <td class="flex items-center px-6 py-4">
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
            </div>
          </div>
          <div class="modal-footer flex flex-col">
            <button
              data-bs-dismiss="modal"
              @click="navigateTo('/Customerlist')"
              class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
            >
              اختيار وحدة للعميل
            </button>
            <button
              class="bg-[#E1E6EF] w-[97%] text-[#3C757D] font-bold py-2 px-4 rounded"
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      selectedCountry: "", // Default selected country
      options: [
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "FR", label: "France" },
        { value: "DE", label: "Germany" },
      ],
      showUpfile: false,
    };
  },
  computed: {
    ...mapState(["data1", "data2", "data3"]),
  },
  methods: {
    ...mapMutations(["setData"]),
    updateData(field, value) {
      this.setData({ field, value });
    },
    navigateTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
<style>
.input-wrapper {
  position: relative;
  /* Adjust width as needed */
}

.label {
  position: absolute;
  top: -8px; /* Adjust vertical position */
  right: 5px; /* Adjust horizontal position */
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.input-field {
  text-align: right;
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6 !important;
  border-radius: 10px !important;
}
</style>
