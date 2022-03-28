<template>
    <div>
        <h1 class="title has-text-centered">Listes des membres</h1>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-half-desktop is-full-mobile"
                v-for="member in members"
                :key="member.id"
            >
                <MemberCard :member="member" @deleteMember="deleteMember"/>
            </div>
        </div>
    <FlashMessage></FlashMessage>
    </div>
</template>

<script>
import MemberCard from "../components/MemberCard.vue";

export default {
    components: {
        MemberCard,
    },
    data() {
        return {
            members: [],
        };
    },
    mounted() {
    },
    methods: {
    },
    computed: {
    },
};
</script>

<style></style>
