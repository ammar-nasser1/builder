<template>
  <div class="layout">
    <Header
      v-if="
        $route.name !== 'signup' &&
        $route.name !== 'login' &&
        $route.name !== 'home'
      "
    />
    <div
      v-if="
        $route.name !== 'signup' &&
        $route.name !== 'login' &&
        $route.name !== 'home'
      "
      class="lg:w-[80%] w-calc-100-minus-65 relative top-[76px] bg-[#fafbfd]"
    >
      <router-view />
    </div>
    <div
      v-if="
        $route.name === 'signup' ||
        $route.name === 'login' ||
        $route.name === 'home'
      "
      class="w-[100%] relative bg-[#fafbfd]"
    >
      <router-view />
    </div>
    <Sidebar
      :links="links"
      :title="title"
      @navigateTo="navigateTo"
      @toggleDropdown="toggleDropdown"
      v-if="
        $route.name !== 'signup' &&
        $route.name !== 'login' &&
        $route.name !== 'home'
      "
    />
  </div>
</template>

<script>
import Header from "./components/developerHeader.vue";
import Sidebar from "./components/developerSidebar.vue";
import { linksAsDev, linksAsAdmin, linksAsUser } from "./common.js";
export default {
  name: "App",
  data() {
    return {
      links: [],
      role: localStorage.getItem("role"),
      title: "",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    },
    toggleDropdown(index) {
      this.links[index].isOpen = !this.links[index].isOpen;
    },
    updateLinksBasedOnRole() {
      switch (this.role) {
        case "dev":
          this.links = [...linksAsDev];
          this.title = "مطور عقاري";
          break;
        case "admin":
          this.links = [...linksAsAdmin];
          this.title = "مالك النظام";
          break;
        default:
          this.links = [...linksAsUser];
          this.title = "مزود خدمات";
          break;
      }
    },
    handleRoleChange(newRole) {
      this.role = newRole;
    },
  },
  mounted() {
    this.updateLinksBasedOnRole();
    window.addEventListener("roleChanged", (event) =>
      this.handleRoleChange(event.detail)
    );
  },
  beforeUnmount() {
    window.removeEventListener("roleChanged", (event) =>
      this.handleRoleChange(event.detail)
    );
  },
  watch: {
    role() {
      this.updateLinksBasedOnRole();
    },
  },
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// .amma {
//   width: calc(100% - 250px);
// }
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
