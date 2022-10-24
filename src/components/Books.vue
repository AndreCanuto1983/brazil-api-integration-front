<template>
  <b-container>
    <loading
      :active="isLoading"
      transition="fade"
      background-color="black"
      color="white"
      :is-full-page="true"
    >
    </loading>

    <b-row align-h="center" style="margin-bottom: 10px">
      <b-col lg="4" style="margin-top: 10px">
        <b-input-group-append>
          <b-form-input
            type="number"
            size="lg"
            v-model="isbn"
            :state="isbnState"
            placeholder="Informe o número ISBN"
            trim
          ></b-form-input>

          <b-button @click="getBook" variant="outline-secondary"
            ><i class="fas fa-search"></i
          ></b-button>
        </b-input-group-append>

        <b-form-invalid-feedback id="input-live-feedback"
          >O ISBN deve conter de 10 a 13 dígitos.</b-form-invalid-feedback
        >
      </b-col>
    </b-row>

    <b-row align-h="center"> </b-row>
  </b-container>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import http from "../services/HttpUtil.js";

export default {
  components: {
    Loading,
  },
  data: () => ({
    isLoading: false,
    isbn: "",
  }),
  computed: {
    isbnState() {
      if (this.isbn == "") {
        return null;
      }
      return this.isbn.length < 10 || this.isbn.length > 13 ? false : true;
    },
  },
  methods: {
    getBook() {
      if (this.isbn == "" || this.isbn.length < 10 || this.isbn.length > 13)
        return;

      this.isLoading = true;

      http
        .post(`/api/v1/Books/${this.isbn}`)
        .then((response) => {    
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>