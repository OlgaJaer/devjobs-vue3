<template>
  <header class="header">
    <div class="header__bg">
      <!-- <img src="../assets/header-bg.png" alt=""> -->
      <div class="header__content container">
        <div class="header__row">
          <router-link to="/">
            <div class="logo">
              <img src="../assets/logos/devjobs.svg" alt="logo" />
            </div>
          </router-link>
          <div class="toggle">
            <img class="toggle__light" src="../assets/icons/light.svg" alt="" />
            <thema-button class="toggle__main" />
            <!-- <svg
              class="toggle__main"
              width="48"
              height="24"
              viewBox="0 0 48 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="24" rx="12" fill="white" />
              <circle cx="36" cy="12" r="7" fill="#5964E0" />
            </svg> -->

            <img class="toggle__dark" src="../assets/icons/dark.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ThemaButton from "./ThemaButton.vue";
export default {
  name: "Header",
  components: { ThemaButton },
};
</script>

<style lang="scss">
.header {
  background-color: var(--background-primary);
  width: 100%;
  height: 160px;

  &__bg {
    padding-top: 44px;
    background: url(../assets/header-bg.png) left center/cover no-repeat;
    width: 100%;
    height: 160px;
    z-index: 100;
    img {
      object-fit: fit;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .logo {
      cursor: pointer;
    }
  }
}
.toggle {
  display: flex;
  align-items: center;
  &__light {
    width: 20px;
    padding-right: 16px;
  }
  &__main {
    width: 48px;
    padding-right: 16px;
    &:hover {
      cursor: pointer;
      circle {
        fill: #939bf4;
      }
    }
  }
  &__dark {
    width: 12px;
  }
}
</style>
