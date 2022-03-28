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
            members: [
                { "id": "01ff2bb1-fd5d-4ed1-b0f8-89a4f3b4c232", "user_id": "/users/898f20c4-710d-4508-9129-af7a975572ae", "event_id": "db2dba7a-4da7-48fe-9ab8-4f47e0ee7b9a", "pseudo": "gredsull5", "created_at": "2022-01-22T01:50:03.000000Z", "updated_at": "2021-09-11T06:14:31.000000Z", "status": -1 },
                { "id": "02ff2bb1-fd5d-4ed1-b0f8-89a4f3b4c232", "user_id": "/users/898f20c4-710d-4508-9129-af7a975572ae", "event_id": "db2dba7a-4da7-48fe-9ab8-4f47e0ee7b9a", "pseudo": "gredsull5", "created_at": "2022-01-22T01:50:03.000000Z", "updated_at": "2021-09-11T06:14:31.000000Z", "status": -1 },
                { "id": "00ff2bb1-fd5d-4ed1-b0f8-89a4f3b4c232", "user_id": "/users/898f20c4-710d-4508-9129-af7a975572ae", "event_id": "db2dba7a-4da7-48fe-9ab8-4f47e0ee7b9a", "pseudo": "gredsull5", "created_at": "2022-01-22T01:50:03.000000Z", "updated_at": "2021-09-11T06:14:31.000000Z", "status": -1 },
            ],
        };
    },
    mounted() {
    },
    methods: {
        deleteMember(member_id){
            console.log(member_id);
        }
    },
    computed: {
    },
};
</script>

<style></style>
