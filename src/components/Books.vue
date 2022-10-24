<template>
  <div class="personalized-container">
    <loading
      :active="isLoading"
      transition="fade"
      background-color="black"
      color="white"
      :is-full-page="true"
    >
    </loading>

    <b-container>
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

      <b-row align-h="center">
        <b-card 
          :img-src="this.bookData.book.cover_url"
          v-if="this.bookData.book != undefined"         
          img-left
          class="shadow p-3 mb-5 bg-white rounded"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>

        <!-- <div class="imgFile">
          <b-img
            center
            fluid
            :src="this.bookData.book.cover_url"
            v-if="this.bookData.book != undefined"
          ></b-img>
        </div> -->
      </b-row>
    </b-container>
  </div>
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
    bookData: {},
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
        .get(`/api/v1/Books/${this.isbn}`)
        .then((response) => {
          console.log("RESPONSE", response);

          if (response.status == 204)
            this.$toast.info("Livro não encontrado :(");

          this.bookData = response.data;
        })
        .catch((error) => {
          if (error.response === undefined) {
            this.$toast.info(
              "O servidor encontra-se indisponível. Por favor tente mais tarde"
            );
          } else {
            this.$toast.error(
              "Estamos com problemas no servidor, por favor, tente mais tarde"
            );
            console.log(error);
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.imgFile {
  max-width: 200px;
}

.personalized-container {
  /* width: 90vw;
  height: 90vh; */
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
}
</style>