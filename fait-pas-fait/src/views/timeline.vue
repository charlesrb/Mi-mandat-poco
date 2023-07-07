<template>
  <main>
    <Navigation></Navigation>
    <h1>Timeline 2020 - 2023</h1>
    <h2>
      Voilà maintenant trois ans que nous sommes élu.e.s... Trois ans de gestion
      d'une ville au quotidien, de belles réalisations, de belles projections
      pour les années à venir, mais aussi trois ans d'apprentissage de la vie
      d'élu.e.s ! Pour nous qui portons l'ambition de permettre à chaque
      citoyen.ne de s'engager dans la vie politique locale, endosser le costume,
      concilier vie professionnelle, familiale et politique, ne fut pas toujours
      chose facile. Sans parler des multiples surprises que nous a réservées ce
      début de mandat ! Retrouvez ici un aperçu de nos trois années vécues, à
      hauteur d'hommes et de femmes élu.es, et engagé.e.s comme
      au premier jour
    </h2>

    <div class="container">
      <div class="timeline">
        <div
          class="timeline-container primary"
          v-for="action in timeline"
          :key="action.id"
        >
          <div class="timeline-icon">
            <img :src="action.imgelu" alt="" />
          </div>
          <div class="timeline-body">
            <!-- <div class="timeline-elu">
            <img :src="action.imgelu" alt=""> -->
            <p class="date">
              {{ action.date }} - <span class="elu">{{ action.elu }}</span>
            </p>
            <!-- </div> -->
            <img
              :src="action.img"
              class="timeline-img"
              alt=""
              v-if="action.img"
            />
            <h4 class="timeline-title">
              <span class="badge">{{ action.qualification }}</span>
            </h4>
            <h5>{{ action.titre }}</h5>
            <p>
              {{ action.descriptif }}
            </p>
            <a v-if="action.lien" class="lien-timeline" :href="action.lien">A lire ici !</a>
            <!-- <p class="timeline-subtitle">{{action.elu}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Timeline from "../assets/timeline.json";

export default {
  components: { Navigation },
  data() {
    return {
      timeline: Timeline,
    };
  },
  // created() {
  //   document.title = 'Trois années d\'élus et d\'élues Poitiers Collectif'
  //   // document.querySelector('meta[name=""]')
  // }
};
</script>

<style>
</style>