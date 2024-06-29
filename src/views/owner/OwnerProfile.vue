<template>
  <div class="w-[100%] flex flex-col items-center">
    <div class="w-[100%] flex divide-x-2">
      <div class="w-3/4 m-4">
        <div
          class="w-full py-3 bg-white flex-col flex justify-start items-center rounded-xl shadow-xl my-8"
        >
          <div class="w-full pr-5 flex justify-end pb-4 bg-white items-center">
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
              <h1>الملف الشخصي</h1>
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
            class="w-full border-y pr-5 flex justify-start flex-row-reverse items-center gap-4"
          >
            <button
              :class="['bt py-2', { btnactive: step === '1' }]"
              @click="setStep('1')"
            >
              بيانات الشركه
            </button>
            <button
              :class="['bt py-2', { btnactive: step === '2' }]"
              @click="setStep('2')"
            >
              مدير الحساب
            </button>
            <button
              :class="['bt py-2', { btnactive: step === '3' }]"
              @click="setStep('3')"
            >
              الاشتراكات
            </button>
            <button
              :class="['bt py-2', { btnactive: step === '4' }]"
              @click="setStep('4')"
            >
              المستخدمين
            </button>
          </div>
        </div>
        <div
          class="w-full flex justify-end items-end py-6 shadow-sm flex-col gap-12 bg-white rounded-xl"
        >
          <div
            v-show="step === '1'"
            class="w-[70%] mx-auto flex justify-between flex-row-reverse gap-7 flex-wrap py-12"
          >
            <div class="input-wrapper w-[48%]">
              <label for="companyName" class="label">اسم الشركة</label>
              <input
                type="text"
                id="companyName"
                class="input-field"
                v-model="companyName"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="foundingContractNumber" class="label"
                >رقم عقد التأسيس</label
              >
              <input
                type="text"
                id="foundingContractNumber"
                class="input-field"
                v-model="foundingContractNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="commercialRecordNumber" class="label"
                >رقم السجل التجاري</label
              >
              <input
                type="text"
                id="commercialRecordNumber"
                class="input-field"
                v-model="commercialRecordNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="nationalAddressDetails" class="label"
                >بيانات العنوان الوطني</label
              >
              <input
                type="text"
                id="nationalAddressDetails"
                class="input-field"
                v-model="nationalAddressDetails"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="email" class="label">البريد الإلكتروني</label>
              <input
                type="text"
                id="email"
                class="input-field"
                v-model="email"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="number700" class="label">رقم 700</label>
              <input
                type="text"
                id="number700"
                class="input-field"
                v-model="number700"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="mobile" class="label">الجوال</label>
              <input
                type="text"
                id="mobile"
                class="input-field"
                v-model="mobile"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="issueDate" class="label">تاريخ الإصدار</label>
              <input
                type="text"
                id="issueDate"
                class="input-field"
                v-model="issueDate"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="expiryDate" class="label">تاريخ الانتهاء</label>
              <input
                type="text"
                id="expiryDate"
                class="input-field"
                v-model="expiryDate"
              />
            </div>
          </div>
          <div
            v-show="step === '2'"
            class="w-[70%] mx-auto flex justify-between flex-row-reverse gap-7 flex-wrap py-12"
          >
            <div class="input-wrapper w-[48%]">
              <label for="fullName" class="label">الاسم رباعي</label>
              <input
                type="text"
                id="fullName"
                class="input-field"
                v-model="fullName"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="idNumber" class="label">رقم الهويه</label>
              <input
                type="text"
                id="idNumber"
                class="input-field"
                v-model="idNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="birthDate" class="label">تاريخ الميلاد</label>
              <input
                type="text"
                id="birthDate"
                class="input-field"
                v-model="birthDate"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="mobile" class="label">الجوال</label>
              <input
                type="text"
                id="mobile"
                class="input-field"
                v-model="mobile"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="email" class="label">البريد الإلكتروني</label>
              <input
                type="text"
                id="email"
                class="input-field"
                v-model="email"
              />
            </div>
          </div>

          <div
            v-show="step === '3'"
            class="w-[70%] mx-auto flex justify-between flex-row-reverse gap-7 flex-wrap py-12"
          >
            <div class="input-wrapper w-[48%]">
              <label for="accountManager" class="label">مدير الحساب</label>
              <input
                type="text"
                id="accountManager"
                class="input-field"
                v-model="accountManager"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="companyName" class="label">اسم الشركة</label>
              <input
                type="text"
                id="companyName"
                class="input-field"
                v-model="companyName"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="unitsCount" class="label">عدد الوحدات</label>
              <input
                type="text"
                id="unitsCount"
                class="input-field"
                v-model="unitsCount"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="usedUnitsCount" class="label"
                >عدد الوحدات المستخدمة</label
              >
              <input
                type="text"
                id="usedUnitsCount"
                class="input-field"
                v-model="usedUnitsCount"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="remainingUnitsCount" class="label"
                >عدد الوحدات المتبقية</label
              >
              <input
                type="text"
                id="remainingUnitsCount"
                class="input-field"
                v-model="remainingUnitsCount"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="subscriptionStatus" class="label"
                >حالة الاشتراك</label
              >
              <input
                type="text"
                id="subscriptionStatus"
                class="input-field"
                v-model="subscriptionStatus"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="startDate" class="label">تاريخ البدء</label>
              <input
                type="text"
                id="startDate"
                class="input-field"
                v-model="startDate"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="mobileNumber" class="label">رقم الجوال</label>
              <input
                type="text"
                id="mobileNumber"
                class="input-field"
                v-model="mobileNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="usersCount" class="label">عدد المستخدمين</label>
              <input
                type="text"
                id="usersCount"
                class="input-field"
                v-model="usersCount"
              />
            </div>
          </div>

          <div
            v-show="step === '4'"
            class="w-[70%] mx-auto flex justify-between flex-row-reverse gap-7 flex-wrap py-12"
          >
            <div class="input-wrapper w-[48%]">
              <label for="companyName" class="label">اسم الشركة</label>
              <input
                type="text"
                id="companyName"
                class="input-field"
                v-model="companyName"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="foundingContractNumber" class="label"
                >رقم عقد التأسيس</label
              >
              <input
                type="text"
                id="foundingContractNumber"
                class="input-field"
                v-model="foundingContractNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="commercialRecordNumber" class="label"
                >رقم السجل التجاري</label
              >
              <input
                type="text"
                id="commercialRecordNumber"
                class="input-field"
                v-model="commercialRecordNumber"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="nationalAddressDetails" class="label"
                >بيانات العنوان الوطني</label
              >
              <input
                type="text"
                id="nationalAddressDetails"
                class="input-field"
                v-model="nationalAddressDetails"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="email" class="label">البريد الإلكتروني</label>
              <input
                type="text"
                id="email"
                class="input-field"
                v-model="email"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="number700" class="label">رقم 700</label>
              <input
                type="text"
                id="number700"
                class="input-field"
                v-model="number700"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="mobile" class="label">الجوال</label>
              <input
                type="text"
                id="mobile"
                class="input-field"
                v-model="mobile"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="issueDate" class="label">تاريخ الإصدار</label>
              <input
                type="text"
                id="issueDate"
                class="input-field"
                v-model="issueDate"
              />
            </div>
            <div class="input-wrapper w-[48%]">
              <label for="expiryDate" class="label">تاريخ الانتهاء</label>
              <input
                type="text"
                id="expiryDate"
                class="input-field"
                v-model="expiryDate"
              />
            </div>
          </div>
          <div class="w-full flex justify-center items-end">
            <div class="w-full flex justify-center">
              <div
                v-for="dot in ['4', '3', '2', '1']"
                :key="dot"
                class="dot"
                :class="{ activee: step === dot }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <div class="bg-gray-100 flex justify-center min-h-screen">
          <div class="bg-white mt-12 shadow-md rounded-lg p-6 w-64">
            <div class="flex flex-col items-center">
              <div class="bg-gray-200 rounded-full h-20 w-20"></div>
              <h2 class="mt-4 text-lg font-semibold">رافال</h2>
              <p class="text-gray-500">شركه عقارات</p>
              <div class="flex items-center mt-2">
                <span class="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                <span>نشط</span>
              </div>
              <p class="mt-2 text-sm text-gray-600">User Id: 21315698</p>
              <div class="bg-gray-100 rounded-lg mt-4 h-20 w-full"></div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-4">
              <div
                class="bg-gray-100 border border-dashed border-gray-300 rounded-lg h-20 flex items-center justify-center text-gray-500 text-sm"
              >
                أضف العنوان الوطني
              </div>
              <div
                class="bg-gray-100 border border-dashed border-gray-300 rounded-lg h-20 flex items-center justify-center text-gray-500 text-sm"
              >
                أضف الهوية الوطنية
              </div>
              <div
                class="bg-gray-100 border border-dashed border-gray-300 rounded-lg h-20 flex items-center justify-center text-gray-500 text-sm"
              >
                أضف شهادة البيان
              </div>
              <div
                class="bg-gray-100 border border-dashed border-gray-300 rounded-lg h-20 flex items-center justify-center text-gray-500 text-sm"
              >
                أضف عقد
              </div>
            </div>
            <div class="text-center mt-4 text-gray-600 text-sm">
              تاريخ الدخول 2023/11/1
            </div>
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
      step: "1",
      companyName: "",
      foundingContractNumber: "",
      commercialRecordNumber: "",
      nationalAddressDetails: "",
      email: "",
      number700: "",
      mobile: "",
      issueDate: "",
      expiryDate: "",
      fullName: "",
      idNumber: "",
      birthDate: "",
      accountManager: "",
      unitsCount: "",
      usedUnitsCount: "",
      remainingUnitsCount: "",
      subscriptionStatus: "",
      startDate: "",
      mobileNumber: "",
      usersCount: "",
      userName: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    setStep(newStep) {
      this.step = newStep; // Update the step value
      console.log(this.step); // Log the current step for debugging
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
.btnactive {
  background: #f6f7f8;
  border-bottom: 3px solid #3c757d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 10px;
}
.input-wrapper {
  position: relative;
}

.label {
  position: absolute;
  top: -15px;
  right: 5px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #3c757d;
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
.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
}
.activee {
  background-color: #3c757d;
}
</style>
