<template>
  <div class="home container">
    <router-link :to="'events/'" class=" hero is-medium is-info m-1">
        <div class="hero-body has-text-centered">
          <p class="title">
            <i class="fa-solid fa-calendar"></i>
          </p>
          <p class="title">Événements</p>
          <p class="subtitle">Liste des événements expirés</p>
        </div>
    </router-link>
    <router-link :to="'members/'"  class=" hero is-medium is-info m-1">
        <div class="hero-body has-text-centered">
          <p class="title">
            <i class="fa-solid fa-users"></i>
          </p>
          <p class="title">Members</p>
          <p class="subtitle">Liste des membres inactifs</p>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
