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
        <h1>البيانات الأولية</h1>
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
    <div class="w-full flex justify-end items-end mt-12 flex-col gap-12">
      <div class="w-[90%] flex justify-between gap-6 flex-wrap">
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">رقم هاتف العميل</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">اسم العميل</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">اهتمام العميل</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">موظف المبيعات</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">طريقة الشراء</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">حالة العميل</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> ميزانية العميل</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">طريقة التواصل </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">اسم الحي</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">اسم المدينة </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
      </div>
      <button
        @click="navigateTo('adding-unit')"
        class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
      >
        اختيار وحدة للعميل
      </button>
      <div class="flex flex-col h-[308px] gap-5 bg-white rounded-xl">
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
            <h1>الملاحظات</h1>
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
          <div
            class="w-[98%] mx-auto border p-7 rounded-2xl text-right"
            dir="rtl"
          >
            دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
            علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص
            يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ،
            غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً
            ومؤقتاً.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
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
