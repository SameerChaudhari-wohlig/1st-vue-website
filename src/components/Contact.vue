<template>
  <main>
    <v-form
      class="dark bg-blue-lighten-3"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <h1 class="text-center">Contact Us</h1>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
      <h1 class="text-center">Sign Up Now</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        recusandae, nisi, magnam veritatis harum repellat iure, corrupti dolorem
        sint labore quia? Adipisci animi corrupti modi consectetur. Voluptatibus
        culpa facere accusamus libero nesciunt veritatis magni porro animi, ipsa
        consequuntur aliquid voluptas dolor! Nulla exercitationem neque deserunt
        asperiores culpa veritatis ipsa est facilis! Sequi omnis exercitationem
        praesentium. Nesciunt vero, fugit earum quas dolor autem officiis? Ex,
        dignissimos.
      </p>
    </v-form>
    <!-- Footer -->
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <ul class="foot d-inline-flex">
          <router-link to="/" class="spn">
            <li class="px-5">Home</li>
          </router-link>
          <router-link to="about" class="spn">
            <li class="px-5">About Us</li>
          </router-link>
          <router-link to="contact" class="spn">
            <li class="px-5">Contact Us</li>
          </router-link>
        </ul>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </main>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.foot {
  list-style: none;
}

.spn {
  color: white;
  text-decoration: none;
}
</style>
