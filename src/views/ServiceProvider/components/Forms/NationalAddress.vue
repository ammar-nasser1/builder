<template>
  <div
    class="national-address mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"
  >
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> العنوان المختصر </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.shortTitle"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> البلد </label>
      <select class="select-field w-full">
        <option>المملكة العربية السعودية</option>
        <option>asd1</option>
        <option>asd1</option>
      </select>
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> المدينة </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.city"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الحي </label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.District"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الشارع</label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.street"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label">الرمز البريدي</label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.postalCode"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> رقم المبني</label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.buildingNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الرقم الفرعي</label>
      <input
        type="text"
        id="inputField"
        class="input-field"
        v-model="NationalAddress.Subnumber"
      />
    </div>
  </div>
  <label
    for="file"
    class="w-32 h-32 mx-auto grid bg-gray-50 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"
  >
    <input type="file" id="file" class="hidden" />
    <img
      src="../../../../../public/img/icons/document-cloud.png"
      alt="document-cloud"
      class="justify-self-center"
    />
    <span class="text-center"> اضف العنوان الوطني</span>
  </label>
</template>
<script setup>
import { ref } from "vue";

const NationalAddress = ref({
  shortTitle: "56849643",
  city: "الرياض",
  District: "الربيع",
  street: "الامير بدر",
  postalCode: "00000",
  buildingNumber: "65",
  Subnumber: "32",
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
