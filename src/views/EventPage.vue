<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">{{ event.title }}</p>
        <p class="subtitle">Récapitulatif de l'événement</p>
      </div>
    </section>
    <div class="m-4">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h2>Créateur de l'événement : {{ creator.id }}</h2>
            <p><b>Description</b> : {{ event.description }}</p>
            <br />
            <MapEvent :event="event" />
          </div>

          <nav class="panel">
            <p class="panel-heading">Membres de l'événement</p>
            <div v-for="member in members" :key="member.id" >
              <a class="panel-block" v-if="creator.id !== member.user_id">
                  <span class="panel-icon">
                    <i
                      class="fa-solid fa-user has-text-info"
                      aria-hidden="true"
                    ></i>
                  </span>

                  {{ member.pseudo }} &nbsp; 
                  <span>
                    <b v-if="member.status === -1">(En attente)</b>
                    <b v-else-if="member.status === 0">(Décliné)</b>
                    <b v-else-if="member.status === 1">(Participe)</b>
                  </span>
              </a>
            </div>
          </nav>

          <div class="content">
            <h1>Actions</h1>
            <div class="buttons">
              <button @click="deleteEvent(event.id)" class="button is-danger">Supprimer l'événement</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Event from "../components/EventCard.vue";
import MapEvent from "../components/MapEvent.vue";

export default {
  components: {
    MapEvent,
  },
  data() {
    return {
      event: {location: {}},
      creator: [],
      members: [],
    };
  },
  created() {
    this.getEvent();
  },
  mounted() {
    this.getMembersEvent();
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
    getCreatorEvent(user_id) {
      this.$api
        .get('users/' + user_id)
        .then((response) => {
          this.creator = response.data;
        })
        .catch((err) => console.log(err));
    },
    deleteEvent(id) {
      this.$api
        .delete("events/" + id)
        .then((response) => {
          this.$router.push('/events');
          this.flashMessage.success({
            title: "Événement supprimé",
            message: "Cet événement à bien été supprimé.",
          });
        })
        .catch((err) => console.log(err));
    },
    getMembersEvent() {
      this.$api
        .get("events/" + this.$route.params.id + "/members")
        .then((response) => {
          this.members = response.data.member;
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
