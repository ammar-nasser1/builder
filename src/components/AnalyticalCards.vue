<template>
  <div
    class="h-[150px] bg-[#FFFFFF] flex flex-col justify-evenly px-[18px] py-2 rounded-[16px]"
  >
    <div class="flex flex-row justify-between">
      <div
        class="w-[72px] h-[28px] rounded-[8px] bg-[#3C757D24] flex items-center justify-center"
        style="
          font-family: Montserrat-Arabic;
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: right;
        "
      >
        {{ card.cardHeader }}
      </div>
      <div class="card-name flex items-center justify-center">
        {{ card.cardName }}
      </div>
    </div>
    <div class="card-num">{{ card.cardNum }}</div>
    <div class="card-foot">{{ card.cardFoot }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardName: "العملاء",
      cardNum: "580",
      cardHeader: "+16,5 %",
      cardFoot: "مقارنة بالشهر السابق (750)",
    };
  },
  props: ["card"],
  components: {},
  methods: {},
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
