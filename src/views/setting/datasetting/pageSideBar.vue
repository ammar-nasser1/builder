<template>
  <div class="flex flex-col mt-4 rounded-xl shadow-lg bg-white">
    <h1 class="w-full py-4 text-2xl bg-white rounded-xl">العملاء</h1>
    <div
      class="w-full pr-[15px] h-[72px] rounded-b-lg bg-white flex-col flex justify-start items-center gap-4"
    >
      <button
        class="bt w-[90%] flex justify-end"
        v-for="data in data.data"
        :key="data.id"
        @click="handelclick(data.id)"
      >
        {{ data.name }}
        <img src="/img/icons/sideicon.png" alt="" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        data: [
          { id: 0, name: "البيانات الأولية" },
          { id: 1, name: "شهادة الاعفاء الضريبي" },
          { id: 2, name: "الوحدات" },
          { id: 3, name: "الوحدات المحتملة" },
        ],
      },
    };
  },
  methods: {
    handelclick(data) {
      // console.log(data);
      this.$emit("customEvent", data);
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
  border-right: 3px solid #3c757d;

  padding: 5px;
}
.btnactive {
  background: #f6f7f8;
  border-right: 3px solid #3c757d;

  padding: 10px;
}
</style>
