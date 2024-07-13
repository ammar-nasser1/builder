<template>
  <div class="w-[100%] flex flex-col items-center">
    <BreadCrumb :data="breadcrumb" />
    <div class="w-[96%]">
      <div
        class="w-full pr-[30px] h-[72px] bg-white flex-row-reverse flex justify-start items-center gap-4 rounded-xl shadow-sm my-5"
      >
        <button
          :class="[bt, { btnactive: $route.name === 'projectData' }]"
          @click="
            units = false;
            building = true;
          "
        >
          بيانات المبنى
        </button>

        <button
          @click="navigateTo('untiesData')"
          :class="[bt, { btnactive: $route.name === 'untiesData' }]"
        >
          الوحدات
        </button>
      </div>

      <div v-show="building">
        <div class="mb-11 w-[97%] mx-auto">
          <div
            class="flex justify-end h-[32px] py-10 bg-white border-b items-center rounded-ss-xl rounded-se-xl"
          >
            <div
              class="pr-5"
              style="
                font-family: 'Montserrat-Arabic';
                font-size: 18px;
                font-weight: 500;
                line-height: 18px;
                text-align: right;
              "
            >
              <h1>{{ formData.name }}</h1>
            </div>
            <div
              class="h-[37px]"
              style="
                border-left: 5px solid #3c757d !important;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                font-family: 'Montserrat-Arabic';
                font-size: 18px;
                font-weight: 500;
                line-height: 18px;
                text-align: right;
              "
            ></div>
          </div>
          <div
            class="w-full flex justify-end items-end rounded-xl py-12 lg:px-4 flex-col gap-12 bg-white"
          >
            <div class="w-[90%]">
              <div
                class="form-section w-full flex flex-wrap items-center justify-between flex-row-reverse gap-5"
              >
                <div
                  v-for="field in formData.datafeild"
                  :key="field.id"
                  class="input-wrapper w-full md:w-[40%]"
                >
                  <label :for="field.model" class="label">{{
                    field.label
                  }}</label>
                  <!-- Text input -->
                  <input
                    v-if="field.type != 'select'"
                    :id="field.model"
                    :type="field.type"
                    class="input-field"
                    v-model="field.model"
                    :placeholder="field.placeholder"
                  />
                  <!-- Select input -->
                  <select
                    v-if="field.type === 'select'"
                    :id="field.model"
                    class="select-field w-full"
                    v-model="field.model"
                  >
                    <option value="" disabled>{{ field.placeholder }}</option>
                    <option
                      v-for="option in field.options"
                      :value="option.value"
                      :key="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        name: "اسم المبنى",
        btn: {
          isfuc: false,
          isbtn: false,
          name: "حفظ الخدمة الجديدة",
          route: "AddClassification",
        },
      },
      formData: {
        name: "بيانات المبنى",
        datafeild: [
          {
            label: "اسم المبنى",
            type: "text",
            model: "",
            placeholder: "أدخل اسم المبنى",
          },
          {
            label: "اسم المالك",
            type: "select",
            model: "",
            options: [
              { value: "1", label: "مثال: أحمد محمد فريد غنيم" },
              { value: "2", label: "مثال: خالد بن عبد الله بن عوض" },
            ],
            placeholder: "اختر اسم المالك...",
          },
          {
            label: "حالة المبنى",
            type: "select",
            model: "",
            options: [
              { value: "1", label: "مثال: جديد" },
              { value: "2", label: "مثال: مستعمل" },
            ],
            placeholder: "اختر حالة المبنى...",
          },
          {
            label: "عنوان المبنى",
            type: "text",
            model: "",
            placeholder: "مثال: شارع الملك عبد العزيز",
          },
          {
            label: "نوع المبنى",
            type: "select",
            model: "",
            options: [
              { value: "1", label: "مثال: سكني" },
              { value: "2", label: "مثال: تجاري" },
            ],
            placeholder: "اختر نوع المبنى...",
          },
          {
            label: "موعد التسليم",
            type: "date",
            model: "",
            placeholder: "حدد موعد التسليم المتوقع",
          },
          {
            label: "عدد الوحدات",
            type: "number",
            model: "",
            placeholder: "حدد عدد الوحدات المتاحة",
          },
        ],
      },
      building: true,
      units: false,
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
