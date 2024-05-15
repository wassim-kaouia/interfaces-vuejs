<template>
  <div class="topping">
    <div class="container">
      <DataTable />
    </div>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  methods: {}
}
</script>

<style scoped>
.topping {
  margin-top: 100px;
}
</style>