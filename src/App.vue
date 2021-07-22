<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>
<script>
import AppLayout from "./layout/AppLayout.vue";
export default {
  components: { AppLayout },
};
</script>

<style lang="scss">
body {
  height: 100%;
  font-family: "Kumbh Sans", sans-serif;
}

:root.dark-theme {
  --background-primary: #121721;
  --background-secondary: #19202d;
  --text-color: #ffffff;
  --violet: #5964e0;
  --light-violet: #939bf4;
}

/* Define styles for the root window with dark - mode preference */
:root {
  --background-primary: #f4f6f8;
  --background-secondary: #ffffff;
  --text-color: #19202d;
  --grey: #9daec2;
  --dark-grey: #6e8098;
}
img {
  width: 100%;
}

.container {
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 689px;
  }
}
</style>
