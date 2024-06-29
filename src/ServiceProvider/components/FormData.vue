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
        <h1>{{ name }}</h1>
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
  </div>
</template>

<script>
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
    };
  },
  props: ["FormFields", "name"],
  components: {
    // ClientUnits,
    // TheUnites,
  },
  methods: {
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
