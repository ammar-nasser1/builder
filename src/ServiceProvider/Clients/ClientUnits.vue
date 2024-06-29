<template>
  <div>
    <div class="">
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
          <h1>بيانات العقار</h1>
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
            class="form-section w-full flex flex-wrap justify-between flex-row-reverse gap-5"
          >
            <div
              v-for="field in FormFields"
              :key="field.model"
              class="input-wrapper md:w-[45%] w-full"
            >
              <label :for="field.model" class="label">{{ field.label }}</label>

              <!-- Text input -->
              <input
                v-if="field.type === 'text'"
                :id="field.model"
                :type="field.type"
                class="input-field"
                v-model="formData[field.model]"
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
    </div>

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
          <h1>عنوان العقار</h1>
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
            class="form-section w-full flex flex-wrap justify-between flex-row-reverse gap-3 xl:gap-5"
          >
            <div
              v-for="field in BuildingLocation"
              :key="field.model"
              class="input-wrapper md:w-[45%] w-full"
            >
              <label :for="field.model" class="label">{{ field.label }}</label>

              <!-- Text input -->
              <input
                v-if="field.type === 'text'"
                :id="field.model"
                :type="field.type"
                class="input-field"
                v-model="formData[field.model]"
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
          <div class="w-full rounded-xl my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13820.901577242525!2d31.168355399999996!3d30.001683800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458459ca4c1597f%3A0x37b9cb19be3aff4a!2sAraCan%20Pyramids%20Hotel!5e0!3m2!1sen!2seg!4v1713800845893!5m2!1sen!2seg"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="rounded-xl h-[200px] w-full"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        phone: "",
        customerName: "",
        preferredPayment: "",
        jobTitle: "",
        cityName: "",
        visitTime: "",
        customerType: "",
        salesperson: "",
        detailedAddress: "",
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
          model: "cityName",
          options: [
            { value: "city1", label: "مدينة 1" },
            { value: "city2", label: "مدينة 2" },
            { value: "city3", label: "مدينة 3" },
          ],
          placeholder: "اختر المدينة...",
        },

        {
          label: "اسم المدينة",
          type: "select",
          model: "cityName",

          options: [
            { value: "address1", label: "عنوان 1" },
            { value: "address2", label: "عنوان 2" },
            { value: "address3", label: "عنوان 3" },
          ],
          placeholder: "اختر العنوان...",
        },
      ],
      BuildingLocation: [
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
      ],
    };
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

@media (min-width: 768px) {
  .input-wrapper {
    width: 45%;
  }
}

@media (max-width: 767px) {
  .input-wrapper {
    width: 100%;
  }
}
</style>
