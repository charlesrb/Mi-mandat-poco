<template>
  <main>
    <Navigation></Navigation>
    <h1>Mi-mandat Poitiers Collectif</h1>
    <h2>
      En 2020, l'équipe Poitiers Collectif a été élue sur la base d'un
      programme. Un programme, décliné en feuilles de route dès les premières
      semaines du mandat. Pour ce qui dépend de la Ville de Poitiers, nous avons
      identifié 248 actions. Après trois ans, il est temps de faire un premier
      bilan ! Fait, pas fait ? Nous avons engagé, parfois terminé, plus de 90%
      de ces actions. Découvrez en un coup d'oeil les déclinaisons de nos
      engagements de campagne en objectifs politiques et actions concrètes. A
      noter que nombre d'actions de notre programme dépendaient de Grand
      Poitiers. Pour un aperçu global de notre action, téléchargez notre bilan complet, en entier ou par pôle !
    </h2>
    <div class="test">
      <div class="buttons">
        <div v-for="pole in poles" :key="pole.id">
          <button class="button-6" @click="filtre(pole.pole)">
            {{ pole.pole }}
          </button>
        </div>
      </div>

      <div v-for="pole in poles" :key="pole.id">
        <div v-if="poleChoisi == pole.pole">
          <div class="buttons">
            <div v-for="theme in pole.themes" :key="theme.id">
              <button class="button-7" @click="avancement(theme)">
                {{ theme }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="themeChoisi == '' && poleChoisi == ''">
      <div id="telechargement"></div>
    </div>
    <div v-else>
      <ul>
        <li>
          🤩 Il y a
          {{
            this.zero +
            this.quart +
            this.moitie +
            this.troisquart +
            this.termine
          }}
          actions dans le programme
        </li>
        <li v-if="this.zero != 0">❌ {{ this.zero }} actions pas commencées</li>
        <li v-if="this.quart != 0">
          😄 {{ this.quart }} actions commencées à 25%
        </li>
        <li v-if="this.moitie != 0">
          💪 {{ this.moitie }} actions commencées à 50%
        </li>
        <li v-if="this.troisquart != 0">
          👏 {{ this.troisquart }} actions commencées à 75%
        </li>
        <li v-if="this.termine != 0">
          ✅ {{ this.termine }} actions terminées !
        </li>
      </ul>

      <div v-if="this.currentDownloadURL" class="telechargement">
        <a class="lien-telechargement" :href="this.currentDownloadURL"><span class="button-telechargement">Télécharger</span></a> le bilan {{ this.nomPole }}
        <img :src="this.imgPole" class="imgPole" alt="">

        </div>
    </div>

    <div class="actions">
      <div v-for="action in actions" :key="action.id">
        <div
          class="actions__detail"
          v-if="poleChoisi == 'Tout voir' && themeChoisi == ''"
        >
          <span v-if="action.Avancement != 100 && action.Avancement != 0">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="not-check" v-else-if="action.Avancement == '0'"
            >C'est pas commencé, ou abandonné</span
          >
          <span class="check" v-else>C'est fait !</span><br />

          <span class="theme">{{ action.theme }}</span
          ><br />

          <span class="titre">{{ action.titre }}</span
          ><br />
          {{ action.action }}<br />
        </div>
        <div
          class="actions__detail"
          v-else-if="action.pole == poleChoisi && themeChoisi == ''"
        >
          <span v-if="action.Avancement != 100 && action.Avancement != 0">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="not-check" v-else-if="action.Avancement == '0'"
            >C'est pas commencé, ou abandonné</span
          >
          <span class="check" v-else>C'est fait !</span><br />
          <span class="theme">{{ action.theme }}</span
          ><br />

          <span class="titre">{{ action.titre }}</span
          ><br />
          {{ action.action }}<br />
        </div>

        <div
          class="actions__detail"
          v-else-if="action.pole == poleChoisi && action.theme == themeChoisi"
        >
          <span v-if="action.Avancement != 100 && action.Avancement != 0">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="not-check" v-else-if="action.Avancement == '0'"
            >C'est pas commencé, ou abandonné</span
          >
          <span class="check" v-else>C'est fait !</span><br />
          <span class="theme">{{ action.theme }}</span
          ><br />
          <span class="titre">{{ action.titre }}</span
          ><br />

          {{ action.action }}<br />
        </div>
        <div
          class="actions__detail"
          v-else-if="poleChoisi == 'Tout voir' && action.theme == themeChoisi"
        >
          <span v-if="action.Avancement != 100">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="check" v-else>C'est fait !</span><br />
          <span class="theme">{{ action.theme }}</span
          ><br />
          <span class="titre">{{ action.titre }}</span
          ><br />

          {{ action.action }}<br />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Actions from "../assets/actions.json";
import Poles from "../assets/poles.json";
import Navigation from "../components/Navigation.vue";

export default {
  components: { Navigation },
  data() {
    return {
      actions: Actions,
      poles: Poles,
      poleChoisi: "",
      themeChoisi: "",
      zero: 0,
      quart: 0,
      moitie: 0,
      termine: 0,
      currentDownloadURL: null,
      nomPole:null,
      imgPoleDevra:null,
    };
  },
  watch: {
    poleChoisi:{
      handler(value) {
        if (this.poleChoisi == "Ville d'initiatives") {
        this.currentDownloadURL = "https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif-developpement-et-rayonnement.pdf";
        this.nomPole = "du pôle développement et rayonnement local"
        this.imgPole = "https://poitierscollectif.fr/wp-content/uploads/2023/07/elus-pole-developpement-rayonnement.png";

        return
      }
      if (this.poleChoisi == "Ville citoyenne") {
        this.currentDownloadURL = "https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif-democratie.pdf"
        this.nomPole = "du pôle démocratie"
        this.imgPole = "https://poitierscollectif.fr/wp-content/uploads/2023/07/elus-pole-democratie.png";

        return
      }
      if (this.poleChoisi == "Ville écologique") {
        this.currentDownloadURL = "https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif-transition-ecologique.pdf"
        this.nomPole = "du pôle transition écologique"
        this.imgPole = "https://poitierscollectif.fr/wp-content/uploads/2023/07/elus-pole-transition-ecologique.png";

        return
      }
      if (this.poleChoisi == "Ville solidaire") {
        this.currentDownloadURL = "https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif-lien-social-education.pdf"
        this.nomPole = "du pôle lien social et éducation"
        this.imgPole = "https://poitierscollectif.fr/wp-content/uploads/2023/07/elus-pole-lien-social.png";
        return
      }
      if (this.poleChoisi == "Tout voir") {
        this.currentDownloadURL = "https://poitierscollectif.fr/wp-content/uploads/2023/07/bilan-poitiers-collectif.pdf"
        this.nomPole = "des trois premières années"
        return
      }
      this.currentDownloadURL = null;
      this.nomPole = null;
      this.imgPole = null;
      }
    }
  },
  methods: {
    filtre(pole) {
      this.poleChoisi = pole;
      this.themeChoisi = "";
      this.zero = 0;
      this.quart = 0;
      this.moitie = 0;
      this.troisquart = 0;
      this.termine = 0;

      for (const action of this.actions) {
        if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.Avancement == "25"
        ) {
          this.quart = this.quart + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.Avancement == "50"
        ) {
          this.moitie = this.moitie + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.Avancement == "0"
        ) {
          this.zero = this.zero + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.Avancement == "75"
        ) {
          this.troisquart = this.troisquart + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.Avancement == "100"
        ) {
          this.termine = this.termine + 1;
        }
      }
    },
    avancement(theme) {
      this.themeChoisi = theme;
      this.quart = 0;
      this.moitie = 0;
      this.zero = 0;
      this.troisquart = 0;
      this.termine = 0;
      for (const action of this.actions) {
        if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.theme == this.themeChoisi &&
          action.Avancement == "25"
        ) {
          this.quart = this.quart + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.theme == this.themeChoisi &&
          action.Avancement == "50"
        ) {
          this.moitie = this.moitie + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.theme == this.themeChoisi &&
          action.Avancement == "0"
        ) {
          this.zero = this.zero + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.theme == this.themeChoisi &&
          action.Avancement == "75"
        ) {
          this.troisquart = this.troisquart + 1;
        } else if (
          (action.pole == this.poleChoisi || this.poleChoisi == "Tout voir") &&
          action.theme == this.themeChoisi &&
          action.Avancement == "100"
        ) {
          this.termine = this.termine + 1;
        }
      }
    },
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

header {
  line-height: 1.5;
}
main {
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
ul {
  margin-top: 50px;
}
li {
  list-style: none;
}

.imgPole {
  margin-top:30px;
  width:100%;
}

.telechargement {
  margin-top: 20px;
  margin-bottom: 50px;
}
.telechargement > a {
  font-weight: 700;
}
.check {
  color: #246667;
  font-weight: 700;
}

.not-check {
  color: red;
  font-weight: 700;
}

.test  {
  padding: 0px;
  margin: 0px;
}

.titre {
  text-transform: uppercase;
  font-weight: 700;
}

progress {
  accent-color: #246667;
}

.button-telechargement {
  background-color: #246667;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:10px;
  padding-right: 10px;
  border-radius:5px;
  color:white;
  font-weight: 700;
}

.button-telechargement:hover {
  background-color: #cccf64;
}

.button-7 {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.01) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 1;
  margin: 0;
  min-height: 2rem;
  padding: calc(0.1rem - 1px) calc(0.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-7:hover,
.button-7:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: white;
  background-color: #cccf64;
}

.button-7:hover {
  transform: translateY(-1px);
}

.button-7:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
/* CSS */
.button-6 {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #246667;
  cursor: pointer;
  display: inline-flex;
  font-family: "League Spartan", sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}
.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: white;
  background-color: #246667;
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
.theme {
  font-weight: 400;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  line-height: 50px;
  background-color: #cccf64;
}
.actions {
  display: flex;
  flex-direction: column;
}

.actions__detail {
  padding: 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

@media screen and (max-width: 900px) {
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  main {
    width: 100%;
    /* margin:auto;
  display:flex;
  flex-direction: column;
  gap:50px;
  align-items: flex-start;
   */
  }
}
</style>