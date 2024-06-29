<template>
  <div>
    <Header />
    <div
      :class="
        sidebarOpen ? 'l-navbar show md:w-[200px] lg:w-[20%]' : 'sm-navbar'
      "
      id="nav-bar"
    >
      <button
        :class="{
          'text-white grid justify-start mt-2 w-full ': true,
          'justify-center': sidebarOpen === false,
        }"
        @click="ChangeSize()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.55078 4.5C2.61472 3.84994 2.75923 3.41238 3.08582 3.08579C3.67161 2.5 4.61442 2.5 6.50004 2.5C8.38565 2.5 9.32846 2.5 9.91425 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91425 9.91421C9.32846 10.5 8.38565 10.5 6.50004 10.5C4.61442 10.5 3.67161 10.5 3.08582 9.91421C2.77645 9.60484 2.63047 9.19589 2.56158 8.60106"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M21.4493 15.5C21.3853 14.8499 21.2408 14.4124 20.9142 14.0858C20.3284 13.5 19.3856 13.5 17.5 13.5C15.6144 13.5 14.6716 13.5 14.0858 14.0858C13.5 14.6716 13.5 15.6144 13.5 17.5C13.5 19.3856 13.5 20.3284 14.0858 20.9142C14.6716 21.5 15.6144 21.5 17.5 21.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.2408 20.5876 21.3853 20.1501 21.4493 19.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </button>
      <nav class="nav relative" style="padding: 0">
        <div>
          <a
            href="#"
            :class="
              sidebarOpen ? 'nav_logo flex justify-center' : 'nav_logo p-0'
            "
          >
            <div class="flex flex-column items-center">
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
              <span :class="sidebarOpen ? 'nav_logo-name' : 'hidden'">
                {{ title }}
              </span>
            </div>
          </a>
          <div class="nav_list">
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="{ name: link.route }"
              class="navlink flex gap-1 justify-between overflow-hidden flex-col"
              @click="
                link.dropdown ? toggleDropdown(index) : navigateTo(link.route)
              "
            >
              <button
                class="flex gap-2 justify-between overflow-hidden nav_inner"
                style="padding: 0.2rem 8px 0.1rem 1.5rem"
              >
                <div :class="sidebarOpen ? 'flex  w-full' : 'hidden'">
                  <i
                    v-if="link.dropdown"
                    class="fa fa-angle-left angle mr-1"
                    :class="{ rotate: link.isOpen }"
                  ></i>
                  <span :class="sidebarOpen ? 'nav_name ml-auto ' : 'hidden'">{{
                    link.name
                  }}</span>
                </div>
                <!-- svg icon -->
                <div v-html="link.svgIcon"></div>
              </button>
              <ul
                v-if="link.dropdown && link.isOpen"
                :class="sidebarOpen ? 'dropdown-content show' : 'hidden'"
              >
                <li
                  v-for="(item, itemIndex) in link.items"
                  :key="itemIndex"
                  class="slide-item text-right cursor-pointer"
                  @click="navigateTo(item.route)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </router-link>
          </div>
          <a
            @click="toggleSidebar && navigateTo('login')"
            href="#"
            :class="
              sidebarOpen
                ? 'absolute bottom-[133px] right-0'
                : 'absolute bottom-[33px] right-[13px]'
            "
          >
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.98701 22C2.19303 21.9984 1.43223 21.6814 0.872018 21.1188C0.311837 20.5562 -0.00185306 19.794 8.51078e-06 19V3C-0.00188358 2.20609 0.311776 1.44391 0.871987 0.881256C1.43217 0.318604 2.19294 0.00158691 2.98692 0H7.965C8.32227 0 8.65238 0.190613 8.83103 0.5C9.00965 0.809387 9.00965 1.19061 8.83103 1.5C8.65238 1.80939 8.32227 2 7.965 2H2.98701C2.43473 2 1.98701 2.44772 1.98701 3V19C1.98701 19.5523 2.43473 20 2.98701 20H7.965C8.32227 20 8.65238 20.1906 8.83103 20.5C9.00965 20.8094 9.00965 21.1906 8.83103 21.5C8.65238 21.8094 8.32227 22 7.965 22H2.98701ZM17.225 15.707C16.8346 15.3165 16.8346 14.6835 17.225 14.293L19.508 12H9.96497C9.60771 12 9.2776 11.8094 9.09895 11.5C8.92033 11.1906 8.92033 10.8094 9.09895 10.5C9.2776 10.1906 9.60771 10 9.96497 10H19.508L17.225 7.70703C16.9457 7.46121 16.8259 7.08069 16.9141 6.71924C17.0024 6.35779 17.2839 6.0752 17.6451 5.98569C18.0062 5.89618 18.3872 6.01459 18.634 6.29303L22.616 10.293C22.6893 10.3667 22.7507 10.4514 22.798 10.544L22.807 10.563L22.815 10.579V10.587L22.821 10.6V10.612V10.622L22.827 10.636V10.643L22.833 10.66L22.84 10.68C22.8573 10.7335 22.87 10.7884 22.878 10.844H22.878V10.867V10.888V10.893V10.912V10.9211C22.878 10.9261 22.878 10.9311 22.878 10.9361C22.878 10.9411 22.878 10.9451 22.878 10.9491C22.878 10.9531 22.878 10.9571 22.878 10.9601C22.878 10.963 22.878 10.9771 22.878 10.985C22.878 10.993 22.878 11.002 22.878 11.01C22.878 11.018 22.878 11.017 22.878 11.021C22.878 11.025 22.878 11.03 22.878 11.034C22.878 11.038 22.878 11.044 22.878 11.049V11.058V11.0771V11.0821V11.1031V11.1261C22.8711 11.1737 22.8607 11.2209 22.847 11.2671L22.84 11.2891L22.833 11.3091L22.827 11.326V11.333L22.821 11.347V11.3571V11.369L22.815 11.382V11.39L22.808 11.406L22.799 11.425L22.788 11.446C22.7424 11.5309 22.6849 11.6087 22.617 11.677L18.635 15.677C18.4486 15.8647 18.195 15.9702 17.9305 15.9702C17.666 15.9702 17.4124 15.8647 17.226 15.677L17.225 15.707Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Header from "../components/developerHeader.vue";

export default {
  props: ["links", "title"],
  data() {
    return {
      sidebarOpen: true,
    };
  },
  components: {
    Header,
  },
  methods: {
    ChangeSize() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleDropdown(index) {
      this.$emit("toggleDropdown", index);
    },
    navigateTo(route) {
      this.$emit("navigateTo", route);
    },
    logout() {
      localStorage.removeItem("role");
      this.$router.push({
        name: "login",
      });
    },
  },
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

.nav_name {
  font-family: "Montserrat-Arabic", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
}
.slide-item {
  font-family: "Montserrat-Arabic", sans-serif;

  display: flex;
  align-items: center;
  justify-content: right;
  padding: 8px 35px 8px 9px;
  font-size: 12px;
  color: #fff;
}
.angle {
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(-90deg);
}

/* Style the dropdown button */
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;

  position: relative;
  min-width: 160px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  transition: transform 0.3s ease;

  display: block;
}
.navlink:hover {
  text-decoration: none;
  color: #1e1e2d;

  transition: border-left 0.2s ease-in-out, color 0.2s ease;
  color: #f7f6fb; /* Example value for white color */
}
.navlink {
  transition: background-color 0.2s ease;
  margin-bottom: 1.5rem;

  color: #f7f6fb;
}
.navlink:focus {
  outline: none !important;
  text-decoration: none;
  color: #1e1e2d;
  transition: border-left 0.2s ease-in-out, color 0.2s ease;
  color: #f7f6fb; /* Example value for white color */
}
button:focus {
  outline: none !important;
}

.nav_inner {
  display: flex;
  align-items: center;
}
.nav_inner:focus {
  background: #384455 !important;

  padding: 10px;
  border-radius: 8px;
  justify-content: space-between; /* 'justify' should be 'justify-content' */
}

/* Header Styles */
.header {
  width: 100%;
  height: 76px; /* Example value for header height */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #f7f6fb; /* Example value for white color */
  z-index: 100; /* Example value for z-index */
  transition: 0.5s;
}

.header_toggle {
  color: #1b1f27; /* Example value for first color */
  font-size: 1.5rem;
  cursor: pointer;
}

.header_img {
  padding: 5px;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

/* Sidebar Styles */
.sm-navbar {
  display: block;
  right: 0;
  position: fixed;
  top: 0;
  width: 65px; /* Example value for nav width when closed */
  height: 100%;
  background-color: #1b1f27; /* Example value for first color */

  transition: 0.5s;
  z-index: 100; /* Example value for z-index */
}
.l-navbar {
  position: fixed;
  top: 0;
  right: -30%;

  /* width: 12%; Example value for nav width when closed */
  height: 1024px;
  background-color: #1b1f27; /* Example value for first color */
  padding: 0.5rem 1rem 6px;
  transition: 0.5s;
  z-index: 100; /* Example value for z-index */
}

.show {
  right: 0;
}

.body-pd {
  padding-left: 68px; /* Example value for nav width when open */
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: flex;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 2.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: #f7f6fb; /* Example value for white color */
}

.nav_logo-name {
  color: #f7f6fb; /* Example value for white color */
  font-family: Montserrat-Arabic;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
}

.nav_link {
  position: relative;
  color: #afa5d9; /* Example value for first color light */
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: #f7f6fb; /* Example value for white color */
}

.nav_icon {
  font-size: 1.75rem;
}

.active {
  color: #f7f6fb; /* Example value for white color */
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: #f7f6fb; /* Example value for white color */
}

.height-100 {
  height: 100vh;
}
</style>
