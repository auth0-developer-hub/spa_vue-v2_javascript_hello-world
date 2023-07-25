<template>
  <div class="mobile-nav-bar__container">
    <nav class="mobile-nav-bar">
      <MobileNavBarBrand :handle-click="closeMobileMenu" />
      <MobileMenuToggleButton
        :icon="mobileMenuIcon"
        :handle-click="toggleMobileMenu"
      />
      <div v-if="isMobileMenuOpen()" class="mobile-nav-bar__menu">
        <MobileNavBarTabs :handle-click="closeMobileMenu" />
        <MobileNavBarButtons />
      </div>
    </nav>
  </div>
</template>

<script>
import MobileMenuToggleButton from "@/components/navigation/mobile/mobile-menu-toggle-button.vue";
import MobileNavBarBrand from "@/components/navigation/mobile/mobile-nav-bar-brand.vue";
import MobileNavBarButtons from "@/components/navigation/mobile/mobile-nav-bar-buttons.vue";
import MobileNavBarTabs from "@/components/navigation/mobile/mobile-nav-bar-tabs.vue";

export default {
  components: {
    MobileMenuToggleButton,
    MobileNavBarBrand,
    MobileNavBarButtons,
    MobileNavBarTabs,
  },
  data() {
    const MobileMenuIcon = {
      MENU: "menu",
      CLOSE: "close",
    };
    const MobileMenuState = {
      OPEN: "open",
      CLOSED: "closed",
    };
    return {
      MobileMenuIcon,
      MobileMenuState,
      mobileMenuIcon: MobileMenuIcon.MENU,
      mobileMenuState: MobileMenuState.CLOSED,
    };
  },
  methods: {
    isMobileMenuOpen() {
      return this.mobileMenuState === this.MobileMenuState.OPEN;
    },
    closeMobileMenu() {
      this.mobileMenuState = this.MobileMenuState.CLOSED;
      this.mobileMenuIcon = this.MobileMenuIcon.MENU;

      document.body.classList.remove("mobile-scroll-lock");
    },
    openMobileMenu() {
      this.mobileMenuState = this.MobileMenuState.OPEN;
      this.mobileMenuIcon = this.MobileMenuIcon.CLOSE;

      document.body.classList.add("mobile-scroll-lock");
    },
    toggleMobileMenu() {
      switch (this.mobileMenuState) {
        case this.MobileMenuState.OPEN: {
          this.closeMobileMenu();
          return;
        }
        case this.MobileMenuState.CLOSED: {
          this.openMobileMenu();
          return;
        }
      }
    },
  },
};
</script>
