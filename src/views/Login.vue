<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.png" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Connexion</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    class="input"
                    type="email"
                    required
                    placeholder="Email"
                    v-model="email"
                />
            </div>
            <div class="field">
                <label for="password">Mot de passe</label>
                <input
                    id="password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                    v-model="password"
                />
            </div>
            <div class="field">
                <button class="button is-success">Se connecter</button>
            </div>
        </form>
    <FlashMessage></FlashMessage>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        validation() {
            this.$api
                .post(
                    "authAdmin",
                    {},
                    {
                        auth: {
                            username: this.email,
                            password: this.password,
                        },
                    }
                )
                .then((response) => {
                    this.$store.commit(
                        "setToken",
                        "Bearer " + response.data["refresh-token"]
                    );
                    this.$store.commit(
                        "setUser",
                        jwt_decode(response.data["refresh-token"]).upr
                    );
                    this.$router.push("/");
                })
                .catch((err) => {
                    this.flashMessage.error({
                        title: 'Connexion impossible',
                        message: 'Une erreur est survenue lors de la connexion.'
                    })
                });
        },
    },
};
</script>

<style></style>
