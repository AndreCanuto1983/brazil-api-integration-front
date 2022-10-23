<template>
  <footer class="styleFooter">    
    <p class="textColor">
      Desenvolvido por André Canuto
    </p>
    <br />
  </footer>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    // setTimeout() {
    //   this.timeout = setTimeout(() => {
    //     this.isLoading = false;
    //   }, 700);
    // },
  },
};
</script>

<style scoped>
.textColor {
  color: white;
  font-size: smaller;
}

.styleFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #343a40;
  width: 100%;
  height: 18px;
  text-align: center;
}
</style>