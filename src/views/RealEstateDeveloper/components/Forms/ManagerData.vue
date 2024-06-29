<template>
  <div class="manager-data mt-10">
    <div
      class="sub-titles bg-gray-200 col-span-2 flex justify-between min-h-10 rounded-md"
    >
      <button
        @click="activeTab(title)"
        v-for="title in subTitles"
        :key="title.id"
        :class="{
          'bg-[#3C757D] text-white': title.activeBtn,
          'bg-gray-200': !title.activeBtn,
        }"
        class="p-3 h-[30%] rounded-md"
      >
        {{ title.name }}
      </button>
    </div>
    <div v-if="currentBtn === 'المعلومات الاساسية'">
      <div
        class="Personal-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 content-start min-h-[600px]"
      >
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label">اسم الشركة </label>
          <input
            type="text"
            id="inputField"
            class="input-field bg-gray-100"
            v-model="basicInformation.companyName"
          />
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> معرف المستخدم </label>
          <input
            type="text"
            id="inputField"
            class="input-field bg-gray-100"
            v-model="basicInformation.userId"
          />
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> الاسم بالكامل </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="basicInformation.fullNameArabic"
          />
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> الاسم بالكامل </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="basicInformation.fullNameEnglish"
          />
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> البريد الإلكتروني : </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="basicInformation.email"
          />
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> رقم الجوال </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="basicInformation.phoneNumber"
          />
        </div>
      </div>
      <div
        class="gropu-files my-10 text-sm grid grid-cols-6 gap-3 justify-between w-full"
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
          <span class="text-center"> اضف العنوان الوطني</span>
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
          <span class="text-center"> اضف العقد</span>
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
          <span class="text-center"> اضف شهادة الآيبان</span>
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
          <span class="text-center">اضف الوكالة الشرعية </span>
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
          <span class="text-center"> اضف تفويض مدير المبيعات </span>
        </label>
      </div>
    </div>
    <div v-if="currentBtn === 'البيانات الشخصية'">
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
    </div>
    <div v-if="currentBtn === 'اللغة والمنطقة'">
      <div
        class="language-data mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"
      >
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> البلد</label>
          <select class="select-field w-full">
            <option>المملكة العربية السعودية</option>
            <option>asd1</option>
            <option>asd1</option>
          </select>
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> اللغة </label>
          <select class="select-field w-full">
            <option>اللغة العربية</option>
            <option>asd1</option>
            <option>asd1</option>
          </select>
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> صيغة الوقت</label>
          <select class="select-field w-full">
            <option>12 ساعة</option>
            <option>asd1</option>
            <option>asd1</option>
          </select>
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> صيغة التاريخ</label>
          <select class="select-field w-full">
            <option>يوم /شهر / سنة</option>
            <option>asd1</option>
            <option>asd1</option>
          </select>
        </div>
        <div class="input-wrapper w-[80%]">
          <label for="inputField" class="label"> منطقة التوقيت</label>
          <select class="select-field w-full">
            <option>(ت ع م+03:00) الرياض</option>
            <option>asd1</option>
            <option>asd1</option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="currentBtn === 'البيانات الوظيفية'">
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
          <label for="inputField" class="label">
            تاريخ الانضمام (ميلادي)
          </label>
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
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const currentBtn = ref("المعلومات الاساسية");
const subTitles = ref([
  {
    id: 1,
    name: "المعلومات الاساسية",
    activeBtn: true,
  },
  {
    id: 2,
    name: "البيانات الشخصية",
    activeBtn: false,
  },
  {
    id: 3,
    name: "اللغة والمنطقة",
    activeBtn: false,
  },
  {
    id: 4,
    name: "البيانات الوظيفية",
    activeBtn: false,
  },
]);
const basicInformation = ref({
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
const activeTab = (item) => {
  subTitles.value.forEach((subTitle) => {
    subTitle.activeBtn = false;
  });
  item.activeBtn = true;
  currentBtn.value = item.name;
};
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
