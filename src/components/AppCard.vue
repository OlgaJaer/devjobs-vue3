<template>
  <div class="app-card" @click="$emit('open')">
    <div class="app-card__logo">
      <img src="@/assets/logos/scoot.png" alt="" />
      <!-- <img :src="companyById(position.companyId).logo" alt="" /> -->
    </div>
    <div class="app-card__time">
      <div class="app-card__publishedAt">{{ position.publishedAt }}</div>
      <div class="app-card__workSchedule">{{ position.workSchedule }}</div>
    </div>
    <div class="app-card__position">{{ position.position }}</div>
    <div class="app-card__company">
      <div>{{ companyById(position.companyId).name }}</div>
    </div>
    <div class="app-card__country">
      {{ countryById(position.countryId).name }}
    </div>
    <div class="app-card__icon">
      <div class="app-card__icon-img">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: ["position", "idx"],
  inject: ["countries", "companies"],
  methods: {
    countryById(countryId) {
      return this.countries.find((c) => c.id === countryId);
    },
    companyById(companyId) {
      return this.companies.find((c) => c.id === companyId);
    },
  },
};
</script>

<style lang="scss">
.app-card {
  position: relative;
  padding-top: 49px;
  background: var(--background-secondary);
  padding-left: 32px;
  text-align: left;
  cursor: pointer;
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
}
</style>
