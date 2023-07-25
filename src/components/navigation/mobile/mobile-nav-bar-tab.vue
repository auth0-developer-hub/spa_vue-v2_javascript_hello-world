<template>
  <router-link
    @click.native="internalHandleClick"
    :to="path"
    exact
    class="mobile-nav-bar__tab"
    active-class="mobile-nav-bar__tab--active"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    label: String,
    handleClick: Function,
  },
  methods: {
    internalHandleClick() {
      if (this.$router.history.current.path === this.path) {
        this.handleClick();

        return;
      }

      document.body.classList.remove("mobile-scroll-lock");
    },
  },
};
</script>
