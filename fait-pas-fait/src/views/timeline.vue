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
            <i class="far fa-grin-wink"></i>
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
            <!-- <p class="timeline-subtitle">{{action.elu}}</p> -->
          </div>
        </div>
        <!-- 

        <div class="timeline-container danger">
          <div class="timeline-icon">
            <i class="far fa-grin-hearts"></i>
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title">
              <span class="badge">Fierté militante !</span>
            </h4>
            <h5>Femmes au pouvoir !</h5>
            <p>
              L'élection de Léonore Moncond'huy en tant que maire(sse) de
              Poitiers et celle de Florence Jardin en tant que présidente de
              Grand Poitiers. Deux femmes à la tête des collectivités. Ni une
              anomalie, ni une exception. Un ancrage, une réappropriation et une
              lutte contre le pouvoir patriarcal. Comme l'a dit la présidente
              lors de son éléction, le territoire est sous le signe de l'audace
              et la bienveillance. Désormais il faut y ajouter "femmes,
              pionnières et solidaires !"
            </p>
            <p class="timeline-subtitle">
              Alexandra Duval - Juin & juillet 2020
            </p>
          </div>
        </div>
        <div class="timeline-container success">
          <div class="timeline-icon">
            <i class="far fa-grin-tears"></i>
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title"><span class="badge">Premier mariage</span></h4>
            <h5>Coup de coeur</h5>
            <p>
                gros stress pour officier mon premier mariage en ce début de mandat. J'avais contacté les futurs mariés en amont afin de préparer au mieux l'évènement. En fin de cérémonie, les deux époux sont venus vers moi por me remercier et pour m'offrir quelques présents personalisés : ils savaient que c'était mon premier mariage. Un souvenir qui restera gravé :)
            </p>
            <p class="timeline-subtitle">Frankie Angebault - 14 août 2020</p>
          </div>
        </div>
        <div class="timeline-container warning">
          <div class="timeline-icon">
            <i class="far fa-grimace"></i>
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title"><span class="badge">Des services sur le pont</span></h4>
            <h5>La préparation de la rentrée 2020</h5>
            <p>
                Nous sortons du premier confinement : les agents du service éducation sont épuisés mais ont fait bloc. Il va s'agir maintenant de préparer cette prochaine rentrée sans trop pouvoir préjuger de l'évolution de la pandémie. Pendant tout l'été les services seront disponibles et accueillants : je découvre le rôle d'adjointe dans des conditions pour le moins inédites !
            </p>
            <p class="timeline-subtitle">Hélène Paumier - Juillet & août 2020</p>
          </div>
        </div>
        <div class="timeline-container">
          <div class="timeline-icon">
            <i class="far fa-grin-beam-sweat"></i>
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title"><span class="badge">Choix de l'équipe de maitrise d'oeuvre du Palais</span></h4>
            <h5>Grand projet</h5>
            <p>
                Après de longs mois de dialogue compétitif, l'Atelier Novembre était enfin choisi pour piloter le projet du quartier du Palais. Un choix décisif qui nous accompagnera jusqu'en 2030 avec la réhabilitation du Palais des Ducs d'Aquitaine et des Comtes du poitou mais également son quartier. 
            </p>
            <p class="timeline-subtitle">Charles Reverchon-Billot - 2 juillet 2021</p>
          </div>
        </div>
        <div class="timeline-container info">
          <div class="timeline-icon">
            <i class="far fa-grin"></i>
          </div>
          <div class="timeline-body">
            <img src="../assets/pony.jpg" class="timeline-img" alt="">

            <h4 class="timeline-title"><span class="badge">J'peux pas, j'ai Pony !</span></h4>
            <h5>Coup de coeur</h5>
            <p>
                le jour du lancement de la flotte Pony sur Poitiers, je me souviens des groupes de jeunes poitevins et poitevines se masser devant les vélos et trottinettes nouvellement installées, des etoiles plein les yeux.            </p>
            <p class="timeline-subtitle">Frankie Angebault - 18 octobre 2022</p>
          </div>
        </div> -->
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