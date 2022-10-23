export default class MenuService {
    
    async getMenu() {
        let menu = [
            { id: 0, name: "Home", icon: "fas fa-home", to: "/", title:"Home" },
            { id: 1, name: "Books", icon: "fas fa-book", to: "/books", title:"Pesquisa de Livros" },
            { id: 2, name: "Company", icon: "fas fa-city", to: "/company", title:"Pesquisa de Cnpj" }            
        ];

        return await menu;
    }
}