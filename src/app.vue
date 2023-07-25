<template>
  <div v-if="$auth0.isLoading" class="page-layout">
    <PageLoader />
  </div>
  <router-view v-else />
</template>

<script>
import PageLoader from "@/components/page-loader.vue";
export default {
  components: {
    PageLoader,
  },
};
</script>
