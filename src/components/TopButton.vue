<template>
  <div class="fixed-action-btn">
    <a
      class="btn-floating btn-large blue"
      href="#"
      @click.prevent="navigateHandler"
    >
      <i class="large material-icons">add</i>
    </a>
  </div>
</template>

<script>
export default {
  name: "TopButton",
  methods: {
    navigateHandler() {
      this.$router.push("record");
    }
  }
};
</script>

<style scoped></style>
