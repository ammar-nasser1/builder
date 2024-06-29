<template>
  <div
    class="contact-information mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"
  >
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الموقع الالكتروني</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.website"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> البريد الإلكتروني : </label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.email"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> الرقم الموحد</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.unifiedNumber"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> LinkedIn</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.website"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> Instagram</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.website"
      />
    </div>
    <div class="input-wrapper w-[80%]">
      <label for="inputField" class="label"> Twitter</label>
      <input
        type="text"
        id="inputField"
        class="input-field bg-gray-100"
        v-model="ContactData.website"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const ContactData = ref({
  website: "Www.example.com",
  email: "email@example.com",
  unifiedNumber: "+96651  234  5678",
});
</script>
<style scoped></style>
