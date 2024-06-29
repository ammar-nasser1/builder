<template>
  <div>
    <div
      class="w-full h-[100vh] flex justify-center items-center flex-col gap-3"
    >
      <h1>Welcome to the Real-Estate home page</h1>
      <button
        @click="navigateTo('login')"
        class="border-[#3C757D] border text-teal-600 rounded-[8px] px-4 py-2 ml-2"
      >
        Go to Dashboard
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* Add this to your CSS */
/* Add this to your CSS */

@font-face {
  font-family: "Montserrat-Arabic";

  src: url("/public/Montserrat-ArabicRegular/Montserrat-Arabic-Regular.ttf")
    format("truetype");
}
* {
  font-family: Montserrat-Arabic;
}
.card-name {
  font-family: Montserrat-Arabic;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;
}
.card-num {
  font-family: Montserrat-Arabic;
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: right;
  color: #3c757d;
}
.card-foot {
  font-family: Montserrat-Arabic;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
}
</style>
