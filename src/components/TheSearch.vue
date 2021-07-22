<template>
  <div class="search">
    <form class="search__row" @submit.prevent="submitForm">
      <div class="search__control">
        <span class="search__company"></span
        ><input
          class="search__company"
          type="text"
          placeholder="Filter by title, companies, expertise…"
          v-model.trim="name"
        />
      </div>
      <div class="search__control">
        <span class="search__location"></span
        ><input
          class="search__location"
          type="text"
          placeholder="Filter by location…"
          v-model.trim="location"
        />
      </div>
      <div class="search__control">
        <div class="search__choice">
          <input
            type="checkbox"
            name="fulltime"
            id="fulltime"
            v-model="fullTime"
          />
          <label for="fulltime">Full Time Only</label>
        </div>
        <app-button class="search__btn">Search</app-button>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  name: "Search",
  // emits: ['update:modelValue'],
  // props: ['modelValue'],
  data() {
    return {
      name: "",
      location: "",
      fullTime: false,
    };
  },
  // computed: {
  //   isValid() {
  //     return this.name.length && this.location.length
  //   }
  // },
  methods: {
    submitForm() {
      let isValid = true;
      if (!this.name.length && !this.location.length) {
        isValid = false;
      }
      console.log(isValid);
      return isValid;
    },
  },
  // watch([name, location], values => {
  //     emit('update:modelValue', {
  //       name: values[0],
  //       location: values[1]
  //     })
  //   }),
  components: { AppButton },
};
</script>

<style lang="scss" scoped>
.search {
  background: var(--background-secondary);
  border-radius: 6px;
  width: 100%;
  height: 80px;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;
    text-align: left;
    height: 100%;

    input {
      color: #fff;
      font-family: "Kumbh Sans";
      font-size: 16px;
      font-weight: 400;
      background-color: inherit;
      margin-left: 16px;
      border: none;
    }
  }

  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      margin-right: 16px;
    }
  }
  &__company {
    max-width: 463px;
    &:before {
      content: url(../assets/icons/search.png);
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }

  &__location {
    max-width: 300px;
    margin-left: 23px;
    &:before {
      content: url(../assets/icons/location.svg);
      display: inline-block;
      width: 17px;
      height: 24px;
    }
  }

  &__choice {
    display: flex;
    align-items: center;

    input {
      /* margin-left: 0;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.1); */
      position: absolute;
      z-index: -1;
      opacity: 0;
      + label {
        font-size: 16px;
        font-weight: 700;
        padding-left: 16px;
        color: var(--text-color);

        display: inline-flex;
        align-items: center;
        &:before {
          content: "";
          display: inline-block;
          width: 24px;
          height: 24px;
          /* flex-shrink: 0;
          flex-grow: 0; */
          border: 1px solid transparent;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          margin-right: 16px;
          /* background-repeat: no-repeat;
          background-position: center center;
          background-size: 50% 50%; */
        }
      }
      &:checked {
        + label::before {
          background: url("../assets/icons/checked.svg") center center no-repeat;
        }
        + label:hover::before {
          cursor: pointer;
        }
      }
    }
  }
  /* label {
    font-size: 16px;
    font-weight: 700;
    padding-left: 16px;
    color: var(--text-color);

    display: inline-flex;
    align-items: center;
    user-select: none;
    &::before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid transparent;
      background-color: rgba(255, 255, 255, 0.1);
     
      border-radius: 3px;
      margin-right: 16px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  } */
  /* input:checked+label:before {
          background: url("../assets/icons/checked.svg") center center no-repeat;
        } */
  &__btn {
    padding: 16px 35.5px;
    margin-left: 26px;
  }
}
</style>
