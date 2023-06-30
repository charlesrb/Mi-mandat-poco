<template>
  <div>    <Navigation></Navigation>
</div>
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
  gap:50px;
  align-items: flex-start;
  
}
nav {

  width:75%;
  margin:auto;
}
</style>