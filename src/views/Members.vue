<template>
    <div>
        <h1 class="title has-text-centered">Listes des membres</h1>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-one-third-desktop is-full-mobile"
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
    data() {
        return {
            members: [],
        };
    },
    mounted() {
        this.getMembers();
    },
    methods: {
        getMembers(){
            this.$api
            .get("members")
            .then((response) => {
                // console.log(response.data);
                this.members = response.data.members;
            })
            .catch((err) => console.log(err));
        },
        deleteMember(id){
            this.$api
                .delete("events/" + id)
                .then((response) => {
                    console.log(response.data);
                    this.flashMessage.success({
                        title: 'Événement supprimé',
                        message: 'Cet événement à bien été supprimé.'
                    });
                    this.getEvents();
                })
                .catch((err) => console.log(err));
        }
    },
    computed: {
    },
};
</script>

<style></style>
