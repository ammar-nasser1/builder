<template>
  <section class="header-page min-h-[100px] w-full border">
    <div class="flex gap-2 mb-2 px-3 py-6 border border-e-2">
      <img src="../../../../public/img/icons/user-edit.svg" alt="user-edit" />
      <span>نوع الملف شخصي</span>
    </div>
    <div class="group-btns flex justify-center items-center gap-4 my-4">
      <button
        v-for="btn in groupBtns"
        :key="btn.id"
        @click="handleClick(btn)"
        :class="{
          'flex justify-center items-center gap-2 border-[#3C757D] border-2 rounded-md shadow-md p-2': true,
          'bg-[#3C757D] text-white': btn.isShowIcon,
        }"
      >
        <span class="text-sm"> {{ btn.buttonText }}</span>
        <img
          v-if="btn.isShowIcon"
          src="../../../../public/img/icons/developer-icon-white.svg"
          alt="developer-icon"
        />
        <img
          v-else
          src="../../../../public/img/icons/developer-icon.svg"
          alt="developer-icon"
        />
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const emits = defineEmits(["handleClick"]);
const groupBtns = ref([
  {
    id: 1,
    buttonText: "مطور عقاري",
    isShowIcon: false,
  },
  {
    id: 2,
    buttonText: "مزود خدمه",
    isShowIcon: false,
  },
  {
    id: 3,
    buttonText: "موظف",
    isShowIcon: true,
  },
]);
const handleClick = (btn) => {
  groupBtns.value.forEach((btn) => {
    btn.isShowIcon = false;
  });
  btn.isShowIcon = true;
  emits("handleClick", btn);
};
</script>
