<template>
  <footer class="styleFooter" v-show="!isLoading">    
    <p class="alinhaTexto corTexto">
      Desenvolvido por André Canuto
    </p>
    <br />
  </footer>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
  }),
  methods: {
    setTimeout() {
      this.timeout = setTimeout(() => {
        this.isLoading = false;
      }, 700);
    },
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.setTimeout();
  },
};
</script>

<style scoped>
.alinhaTexto {
  padding-top: 10px;
}

.corTexto {
  color: white !important;
}

/* .corTexto:hover {
  color: Highlight !important;
} */

.styleFooter {
  background-color: #343a40 !important;
  bottom: 0 !important;
  width: 100% !important;
  text-align: center;
}
</style>