<template>
  <div class="pane">
    <div class="info">
      <div>Casos: {{cases}}</div>
      <div>Mortes: {{deaths}}</div>
    </div>
  </div>
</template>

<script>
import EventBus from "../EventBus";

export default {
  data() {
    return {
      cases: undefined,
      deaths: undefined
    };
  },
  mounted() {
    EventBus.$on("setBrazilData", (cases, deaths) => {
      this.cases = cases;
      this.deaths = deaths;
    });
  }
};
</script>