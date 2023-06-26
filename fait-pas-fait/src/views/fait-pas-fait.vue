<template>
  <main>
    <Navigation></Navigation>
    <h1>Mi-mandat Poitiers Collectif</h1>
    <!-- <h2>En 2020, l'équipe Poitiers Collectif a été élue sur la base d'un programme qui comprenait 279 actions. Après trois ans, il est temps de faire un premier bilan !</h2> -->
    <div class="test">
      <div class="buttons">
        <div v-for="pole in poles" :key="pole.id">
          <button class="button-6" @click="filtre(pole.pole)">{{pole.pole}}</button>
        </div>
      </div>
      <div v-for="pole in poles" :key="pole.id">
      <div v-if="poleChoisi == pole.pole">
        <div class="buttons">
          <div v-for="theme in pole.themes" :key="theme.id">
            <button class="button-7" @click="themeChoisi = theme">{{ theme }}</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="actions">
      
      <div v-for="action in actions" :key="action.id">
        <div class="actions__detail" v-if="action.pole == poleChoisi && themeChoisi == ''">
          <span v-if="action.Avancement != 100">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="check" v-else>C'est fait !</span><br/>
          <span class="theme">{{ action.theme }}</span><br />
          {{ action.action }}<br />
        </div>

        <div class="actions__detail" v-else-if="action.pole == poleChoisi && action.theme == themeChoisi">
          <span v-if="action.Avancement != 100">
            <label for="file">Avancement : </label>
            <progress id="file" max="100" :value="action.Avancement"></progress>
          </span>
          <span class="check" v-else>C'est fait !</span><br/>
          <span class="theme">{{ action.theme }}</span><br />
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
      poles:Poles,
      poleChoisi:"",
      themeChoisi:""
    };
  },
  methods: {
    filtre(pole) {
      this.poleChoisi = pole;
      this.themeChoisi = "";
    },
  },
};
</script>

<style>
header {
  line-height: 1.5;
}
main {
  width:75%;
  margin:auto;
  display:flex;
  flex-direction: column;
  gap:50px;
  align-items: flex-start;
  
}
.check {
  color:#246667;
  font-weight: 700;
}

.test {
  padding:0px;
  margin:0px;
}
progress {
  accent-color:#246667;
}


.button-7 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin: 0;
  min-height: 2rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
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
  color:white;
background-color:#CCCF64
;}

.button-7:hover {
  transform: translateY(-1px);
}

.button-7:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
/* CSS */
.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
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
  color:white;
background-color:#246667;}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
.theme {
  font-weight: 700;
}
.actions {
  display:flex;
  flex-direction: column;
  
}

.actions__detail {
  padding:20px;
  border-radius:25px;
  margin-bottom:20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

} 
.buttons {
  display:flex;
  flex-direction:row;
  gap:10px;
  margin-bottom:10px;
  flex-wrap:wrap;
}

@media screen and (max-width: 900px) {
  .buttons {
    width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:10px;
}

main {
  width:100%;
  /* margin:auto;
  display:flex;
  flex-direction: column;
  gap:50px;
  align-items: flex-start;
   */
}

}


</style>