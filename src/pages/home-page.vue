<template>
  <PageLayout>
    <HeroBanner></HeroBanner>
    <Auth0Features></Auth0Features>
  </PageLayout>
</template>

<script>
import Auth0Features from "@/components/auth0-features.vue";
import HeroBanner from "@/components/hero-banner.vue";
import PageLayout from "@/components/page-layout.vue";

export default {
  components: {
    PageLayout,
    Auth0Features,
    HeroBanner,
  },
};
</script>
