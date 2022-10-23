<template>
  <b-container>
    <b-row align-h="center">
      <b-col lg="5" md="5">
        <div class="card-title">          
          <!-- <Contact></Contact> -->
        </div>        
      </b-col>
      <b-col lg="7" md="7">
        <CurriculoRight></CurriculoRight>
      </b-col> </b-row
    ><br />    
  </b-container>
</template>

<script>
import CurriculoRight from "../components/CurriculoRight.vue";

export default {
  components: {
    CurriculoRight,
  },
  methods: {
    subirRolagem() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
a {
  color: black !important;
}

i {
  color: gray !important;
}

.cardAdjust {
  border-radius: 8px;
  margin-top: 10px;
}

.sombra {
  -webkit-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  -moz-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
}

.title {
  text-align: center;
  font-size: larger;
  background-color: #343a40;
  color: white;
  padding: 3px;
  border-radius: 3px;
  margin-left: 3%;
  max-width: 94%;
}

.card-title {
  margin-top: 10px;
}

.btnTopo {
  width: 50px;
}
</style>