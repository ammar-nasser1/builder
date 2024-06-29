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

    <div
      class="flex divide-y py-4 flex-col items-end bg-white rounded-xl mt-12"
    >
      <div
        class="w-full flex justify-end py-4 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>تقرير الفني</h1>
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

      <div
        class="w-[80%] flex justify-end gap-5 items-center flex-wrap px-4 py-5"
      >
        <button
          class="bg-[#F1F3F9] text-gray-600 rounded-[8px] px-14 py-2 ml-2"
        >
          ارسال أجراء الفني للمشكلة
        </button>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> حالة الطلب</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="selectedCountry"
          >
            <option value="" disabled selected>التحويل لشركة الصيانة</option>
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
      <div class="w-[95%] mx-auto">
        <h1 class="w-full text-right p-9">تفاصيل اجراء الفني</h1>
        <div
          class="w-[98%] mx-auto border p-7 rounded-2xl text-right"
          dir="rtl"
        >
          دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
          له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن
          يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم،
          غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
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
          <h1>سجل تنفيذ الطلب</h1>
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
        @click="navigateTo('closeOrder')"
        class="bg-[#3C757D] text-white shadow-sm rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        التالي
      </button>
      <button
        @click="navigateTo('sendingTechnician')"
        class="border-[#3C757D] border text-teal-600 shadow-sm rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        السابق
      </button>
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
