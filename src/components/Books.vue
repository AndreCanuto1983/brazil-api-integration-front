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
        v-if="this.bookData.title"
      >
        <b-card img-top class="cardPersonalized">
          <div style="padding: 10px">
            <b-img
              center
              v-if="this.bookData.imageLinks"
              :src="this.bookData.imageLinks.thumbnail"
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
            <h2 style="text-align: center">{{ this.bookData.title }}</h2>
          </div>

          <b-card-text>
            <div v-if="this.bookData.authors">
              <strong>Autor(es): </strong>
              <span
                v-for="author in this.bookData.authors"
                :key="author"
                class="authorName"
              >
                {{ author }}
              </span>
            </div>

            <div v-if="this.bookData.publisher">
              <strong>Publicação: </strong>
              <span> {{ this.bookData.publisher }} </span>
            </div>

            <div v-if="this.bookData.language">
              <strong>Linguagem: </strong>
              <span> {{ this.bookData.language }} </span>
            </div>

            <div v-if="this.bookData.publishedDate">
              <strong>Data da Publicação: </strong>
              <span> {{ this.bookData.publishedDate }} </span>
            </div>

            <div v-if="this.bookData.pageCount">
              <strong>Número de Páginas: </strong>
              <span> {{ this.bookData.pageCount }} </span>
            </div>

            <div v-if="this.bookData.description" style="text-align: justify">
              <strong>Sinopse: </strong>
              <span> {{ this.bookData.description }} </span>
            </div>

            <div v-if="this.bookData.categories">
              <strong>Palavras-chave: </strong>
              <span v-for="tag in this.bookData.categories" :key="tag">{{
                tag
              }}</span>
            </div>
          </b-card-text>
        </b-card>

        <div v-if="this.related" class="relatedCardPersonalized">
          <h3 style="text-align: center">
            <strong>Livros Relacionados</strong>
          </h3>

          <b-row align-h="center">
            <b-card
              img-top
              v-for="book in this.related"
              :key="book.id"
              class="relatedCard"
            >
              <b-img
                v-if="book.volumeInfo.imageLinks"
                center
                :src="book.volumeInfo.imageLinks.thumbnail"
                class="my-shadow"
              >
              </b-img>
            </b-card>
          </b-row>
        </div>
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
    related: [],
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
        .get(`/api/Books/v2/${this.isbn}`)
        .then((response) => {
          if (response.status == 204) this.$toast.info("Livro não encontrado!");

          this.bookData = response?.data?.items[0]?.volumeInfo;

          switch (this.bookData.language) {
            case "pt":
              this.bookData.language = "Português";
              break;
            case "pt-BR":
              this.bookData.language = "Português";
              break;
            case "en":
              this.bookData.language = "Inglês";
              break;
          }

          this.bookData.publishedDate = this.bookData?.publishedDate
            ?.split("-")
            .reverse()
            .join("/");

          this.related = response?.data?.items;
          this.related.shift();
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

.relatedCard {
  max-width: 160px;
  margin-top: 10px;
  border: 0;
}

.relatedCardPersonalized {
  max-width: 70%;
  border: 0;
  margin-top: 20px;
}

.authorName {
  border: 0.1px solid lightgray;
  border-radius: 2px;
  margin-left: 3px;
}
</style>