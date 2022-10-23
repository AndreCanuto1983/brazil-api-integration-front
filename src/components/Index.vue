<template>
  <div>
    <Menu></Menu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {    
    Menu,
    Footer
  },
};
</script>

<style scoped>
</style>