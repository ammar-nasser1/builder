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

    <div class="flex flex-col items-end bg-white rounded-xl mt-12">
      <div
        class="w-full flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>اختيار الوحدة</h1>
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

      <div class="w-[80%] flex justify-end gap-5 items-center flex-wrap py-5">
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end bg-white rounded-xl mt-12">
      <div
        class="w-full flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>اختيار العميل</h1>
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
        class="w-[80%] flex justify-end gap-5 items-center flex-wrap px-4 py-5"
      >
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
      </div>
    </div>
    <div
      class="flex divide-y py-4 flex-col items-end bg-white rounded-xl mt-12"
    >
      <div
        class="w-full flex justify-end py-4 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>تفاصيل الطلب</h1>
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
        class="w-[80%] flex justify-end gap-5 items-center flex-wrap px-4 py-5"
      >
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> اسم المبنى 2</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="inputValue"
          />
        </div>
      </div>
      <div class="w-[95%] mx-auto">
        <h1 class="w-full text-right p-9">وصف الطلب</h1>
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

    <div class="flex flex-col h-[308px] gap-5 bg-white rounded-xl mt-12">
      <div
        class="flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
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
          <h1>المرفقات</h1>
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

      <div class="w-full flex justify-end gap-5 items-center"></div>
    </div>
    <div class="w-full flex justify-start">
      <button
        @click="navigateTo('receivingOrder')"
        class="bg-[#3C757D] text-white rounded-[8px] px-14 py-3 ml-2 mt-16"
      >
        التالي
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

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
      showUpfile: false,
    };
  },
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
