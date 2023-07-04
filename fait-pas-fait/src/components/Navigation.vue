<template>
    <nav>
      <router-link to="/">Accueil</router-link><br/>
      <router-link to="/fait-pas-fait">Fait / Pas fait</router-link><br/>
      <router-link to="/timeline">Timeline</router-link>
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
