<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <!-- <img src="@/assets/images/logo.png" class="mr-2" alt="img" /> -->
            <router-link to="/" class="navbar-item title is-5 m-0">
                <img src="@/assets/images/logo.png" class="mr-2" alt="img" />
                REUNIONOU - ADMIN
            </router-link>
            <a
                role="button"
                v-on:click="showNav = !showNav"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
            id="navbar"
            class="navbar-menu"
            v-bind:class="{ 'is-active': showNav }"
            v-if="username"
        >
            <div class="navbar-start">
                <router-link class="navbar-item" to="/events">Événements</router-link>
                <router-link to="/members" class="navbar-item">Membres</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <p>
                        Bonjour
                        <b>{{username}}</b>
                    </p>
                </div>
                <form class="navbar-item" @submit.prevent="deconnect()">
                    <button class="button is-danger">Se déconnecter</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ["username"],
    data() {
        return {
            showNav: false,
        };
    },
    methods: {
        deconnect() {
            this.$emit("deconnect");
        },
    },
};
</script>

<style></style>
