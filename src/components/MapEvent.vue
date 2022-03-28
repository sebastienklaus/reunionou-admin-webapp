<template>
  <l-map style="height: 300px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <p>
          Événement {{event.title}} à {{event.location.name}}
          <br />
          le {{event.date}} à {{event.heure}}
        </p>
      </l-tooltip>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  props: ["event"],
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [48.866667, 2.333333],
      markerLatLng: [48.866667, 2.333333],
    };
  },
};
</script>
