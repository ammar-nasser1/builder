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
          <h1>ارسال فاتورة دفع</h1>
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

      <div class="w-full flex justify-between gap-5 items-center py-4 px-3">
        <div class="w-full flex justify-end gap-5 items-center">
          <button
            @click="navigateTo('technicalReport')"
            class="bg-[#3C757D] text-white shadow-sm rounded-[8px] w-[10%] flex justify-center items-center gap-2 py-2"
          >
            مشاركة الرابط
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8.05953C8.62 8.05953 8.28 8.20953 8.02 8.44453L4.455 6.36953C4.48 6.25453 4.5 6.13953 4.5 6.01953C4.5 5.89953 4.48 5.78453 4.455 5.66953L7.98 3.61453C8.25 3.86453 8.605 4.01953 9 4.01953C9.83 4.01953 10.5 3.34953 10.5 2.51953C10.5 1.68953 9.83 1.01953 9 1.01953C8.17 1.01953 7.5 1.68953 7.5 2.51953C7.5 2.63953 7.52 2.75453 7.545 2.86953L4.02 4.92453C3.75 4.67453 3.395 4.51953 3 4.51953C2.17 4.51953 1.5 5.18953 1.5 6.01953C1.5 6.84953 2.17 7.51953 3 7.51953C3.395 7.51953 3.75 7.36453 4.02 7.11453L7.58 9.19453C7.555 9.29953 7.54 9.40953 7.54 9.51953C7.54 10.3245 8.195 10.9795 9 10.9795C9.805 10.9795 10.46 10.3245 10.46 9.51953C10.46 8.71453 9.805 8.05953 9 8.05953ZM9 2.01953C9.275 2.01953 9.5 2.24453 9.5 2.51953C9.5 2.79453 9.275 3.01953 9 3.01953C8.725 3.01953 8.5 2.79453 8.5 2.51953C8.5 2.24453 8.725 2.01953 9 2.01953ZM3 6.51953C2.725 6.51953 2.5 6.29453 2.5 6.01953C2.5 5.74453 2.725 5.51953 3 5.51953C3.275 5.51953 3.5 5.74453 3.5 6.01953C3.5 6.29453 3.275 6.51953 3 6.51953ZM9 10.0295C8.725 10.0295 8.5 9.80453 8.5 9.52953C8.5 9.25453 8.725 9.02953 9 9.02953C9.275 9.02953 9.5 9.25453 9.5 9.52953C9.5 9.80453 9.275 10.0295 9 10.0295Z"
                fill="white"
              />
            </svg>
          </button>
          <label for="option" class="w-[90%]">
            <div
              class="w-[100%] flex bg-[#FCFCFD] flex-row border focus:border-teal-600 justify-end p-2 rounded-3xl cursor-pointer"
            >
              <div class="w-[10%]">
                <button class="text-red-500">حذف</button>
              </div>
              <div class="w-[85%] flex justify-between">
                <div class="" dir="rtl">تم الدفع بنجاح !</div>
                <div class="">
                  http://Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                  sed
                </div>
              </div>
              <div class="w-[5%] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01267 11.3543 7.738 11.363C7.46267 11.371 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.246 9.81233 17.238 9.537C17.2293 9.26233 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                    fill="#08875D"
                  />
                </svg>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div class="w-full flex justify-between gap-5 items-center py-4 px-3">
        <div class="w-full flex justify-end gap-5 items-center">
          <button
            @click="navigateTo('technicalReport')"
            class="bg-[#3C757D] text-white shadow-sm rounded-[8px] w-[10%] flex justify-center items-center gap-2 py-2"
          >
            مشاركة الرابط
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8.05953C8.62 8.05953 8.28 8.20953 8.02 8.44453L4.455 6.36953C4.48 6.25453 4.5 6.13953 4.5 6.01953C4.5 5.89953 4.48 5.78453 4.455 5.66953L7.98 3.61453C8.25 3.86453 8.605 4.01953 9 4.01953C9.83 4.01953 10.5 3.34953 10.5 2.51953C10.5 1.68953 9.83 1.01953 9 1.01953C8.17 1.01953 7.5 1.68953 7.5 2.51953C7.5 2.63953 7.52 2.75453 7.545 2.86953L4.02 4.92453C3.75 4.67453 3.395 4.51953 3 4.51953C2.17 4.51953 1.5 5.18953 1.5 6.01953C1.5 6.84953 2.17 7.51953 3 7.51953C3.395 7.51953 3.75 7.36453 4.02 7.11453L7.58 9.19453C7.555 9.29953 7.54 9.40953 7.54 9.51953C7.54 10.3245 8.195 10.9795 9 10.9795C9.805 10.9795 10.46 10.3245 10.46 9.51953C10.46 8.71453 9.805 8.05953 9 8.05953ZM9 2.01953C9.275 2.01953 9.5 2.24453 9.5 2.51953C9.5 2.79453 9.275 3.01953 9 3.01953C8.725 3.01953 8.5 2.79453 8.5 2.51953C8.5 2.24453 8.725 2.01953 9 2.01953ZM3 6.51953C2.725 6.51953 2.5 6.29453 2.5 6.01953C2.5 5.74453 2.725 5.51953 3 5.51953C3.275 5.51953 3.5 5.74453 3.5 6.01953C3.5 6.29453 3.275 6.51953 3 6.51953ZM9 10.0295C8.725 10.0295 8.5 9.80453 8.5 9.52953C8.5 9.25453 8.725 9.02953 9 9.02953C9.275 9.02953 9.5 9.25453 9.5 9.52953C9.5 9.80453 9.275 10.0295 9 10.0295Z"
                fill="white"
              />
            </svg>
          </button>
          <label for="option" class="w-[90%]">
            <div
              class="w-[100%] flex bg-[#FCFCFD] flex-row border focus:border-teal-600 justify-end p-2 rounded-3xl cursor-pointer"
            >
              <div class="w-[10%]">
                <button class="text-red-500">حذف</button>
              </div>
              <div class="w-[85%] flex justify-between">
                <div class="" dir="rtl">09:59</div>
                <div class="">
                  http://Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                  sed
                </div>
              </div>
              <div class="w-[5%] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13C12.2833 13 12.521 12.904 12.713 12.712C12.9043 12.5207 13 12.2833 13 12V7.975C13 7.69167 12.9043 7.45833 12.713 7.275C12.521 7.09167 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8V12.025C11 12.3083 11.096 12.5417 11.288 12.725C11.4793 12.9083 11.7167 13 12 13ZM12 17C12.2833 17 12.521 16.904 12.713 16.712C12.9043 16.5207 13 16.2833 13 16C13 15.7167 12.9043 15.479 12.713 15.287C12.521 15.0957 12.2833 15 12 15C11.7167 15 11.4793 15.0957 11.288 15.287C11.096 15.479 11 15.7167 11 16C11 16.2833 11.096 16.5207 11.288 16.712C11.4793 16.904 11.7167 17 12 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                    fill="#E02D3C"
                  />
                </svg>
              </div>
            </div>
          </label>
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
          <h1>سجل الدفع</h1>
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

      <div class="w-full flex justify-end gap-5 items-center">
        <table
          dir="rtl"
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-[#D9E1E74D] dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
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
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ammar
              </th>
              <td class="px-6 py-4">010665606</td>
              <td class="px-6 py-4">ammar</td>
              <td class="px-6 py-4">ammar</td>
              <td class="px-6 py-4">ammar</td>
              <td class="px-6 py-4">ammar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="w-full flex justify-start gap-3">
      <button
        @click="navigateTo('completeApplicationRental')"
        class="bg-[#3C757D] text-white shadow-sm rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        التالي
      </button>
      <button
        @click="navigateTo('receivingRentalOrder')"
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
