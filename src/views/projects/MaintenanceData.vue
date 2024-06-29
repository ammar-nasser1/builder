<template>
  <div class="mb-11">
    <!-- <h1>Welcome to the Primary Data</h1>
    <input
      v-model="data1"
      @input="updateData('data1', $event.target.value)"
      type="text"
      placeholder="Data 1"
    />
    <input
      v-model="data2"
      @input="updateData('data2', $event.target.value)"
      type="text"
      placeholder="Data 2"
    />
    <input
      v-model="data3"
      @input="updateData('data3', $event.target.value)"
      type="text"
      placeholder="Data 3"
    /> -->
    <div
      class="flex justify-end h-[32px] py-10 bg-white items-center"
      style="border-bottom: #3c757d 4px solid"
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
        <h1>الصيانة</h1>
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
      class="w-full flex justify-end items-end py-12 divide-y flex-col gap-12 bg-white rounded-xl"
    >
      <div class="w-[95%] mx-auto divide-y-2">
        <div class="w-[100%] flex justify-end gap-6 py-10">
          <div class="input-wrapper lg:w-[35%] w-full">
            <label for="selectField" class="label"> الحهة المختصة</label>
            <select
              id="selectField"
              class="select-field w-full"
              v-model="selectedCountry"
            >
              <option value="" disabled selected>
                اختر الحهة المختصة بالطلب
              </option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <p v-if="selectedCountry">You selected: {{ selectedCountry }}</p>
          </div>
          <div class="input-wrapper lg:w-[35%] w-full">
            <label for="selectField" class="label"> نوع العطل</label>
            <select
              id="selectField"
              class="select-field w-full"
              v-model="selectedCountry"
            >
              <option value="" disabled selected>سباكة</option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <p v-if="selectedCountry">You selected: {{ selectedCountry }}</p>
          </div>
        </div>
        <div class="w-[100%] flex justify-end gap-6 py-10">
          <div class="input-wrapper lg:w-[35%] w-full">
            <label for="selectField" class="label"> الحهة المختصة</label>
            <select
              id="selectField"
              class="select-field w-full"
              v-model="selectedCountry"
            >
              <option value="" disabled selected>
                اختر الحهة المختصة بالطلب
              </option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="input-wrapper lg:w-[35%] w-full">
            <label for="selectField" class="label"> نوع العطل</label>
            <select
              id="selectField"
              class="select-field w-full"
              v-model="selectedCountry"
            >
              <option value="" disabled selected>سباكة</option>
              <option
                v-for="option in options"
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
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["data1", "data2", "data3"]),
  },
  methods: {
    ...mapMutations(["setData"]),
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
