<template>
    <div>
        <h1 class="title has-text-centered">Listes des événements</h1>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-full-desktop is-full-mobile"
                v-for="event in sortedArray"
                :key="event.id"
            >
                <Event :event="event" @deleteEvent="deleteEvent"/>
            </div>
        </div>
    <FlashMessage></FlashMessage>
    </div>
</template>

<script>
import Event from "../components/EventCard.vue";

export default {
    components: {
        Event,
    },
    data() {
        return {
            events: [],
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
        }
    },
};
</script>

<style></style>
