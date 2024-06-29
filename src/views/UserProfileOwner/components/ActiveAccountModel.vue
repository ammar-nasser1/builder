<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
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
            <div
              class="main-content flex flex-col gap-4 justify-center items-center"
            >
              <img
                src="../../../../public/img/icons/user-tick.svg"
                alt="user-icon"
              />
              <h1 class="text-xl font-bold">تفعيل الحساب</h1>
              <p class="w-[50%] text-center leading-6">
                تم ارسال بريد الي البريد الإلكتروني الخاص بالموظف وسيتم التفعيل
                عند تاكيد الموظف للبيانات
              </p>
              <button
                data-bs-dismiss="modal"
                class="bg-[#3C757D] w-fit text-white font-bold py-2 px-4 rounded"
              >
                تم
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.modal-dialog {
  margin: 0 auto;
  bottom: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1050;
}
.modal-dialog {
  margin: 0;
  top: 15%;
  left: 10%;
  position: fixed;
  z-index: 1050;
}
</style>
