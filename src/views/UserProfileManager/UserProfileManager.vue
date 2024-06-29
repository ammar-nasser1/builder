<template>
  <div style="direction: rtl" class="container text-end text-sm pt-16">
    <div class="w-[80%] mx-auto min-h-[900px] rounded-md border">
      <ClientInputs></ClientInputs>
      <StepsSection :setps="setps" :currentStep="currentStep"></StepsSection>
      <div class="page-content grid items-start min-h-[700px] w-[80%] mx-auto">
        <BasicInformation v-if="currentStep === 1"></BasicInformation>
        <PersonalInformation v-if="currentStep === 2"></PersonalInformation>
        <LanguageRegion v-if="currentStep === 3"></LanguageRegion>
        <FunctionalData v-if="currentStep === 4"></FunctionalData>
        <activeAccountModel></activeAccountModel>
        <div class="flex justify-center mb-6 self-end gap-4">
          <button
            class="bg-white border border-[#3C757D] text-[#3C757D] rounded-[8px] w-[20%] p-3"
            @click="prevSetps"
            v-if="currentStep > 1 && currentStep < 4"
          >
            السابق
          </button>
          <button
            class="bg-[#3C757D] rounded-[8px] text-white w-[20%] p-3"
            @click="nextSetps"
            v-if="currentStep !== 4"
          >
            التالي
          </button>
          <button
            class="bg-[#3C757D] rounded-[8px] text-white w-[20%] p-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            v-if="currentStep === 4"
          >
            انشاء حساب
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const setps = ref([1, 2, 3, 4]);
const currentStep = ref(1);
import ClientInputs from "./components/ClientInputs.vue";
import StepsSection from "./components/StepsSection.vue";
import BasicInformation from "./components/Forms/BasicInformation.vue";
import PersonalInformation from "./components/Forms/PersonalInformation.vue";
import LanguageRegion from "./components/Forms/LanguageRegion.vue";
import FunctionalData from "./components/Forms/FunctionalData.vue";
import activeAccountModel from "./components/ActiveAccountModel.vue";
let circles = document.getElementsByClassName("circle");
let bars = document.getElementsByClassName("bar");

const nextSetps = () => {
  currentStep.value++;
  updateSteps();
};
const prevSetps = () => {
  currentStep.value--;
  updateSteps();
};
const updateSteps = () => {
  Array.from(circles).forEach((element, index) => {
    element.classList.toggle("active-circle", index < currentStep.value);
  });
  Array.from(bars).forEach((element, index) => {
    element.classList.toggle("active-bar", index < currentStep.value - 1);
  });
};
</script>
