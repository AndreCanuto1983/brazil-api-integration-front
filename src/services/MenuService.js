export default class MenuService {
    
    async getMenu() {
        let menu = [
            { id: 0, name: "Home", icon: "fas fa-home", to: "/", title:"Home" },
            { id: 1, name: "Certificados e Diplomas", icon: "fas fa-graduation-cap", to: "/certificados", title:"Certificados e Diplomas" },
            // { id: 2, name: "Dashboard", icon: "fas fa-chart-line", to: "/dashboard", title:"Dashboard" }            
        ];

        return await menu;
    }
}