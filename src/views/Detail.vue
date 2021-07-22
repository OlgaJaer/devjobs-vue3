<template>
  <!-- <app-card
        :position="position"
        @open="openDetail(position)"
      ></app-card> -->
  <router-link to="/">
    <app-button class="app-btn">Apply Now</app-button>
  </router-link>
</template>

<script>
// import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  name: "Detail",
  props: ["position"],
  mounted() {
    console.log(this.position);
  },
  data() {
    return {};
  },
  methods: {
    openDetail(position) {
      this.currentPosition = position;
      console.log(this.currentPosition);
    },
  },
  components: { AppButton },
};
</script>
