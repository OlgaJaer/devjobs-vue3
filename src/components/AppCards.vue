<template>
  <div class="app-cards">
    <!-- <div class="app-cards" v-if="positionIdx < positions.length"> -->
    <!-- <AppCard
      
      v-for="position in cardsToShow"
      :key="position.posId"
      :position="position"
      :idx="idx"
      @open="openDetail(position)"
    /> -->
    <AppCard
      v-for="position in positions"
      :key="position.posId"
      :position="position"
      @open="openDetail(position)"
    />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import getPositions from "@/api/get-positions.js";
import AppCard from "./AppCard.vue";

export default {
  name: "AppCards",
  mounted() {
    console.log(this.positions[2].name);
  },
  provide() {
    return {
      companies: this.companies,
      countries: this.countries,
    };
  },
  data() {
    return {
      currentPosition: {},
      // cardsToShow: 6,
      // totalCards: 0,
      // idx: 0,
      // positions: sourceData.positions,
      positions: getPositions(6),
      companies: sourceData.companies,
      countries: sourceData.countries,
    };
  },
  methods: {
    openDetail(position) {
      this.currentPosition = position;
      console.log(this.currentPosition);
      this.$router.push(`/detail/${this.currentPosition.position}`);
    },
  },
  components: { AppCard },
};
</script>

<style lang="scss">
.app-cards {
  width: 100%;
  padding-top: 105px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 30px;
  margin-bottom: 56px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);

    column-gap: 11px;
  }
}
/* 
  position: relative;
  padding-top: 49px;
  background: var(--background-secondary);
  padding-left: 32px;
  text-align: left;

  &__logo {
    position: absolute;
    top: -25px;
    width: 50px;
  }

  &__time {
    display: flex;
    justify-content: start;
    align-items: center;
    color: #6e8098;
    font-weight: 400;
    padding-bottom: 16px;
  }
  &__publishedAt {
    padding-right: 28px;
  }
  &__position {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-color);
    padding-bottom: 17px;
  }
  &__company {
    color: #6e8098;
    font-weight: 400;
    padding-bottom: 44px;
  }
  &__country {
    color: #5964e0;
    font-weight: 700;
    padding-bottom: 36px;
  }
} */
</style>
