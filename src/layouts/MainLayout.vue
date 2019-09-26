<template>
  <div class="app-main-layout">
    <Navigation></Navigation>
    <Sidebar></Sidebar>

    <main class="app-content">
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
  components: { Sidebar, Navigation, TopButton }
};
</script>

<style scoped></style>
