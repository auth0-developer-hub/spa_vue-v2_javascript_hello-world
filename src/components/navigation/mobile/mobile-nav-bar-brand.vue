<template>
  <div @click="handleClick" class="mobile-nav-bar__brand">
    <router-link to="/">
      <img
        class="mobile-nav-bar__logo"
        src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
        alt="Auth0 shield logo"
        width="82"
        height="24"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    handleClick: Function,
  },
};
</script>
