<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      tag="li"
      v-for="link in links"
      :key="link.url"
      active-class="active"
      :exact="link.exact"
      :to="'/' + link.path"
      ><a class="waves-effect waves-orange pointer">{{
        link.title
      }}</a></router-link
    >
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["value"],
  data() {
    return {
      links: [
        { title: "Счет", path: "", exact: true },
        { title: "История", path: "history" },
        { title: "Планирование", path: "planning" },
        { title: "Новая запись", path: "record" },
        { title: "Категории", path: "categories" }
      ]
    };
  }
};
</script>

<style scoped></style>
