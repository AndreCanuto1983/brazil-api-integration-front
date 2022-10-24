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
              v-model="cnpj"
              :state="cnpjState"
              placeholder="Informe o número Cnpj"
              trim
            ></b-form-input>

            <b-button size="sm" @click="getCompany" variant="outline-secondary"
              ><i class="fas fa-search"></i
            ></b-button>

            <b-button size="sm" @click="clear" variant="outline-secondary"
              ><i class="fas fa-broom"></i
            ></b-button>
          </b-input-group-append>

          <b-form-invalid-feedback id="input-live-feedback"
            >O cnpj deve conter 14 dígitos.</b-form-invalid-feedback
          >
        </b-col>
      </b-row>

      <b-row
        align-h="center"
        style="margin-top: 10px"
        v-if="this.company != undefined"
      >
        <b-card
          :title="this.company.nome_fantasia"
          img-top
          class="cardPersonalized"
        >
          <b-card-text>
            <div v-if="this.company.cnpj">
              <strong>Cnpj: </strong>
              <span>{{ this.company.cnpj }}</span>
            </div>

            <div v-if="this.company.razao_social">
              <strong>Razão Social: </strong>
              <span>{{ this.company.razao_social }}</span>
            </div>

            <div v-if="this.company.descricao_situacao_cadastral">
              <strong>Situação: </strong>
              <span>{{ this.company.descricao_situacao_cadastral }}</span>
            </div>

            <div v-if="this.company.ddd_fax">
              <strong>Fax: </strong>
              <span>{{ this.company.ddd_fax }}</span>
            </div>

            <div v-if="this.company.ddd_telefone_1">
              <strong>Telefone: </strong>
              <span>{{ this.company.ddd_telefone_1 }}</span>
            </div>

            <div v-if="this.company.descricao_identificador_matriz_filial">
              <strong>Identificador: </strong>
              <span>{{ this.company.descricao_identificador_matriz_filial }}</span>
            </div>

            <div v-if="this.company.natureza_juridica">
              <strong>Natureza jurídica: </strong>
              <span>{{ this.company.natureza_juridica }}</span>
            </div>

            <div v-if="this.company.cnae_fiscal">
              <strong>Cnae: </strong>
              <span>{{ this.company.cnae_fiscal }}</span>
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
    cnpj: "",
    company: {},
  }),
  computed: {
    cnpjState() {
      if (this.cnpj == "") {
        return null;
      }
      return this.cnpj.length < 14 || this.cnpj.length > 14 ? false : true;
    },
  },
  methods: {
    clear() {
      this.cnpj = "";
      this.company = {};
    },
    getCompany() {
      if (this.cnpj == "" || this.cnpj.length < 14 || this.cnpj.length > 14)
        return;

      this.isLoading = true;

      http
        .get(`/api/v1/Company/${this.cnpj}`)
        .then((response) => {
          if (response.status == 204) this.$toast.info("Cnpj não encontrado!");

          this.company = response.data.Empresa;
          console.log("EMPRESA", this.company);
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