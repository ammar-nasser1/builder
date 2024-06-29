<template>
  <div
    class="Functional-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 items-center"
  >
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الرقم الوظيفي </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="FunctionalData.jobNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label">الفرع</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="FunctionalData.branch"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الانضمام (ميلادي) </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="FunctionalData.JoiningDateHijri"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الانضمام (هجري) </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="FunctionalData.fullNameEnglish"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> المدير المباشر </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="FunctionalData.directManager"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> نوع الوظيفة </label>
      <select class="select-field w-full">
        <option>دوام كامل</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> المسمي الوظيفي </label>
      <select class="select-field w-full">
        <option>مدير مالي</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الموقع </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="FunctionalData.site"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> القسم </label>
      <select class="select-field w-full">
        <option>مبيعات</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الدرجة </label>
      <select class="select-field w-full">
        <option>اول</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const FunctionalData = ref({
  jobNumber: "329-54846",
  branch: "الرياض",
  JoiningDate: "2022 / 5 / 5",
  JoiningDateHijri: "1444 / 4 / 4",
  directManager: "وائل محمد",
  phoneNumber: "+96651  234  5678",
  jobTitle: "678556745",
  site: "الرياض",
  endDate: "2023/ 01 /04",
});
</script>
<style scoped>
.label {
  position: absolute;
  top: -10px;
  right: 5px;
  background-color: white;
  font-size: 12px;
}
</style>
