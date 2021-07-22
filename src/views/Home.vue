<template>
  <TheSearch />
  <AppCards />
  <app-button class="app-btn">Load More</app-button>
</template>

<script>
// @ is an alias to /src
// import sourceData from "@/data.json";
import AppCards from "@/components/AppCards.vue";
import TheSearch from "@/components/TheSearch.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Home",
  components: {
    AppCards,
    TheSearch,
    AppButton,
  },
};
</script>

<style lang="scss">
.app-btn {
  padding: 16px 30px;
  margin-bottom: 104px;
}
</style>
