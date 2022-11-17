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

    <h3 style="text-align: center; color: gray">Busca de Empresas</h3>

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
          title="Empresa"
          img-top
          class="cardPersonalized shadow p-3 mb-5 bg-white rounded"
          v-if="this.company.cnpj"
        >
          <b-card-text>
            <!-- Dados Empresa -->
            <div v-if="this.company.cnpj">
              <strong>Cnpj: </strong>
              <span>{{ this.company.cnpj }}</span>
            </div>

            <div v-if="this.company.razao_social">
              <strong>Razão Social: </strong>
              <span>{{ this.company.razao_social }}</span>
            </div>

            <div v-if="this.company.nome_fantasia">
              <strong>Nome Fantasia: </strong>
              <span>{{ this.company.nome_fantasia }}</span>
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
              <span>{{
                this.company.descricao_identificador_matriz_filial
              }}</span>
            </div>

            <div v-if="this.company.codigo_natureza_juridica">
              <strong>Código Natureza jurídica: </strong>
              <span>{{ this.company.codigo_natureza_juridica }}</span>
            </div>

            <div v-if="this.company.natureza_juridica">
              <strong>Natureza jurídica: </strong>
              <span>{{ this.company.natureza_juridica }}</span>
            </div>

            <div v-if="this.company.cnae_fiscal">
              <strong>Cnae: </strong>
              <span>{{ this.company.cnae_fiscal }}</span>
            </div>

            <div v-if="this.company.cnae_fiscal_descricao">
              <strong>Descrição Cnae: </strong>
              <span>{{ this.company.cnae_fiscal_descricao }}</span>
            </div>

            <div v-if="this.company.data_inicio_atividade">
              <strong>Início das Atividades: </strong>
              <span>{{ this.company.data_inicio_atividade }}</span>
            </div>
          </b-card-text>
        </b-card>

        <!-- Endereço -->
        <b-card
          title="Endereço"
          img-top
          class="cardPersonalized shadow p-3 mb-5 bg-white rounded"
          v-if="this.company.cnpj"
        >
          <b-card-text>
            <div v-if="this.company.cep">
              <strong>Cep: </strong>
              <span>{{ this.company.cep }}</span>
            </div>

            <div v-if="this.company.logradouro">
              <strong>Logradouro: </strong>
              <span
                >{{ this.company.descricao_tipo_de_logradouro }}
                {{ this.company.logradouro }}</span
              >
            </div>

            <div v-if="this.company.numero">
              <strong>Número: </strong>
              <span>{{ this.company.numero }}</span>
            </div>

            <div v-if="this.company.complemento">
              <strong>Complemento: </strong>
              <span>{{ this.company.complemento }}</span>
            </div>

            <div v-if="this.company.bairro">
              <strong>Bairro: </strong>
              <span>{{ this.company.bairro }}</span>
            </div>

            <div v-if="this.company.municipio">
              <strong>Município: </strong>
              <span>{{ this.company.municipio }}</span>
            </div>

            <div v-if="this.company.uf">
              <strong>UF: </strong>
              <span>{{ this.company.uf }}</span>
            </div>
          </b-card-text>
        </b-card>

        <!-- Sociedade -->
        <b-card
          title="Quadro de Sócios"
          img-top
          class="cardPersonalized shadow p-3 mb-5 bg-white rounded"
          v-if="this.company.qsa"
        >
          <b-card-text
            v-for="socio in this.company.qsa"
            :key="socio.cnpj_cpf_do_socio"
          >
            <div v-if="socio.cnpj_cpf_do_socio">
              <strong>Cpf/Cnpj do Sócio: </strong>
              <span>{{ socio.cnpj_cpf_do_socio }}</span>
            </div>

            <div v-if="socio.nome_socio">
              <strong>Nome do Sócio: </strong>
              <span>{{ socio.nome_socio }}</span>
            </div>

            <div v-if="socio.qualificacao_socio">
              <strong>Qualificação: </strong>
              <span>{{ socio.qualificacao_socio }}</span>
            </div>

            <div v-if="socio.faixa_etaria">
              <strong>Faixa Etária: </strong>
              <span>{{ socio.faixa_etaria }}</span>
            </div>

            <div v-if="socio.data_entrada_sociedade">
              <strong>Data entrada na sociedade: </strong>
              <span>{{ socio.data_entrada_sociedade }}</span>
            </div>

            <div v-if="socio.cpf_representante_legal">
              <strong>Cpf Representante Legal: </strong>
              <span>{{ socio.cpf_representante_legal }}</span>
            </div>

            <div v-if="socio.nome_representante_legal">
              <strong>Nome Representante: </strong>
              <span>{{ socio.nome_representante_legal }}</span>
            </div>
          </b-card-text>
        </b-card>

        <!-- Cnae Secundários -->
        <b-card
          title="Cnae Secundários"
          img-top
          class="cardPersonalized shadow p-3 mb-5 bg-white rounded"
          v-if="this.company.cnaes_secundarios"
        >
          <b-card-text
            v-for="cnae in this.company.cnaes_secundarios"
            :key="cnae.codigo"
          >
            <div>
              <strong>Código: </strong>
              <span>{{ cnae.codigo }}</span>
            </div>

            <div>
              <strong>Descrição: </strong>
              <span>{{ cnae.descricao }}</span>
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
        .get(`/api/Company/v2/${this.cnpj}`)
        .then((response) => {
          if (response.status == 204) this.$toast.info("Cnpj não encontrado!");

          this.company = response.data.Empresa;
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
  padding: 10px;
  margin: 10px;
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