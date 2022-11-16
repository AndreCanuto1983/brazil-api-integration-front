<template>
  <div>
    <loading
      :active="isLoading"
      transition="fade"
      background-color="black"
      color="white"
      :is-full-page="true"
    >
    </loading>

    <h3 style="text-align: center; color: gray">Busca de Livros</h3>

    <b-container fluid="sm">
      <b-row align-h="center" style="margin-bottom: 10px">
        <b-col sm="4" style="margin-top: 10px">
          <b-input-group-append>
            <b-form-input
              type="number"
              size="sm"
              v-model="isbn"
              :state="isbnState"
              placeholder="Informe o número ISBN"
              trim
            ></b-form-input>

            <b-button size="sm" @click="getBook" variant="outline-secondary"
              ><i class="fas fa-search"></i
            ></b-button>

            <b-button size="sm" @click="clear" variant="outline-secondary"
              ><i class="fas fa-broom"></i
            ></b-button>
          </b-input-group-append>

          <b-form-invalid-feedback id="input-live-feedback"
            >O ISBN deve conter de 10 a 13 dígitos.</b-form-invalid-feedback
          >
        </b-col>
      </b-row>

      <b-row
        align-h="center"
        style="margin-top: 10px"
        v-if="this.bookData.book != undefined"
      >
        <b-card img-top class="cardPersonalized">
          <div style="padding: 10px">
            <b-img
              center
              v-if="this.bookData.book.cover_url"
              :src="this.bookData.book.cover_url"
              style="max-width: 200px; margin-top: 10px"
              class="my-shadow"
            >
            </b-img>

            <b-img
              center
              v-else
              src="../static/img/semfoto.png"
              style="max-width: 200px; margin-top: 10px"
              class="my-shadow"
            >
            </b-img>
          </div>

          <div>
            <h1 style="text-align: center">{{ this.bookData.book.title }}</h1>
          </div>

          <b-card-text>
            <div v-if="this.bookData.book.subTitle">
              <strong>Subtítulo: </strong>
              <span>{{ this.bookData.book.subTitle }}</span>
            </div>

            <div v-if="this.bookData.book.authors[0]">
              <strong>Autor(es): </strong>
              <span v-for="author in this.bookData.book.authors" :key="author">
                {{ author }}
              </span>
            </div>

            <div v-if="this.bookData.book.publisher">
              <strong>Publicação: </strong>
              <span> {{ this.bookData.book.publisher }} </span>
            </div>

            <div v-if="this.bookData.book.location">
              <strong>Localização: </strong>
              <span> {{ this.bookData.book.location }} </span>
            </div>

            <div v-if="this.bookData.book.year">
              <strong>Ano: </strong>
              <span> {{ this.bookData.book.year }} </span>
            </div>

            <div v-if="this.bookData.book.page_count">
              <strong>Número de Páginas: </strong>
              <span> {{ this.bookData.book.page_count }} </span>
            </div>

            <div v-if="this.bookData.book.synopsis" style="text-align: justify">
              <strong>Sinopse: </strong>
              <span> {{ this.bookData.book.synopsis }} </span>
            </div>

            <div v-if="this.bookData.book.subjects[0]">
              <strong>Palavras-chave: </strong>
              <span v-for="tag in this.bookData.book.subjects" :key="tag">{{
                tag
              }}</span>
            </div>
          </b-card-text>
        </b-card>
      </b-row>
      <br /><br />
    </b-container>
    <br /><br />
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
    clear() {
      this.isbn = "";
      this.bookData = {};
    },
    getBook() {
      if (this.isbn == "" || this.isbn.length < 10 || this.isbn.length > 13)
        return;

      this.isLoading = true;

      http
        .get(`/api/v1/Books/${this.isbn}`)
        .then((response) => {
          if (response.status == 204) this.$toast.info("Livro não encontrado!");

          this.bookData = response.data;
        })
        .catch((error) => {
          this.$toast.info(
              "O servidor encontra-se indisponível. Por favor tente mais tarde"
            );

            console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
span,
strong {
  font-size: small;
}

.my-shadow {
  -webkit-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  -moz-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  border-radius: 8px;
}

.cardPersonalized {
  max-width: 60%;
  border: 0;
}

@media (max-width: 600px) {
  .cardPersonalized {
    max-width: 90%;
  }
}
</style>