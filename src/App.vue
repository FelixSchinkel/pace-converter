<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mr-2">Convert Stuff</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-content>
      <ConvertPace />
    </v-content>
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
