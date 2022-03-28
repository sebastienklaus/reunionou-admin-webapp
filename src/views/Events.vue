<template>
    <div>
        <h1 class="title has-text-centered">Listes des événements</h1>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="text" v-model="search" placeholder="Recherche d'un événement"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-calendar"></i>
                </span>
            </p>
        </div>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-half-desktop is-full-mobile"
                v-for="event in filteredEvents"
                :key="event.id"
            >
                <EventCard :event="event" @deleteEvent="deleteEvent"/>
            </div>
        </div>
    <FlashMessage></FlashMessage>
    </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";

export default {
    components: {
        EventCard,
    },
    data() {
        return {
            events: [],
            search: '',
        };
    },
    mounted() {
        this.getEvents();
    },
    methods: {
        getEvents(){
            this.$api
            .get("events")
            .then((response) => {
                this.events = response.data.events;
            })
            .catch((err) => console.log(err));
        },
        deleteEvent(id){
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
        sortedArray: function() {
            function compare(a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
            }

            return this.events.sort(compare);
        },
        filteredEvents() {
            this.sortedArray;
            return this.events.filter(event => {
                return event.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
};
</script>

<style></style>
