<template>
  <span
    class="mobile-nav-bar__toggle material-icons"
    id="mobile-menu-toggle-button"
    @click="handleClick"
  >
    {{ icon }}
  </span>
</template>

<script>
export default {
  props: {
    icon: String,
    handleClick: Function,
  },
};
</script>
