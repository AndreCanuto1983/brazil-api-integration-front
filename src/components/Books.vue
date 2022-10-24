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
          </b-input-group-append>

          <b-form-invalid-feedback id="input-live-feedback"
            >O ISBN deve conter de 10 a 13 dígitos.</b-form-invalid-feedback
          >
        </b-col>
      </b-row>

      <b-row
        align-h="center"
        style="margin-top: 10px;"
        v-if="this.bookData.book != undefined"        
      >
        <div>
          <b-img  
            center          
            v-if="this.bookData.book.cover_url"
            :src="this.bookData.book.cover_url"
            style="max-width: 200px; margin-top: 10px;"
            class="my-shadow"
          >
          </b-img>
        </div>
        <b-card
          :title="this.bookData.book.title"
          img-top
          style="max-width: 60%; border:0;"          
        >
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
              <strong>Páginas: </strong>
              <span> {{ this.bookData.book.page_count }} </span>
            </div>

            <div v-if="this.bookData.book.synopsis">
              <strong>Synopsis: </strong>
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
        <!-- <b-card
          no-body
          class="overflow-hidden shadow p-3 mb-5 bg-white rounded"
          style="max-width: 700px"
        >
          <b-row no-gutters>
            <b-col>
              <b-card-img
                v-if="this.bookData.book.cover_url"
                :src="this.bookData.book.cover_url"
                class="rounded-0"
              ></b-card-img>
              <b-card-img
                v-else
                src="../static/img/semfoto.png"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col>
              <b-card-body :title="this.bookData.book.title">
                <div v-if="this.bookData.book.subTitle">
                  <strong>Subtítulo: </strong>
                  <span>{{ this.bookData.book.subTitle }}</span>
                </div>

                <div v-if="this.bookData.book.authors[0]">
                  <strong>Autor(es): </strong>
                  <span
                    v-for="author in this.bookData.book.authors"
                    :key="author"
                  >
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
                  <strong>Páginas: </strong>
                  <span> {{ this.bookData.book.page_count }} </span>
                </div>

                <div v-if="this.bookData.book.synopsis">
                  <strong>Synopsis: </strong>
                  <span> {{ this.bookData.book.synopsis }} </span>
                </div>

                <div v-if="this.bookData.book.subjects[0]">
                  <strong>Palavras-chave: </strong>
                  <span v-for="tag in this.bookData.book.subjects" :key="tag">{{
                    tag
                  }}</span>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card> -->
      </b-row>
      <br/><br/>
    </b-container>
    <br/><br/>
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

/* .personalized-container {
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
} */
</style>