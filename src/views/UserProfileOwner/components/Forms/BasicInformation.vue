<template>
  <div
    class="Personal-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 items-center"
  >
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label">اسم الشركة </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="personalData.companyName"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> معرف المستخدم </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="personalData.userId"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الاسم بالكامل </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.fullNameArabic"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الاسم بالكامل </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.fullNameEnglish"
      />
    </div>

    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> البريد الإلكتروني : </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.email"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم الجوال </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.phoneNumber"
      />
    </div>
    <hr class="w-[50%] h-[1px] mx-auto col-span-2 bg-[#295157]" />

    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم تفويض </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.authorizationNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ اصدار </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.releaseDate"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ انتهاء </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.endDate"
      />
    </div>
  </div>
  <div
    class="gropu-files mt-16 text-sm grid grid-cols-5 md:gap-6 gap-4 justify-between items-center"
  >
    <label
      for="file"
      class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
    >
      <input type="file" id="file" class="hidden" />
      <img
        src="../../../../../public/img/icons/document-cloud.png"
        alt="document-cloud"
        class="justify-self-center"
      />
      <span class="text-center">اضف الهوية الوطنية</span>
    </label>
    <label
      for="file"
      class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
    >
      <input type="file" id="file" class="hidden" />
      <img
        src="../../../../../public/img/icons/document-cloud.png"
        alt="document-cloud"
        class="justify-self-center"
      />
      <span class="text-center">اضف الهوية الوطنية</span>
    </label>
    <label
      for="file"
      class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
    >
      <input type="file" id="file" class="hidden" />
      <img
        src="../../../../../public/img/icons/document-cloud.png"
        alt="document-cloud"
        class="justify-self-center"
      />
      <span class="text-center">اضف الهوية الوطنية</span>
    </label>
    <label
      for="file"
      class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
    >
      <input type="file" id="file" class="hidden" />
      <img
        src="../../../../../public/img/icons/document-cloud.png"
        alt="document-cloud"
        class="justify-self-center"
      />
      <span class="text-center">اضف الهوية الوطنية</span>
    </label>
    <label
      for="file"
      class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
    >
      <input type="file" id="file" class="hidden" />
      <img
        src="../../../../../public/img/icons/document-cloud.png"
        alt="document-cloud"
        class="justify-self-center"
      />
      <span class="text-center">اضف الهوية الوطنية</span>
    </label>
  </div>
</template>
<script setup>
import { ref } from "vue";

const personalData = ref({
  companyName: "رفال",
  userId: "RAF-7546574",
  fullNameArabic: "احمد محمد فريد",
  fullNameEnglish: "Ahmed Mohamed Farid",
  email: "A.f.ghonaim@gmail.com",
  phoneNumber: "+96651  234  5678",
  authorizationNumber: "678556745",
  releaseDate: "2023/ 01 /04",
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
