<template>
  <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
      Dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="item in menuItems"
        v-bind:key="item"
        v-bind:class="{ 'dropdown-submenu': item.children }"
      >
        <a class="test" tabindex="-1" href="#"
          >{{ item.name }}<span class="caret" v-if="item.children"></span
        ></a>
        <ul class="dropdown-menu" v-if="item.children">
          <li v-for="child in item.children" v-bind:key="child">
            <a tabindex="-1" href="#" @click="setSelectedItem(child.name)">{{ child.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

export default {
  name: 'MyComponent',
  data() {
    return {
      menuItems: [
        {
          name: 'Item 1',
          children: [{ name: 'Subitem 1' }, { name: 'Subitem 2' }, { name: 'Subitem 3' }]
        },
        {
          name: 'Item 2'
        }
      ],
      selectedDropdown: 'None'
    }
  },
  methods() {
    return {
      setSelectedItem(item) {
        this.selectedDropdown = item
      }
    }
  },
  ready: () => {
    $('.dropdown-submenu a.test').on('click', function (e) {
      $(this).next('ul').toggle()
      e.stopPropagation()
      e.preventDefault()
    })
  }
}
</script>

<style scoped>
</style>
