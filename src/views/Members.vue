<template>
    <div>
        <h1 class="title has-text-centered">Listes des membres inactifs</h1>
        <h2 class="subtitle has-text-centered">Depuis 6 mois</h2>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="text" v-model="search" placeholder="Recherche d'un membre"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </p>
        </div>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-one-third-desktop is-full-mobile"
                v-for="member in filteredList"
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
            search: '',
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
                .delete("members/" + id)
                .then((response) => {
                    this.flashMessage.success({
                        title: 'Membre supprimé',
                        message: 'Ce membre à bien été supprimé.'
                    });
                    this.getMembers();
                })
                .catch((err) => console.log(err));
        }
    },
    computed: {
        filteredList() {
            return this.members.filter(member => {
                return member.pseudo.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
};
</script>

<style></style>
