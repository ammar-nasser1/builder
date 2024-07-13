<template>
  <div class="w-[100%] flex flex-col items-center">
    <BreadCrumb :data="breadcrumb" />
    <div class="w-[96%]">
      <div
        class="w-full pr-[30px] h-[72px] bg-white flex-row-reverse flex justify-start items-center gap-4 rounded-xl shadow-sm my-5"
      >
        <button
          :class="[bt, { btnactive: $route.name === 'projectData' }]"
          @click="navigateTo('projectData')"
        >
          بيانات المشروع
        </button>
        <button
          @click="navigateTo('buildingData')"
          :class="[bt, { btnactive: $route.name === 'buildingData' }]"
        >
          العقارات
        </button>
        <button
          @click="navigateTo('untiesData')"
          :class="[bt, { btnactive: $route.name === 'untiesData' }]"
        >
          بيانات الوحدات
        </button>
        <button
          @click="navigateTo('maintenanceData')"
          :class="[bt, { btnactive: $route.name === 'maintenanceData' }]"
        >
          الصيانة
        </button>
        <button
          @click="navigateTo('viewInApp')"
          :class="[bt, { btnactive: $route.name === 'viewInApp' }]"
        >
          عرض على التطبيق
        </button>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
export default {
  data() {
    return {
      customer: {
        name: "",
        email: "",
        phone: "",
      },
      breadcrumb: {
        levels: [
          { name: "المستوى الأول", route: "level1" },
          { name: "المستوى الثاني", route: "level2" },
          { name: "المستوى الثالث", route: "level3" },
        ],
        name: "اضافة مشروع جديد",
        btn: {
          isfuc: false,
          isbtn: false,
          name: "حفظ الخدمة الجديدة",
          route: "AddClassification",
        },
      },
    };
  },
  components: {
    BreadCrumb,
  },
  methods: {
    addCustomer() {
      console.log(this.customer);
    },
    navigateTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Montserrat-Arabic";
  src: url("/public/Montserrat-ArabicRegular/Montserrat-Arabic-Regular.ttf")
    format("truetype");
}
* {
  font-family: Montserrat-Arabic;
}
.input-wrapper {
  position: relative;
  width: 300px; /* Adjust width as needed */
}

.label {
  position: absolute;
  top: -15px; /* Adjust vertical position */
  right: 5px; /* Adjust horizontal position */
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.bt:focus {
  background: #f6f7f8;
  border-bottom: 3px solid #3c757d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 10px;
}
.btnactive {
  background: #f6f7f8;
  border-bottom: 3px solid #3c757d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 10px;
}
</style>
