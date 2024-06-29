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
        v-model="personalData.companyNameArabic"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label">اسم الشركة </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="personalData.companyNameEnglish"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم السجل التجاري </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="personalData.CommercialRegistrationNo"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الاصدار </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.releaseDate"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الانتهاء </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.endDate"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم 700</label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.number"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> تاريخ الاصدار </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.releaseDate"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> مكان الاصدار </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.place"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم عقد التاسيس </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.EstablishmentNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم ضريبي </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="personalData.taxNumber"
      />
    </div>
    <label
      for="companyIamges"
      class="col-span-2 flex items-center justify-center gap-3 border-dashed border-1 p-4 border-[#8A8A8A] rounded-md h-20 cursor-pointer"
    >
      <input type="file" class="hidden" id="companyIamges" />
      <img
        src="../../../../../public/img/icons/document-cloud.svg"
        alt="document-cloud"
        class="w-auto h-8"
      />
      <span>ارفق الصور الخاصة بالشركة </span>
    </label>
  </div>
  <div
    class="gropu-files my-10 text-sm grid grid-cols-5 md:gap-6 gap-4 justify-between items-center"
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
      <span class="text-center"> اضف السجل التجاري</span>
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
      <span class="text-center"> اضف عقد التاسيس</span>
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
      <span class="text-center"> اضف شهادة الغرفه التجارية</span>
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
      <span class="text-center">اضف العنوان الوطني </span>
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
      <span class="text-center"> اضف رقم ضريبي</span>
    </label>
  </div>
</template>
<script setup>
import { ref } from "vue";

const personalData = ref({
  companyNameArabic: "رفال",
  companyNameEnglish: "RAFAL",
  CommercialRegistrationNo: "54354",
  fullNameArabic: "احمد محمد فريد",
  releaseDate: "2023/ 01 /04",
  endDate: "2023/ 01 /04",
  number: "3456",
  place: "منصة المركز السعودي",
  EstablishmentNumber: "254325",
  taxNumber: "32-32423",
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
