<template>
  <div class="mb-11">
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
        <h1>بيانات العميل</h1>
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
            v-for="field in FormFields"
            :key="field.model"
            class="input-wrapper w-full md:w-[40%]"
          >
            <label :for="field.model" class="label">{{ field.label }}</label>
            <!-- Text input -->
            <input
              v-if="field.type === 'text'"
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
              v-model="formData[field.model]"
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
    <div class="flex mt-14 flex-col bg-white rounded-xl">
      <div
        class="flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-ss-xl rounded-se-xl"
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
          <h1>عقارات العميل</h1>
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

      <div class="w-full flex justify-end gap-5 items-center">
        <button
          v-if="unites.length === 0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="w-[98%] mx-auto border-1 gap-2 border-teal-700 flex justify-center items-center p-7 rounded-2xl text-right"
        >
          إضافة عقار جديد

          <img src="/img/icons/location.png" alt="" />
        </button>
        <the-unites class="m-4" />
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header" dir="rtl">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                بحث الوحدات
              </h1>
              <button
                class="btn-close m-0 bg-slate-50"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ClientUnits />
            </div>
            <div class="modal-footer flex flex-col">
              <button
                data-bs-dismiss="modal"
                @click="navigateTo('/Customerlist')"
                class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
              >
                اختيار وحدة للعميل
              </button>
              <button
                class="bg-[#E1E6EF] w-[97%] text-[#3C757D] font-bold py-2 px-4 rounded"
              >
                رجوع
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex my-14 flex-col h-[308px] gap-5 bg-white rounded-xl">
      <div
        class="flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-ss-xl rounded-se-xl"
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
          <h1>الملاحظات</h1>
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

      <div class="w-full flex justify-end gap-5 items-center">
        <div
          class="w-[98%] mx-auto border p-7 rounded-2xl text-right"
          dir="rtl"
        >
          دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
          له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن
          يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم،
          غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientUnits from "./ClientUnits.vue";
import TheUnites from "../components/TheUnites.vue";
export default {
  data() {
    return {
      unites: [1],
      formData: {
        phone: "",
        customerName: "",
        preferredPayment: "",
        salesperson: "",
        cityName1: "",
        cityName2: "",
        detailedAddress: "",
        visitTime: "",
        customerType: "",
      },
      FormFields: [
        {
          label: "رقم هاتف العميل",
          type: "text",
          model: "phone",
          placeholder: "مثال: 123456789 966+",
        },
        {
          label: "اسم العميل",
          type: "text",
          model: "customerName",
          placeholder: "مثال: محمد محمد فريد غانم",
        },
        {
          label: "طريقة الدفع المفضلة",
          type: "select",
          model: "preferredPayment",
          options: [
            { value: "cash", label: "كاش" },
            { value: "bank", label: "بنك" },
            { value: "supported", label: "مدعوم" },
          ],
          placeholder: "اختر طريقة الدفع المفضلة...",
        },
        {
          label: "موظف المبيعات",
          type: "text",
          model: "salesperson",
          placeholder: "اسم موظف المبيعات",
        },
        {
          label: "اسم الحي",
          type: "select",
          model: "cityName1",
          options: [
            { value: "city1", label: "مدينة 1" },
            { value: "city2", label: "مدينة 2" },
            { value: "city3", label: "مدينة 3" },
          ],
          placeholder: "اختر العنوان ...",
        },
        {
          label: "اسم المدينة",
          type: "select",
          model: "cityName2",
          options: [
            { value: "address1", label: "عنوان 1" },
            { value: "address2", label: "عنوان 2" },
            { value: "address3", label: "عنوان 3" },
          ],
          placeholder: "المدينة اختر ...",
        },
        {
          label: "العنوان بالتفصيل",
          type: "select",
          model: "detailedAddress",
          options: [
            { value: "address1", label: "عنوان 1" },
            { value: "address2", label: "عنوان 2" },
            { value: "address3", label: "عنوان 3" },
          ],
          placeholder: "اختر العنوان...",
        },

        {
          label: "وقت الزيارة المفضل",
          type: "text",
          model: "visitTime",
          placeholder: "مثال: من 8 الى 10 ص",
        },
        {
          label: "تصنيف العميل",
          type: "select",
          model: "customerType",
          options: [
            { value: "individual", label: "فرد" },
            { value: "company", label: "شركة" },
          ],
          placeholder: "اختر تصنيف العميل...",
        },
      ],
    };
  },
  components: {
    ClientUnits,
    TheUnites,
  },
  methods: {
    updateData(field, value) {
      this.setData({ field, value });
    },
    navigateTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>
<style>
.input-wrapper {
  position: relative;
  /* Adjust width as needed */
}

.label {
  position: absolute;
  top: -8px; /* Adjust vertical position */
  right: 5px; /* Adjust horizontal position */
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.input-field {
  text-align: right;
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6 !important;
  border-radius: 10px !important;
}
</style>
