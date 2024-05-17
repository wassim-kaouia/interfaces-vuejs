<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <div class="" @mouseleave="closeSubmenus">
              <a href="#" class="nav-link dropdown-toggle" type="button" @click="toggleDropdown">
                Paiements
              </a>
              <div v-show="isOpen" class="dropdown-menu show">
                <a
                  v-for="(item, index) in menuItems"
                  :key="index"
                  :href="item.link"
                  class="dropdown-item"
                  :class="{ 'dropdown-toggle': item.children }"
                  @click="openSubmenu(index)"
                >
                  {{ item.name }}
                </a>
                <div
                  v-for="(submenu, index) in submenuItems"
                  :key="index"
                  class="dropdown-menu"
                  :class="{ show: submenu.isOpen }"
                  :style="{ top: '40px', left: '100%', position: 'absolute' }"
                >
                  <a
                    v-for="(item, subIndex) in submenu.children"
                    :key="subIndex"
                    @click="goToHello2(item.myroute)"
                    class="dropdown-item"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </li>

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                | Recouvrement
              </a>
              <ul
                class="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <!-- </div> -->

          <li class="nav-item">
            <a class="nav-link" href="#">| Comptabilité</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click="goToHello">| Reporting</a>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle d-inline-flex"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="row align-items-center">
                  <div class="col-auto">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png"
                      class="rounded-circle profile-avatar"
                      alt=""
                    />
                  </div>
                  <div class="col-auto">User abs</div>
                </div>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      isOpen: false,
      menuItems: [
        {
          name: 'Creation de Dossier',
          link: '#'
          // children: [
          //   { name: 'Creation de Dossier', link: '#' },
          //   { name: 'Submenu 1.2', link: '#' }
          // ]
        },
        {
          name: 'Liberation de Dossier',
          link: '#',
          children: [
            { name: 'Interface de Paiement', link: '', myroute: 'hello' },
            { name: 'Liberation de Dossier', link: '', myroute: 'hello' }
          ]
        }
      ]
    }
  },
  computed: {
    submenuItems() {
      return this.menuItems.filter((item) => item.children)
    }
  },
  methods: {
    goToHello() {
      this.$router.push('/hello')
    },
    goToHello2(myroute) {
      this.$router.push(myroute)
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    openSubmenu(index) {
      this.menuItems.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false
        }
      })
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen
    }
  }
}
</script>

<style scoped >
.profile-avatar {
  width: 40px;
}

.dropdown-menu {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}

.dropdown-toggle::after {
  display: none;
}
</style>
