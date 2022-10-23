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
            v-for="menu in menus"
            :key="menu.id"
            :to="menu.to"
            variant="outline-light"
            block
          >
            <i :class="menu.icon"></i>&emsp;{{ menu.name }}
          </b-button>

          <b-button
            size="sm"
            variant="outline-light"
            class="btn-sidebar"
            block
            @click="curriculoPdf"
          >
            <i class="fas fa-download"></i>&emsp;Download Currículo PDF
          </b-button>

          <b-button
            size="sm"
            class="btn-sidebar"
            block
            variant="outline-light"
            href="https://github.com/AndreCanuto1983"
            target="_blank"
          >
            <i class="fab fa-github"></i>&emsp;GitHub
          </b-button>

          <b-button
            size="sm"
            class="btn-sidebar"
            block
            variant="outline-light"
            href="https://www.linkedin.com/in/andrecanuto83/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>&emsp;Linkedin
          </b-button>

          <b-button
            class="btn-sidebar"
            block
            size="sm"
            variant="outline-light"
            href="https://api.whatsapp.com/send?phone=5516996153655"
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>&emsp;Whatsapp
          </b-button>
        </div>
      </div>
    </b-sidebar>

    <!-- nav bar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>
        <b-button size="sm" variant="outline-light" v-b-toggle.sidebar-variant>
          <i class="fas fa-bars"></i>
        </b-button>
      </b-navbar-brand>

      <!-- nav bar menu-->
      <b-navbar-nav>
        <b-nav-item
          v-for="menu in menus"
          :key="menu.id"
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          :title="menu.title"
          :to="menu.to"
        >
          <i :class="menu.icon"></i>
        </b-nav-item>

        <b-nav-item
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          title="Download Currículo em PDF"
          @click="curriculoPdf"
        >
          <i class="fas fa-download"></i>
        </b-nav-item>

        <b-nav-item
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          title="Github"
          href="https://github.com/AndreCanuto1983"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </b-nav-item>

        <b-nav-item
          variant="outline-primary"
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          title="Linkedin"
          href="https://www.linkedin.com/in/andrecanuto83/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </b-nav-item>

        <b-nav-item
          variant="outline-success"
          v-b-tooltip.hover.bottom="{ variant: 'secondary' }"
          title="WhatsApp"
          href="https://api.whatsapp.com/send?phone=5516996153655"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import MenuService from "../services/MenuService";

export default {
  data: () => ({
    menus: [],
  }),
  methods: {
    async mountMenu() {
      const menu = new MenuService();

      this.menus = await menu.getMenu();
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