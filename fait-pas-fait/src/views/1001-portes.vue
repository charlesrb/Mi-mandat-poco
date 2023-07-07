<template>
  <main>
    <Navigation></Navigation>
    <h1>Bilan des 1001 portes</h1>
    <h2>
      Nous sommes sur la bonne voie du programme pour lequel nous avons été
      élus. Mais vous, qu'en pensez-vous ? C'est pour recueillir vos avis sur la
      ville que nous sommes venus à votre rencontre en porte à porte.
      <br /><br />
      👉
      <a href="https://poitierscollectif.fr/1001-portes/"
        >Toutes les informations par ici</a
      ><br /><br />
      Résultat : 1061 portes frappées, 259 portes ouvertes, pour un aperçu très
      complet de vos avis, vous trouverez ci-dessous les résultats complets,
      analysés à l'échelle de la ville, et à l'échelle des quartiers, pour
      chacun des grands enjeux de la politique municipale. 
      <br/>Pour toute question, contactez-nous ! Et vos avis se retrouvent dans le bilan de l'activité
      municipale : nos actions, vos réactions.
    </h2>
    <div class="div-telechargement">
      <a
        class="lien-telechargement"
        href="https://poitierscollectif.fr/wp-content/uploads/2023/07/BILAN_1001PORTES_VF.pdf"
        ><span class="button-telechargement"
          >Télécharger le bilan des 1001 portes</span
        ></a
      >
    </div>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: { Navigation },
  data() {
    // return {
    //   timeline: Timeline,
    // };
  },
  // created() {
  //   document.title = 'Trois années d\'élus et d\'élues Poitiers Collectif'
  //   // document.querySelector('meta[name=""]')
  // }
};
</script>

<style scoped>
.div-telechargement {
    margin:auto;
    margin-bottom:100px;
}
.button-telechargement {
  background-color: #246667;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  font-weight: 700;
}

.button-telechargement:hover {
  background-color: #cccf64;
}
</style>