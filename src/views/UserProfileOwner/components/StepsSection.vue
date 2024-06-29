<template>
  <div class="w-[80%] mx-auto space-y-2">
    <div class="mt-6 w-[80%] mx-auto flex items-center justify-between">
      <div
        v-for="(setp, index) in props.setps"
        :key="index"
        class="flex items-center w-full"
      >
        <div
          :class="{
            circle: true,
            'active-circle': index === 0,
          }"
        >
          {{ setp }}
        </div>
        <div
          v-if="index !== props.setps.length - 1"
          class="setp-bar"
          :class="{
            'active-bar': index < currentStep,
          }"
        ></div>
      </div>
    </div>
    <div
      class="grid grid-cols-4 text-center align-top items-start justify-between w-[90%] text-xs"
    >
      <span>البيانات الاساسية</span>
      <span>البيانات الشخصية</span>
      <span>اللغة والمنطقة</span>
      <span>البيانات الوظيفية</span>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  setps: Object,
  currentStep: Number,
});
const emits = defineEmits(["nextSetps", "prevSetps"]);

// eslint-disable-next-line no-unused-vars
const nextSetps = () => {
  emits("nextSetps");
};
// eslint-disable-next-line no-unused-vars
const prevSetps = () => {
  emits("prevSetps");
};
</script>
<style scoped>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #808080;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;
}
.setp-bar {
  height: 2px;
  width: 100%;
  background-color: gray;
}
.active-circle {
  background-color: #3c757d;
  color: white;
}
.active-bar {
  background-color: #3c757d;
}
</style>
