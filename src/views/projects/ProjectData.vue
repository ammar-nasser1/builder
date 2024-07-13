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
        <h1>بيانات المشروع</h1>
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
      <div class="w-[90%] flex justify-between gap-6 flex-wrap">
        <h1 class="text-right w-full pb-3">البيانات الأولية</h1>

        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"
            >English اسم المشروع باللغة
          </label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="projectnameEN"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label">
            اسم المشروع باللغة العربية</label
          >
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="projectnameAR"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> رقم المشروع</label>
          <input
            type="text"
            id="inputField"
            class="input-field"
            v-model="projectnumber"
          />
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> نمط البناء</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="Constructionstyle"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> اسم الحي</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="DistrictName"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> اسم المدينة</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="CityName"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> حالة المشروع</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="ProjectStatus"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> نوع المشروع</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="ProjectType"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> خيارات البيع</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="Sellingoptions"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="input-wrapper lg:w-[45%] w-full">
          <label for="selectField" class="label"> اجمالي عدد الوحدات</label>
          <select
            id="selectField"
            class="select-field w-full"
            v-model="TotalNumberofUnits"
          >
            <option value="" disabled selected>موقف خارجي</option>
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="w-[45%] flex gap-5 justify-end items-center">
          <label for="inputFieldc" class=""> عرض على الموظفين؟</label>
          <input
            type="checkbox"
            id="inputFieldc"
            class=""
            v-model="Showtoemployees"
          />
        </div>
        <div class="input-wrapper w-[45%]">
          <label for="inputField" class="label"> موعد التسليم</label>
          <input
            type="date"
            id="inputField"
            class="input-field"
            v-model="Deliverytime"
          />
        </div>
      </div>
      <transition name="fade">
        <div class="w-full" v-show="next[0].step">
          <div class="flex justify-between w-full lg:p-20 flex-wrap">
            <div class="lg:w-[45%] w-full rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13820.901577242525!2d31.168355399999996!3d30.001683800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458459ca4c1597f%3A0x37b9cb19be3aff4a!2sAraCan%20Pyramids%20Hotel!5e0!3m2!1sen!2seg!4v1713800845893!5m2!1sen!2seg"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                class="rounded-xl lg:w-[50%] h-[200px] w-full"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              class="lg:w-[45%] w-full flex flex-col justify-self-center items-center gap-12"
            >
              <h1 class="w-full text-right pt-3">عنوان المشروع</h1>
              <div class="input-wrapper w-full">
                <label for="inputField" class="label">Google map عنوان </label>
                <input
                  type="text"
                  id="inputField"
                  class="input-field"
                  v-model="GoogleMapTitle"
                />
              </div>
              <div class="input-wrapper w-full">
                <label for="inputField" class="label">العنوان يدويا </label>
                <input
                  type="text"
                  id="inputField"
                  class="input-field"
                  v-model="Addressmanually"
                />
              </div>
            </div>
          </div>
          <div class="w-[98%] py-8">
            <h1 class="w-full text-right p-9">ارفاق صور المشروع</h1>
            <label
              for="fileInput"
              class="w-[98%] h-[100px] flex flex-row-reverse items-center gap-2 border-dashed border-2 justify-center rounded-2xl cursor-pointer"
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
              <p>ارفق الصور الخاصة بالمشروع</p>
            </label>
          </div>
          <div class="w-[98%] py-8">
            <h1 class="w-full text-right p-9">فيديو المشروع</h1>
            <label
              for="fileInput"
              class="w-[98%] h-[100px] flex flex-row-reverse items-center gap-2 border-dashed border-2 justify-center rounded-2xl cursor-pointer"
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
              <p>ارفق الفيديو الخاصة بالمشروع</p>
            </label>
          </div>
          <div class="w-full">
            <h1 class="w-full text-right p-9">وصف المشروع</h1>
            <div
              class="w-[98%] mx-auto border p-7 rounded-2xl text-right"
              dir="rtl"
            >
              دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا
              علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا
              النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص
              منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً
              بديلاً ومؤقتاً.
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div v-show="next[0].step" class="w-full">
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
              <h1>مميزات المشروع</h1>
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

          <div class="w-full flex justify-end gap-5 items-center">
            <label
              data-bs-toggle="modal"
              data-bs-target="#AddFeature"
              class="w-[125px] h-[120px] p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img src="/img/icons/+.png" alt="asd" class="w-[25px] h-[20px]" />
              <p>إضافة مميزة</p>
            </label>
            <div
              class="modal fade"
              id="AddFeature"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header" dir="rtl">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      إضافة مميزات للمشروع
                    </h1>
                    <button
                      class="btn-close m-0 bg-slate-50"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="bg-white rounded-xl w-full mx-auto divide-y-2">
                      <div class="flex justify-end py-3">
                        <div class="input-wrapper lg:w-[45%] w-full p-2">
                          <label for="selectField" class="label">
                            حدد مجموعة المميزات
                          </label>
                          <select
                            id="selectField"
                            class="select-field w-full"
                            v-model="TotalNumberofUnits"
                          >
                            <option value="" disabled selected>
                              اختر المجموعة الخاصة بالمميزات
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
                      </div>
                      <div class="w-full flex justify-end">
                        <div class="w-[85%] flex flex-col">
                          <div class="flex gap-5 flex-row-reverse p-3">
                            <h1>حدد مميزات المشروع</h1>
                            <button class="bg-black rounded-xl text-white p-2">
                              اختيار الكل
                            </button>
                          </div>
                          <div class="flex gap-4 p-5">
                            <label
                              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
                            >
                              <img
                                src="/img/icons/camera.png"
                                alt="asd"
                                class="w-[64px] h-[64px]"
                              />
                              <p>كاميرات مراقبة</p> </label
                            ><label
                              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
                            >
                              <img
                                src="/img/icons/camera.png"
                                alt="asd"
                                class="w-[64px] h-[64px]"
                              />
                              <p>كاميرات مراقبة</p> </label
                            ><label
                              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
                            >
                              <img
                                src="/img/icons/camera.png"
                                alt="asd"
                                class="w-[64px] h-[64px]"
                              />
                              <p>كاميرات مراقبة</p> </label
                            ><label
                              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
                            >
                              <img
                                src="/img/icons/camera.png"
                                alt="asd"
                                class="w-[64px] h-[64px]"
                              />
                              <p>كاميرات مراقبة</p> </label
                            ><label
                              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
                            >
                              <img
                                src="/img/icons/camera.png"
                                alt="asd"
                                class="w-[64px] h-[64px]"
                              />
                              <p>كاميرات مراقبة</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer flex flex-col">
                    <button
                      data-bs-dismiss="modal"
                      @click="navigateTo('/Customerlist')"
                      class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
                    >
                      إضافة مميزات للمشروع
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
            <label
              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/camera.png"
                alt="asd"
                class="w-[64px] h-[64px]"
              />
              <p>كاميرات مراقبة</p>
            </label>
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
              <h1>المرافق والخدمات القريبة</h1>
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

          <div class="w-full flex justify-end gap-5 items-center">
            <label
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="w-[125px] h-[120px] p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img src="/img/icons/+.png" alt="asd" class="w-[25px] h-[20px]" />
              <p>كاميرات مراقبة</p>
            </label>
            <label
              class="p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/market.png"
                alt="asd"
                class="w-[48px] h-[25px]"
              />
              <p>هايبر سعودي</p>
            </label>
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
              <h1>الضمانات</h1>
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

          <div class="w-full flex justify-end gap-5 items-center">
            <label
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="w-[125px] h-[140px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img src="/img/icons/+.png" alt="asd" class="w-[25px] h-[20px]" />
              <p>إضافة مميزة</p>
            </label>
            <label
              class="p-4 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/Elevators.png"
                alt="asd"
                class="w-[48px] h-[25px]"
              />
              <p>المصاعد25 سنة</p>
              <p class="text-[#8D6E3D]">الشركة العالمية للصيانة</p>
            </label>
            <label
              class="p-4 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/factory.png"
                alt="asd"
                class="w-[48px] h-[25px]"
              />
              <p>المصاعد25 سنة</p>
              <p class="text-[#8D6E3D]">الشركة العالمية للصيانة</p>
            </label>
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
              <h1>خدمات ما بعد البيع</h1>
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

          <div class="w-full flex justify-end gap-5 items-center">
            <label
              class="p-4 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/tickey.png"
                alt="asd"
                class="w-[48px] h-[25px]"
              />
              <p>سداد فاتورة شركة المياه</p>
              <p class="text-[#8D6E3D]">للسنة الاولى فقط</p>
            </label>
            <label
              class="p-4 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/tickey.png"
                alt="asd"
                class="w-[48px] h-[25px]"
              />
              <p>سداد فاتورة شركة المياه</p>
              <p class="text-[#8D6E3D]">للسنة الاولى فقط</p>
            </label>
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
              <h1>الخدمات التشغيلية</h1>
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

          <div class="w-full flex justify-end gap-5 items-center">
            <label
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="w-[96px] h-[96px] p-2 flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img src="/img/icons/+.png" alt="asd" class="w-[25px] h-[20px]" />
              <p class="text-[10px]">إضافة خدمة</p>
            </label>
            <label
              class="p-2 h-[96px] w-[96px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/electricity.png"
                alt="asd"
                class="w-[36px] h-[36px]"
              />
              <p>كهرباء</p>
            </label>
            <label
              class="p-2 h-[96px] w-[96px] flex flex-col items-center gap-2 border justify-center rounded-2xl cursor-pointer"
            >
              <img
                src="/img/icons/water.png"
                alt="asd"
                class="w-[36px] h-[36px]"
              />
              <p>مياة</p>
            </label>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="w-full flex flex-col gap-12 my-20" v-show="next[1].step">
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
      </div>
    </transition>
    <div class="w-[97%] my-7 flex justify-start">
      <button
        @click="scrollUp(0)"
        v-show="!next[0].step"
        class="bg-[#3C757D] w-40 text-white font-bold py-2 px-4 rounded"
      >
        التالي
      </button>
      <button
        @click="scrollUp(1)"
        v-show="next[0].step && !next[1].step"
        class="bg-[#3C757D] w-40 text-white font-bold py-2 px-4 rounded"
      >
        التالي
      </button>
      <button
        v-show="next[1].step"
        class="bg-[#3C757D] w-40 text-white font-bold py-2 px-4 rounded"
      >
        التالي
      </button>
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
            <h1 class="modal-title fs-5" id="exampleModalLabel">بحث الوحدات</h1>
            <button
              class="btn-close m-0 bg-slate-50"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="bg-white rounded-xl w-full mx-auto">
              <!-- Header -->

              <!-- Main content -->
              <div class="">
                <div
                  class="flex justify-end flex-col gap-7 items-end divide-y divide-solid divide-gray-300"
                >
                  <div class="w-[100%] lg:w-[60%] gap-3 flex flex-col">
                    <h1 class="text-right text-lg">نوع البحث</h1>
                    <div class="flex justify-between items-center flex-row">
                      <div class="flex items-center flex-row-reverse">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value="yes"
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          @change="toggleUpfile"
                        />
                        <label
                          for="default-radio-1"
                          class="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >حسب المشروع
                        </label>
                      </div>
                      <div class="flex items-center flex-row-reverse">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value="no"
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          @change="toggleUpfile"
                          checked
                        />
                        <label
                          for="default-radio-2"
                          class="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          حسب البيانات المدخلة
                        </label>
                      </div>
                    </div>
                  </div>
                  <transition name="fade">
                    <div class="w-full py-1 upfile" v-show="showUpfile">
                      <div
                        class="w-full mx-auto flex flex-col items-end gap-4 py-4"
                      >
                        <div class="input-wrapper lg:w-[43%] w-full">
                          <label for="selectField" class="label">
                            اختار المشروع</label
                          >
                          <select
                            id="selectField"
                            class="select-field w-full"
                            v-model="selectedCountry"
                          >
                            <option value="" disabled selected>
                              اختار المشروع
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
                      </div>
                    </div>
                  </transition>
                  <div class="w-[100%] pt-4">
                    <div class="relative overflow-x-auto sm:rounded-lg">
                      <div
                        class="flex justify-end h-[32px] py-10 bg-white items-center border-b shadow-sm"
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
                          <h1>الوحدات المشابة</h1>
                        </div>
                        <div
                          class="h-[37px]"
                          style="
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
                      <table
                        dir="rtl"
                        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <thead
                          class="text-xs text-gray-700 uppercase bg-[#D9E1E74D] dark:bg-gray-700 dark:text-gray-400"
                        >
                          <tr>
                            <th scope="col" class="p-4"></th>
                            <th scope="col" class="px-6 py-3">اسم العميل</th>
                            <th scope="col" class="px-6 py-3">
                              رقم هاتف العميل
                            </th>
                            <th scope="col" class="px-6 py-3">اسم المشروع</th>
                            <th scope="col" class="px-6 py-3">اسم الوحدة</th>
                            <th scope="col" class="px-6 py-3">طريقة الوصول</th>
                            <th scope="col" class="px-6 py-3">الاجراءات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="data in tabledata"
                            :key="data.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  class="sr-only"
                                  >checkbox</label
                                >
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {{ data.cust_name }}
                            </th>
                            <td class="px-6 py-4">{{ data.phone }}</td>
                            <td class="px-6 py-4">{{ data.pr_name }}</td>
                            <td class="px-6 py-4">{{ data.unit_name }}</td>
                            <td class="px-6 py-4">{{ data.way_connect }}</td>

                            <td class="flex items-center px-6 py-4">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="23"
                                  height="23"
                                  rx="7.5"
                                  fill="white"
                                  stroke="#CECECE"
                                />
                                <path
                                  d="M7.80156 10.8C7.14156 10.8 6.60156 11.34 6.60156 12C6.60156 12.66 7.14156 13.2 7.80156 13.2C8.46156 13.2 9.00156 12.66 9.00156 12C9.00156 11.34 8.46156 10.8 7.80156 10.8Z"
                                  fill="#BDBDBD"
                                />
                                <path
                                  d="M16.2 10.8C15.54 10.8 15 11.34 15 12C15 12.66 15.54 13.2 16.2 13.2C16.86 13.2 17.4 12.66 17.4 12C17.4 11.34 16.86 10.8 16.2 10.8Z"
                                  fill="#BDBDBD"
                                />
                                <path
                                  d="M12.0008 10.8C11.3408 10.8 10.8008 11.34 10.8008 12C10.8008 12.66 11.3408 13.2 12.0008 13.2C12.6608 13.2 13.2008 12.66 13.2008 12C13.2008 11.34 12.6608 10.8 12.0008 10.8Z"
                                  fill="#BDBDBD"
                                />
                              </svg>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer flex flex-col">
            <button
              data-bs-dismiss="modal"
              @click="navigateTo('/Customerlist')"
              class="bg-[#3C757D] w-[97%] text-white font-bold py-2 px-4 rounded"
            >
              اختيار وحدة للعميل
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
      selectedCountry: "", // Default selected country
      options: [
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "FR", label: "France" },
        { value: "DE", label: "Germany" },
      ],
      showUpfile: false,
      next: [{ step: false }, { step: false }],
      next2: false,
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
    scrollUp(b) {
      this.next[b].step = true;
      setTimeout(() => {
        window.scrollBy({
          top: 800,
          left: 0,
          behavior: "auto",
        });
      }, 100);
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
