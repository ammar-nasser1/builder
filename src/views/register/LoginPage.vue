<template>
  <div class="h-[100vh] pt-[41px]">
    <div class="flex justify-center items-center">
      <!-- Left Side -->
      <div class="w-2/3">
        <div class="box-border">
          <div class="relative slide h-full">
            <div
              class="carousel-indicators w-full absolute bottom-0 flex h-24 justify-center items-center m-0"
            >
              <ol class="z-50 flex w-full justify-center">
                <li
                  style="
                    width: 20px !important;
                    height: 20px !important ;
                    border-radius: 50% !important;
                  "
                  v-for="(img, i) in images"
                  :key="i"
                  class="w-[20px] h-[20px] z-50 bg-gray-300 rounded-full cursor-pointer mx-2"
                ></li>
              </ol>
            </div>
            <div class="carousel-inner relative overflow-hidden w-full">
              <div
                v-for="(img, i) in images"
                :id="`slide-${i}`"
                :key="i"
                :class="`${active === i ? 'active' : 'left-full'}`"
                class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
              >
                <img
                  class="block w-full h-[90vh]"
                  src="/img/icons/signslider.png"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div
        class="w-1/3 p-8 text-right h-[90vh] flex-col flex relative justify-center"
      >
        <div class="flex items-center justify-end absolute right-5 top-0">
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="46.1172"
              y="30.459"
              width="8.09921"
              height="13.4987"
              rx="4.0496"
              transform="rotate(30 46.1172 30.459)"
              fill="#3C757D"
            />
            <rect
              x="25.3281"
              y="18.8496"
              width="8.09921"
              height="26.9974"
              rx="4.0496"
              transform="rotate(30 25.3281 18.8496)"
              fill="#3C757D"
            />
            <rect
              x="39.0977"
              y="18.8496"
              width="8.09921"
              height="26.9974"
              rx="4.0496"
              transform="rotate(30 39.0977 18.8496)"
              fill="#3C757D"
            />
          </svg>
        </div>
        <div class="text-rights">
          <h2 class="text-2xl mb-6">تسجيل الدخول</h2>
          <form class="flex flex-col gap-7">
            <div class="w-full">
              <div class="relative">
                <input
                  style="font-family: 'Montserrat'"
                  type="text"
                  required
                  v-model="email"
                  placeholder="البريد الإلكتروني أو رقم الجوال"
                  class="py-3 pl-4 pr-11 text-right block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />

                <button
                  type="button"
                  data-hs-toggle-password='{"target": "#hs-toggle-password" }'
                  class="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1625 10.87C12.0625 10.86 11.9425 10.86 11.8325 10.87C9.4525 10.79 7.5625 8.84 7.5625 6.44C7.5625 3.99 9.5425 2 12.0025 2C14.4525 2 16.4425 3.99 16.4425 6.44C16.4325 8.84 14.5425 10.79 12.1625 10.87Z"
                      fill="black"
                    />
                    <path
                      d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full">
              <div class="relative">
                <input
                  style="font-family: 'Montserrat'"
                  id="hs-toggle-password"
                  type="password"
                  class="text-right py-3 px-6 pr-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="كلمه المرور"
                  v-model="password"
                  required
                />
                <button
                  type="button"
                  data-hs-toggle-password='{"target": "#hs-toggle-password" }'
                  class="absolute top-1 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    class="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    />
                    <path
                      class="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    />
                    <path
                      class="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    />
                    <line
                      class="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    />
                    <path
                      class="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    />
                    <circle
                      class="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex justify-between mb-4">
              <div class="flex items-center mb-6">
                <label class="mr-2"> نسيت الرقم السري </label>
              </div>
              <div class="flex items-center mb-6">
                <label class="mx-2">تذكر الحساب</label>
                <input type="checkbox" />
              </div>
            </div>

            <button
              @click.prevent="login"
              class="w-full p-2 bg-black text-white"
              style="font-family: 'Montserrat'"
            >
              تسجيل الدخول
            </button>
            <button
              class="w-full p-2 bg-black text-white"
              style="font-family: 'Montserrat'"
              @click="navigateTo('signup')"
            >
              انشاء حساب جديد
            </button>
          </form>

          <div class="flex justify-center mt-6">
            <!-- Social Login Icons -->
            <i class="fab fa-google p-2 cursor-pointer"></i>
            <i class="fab fa-facebook p-2 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [
        "/img/signslider.png",
        "/img/signslider.png",
        "/img/signslider.png",
      ],
      active: 0,
      password: null,
      email: null,
    };
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    },
    async handalSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      } catch (e) {
        this.error = "Invalid email or password !";
      }
    },
    setRole(newRole) {
      localStorage.setItem("role", newRole);
      const event = new CustomEvent("roleChanged", { detail: newRole });
      window.dispatchEvent(event);
    },
    login() {
      switch (this.email) {
        case "dev@dev.com":
          this.setRole("dev");
          this.$router.push({ name: "Customerlist" });
          break;
        case "admin@admin.com":
          this.setRole("admin");
          this.$router.push({ name: "Customerlist" });
          break;
        case "user@user.com":
          this.setRole("user");
          this.$router.push({ name: "Customerlist" });
          break;
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: url("/public/Montserrat-ArabicRegular/Montserrat-Arabic-Regular.ttf")
    format("truetype");
}
h2,
input,
label,
button {
  font-family: "Montserrat", sans-serif;
}
body {
  font-family: "Montserrat", sans-serif;
}
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
