<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      tag="li"
      v-for="link in links"
      :key="link.id"
      active-class="active"
      exact
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
  data() {
    return {
      links: [
        { id: "1", title: "Счет", path: "" },
        { id: "2", title: "История", path: "history" },
        { id: "3", title: "Планирование", path: "planning" },
        { id: "4", title: "Новая запись", path: "record" },
        { id: "5", title: "Категории", path: "categories" }
      ]
    };
  }
};
</script>

<style scoped></style>
