<template>
  <main>    
    <Navigation></Navigation>
    <h1>Bilan mi-mandat Poitiers Collectif</h1>
    <h2>Il faut voir ce qu'on veut raconter sur cette home&#xA0;!</h2>
    <vue-pdf-embed :source="mySource" />
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import VuePdfEmbed from 'vue-pdf-embed'


export default {
  components: { Navigation, VuePdfEmbed },
  data() {
    return {
      mySource: 'https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif.pdf'
    }
  }
}
</script>

<style scoped>


main {
  width:75%;
  margin:auto;
  display:flex;
  flex-direction: column;

  align-items: flex-start;
  
}
/* nav {
  width:75%;
  margin:auto;
} */

@media screen and (max-width: 500px) {
  main {
    width:100%;
  margin:auto;
}
}

</style>