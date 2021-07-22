<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <svg
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="24" rx="12" fill="white" />
        <circle cx="12" cy="12" r="7" fill="#5964E0" />
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getMediaPreference();
    console.log(initUserTheme);
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = localStorage.getItem("user-theme");

      if (hasDarkPreference === "dark-theme") {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.5s ease;
  justify-content: space-between;
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  /* transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease; */
}

.switch-toggle-checked {
  circle {
    cx: 36px;
  }
}
</style>
