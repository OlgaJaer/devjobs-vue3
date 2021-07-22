<template>
  <button class="btn" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
};
</script>

<style lang="scss">
.btn {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background: #5964e0;
  border-radius: 6px;
  &:hover {
    background: #939bf4;
  }
}
</style>
