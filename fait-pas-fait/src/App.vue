<script>
import Actions from "./assets/actions.json";
import Poles from "./assets/poles.json";

export default {
  data() {
    return {
      actions: Actions,
      poles:Poles,
      poleChoisi:"",
    };
  },
};
</script>
<template>
  <main>
    <div class="buttons">
    <div v-for="pole in poles" :key="pole.id">
      <button class="button-6" @click="poleChoisi = pole.pole">{{pole.pole}}</button>
    </div>
  </div>
    <div class="actions">
    <div v-for="action in actions" :key="action.id">
      <div class="actions__detail" v-if="action.pole == poleChoisi">
      <span v-if="action.Avancement != 100">
        <label for="file">Avancement : </label>
        <progress id="file" max="100" :value="action.Avancement"></progress>
      </span>
      <span class="check" v-else>C'est fait !</span><br/>
      <span class="theme">{{ action.theme }}</span><br />
      {{ action.action }}<br /><br />
      </div>
    </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
main {
  width:75%;
  margin:auto;
  display:flex;
  flex-direction: row;
  gap:50px;
  align-items: flex-start;
  
}
.check {
  color:green;
  font-weight: 700;
}

progress {
  accent-color:green;
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
  color: rgba(0, 0, 0, 0.65);
}

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
  flex-direction:column;
  gap:10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}



</style>
