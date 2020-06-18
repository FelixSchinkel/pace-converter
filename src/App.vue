<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mr-2">Convert Stuff</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <ConvertPace />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ConvertPace from "./components/ConvertPace";

export default {
  name: "App",

  components: {
    ConvertPace
  },

  data: () => ({
    //
  })
};
</script>
