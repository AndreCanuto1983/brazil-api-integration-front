<template>
  <div>
    <!-- sidebar -->
    <b-sidebar
      class="sidebar"
      id="sidebar-variant"
      bg-variant="dark"
      title="Menu"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <div class="row sidebar-ajust">
          <b-button
            size="sm"
            class="btn-sidebar"
            v-for="menu in menuList"
            :key="menu.id"
            :to="menu.to"
            variant="outline-light"
            block
          >
            <i :class="menu.icon"></i>&emsp;{{ menu.title }}
          </b-button>       
        </div>
      </div>
    </b-sidebar>

    <!-- nav bar -->
    <b-navbar type="dark" variant="dark">
      <!-- <b-navbar-brand>
        <b-button size="sm" variant="outline-light" v-b-toggle.sidebar-variant>
          <i class="fas fa-bars"></i>
        </b-button>
      </b-navbar-brand> -->

      <b-navbar-nav>
        <b-nav-item
          v-for="menu in menuList"
          :key="menu.id"
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          :title="menu.title"
          :to="menu.to"
        >
          <i :class="menu.icon"></i>
        </b-nav-item>      
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import MenuService from "../services/MenuService";

export default {
  data: () => ({
    menuList: [],
  }),
  methods: {
    async mountMenu() {
      const menu = new MenuService();

      this.menuList = await menu.getMenu();
      this.menuNav = await menu.getMenu();
    },
    curriculoPdf() {
      window.open("/static/pdf/CurriculoAndreCanuto.pdf", "_blank");
    },
  },
  async beforeMount() {
    await this.mountMenu();
  },
};
</script>

<style scoped>
.sidebar {
  overflow-x: hidden;
}

.sidebar-ajust {
  padding: 5px;
}

.btn-sidebar {
  text-align: left;
  margin-top: 5px;
}

.bg-dark {
  background-color: #343a40 !important;
}
</style>