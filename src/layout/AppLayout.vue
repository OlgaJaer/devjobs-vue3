<template>
  <div class="wrapper">
    <TheHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style lang="scss">
.wrapper {
  background-color: var(--background-primary);
}
</style>
