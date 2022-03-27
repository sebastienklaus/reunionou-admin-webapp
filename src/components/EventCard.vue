<template>
  <div class="card has-background-link-light">
    <div class="card-content">
      <div class="media-left"></div>
      <div class="media-content">
        <p class="title is-4 has-text-link">
          {{ event.title }}
        </p>
        <p class="subtitle is-6">{{ event.date }} - {{ event.heure }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="deleteEvent()" class="card-footer-item has-text-danger">
        <i class="fa-solid fa-trash"></i>
        &nbsp; Delete
      </a>
      <router-link class="card-footer-item" :to="'events/' + event.id">
        <a>
          <i class="fa-solid fa-magnifying-glass"></i>
          More info
        </a>
      </router-link>
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
};
</script>

<style></style>
