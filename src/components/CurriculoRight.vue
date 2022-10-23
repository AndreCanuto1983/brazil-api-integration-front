<template>
  <div>
    <!--experiencias-->
    <div class="card-title">
      <div class="sombra title" style="margin-top: 18px">
        <i class="fas fa-suitcase"></i> <strong> Experiências</strong>
      </div>

      <b-card
        class="sombra cardAdjust"
        v-for="experiencia in experiencias"
        :key="experiencia.id"
      >
        <b-card-text>
          <p>
            <i class="far fa-building"></i><b> Empresa:</b>
            {{ experiencia.empresa }}
          </p>
          <p>
            <i class="far fa-calendar-alt"></i><b> Período:</b>
            {{ experiencia.periodo }}
          </p>
          <p>
            <i class="fas fa-project-diagram"></i><b> Projeto/Squad:</b>
            {{ experiencia.projeto }}
          </p>
          <p>
            <i class="fas fa-cog"></i><b> Função:</b> {{ experiencia.funcao }}
          </p>
          <p>
            <i class="fas fa-code"></i><b> Tecnologias:</b>
            <b-button
              v-for="tags in experiencia.tecnologias"
              :key="tags"
              class="tags"
              size="sm"
              variant="outline-dark"
            >
              {{ tags }}
            </b-button>
          </p>
        </b-card-text>
      </b-card>
    </div>
    <br />
  </div>
</template>

<script>
import CurriculoRightService from "../services/CurriculoRightService";

export default {
  components: { },
  data: () => ({    
    formacoesAcademicas: [],
  }),
  methods: {
    async getCurriculoInfo() {
      const curriculos = new CurriculoRightService();

      this.experiencias = await curriculos.getExperiencias();      
    },
  },
  async beforeMount() {
    await this.getCurriculoInfo();
  },
};
</script>

<style scoped>
.cardAdjust {
  border-radius: 8px;
  margin: 2%;
}

.sombra {
  -webkit-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  -moz-box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
  box-shadow: 0px 0px 26px 1px rgba(117, 117, 117, 0.41);
}

.tags {
  margin-left: 3px;
  margin-top: 2px;
  cursor: default;
  pointer-events: none;
}

.btnTopo {
  width: 50px;
}

.title {
  text-align: center;
  font-size: larger;
  background-color: #343a40;
  color: white;
  padding: 3px;
  border-radius: 3px;
  margin-left: 2%;
  max-width: 96%;
}

.card-title {
  margin-top: 10px;
}

.btn-toggle {
  margin-left: 2%;
  max-width: 96%;
  border-radius: 3px;
}
</style>