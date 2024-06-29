<template>
  <div class="input-wrapper w-[45%]">
    <label for="selectField" class="label">اسم العميل</label>
    <select id="selectField" class="select-field" v-model="selectedCountry">
      <option value="" disabled selected>Choose a country</option>
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
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: "", // Default selected country
      options: [
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "FR", label: "France" },
        { value: "DE", label: "Germany" },
      ],
    };
  },
};
</script>

<style>
.input-wrapper {
  position: relative;
  width: 45%;
}

.label {
  position: absolute;
  top: -8px;
  right: 5px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.select-field {
  text-align: right;
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6 !important;
  border-radius: 10px !important;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
}
</style>
