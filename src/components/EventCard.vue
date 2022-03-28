<template>
  <div class="card has-background-link-light">
    <div class="card-content">
      <div class="media-left"></div>
      <div class="media-content">
        <p class="title is-4 has-text-link">
          {{ event.title }}
        </p>
        <p class="subtitle is-6">Événement du {{ event.date }} (organisé il y a environ {{ getDateCreated }} jour(s))</p>
      </div>
    </div>
    <footer class="card-footer">
      <router-link class="card-footer-item" :to="'events/' + event.id">
        <a>
          <i class="fa-solid fa-magnifying-glass"></i>
          More info
        </a>
      </router-link>
      <a @click="deleteEvent()" class="card-footer-item has-text-danger">
        <i class="fa-solid fa-trash"></i>
        &nbsp; Delete
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    deleteEvent() {
      this.$emit("deleteEvent", this.event.id);
    },
  },
  computed : {
    getDateCreated(){
      this.newdate = (new Date().getTime() - new Date(this.event.date).getTime());
      this.newdate = Math.round(this.newdate / (86400 * 1000));
      return this.newdate;
    }
  },
};
</script>

<style></style>
