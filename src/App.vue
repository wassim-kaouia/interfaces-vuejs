
<template>
  <!-- hadi hia app root dyal application fiha fin kan3mlo appel les vues mta3na -->
  <div id="app">
    <div class="container">
      <div class="row">
        <!-- hadi component dyal navbar 3mlna liha appel  -->
        <MyNavbar />
      </div>
      <div class="row">
        <!-- hna 7ettina component dyal vuejs li kat3ml routing, bech naffichiw vues li majyeen mn -->
        <!-- routing - chofy router/index.js bach tfhmi -->
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
// 3mlna appel lel component navbar
import MyNavbar from './components/MyNavbar.vue'
export default {
  components: {
    // le nom hada hwa nafsso li ylzm t7tih lfo9
    MyNavbar
  }
}
</script>


<style scoped>
/* hna t9dri t3mli css kifma t7ebby l html li kayn lfo9  */
</style>
