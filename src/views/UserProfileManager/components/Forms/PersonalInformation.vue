<template>
  <div
    class="Personal-data mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"
  >
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم الهوية </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.idNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الميلاد (ميلادي) </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.dob"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الجنسية </label>
      <select class="select-field w-full">
        <option>سعودي</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الحالة الاجتماعية </label>
      <select class="select-field w-full">
        <option>اعزب</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الجنس</label>
      <select class="select-field w-full">
        <option>ذكر</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم الايبان (IBAN) </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.IBAN"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const personalData = ref({
  idNumber: "23523453452",
  dob: "2024-3-1",
  fullNameArabic: "احمد محمد فريد",
  fullNameEnglish: "Ahmed Mohamed Farid",
  email: "A.f.ghonaim@gmail.com",
  phoneNumber: "+96651  234  5678",
  authorizationNumber: "678556745",
  releaseDate: "2023/ 01 /04",
  IBAN: "43258007",
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
