<template>
  <div class="hero-banner hero-banner--yellow-mandarine">
    <div class="hero-banner__logo">
      <img class="hero-banner__image" :src="logo" alt="Vue.js v2 logo" />
    </div>
    <h1 class="hero-banner__headline">Hello, Vue.js v2 World!</h1>
    <p class="hero-banner__description">
      <span
        >This is a sample application that demonstrates the authentication flow
        for Vue.js v2 apps using <strong>Auth0</strong>.</span
      >
    </p>

    <a
      id="code-sample-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://developer.auth0.com/resources/code-samples/spa/vue/basic-authentication/v2-javascript"
      class="button button--secondary"
    >
      Check out the Vue.js v2 code sample →
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "https://cdn.auth0.com/blog/developer-hub/vue-logo.svg",
    };
  },
};
</script>
