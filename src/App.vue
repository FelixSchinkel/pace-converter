<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="mx-auto">The Converter</v-toolbar-title>
      <v-btn icon @click="toogleDarkTheme">
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-7</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn>
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
    Intervall2Pace,
  },
  mounted: function () {
    // check if dark mode should be applied -  based on media query 
    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (darkModeMediaQuery) {
      console.log("based on media query -> colorscheme = dark ");
      this.setColorScheme(darkModeMediaQuery);
    }
    // add listender to watch media query change
    window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches}) => this.setColorScheme(matches))
  },
  methods: {
    toogleDarkTheme: function () {
      this.setColorScheme(!this.$vuetify.theme.dark);
    },
    setColorScheme: function(schemeDark){
      console.log("media query listener: set color scheme to dark: ", schemeDark);
      this.$vuetify.theme.dark = schemeDark;
      localStorage.setItem("darkMode", this.$vuetify.theme.dark);
    }
  },
};
</script>
