<template>
  <main>    
    <Navigation></Navigation>
    <h1>Bilan mi-mandat Poitiers Collectif</h1>
    <h2>Bienvenue sur le site dédié au mi-mandat de Poitiers Collectif ! <br/>
      Vous y retrouverez le <a href="https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif.pdf">bilan détaillé</a>, le <a href="/bilan-de-nos-actions">bilan de nos actions</a> et la <a href="/timeline">timeline</a> des trois dernières années ! Bonne visite !</h2>
    <!-- <vue-pdf-embed :source="mySource" /> -->
    <!-- <iframe src="https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif.pdf" width="100%" height="700px"> </iframe> -->
    <iframe src="//v.calameo.com/?bkcode=00741617240c58f9db1f5&mode=mini" width="100%" height="500" frameborder="0" scrolling="no" allowtransparency allowfullscreen></iframe>
</main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  components: { Navigation, VuePdfEmbed },
  data() {
    return {
      // mySource: 'https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif.pdf'
    };
  },
};
</script>

<style scoped>
main {
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
}
/* nav {
  width:75%;
  margin:auto;
} */

@media screen and (max-width: 500px) {
  main {
    width: 100%;
    margin: auto;
  }
}
</style>