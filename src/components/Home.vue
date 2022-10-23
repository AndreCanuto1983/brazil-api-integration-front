<template>
  <b-container>
    <b-row align-h="center">

      <b-card no-body class="overflow-hidden shadow p-3 mb-5 bg-white rounded cardAdjust effectZoom" 
      style="max-width: 350px" 
      @click.prevent="goBooks">      
        <b-row no-gutters>
          <b-col>
            <b-card-img
              src="../static/img/SearchBooks.jpg"
              alt="Books"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col>
            <b-card-body title="Livros">
              <b-card-text>
                Buscar informações de livros através do ISBN.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>&emsp;

      <b-card no-body class="overflow-hidden shadow p-3 mb-5 bg-white rounded cardAdjust effectZoom" 
      style="max-width: 350px"
      @click.prevent="goCompany">
        <b-row no-gutters>
          <b-col>
            <b-card-img
              src="../static/img/SearchCnpj.jpg"
              alt="Company"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col>
            <b-card-body title="Empresas">
              <b-card-text>
                Busca de informações de empresas através do cnpj.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
  methods: {
    goBooks(){      
      this.$router.push({ path: "/books" });      
    },
    goCompany(){      
      this.$router.push({ path: "/company" });      
    }
  },
};
</script>

<style scoped>
.cardAdjust {
  border-radius: 8px;
  margin-top: 5%;  
}

.cardAdjust:hover {
  cursor: pointer;
}

.effectZoom{
  -moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}

.effectZoom:hover{  
  -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
  z-index: 1;
}
</style>