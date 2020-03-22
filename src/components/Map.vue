<template>
  <div id="map">
    <LMap
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
    <StatesCircles />
    </LMap>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap } from "vue2-leaflet";
import StatesCircles from './StatesCircles';

export default {
  components: {
    LMap,
    StatesCircles
  },
  data() {
    return {
      statesData: undefined,
      zoom: 4.7,
      center: latLng(-18.781325, -40.650391),
      currentZoom: 11.5,
      mapOptions: {
        zoomSnap: 0.5
      },
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  }
};
</script>

<style scoped>

#map {
  position: absolute;
  z-index: 1;
  border: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
  
</style>

