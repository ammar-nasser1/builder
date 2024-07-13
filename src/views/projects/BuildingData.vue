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

    <div class="mb-11 w-[100%] mx-auto">
      <div
        class="w-full flex justify-end h-[32px] py-10 bg-white items-center border-b rounded-se-xl rounded-ss-xl"
      >
        <div
          class="pr-5 flex items-center justify-between w-full"
          style="
            font-family: 'Montserrat-Arabic';
            font-size: 18px;
            font-weight: 500;
            line-height: 18px;
            text-align: right;
          "
        >
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="bg-[#3C757D] text-white rounded-[8px] px-4 py-2 ml-2"
          >
            اضافة منطقة
          </button>

          <h1>اختيار اسم المشروع</h1>
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
        <div class="w-[90%] mx-auto">
          <div
            class="form-section w-full flex flex-wrap items-center justify-between flex-row-reverse gap-5"
          >
            <button
              data-bs-toggle="modal"
              data-bs-target="#BuildingTypeModal"
              class="w-full rounded-lg flex p-4 bg-slate-50 border justify-center items-center"
            >
              إضافة عقارات
              <img src="/img/icons/house.png" alt="" class="w-6 h-6 mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col h-[308px] gap-5 bg-white rounded-xl">
      <div
        class="flex rounded-se-xl rounded-ss-xl justify-end h-[32px] py-10 bg-white items-center border-b-2"
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
          <h1>مرفقات المشروع</h1>
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
      <div class="w-full flex justify-end gap-5 items-center rounded-xl">
        <div
          class="w-[160px] h-[172px] flex flex-col items-center gap-2 border justify-center rounded-2xl"
        >
          <img
            src="/img/icons/document-text.png"
            alt="asd"
            class="w-[64px] h-[64px]"
          />
          <p>الملفات</p>

          <div class="w-full border-t">
            <div
              class="flex mx-auto justify-between items-end w-[85%] border-t h-[30px]"
            >
              <p class="text-red-600">حذف</p>
              <p>عرض</p>
            </div>
          </div>
        </div>
        <label
          for="fileInput"
          class="w-[160px] h-[172px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            class="hidden"
            @change="handleFileChange"
          />
          <img
            src="/img/icons/document-cloud.png"
            alt="asd"
            class="w-[64px] h-[64px]"
          />
          <p>الملفات</p>
        </label>
        <label
          for="fileInput"
          class="w-[160px] h-[172px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            class="hidden"
            @change="handleFileChange"
          />
          <img
            src="/img/icons/document-cloud.png"
            alt="asd"
            class="w-[64px] h-[64px]"
          />
          <p>الملفات</p>
        </label>
        <label
          for="fileInput"
          class="w-[160px] h-[172px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            class="hidden"
            @change="handleFileChange"
          />
          <img
            src="/img/icons/document-cloud.png"
            alt="asd"
            class="w-[64px] h-[64px]"
          />
          <p>الملفات</p>
        </label>

        <label
          for="fileInput"
          class="w-[160px] h-[172px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            class="hidden"
            @change="handleFileChange"
          />
          <img
            src="/img/icons/document-cloud.png"
            alt="asd"
            class="w-[64px] h-[64px]"
          />
          <p>الملفات</p>
        </label>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" dir="rtl">
            <h1 class="modal-title fs-5" id="exampleModalLabel">إضافة منطقة</h1>
            <button
              class="btn-close m-0 bg-slate-50"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="bg-white rounded-xl w-full mx-auto flex justify-end items-center"
            >
              <div class="input-wrapper w-[45%]">
                <label for="inputField" class="label"> اسم المنطقة</label>
                <input type="text" id="inputField" class="input-field" />
              </div>
              <!-- Main content -->
            </div>
          </div>
          <div class="modal-footer flex flex-col">
            <button
              data-bs-dismiss="modal"
              @click="navigateTo('/Customerlist')"
              class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
            >
              إضافة منطقة جديدة
            </button>
            <button
              class="bg-[#E1E6EF] w-[97%] text-[#3C757D] font-bold py-2 px-4 rounded"
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="BuildingTypeModal"
      tabindex="-1"
      aria-labelledby="BuildingTypeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" dir="rtl">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              إضافة عقارات جديدة
            </h1>
            <button
              class="btn-close m-0 bg-slate-50"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="bg-white border-b pb-3 rounded-xl w-full mx-auto flex flex-col justify-end items-end gap-3"
            >
              <div>حدد تصنيف العقار المطلوب</div>

              <div class="flex items-center gap-4 flex-row-reverse">
                <div class="flex gap-2 items-center">
                  <label for="residential" class=""> سكني </label>
                  <input
                    type="checkbox"
                    id="residential"
                    v-model="ResidentailType"
                    class=""
                  />
                </div>
                <div class="flex gap-2 items-center">
                  <label for="commercial" class=""> تجاري </label>
                  <input
                    type="checkbox"
                    id="commercial"
                    v-model="CommercialType"
                    class=""
                  />
                </div>
                <div class="flex gap-2 items-center">
                  <label for="Administrative" class=""> إداري </label>
                  <input
                    type="checkbox"
                    id="Administrative"
                    v-model="AdministrativeType"
                    class=""
                  />
                </div>
              </div>

              <!-- Main content -->
            </div>
            <div class="flex flex-wrap justify-center items-center gap-4 p-3">
              <div
                v-for="(item, index) in resdential"
                :key="item.id"
                class="flex flex-wrap gap-2"
              >
                <div
                  v-if="ResidentailType"
                  :class="['checkbox-card', { checked: item.isChecked }]"
                  @click="toggleCheck(index, 'residential')"
                >
                  <input
                    type="checkbox"
                    v-model="item.isChecked"
                    :id="checkboxId"
                  />
                  <label :for="checkboxId" class="checkbox-label">
                    <span v-if="item.isChecked" class="checkbox-icon">✔</span>
                  </label>
                  <div class="flex justify-center flex-col items-center w-full">
                    <img :src="item.img" alt="" class="w-14 h-14" />
                    <p>{{ item.name }}</p>
                  </div>
                </div>
                <!-- Main content -->
              </div>
              <div
                v-for="(item, index) in commercial"
                :key="item.id"
                class="flex flex-wrap gap-2"
              >
                <div
                  v-if="CommercialType"
                  :class="['checkbox-card', { checked: item.isChecked }]"
                  @click="toggleCheck(index, 'commercial')"
                >
                  <input
                    type="checkbox"
                    v-model="item.isChecked"
                    :id="checkboxId"
                  />
                  <label :for="checkboxId" class="checkbox-label">
                    <span v-if="item.isChecked" class="checkbox-icon">✔</span>
                  </label>
                  <div class="flex justify-center flex-col items-center w-full">
                    <img :src="item.img" alt="" class="w-14 h-14" />
                    <p>{{ item.name }}</p>
                  </div>
                </div>
                <!-- Main content -->
              </div>
              <div
                v-for="(item, index) in Administrative"
                :key="item.id"
                class="flex flex-wrap gap-2"
              >
                <div
                  v-if="AdministrativeType"
                  :class="['checkbox-card', { checked: item.isChecked }]"
                  @click="toggleCheck(index, 'Administrative')"
                >
                  <input
                    type="checkbox"
                    v-model="item.isChecked"
                    :id="checkboxId"
                  />
                  <label :for="checkboxId" class="checkbox-label">
                    <span v-if="item.isChecked" class="checkbox-icon">✔</span>
                  </label>
                  <div class="flex justify-center flex-col items-center w-full">
                    <img :src="item.img" alt="" class="w-14 h-14" />
                    <p>{{ item.name }}</p>
                  </div>
                </div>
                <!-- Main content -->
              </div>
            </div>
          </div>
          <div class="modal-footer flex flex-col">
            <button
              data-bs-dismiss="modal"
              @click="navigateTo('/Customerlist')"
              class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
            >
              إضافة منطقة جديدة
            </button>
            <button
              class="bg-[#E1E6EF] w-[97%] text-[#3C757D] font-bold py-2 px-4 rounded"
            >
              رجوع
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isChecked: false,
      resdential: [
        {
          id: 1,
          name: "فيلا",
          img: "/img/icons/building-4.svg",
          enname: "villa",
          isChecked: false,
        },
        {
          id: 2,
          name: "شقق سكنية",
          img: "/img/icons/buildings-2.svg",
          enname: "apartment",
          isChecked: false,
        },
        {
          id: 3,
          name: "أدوار",
          img: "/img/icons/building-3.svg",
          enname: "chalet",
          isChecked: false,
        },
        {
          id: 4,
          name: "دبلكسات ",
          img: "/img/icons/building.svg",
          enname: "twin-house",
          isChecked: false,
        },
      ],
      commercial: [
        {
          id: 1,
          name: "محلات تجارية",
          img: "/img/icons/building-4.svg",
          enname: "villa",
          isChecked: false,
        },
        {
          id: 2,
          name: "مكاتب",
          img: "/img/icons/buildings-2.svg",
          enname: "apartment",
          isChecked: false,
        },
      ],
      Administrative: [
        {
          id: 1,
          name: "مكاتب",
          img: "/img/icons/building-4.svg",
          enname: "villa",
          isChecked: false,
        },
        {
          id: 2,
          name: "مكاتب",
          img: "/img/icons/buildings-2.svg",
          enname: "apartment",
          isChecked: false,
        },
      ],
      ResidentailType: false,
      CommercialType: false,
      AdministrativeType: false,
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
    toggleCheck(index, type) {
      if (type === "residential") {
        this.resdential[index].isChecked = !this.resdential[index].isChecked;
      } else if (type === "commercial") {
        this.commercial[index].isChecked = !this.commercial[index].isChecked;
      } else if (type === "Administrative") {
        this.Administrative[index].isChecked =
          !this.Administrative[index].isChecked;
        console.log(this.Administrative);
      }
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
.checkbox-card {
  display: flex;
  flex-direction: column;
  align-items: end;
  border: 1px solid #7da39b;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: 150px;
  justify-content: space-between;
}

.checkbox-card.checked {
  background-color: #e3f4f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkbox-card input[type="checkbox"] {
  display: none;
}

.checkbox-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #7da39b;
  border-radius: 4px;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.checkbox-card.checked .checkbox-label {
  background-color: #7da39b;
  color: white;
}

.checkbox-icon {
  font-size: 14px;
  line-height: 14px;
}

.checkbox-content {
}
</style>
