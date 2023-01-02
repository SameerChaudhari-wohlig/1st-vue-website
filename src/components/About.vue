<template>
  <main>
    <h1 class="text-h1 text-center">Get To Know About Me</h1>
    <!-- card -->
    <div class="d-flex">
      <v-card
        class="mx-auto dark bg-blue-lighten-3"
        max-width="200"
        height="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 1
            </v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur suscipit, modi dolorum libero quas eligendi incidunt
              corporis saepe, autem, similique voluptatem harum deserunt error
              fugit omnis reprehenderit doloribus itaque magnam a eaque hic
              delectus aut ex! Molestiae incidunt corrupti omnis sit dolore
              impedit eum quos dicta atque necessitatibus, ipsam
              fugit!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto dark bg-blue-lighten-3"
        max-width="200"
        height="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 2
            </v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur suscipit, modi dolorum libero quas eligendi incidunt
              corporis saepe, autem, similique voluptatem harum deserunt error
              fugit omnis reprehenderit doloribus itaque magnam a eaque hic
              delectus aut ex! Molestiae incidunt corrupti omnis sit dolore
              impedit eum quos dicta atque necessitatibus, ipsam
              fugit!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto dark bg-blue-lighten-3"
        max-width="200"
        height="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 3
            </v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur suscipit, modi dolorum libero quas eligendi incidunt
              corporis saepe, autem, similique voluptatem harum deserunt error
              fugit omnis reprehenderit doloribus itaque magnam a eaque hic
              delectus aut ex! Molestiae incidunt corrupti omnis sit dolore
              impedit eum quos dicta atque necessitatibus, ipsam
              fugit!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto dark bg-blue-lighten-3"
        max-width="200"
        height="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 4
            </v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur suscipit, modi dolorum libero quas eligendi incidunt
              corporis saepe, autem, similique voluptatem harum deserunt error
              fugit omnis reprehenderit doloribus itaque magnam a eaque hic
              delectus aut ex! Molestiae incidunt corrupti omnis sit dolore
              impedit eum quos dicta atque necessitatibus, ipsam
              fugit!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto dark bg-blue-lighten-3"
        max-width="200"
        height="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur suscipit, modi dolorum libero quas eligendi incidunt
              corporis saepe, autem, similique voluptatem harum deserunt error
              fugit omnis reprehenderit doloribus itaque magnam a eaque hic
              delectus aut ex! Molestiae incidunt corrupti omnis sit dolore
              impedit eum quos dicta atque necessitatibus, ipsam
              fugit!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
    </div>
  </main>

  <!-- Footer -->
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <ul class="foot d-inline-flex">
        <router-link to="/" class="spn">
          <li class="px-5">Home</li></router-link
        >
        <router-link to="about" class="spn">
          <li class="px-5">About Us</li></router-link
        >
        <router-link to="contact" class="spn">
          <li class="px-5">Contact Us</li></router-link
        >
      </ul>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  background: url("https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  height: 85vh;
}

main h1 {
  color: white;
}

.foot {
  list-style: none;
}
.spn {
  color: white;
  text-decoration: none;
}
</style>
