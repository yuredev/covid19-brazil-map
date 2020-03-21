<template>

  <div style="height: 600px; width: 80%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-circle v-bind="states.rn"/>
      <l-circle v-bind="states.pb"/>
      <l-circle v-bind="states.pe"/>
      <l-circle v-bind="states.al"/>
      <l-circle v-bind="states.se"/>
      <l-circle v-bind="states.ba"/>
      <l-circle v-bind="states.ce"/>
      <l-circle v-bind="states.pi"/>
      <l-circle v-bind="states.ma"/>
      <l-circle v-bind="states.mg"/>
      <l-circle v-bind="states.es"/>
      <l-circle v-bind="states.rj"/>
      <l-circle v-bind="states.sp"/>
      <l-circle v-bind="states.pr"/>
      <l-circle v-bind="states.sc"/>
      <l-circle v-bind="states.rs"/>
      <l-circle v-bind="states.go"/>
      <l-circle v-bind="states.df"/>
      <l-circle v-bind="states.am"/>
      <l-circle v-bind="states.to"/>
      <l-circle v-bind="states.mt"/>
      <l-circle v-bind="states.ms"/>
      <l-circle v-bind="states.pa"/>
      <l-circle v-bind="states.ro"/>
      <l-circle v-bind="states.rr"/>
      <l-circle v-bind="states.ac"/>
      <l-circle v-bind="states.ap"/>
      

      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import State from './State';

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      states: {
        rn: new State(-36.3, -5.5, 6),
        pb: new State(-36.7, -7.2, 2),
        pe: new State(-37.5, -8.5, 2),
        al: new State(-36.2, -9.7, 2),
        se: new State(-37.2, -10.7, 2),
        ce: new State(-39.55, -5.2, 2),
        pi: new State(-42.1, -7, 2),
        ma: new State(-45.3, -4.7, 2),
        to: new State(-48.5, -10, 2),
        go: new State(-51, -17, 2),
        df: new State(-47.9, -15.77, 2),
        mt: new State(-56, -12.77, 2),
        pa: new State(-53.3, -4, 2),
        ms: new State(-55, -20.47, 2),
        am: new State(-65, -4.1, 2),
        rr: new State(-61.4, 2, 2),
        ap: new State(-51.7, 1.15, 2),
        ro: new State(-63, -11.1, 2),
        ac: new State(-70.4, -9, 2),
        ba: new State(-41.7, -12.3, 2),
        mg: new State(-44.6, -18.85, 2),
        es: new State(-40.55, -19.7, 2),
        rj: new State(-42.65, -22.6, 2),
        sp: new State(-48.3, -22.781325, 30000),
        pr: new State(-51, -25, 2),
        sc: new State(-49.8, -27.5, 2),
        rs: new State(-53.3, -30.3, 2),
      },
      zoom: 4,
      center: latLng(-11.781325, -36.650391),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
};
</script>
