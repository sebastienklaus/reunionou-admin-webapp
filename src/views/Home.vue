<template>
  <div class="home columns is-centered m-4">
    <router-link :to="'events/'" class="column hero is-large  is-one-third  is-info m-1">
        <div class="hero-body has-text-centered">
          <p class="title">
            <i class="fa-solid fa-calendar"></i>
          </p>
          <p class="title">Événements</p>
          <p class="subtitle">Liste des événements</p>
        </div>
    </router-link>
    <router-link :to="'members/'"  class="column hero is-large  is-one-third  is-info m-1">
        <div class="hero-body has-text-centered">
          <p class="title">
            <i class="fa-solid fa-users"></i>
          </p>
          <p class="title">Members</p>
          <p class="subtitle">Liste des members</p>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
