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
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <States :statesData="states"/>
    </LMap>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import States from './States';

export default {
  components: {
    LMap,
    LTileLayer,
    States
  },
  data() {
    return {
      zoom: 4.7,
      center: latLng(-18.781325, -40.650391),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      mapOptions: {
        zoomSnap: 0.5
      },
    };
  },
  props: ['states'],
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
  height: 100%;
  width: 100%;
}
  
</style>

