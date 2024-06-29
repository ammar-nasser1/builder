<template>
  <div style="direction: rtl" class="container text-end text-sm pt-16">
    <div class="w-[90%] mx-auto min-h-[900px] rounded-md border">
      <HeaderPage @handleClick="handleClick"></HeaderPage>
      <ClientInputs></ClientInputs>
      <StepsSection :setps="setps" :currentStep="currentStep"></StepsSection>
      <div class="page-content grid items-start min-h-[700px] w-[80%] mx-auto">
        <CompanyData v-if="currentStep === 1"></CompanyData>
        <NationalAddress v-if="currentStep === 2"></NationalAddress>
        <ContactInformation v-if="currentStep === 3"></ContactInformation>
        <ManagerData v-if="currentStep === 4"></ManagerData>
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
import { useRouter } from "vue-router"; // Correctly import useRouter
const router = useRouter(); // Use useRouter correctly
const setps = ref([1, 2, 3, 4]);
const currentStep = ref(1);
import HeaderPage from "./components/HeaderPage.vue";
import ClientInputs from "./components/ClientInputs.vue";
import StepsSection from "./components/StepsSection.vue";
import CompanyData from "./components/Forms/CompanyData.vue";
import NationalAddress from "./components/Forms/NationalAddress.vue";
import ContactInformation from "./components/Forms/ContactInformation.vue";
import ManagerData from "./components/Forms/ManagerData.vue";
import activeAccountModel from "./components/ActiveAccountModel.vue";
let circles = document.getElementsByClassName("circle");
let bars = document.getElementsByClassName("bar");
const handleClick = (btn) => {
  switch (btn.buttonText) {
    case "مطور عقاري":
      router.push({
        name: "RealEstateDeveloper",
      });
      break;
    case "مزود خدمه":
      router.push({
        name: "serviceProvider",
      });
      break;
    case "موظف":
      router.push({
        name: "addFileUserOwner",
      });
      break;
  }
};
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
