<template>
  <div class="app-main-layout">
    <Navigation @navClick="navClickHandler"></Navigation>
    <Sidebar v-model="isOpen"></Sidebar>

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <TopButton></TopButton>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import TopButton from "../components/TopButton";
export default {
  name: "MainLayout",
  data() {
    return {
      isOpen: true
    };
  },
  methods: {
    navClickHandler() {
      this.isOpen = !this.isOpen;
    }
  },
  components: { Sidebar, Navigation, TopButton }
};
</script>

<style scoped></style>
