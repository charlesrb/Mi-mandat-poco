<template>
  <main>
    <Navigation></Navigation>
    <div class="container">
      <div class="timeline">
        <div class="timeline-container primary">
          <div class="timeline-icon">
            <i class="far fa-grin-wink"></i>
          </div>
          <div class="timeline-body">
            <h4 class="timeline-title"><span class="badge">Elections</span></h4>
            <h5>Explosion d'émotions</h5>
            <p>
              Avant même la fin du dépouillement, AC se déclare vaincu. Joie
              dans les bureaux de vote, Place Charles VII, dans la rue. Arrivée
              euphorique à la Mairie. On ne sait pas ce qui nous attend, on est
              heureux !
            </p>
            <p class="timeline-subtitle">Claude Thibault - Juin 2020</p>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>

<style>
</style>