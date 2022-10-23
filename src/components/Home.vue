<template>
  <b-container>
    <b-row align-h="center">
      <b-card
        title="Livros"
        img-src="../static/img/SearchBooks.jpg"
        img-alt="Books"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="overflow-hidden shadow p-3 mb-5 bg-white rounded cardAdjust effectZoom"
        @click.prevent="goBooks"
      >
        <b-card-text>
          Buscar informações de livros através do ISBN.
        </b-card-text>
      </b-card>

      <b-card
        title="Empresas"
        img-src="../static/img/SearchCnpj.jpg"
        img-alt="Company"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="overflow-hidden shadow p-3 mb-5 bg-white rounded cardAdjust effectZoom"
        @click.prevent="goCompany"
      >
        <b-card-text>
          Busca de informações de empresas através do cnpj.
        </b-card-text>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
  methods: {
    goBooks() {
      this.$router.push({ path: "/books" });
    },
    goCompany() {
      this.$router.push({ path: "/company" });
    },
  },
};
</script>

<style scoped>
.cardAdjust {
  border-radius: 8px;  
  margin: 10px;
  margin-top: 20px !important;
}

.cardAdjust:hover {
  cursor: pointer;
}

.effectZoom {
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.effectZoom:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  z-index: 1;
}
</style>