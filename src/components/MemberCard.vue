<template>
  <div class="card has-background-link-light">
    <div class="card-content">
      <div class="media-left"></div>
      <div class="media-content">
        <p class="title is-4 has-text-link">
          {{ member.pseudo }}
        </p>
        <p class="subtitle is-6">Inactif depuis environ {{ getDateUpdate }} jour(s)</p>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="deleteMember()" class="card-footer-item has-text-danger">
        <i class="fa-solid fa-trash"></i>
        &nbsp; Delete
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["member"],
  data() {
    return {
      newdate: '',
    }
  },
  methods: {
    deleteMember() {
      this.$emit("deleteMember", this.member.id);
    },
  },
  computed : {
    getDateUpdate(){
      this.newdate = (new Date().getTime() - new Date(this.member.updated_at).getTime());
      this.newdate = Math.round(this.newdate / (86400 * 1000));
      return this.newdate;
    }
  },
};
</script>

<style></style>
