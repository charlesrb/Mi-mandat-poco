<template>
  <main>    
    <Navigation></Navigation>
    <h1>Bilan mi-mandat Poitiers Collectif</h1>
    <h2>Il faut voir ce qu'on veut raconter sur cette home&#xA0;!</h2>

  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: { Navigation },
};
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