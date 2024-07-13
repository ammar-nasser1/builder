<template>
  <div class="">
    <div class="w-[95%] mx-auto flex justify-between divide-x-2 pt-8">
      <div class="w-[70%]">
        <pageHeader :data="pageHeader[id]" @customEvent="cc" />
        <formBuilder :data="list" />
      </div>
      <div class="w-[25%] flex justify-center h-[750px]">
        <page-side-bar class="w-[80%] h-[750px]" @customEvent="dd" />
      </div>
    </div>
  </div>
</template>
<script>
import pageHeader from "./pageHeader.vue";
import pageSideBar from "./pageSideBar.vue";
import formBuilder from "../formBuilder.vue";
export default {
  components: {
    pageHeader,
    pageSideBar,
    formBuilder,
  },
  data() {
    return {
      list: [
        { label: "", type: "text", options: [] },
        { label: "", type: "text", options: [] },
      ],
      id: 0,
      pageHeader: [
        {
          name: "البيانات الأولية",
          pages: [
            {
              id: 1,
              name: "البيانات الأولية",
              feilds: [
                { label: "الاسم", type: "text", options: [] },
                { label: "العنوان", type: "text", options: [] },
              ],
            },
            {
              id: 2,
              name: "نوع العقار",
              feilds: [
                { label: "ammar", type: "text", options: [] },
                { label: "", type: "text", options: [] },
              ],
            },
            {
              id: 3,
              name: "الملاحظات",
              feilds: [
                { label: "", type: "text", options: [] },
                { label: "", type: "text", options: [] },
              ],
            },
            {
              id: 4,
              name: "مرفقات العميل",
            },
          ],
        },
        {
          name: "شهادة الاعفاء الضريبي",
          pages: [
            {
              id: 1,
              name: "شهادة الاعفاء الضريبي",
              feilds: [
                { label: "ارفاق شهادة اعفاء ضريبي", type: "text", options: [] },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    dd(id) {
      // this.formElements = data;
      this.id = id;
      console.log(id);
      this.list = this.pageHeader[id].pages[0].feilds;
    },
    cc(data) {
      this.list = data.feilds;
    },
  },
  mounted() {
    this.list = this.pageHeader[0].pages[0].feilds;
  },
};
</script>
