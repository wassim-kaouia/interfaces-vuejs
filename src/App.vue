<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import MyNavbar from './components/MyNavbar.vue'
import DataTable from './components/DataTable.vue'
</script>


<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <MyNavbar />
      </div>
      <div class="container">
        <DataTable />
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>
