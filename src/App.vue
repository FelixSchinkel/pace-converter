<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mr-2">Convert Stuff</span>
      <v-icon>mdi-open-in-new</v-icon>
      <v-spacer/>
      <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Dark Mode" />
    </v-app-bar>

    <v-main>
      <v-container>
        <ConvertPace />
      </v-container>
      <v-container>
        <Intervall2Pace />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ConvertPace from "./components/ConvertPace";
import Intervall2Pace from "./components/Intervall2Pace";

export default {
  name: "App",

  components: {
    ConvertPace,
    Intervall2Pace
  },

  data: () => ({
    //
  })
};
</script>
