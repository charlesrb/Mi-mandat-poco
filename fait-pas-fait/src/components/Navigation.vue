<template>
    <nav>
      <a href="/">Accueil</a><br/>
      <a href="/bilan-de-nos-actions.html">Bilan de nos actions</a><br/>
      <a href="/timeline.html">Timeline</a>
      <!-- <a href="https://poitierscollectif.fr">Retour vers Poitiers Collectif</a> -->
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    
}
</script>

<style>
nav {
  display:flex;
  flex-direction:row;
  gap:20px;
  color:#246667;
}
</style>
