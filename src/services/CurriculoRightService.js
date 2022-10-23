export default class CurriculoRightService {

    async getExperiencias() {

        let experiencias = [
            { id: 0, periodo: "11/2021 - Atual", empresa: "Capgemini", funcao: "Arquiteto de Soluções", projeto: "Bradesco / Ágora Investimentos", tecnologias: ["C#", ".Net 6", ".Net 5", ".Net Core 3.1", ".Net Core 2.1", ".Net Framework", "Oracle", "Redis", "Dapper", "Docker", "Jmeter", "Rest/RestFul", "Microsserviços", "OpenShift", "Health Check", "Dynatrace", "Azure Pipeline", "Azure", "Azure TFS", "Scrum"] },            
        ];

        return await experiencias;
    }

    async getFormacoesAcademicas() {

        let formacoesAcademicas = [
            { id: 0, periodo: "12/2022", curso: "Pós Graduação em Arquitetura de Software Distribuída", instituicao: "PUC", situacao: "Cursando" },            
        ]

        return await formacoesAcademicas;
    }
}