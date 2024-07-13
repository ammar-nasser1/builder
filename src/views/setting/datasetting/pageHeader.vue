<template>
  <div class="w-full flex flex-col mt-4 rounded-xl shadow-lg">
    <div
      class="w-full pr-[30px] h-[72px] bg-white rounded-s-xl rounded-e-xl flex-row-reverse flex justify-start items-center gap-4"
    >
      {{ data.name }}
    </div>
    <div>
      <div
        class="w-full pr-[30px] h-[72px] rounded-b-lg bg-white flex-row-reverse flex justify-start items-center gap-4"
      >
        <button
          class="bt"
          v-for="section in data.pages"
          :key="section.id"
          @click="handelclick(section)"
        >
          {{ section.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageHeader: "[{ label: 'البيانات الأولية', type: 'text', options: [] }]",
    };
  },
  props: ["data"],
  methods: {
    handelclick(section) {
      this.$emit("customEvent", section);
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
