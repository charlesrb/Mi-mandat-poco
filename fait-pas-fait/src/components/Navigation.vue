<template>
  <div>
    <nav class="desktop-menu">
      <a href="/">Accueil</a><br />
      <a href="/bilan-de-nos-actions.html">Bilan de nos actions</a><br />
      <a href="/timeline.html">Timeline</a><br />
      <a href="/1001-portes.html">1001 portes</a><br/>
      <a href="https://poitierscollectif.fr">Retour vers Poitiers Collectif</a>
    </nav>
    <nav class="mobile-menu">
      <svg @click="openClose()" class="mobile-menu-svg" viewBox="0 0 100 80" width="30" height="30">
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
      <div v-if="isOpen">
        <a href="/">Accueil</a><br />
        <a href="/bilan-de-nos-actions.html">Bilan de nos actions</a><br />
        <a href="/timeline.html">Timeline</a><br />
        <a href="/1001-portes.html">1001 portes</a><br/>
        <a href="https://poitierscollectif.fr">Retour vers Poitiers Collectif</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openClose() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
@media screen and (min-width: 768px) {
  .desktop-menu {
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: #246667;
  }
  .mobile-menu {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
}
.mobile-menu {
  cursor: pointer;

}
.mobile-menu-svg rect {
    fill:#246667;
  }
</style>
