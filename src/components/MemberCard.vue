<template>
  <div class="card has-background-link-light">
    <div class="card-content">
      <div class="media-left"></div>
      <div class="media-content">
        <p class="title is-4 has-text-link">
          {{ member }}
        </p>
        <p class="subtitle is-6">{{ member }} - {{ member }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <router-link class="card-footer-item" :to="'events/'">
        <a>
          <i class="fa-solid fa-magnifying-glass"></i>
          More info
        </a>
      </router-link>
      <a @click="deleteMember()" class="card-footer-item has-text-danger">
        <i class="fa-solid fa-trash"></i>
        &nbsp; Delete
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["member"],
  methods: {
    deleteMember() {
      this.$emit("deleteMember", this.member.id);
    },
  },
};
</script>

<style></style>
