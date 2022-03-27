<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">{{ event }}</p>
        <p class="subtitle">Récapitulatif de l'événement</p>
      </div>
    </section>
    <div class="m-4">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Créateur de l'événement : {{creator.fullname}}</h1>
            <br />
            <MapEvent />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Event from "../components/EventCard.vue";
import MapEvent from '../components/MapEvent.vue';

export default {
    components : {
        MapEvent,
    },
  data() {
    return {
      event: [],
      creator: [],
    };
  },
  created() {
    this.getEvent();
  },
  
  methods: {
    getEvent() {
      this.$api
        .get("events/" + this.$route.params.id)
        .then((response) => {
          this.event = response.data.event;
          this.getCreatorEvent(this.event.user_id);
        })
        .catch((err) => console.log(err));
    },
    getCreatorEvent(user_id){
        this.$api
            .get(user_id)
            .then((response) => {
                this.creator = response.data.user;
            })
            .catch((err) => console.log(err));
    },
    deleteEvent(id) {
        this.$api
            .delete("events/" + id)
            .then((response) => {
                this.flashMessage.success({
                    title: "Événement supprimé",
                    message: "Cet événement à bien été supprimé.",
                });
                this.getEvents();
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    sortedArray: function () {
      function compare(a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      }

      return this.events.sort(compare);
    },
  },
};
</script>

<style></style>
