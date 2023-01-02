<template>
  <v-toolbar flat app >
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">Sameer</span>
        <span>Chaudhari</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     
  <router-link to="/" class="spn">
      <v-btn-text class="px-3">Home</v-btn-text>
    </router-link>
    <router-link to="/about" class="spn button">
      <v-btn-text class="px-3"> About US </v-btn-text>
    </router-link>
    <router-link to="/Contact" class="spn">
      <v-btn-text class="px-3"> Contact Us </v-btn-text>
    </router-link>
    </v-toolbar>
</template>


<script>
export default {
    links: [
        { text: 'Home', route: '/' },
      { text: 'About Us', route: '/src/components/About.vue' },

   ]

};
</script>

<style scoped>
.spn{
    color: black;
    text-decoration: none;
}



</style>

