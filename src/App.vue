<template>
  <div id="app">
    <Navigation></Navigation>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";

export default {
  name: "app",
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout,
    Navigation
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
