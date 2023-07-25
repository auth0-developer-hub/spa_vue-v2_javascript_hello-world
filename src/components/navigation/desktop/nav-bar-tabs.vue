<template>
  <div class="nav-bar__tabs">
    <NavBarTab path="/profile" label="Profile" />
    <NavBarTab path="/public" label="Public" />
    <template v-if="$auth0.isAuthenticated">
      <NavBarTab path="/protected" label="Protected" />
      <NavBarTab path="/admin" label="Admin" />
    </template>
  </div>
</template>

<script>
import NavBarTab from "@/components/navigation/desktop/nav-bar-tab.vue";

export default {
  components: {
    NavBarTab,
  },
};
</script>
