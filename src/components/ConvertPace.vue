<template>
  <v-card class="mx-auto">
    <v-card-text>
      <v-row>
        <v-text-field
          label="pace/mile"
          v-model="paceMile"
          :rules="inputRules"
          type="number"
          @focus="setConvertionDirection(true)"
        />
        <v-chip class="ma-2" label>&lt;-&gt;</v-chip>
        <v-text-field
          label="pace/km"
          v-model="paceKm"
          :rules="inputRules"
          type="number"
          @focus="setConvertionDirection(false)"
        />
      </v-row>
      <v-row>
        <v-chip class="ma-2" label>1k: {{pace2string(paceKmInSeconds, true)}}</v-chip>
        <v-chip class="ma-2" label>5k: {{pace2string(paceKmInSeconds*5, true)}}</v-chip>
        <v-chip class="ma-2" label>10k: {{pace2string(paceKmInSeconds*10, true)}}</v-chip>
        <v-chip class="ma-2" label>Half Marathon: {{pace2string(paceKmInSeconds*21.1, true)}}</v-chip>
        <v-chip class="ma-2" label>Marathon: {{pace2string(paceKmInSeconds*42.2, true)}}</v-chip>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// regex checks if time format is: M.SS
const pattern = /^([0-9][.,][0-5][0-9])$/;

export default {
  data: () => ({
    convDirMiles2Km: true,
    paceMile: "",
    paceKm: "",
    paceKmInSeconds: "",
    inputRules: [
      value => {
        return pattern.test(value) || "Invalid Time Format use M.SS";
      }
    ]
  }),
  watch: {
    // determine convertion direction if input value changes
    paceMile: function() {
      if (this.convDirMiles2Km) {
        this.paceKm = this.convertPace();
      }
    },
    paceKm: function() {
      if (!this.convDirMiles2Km) {
        this.paceMile = this.convertPace();
      }
    }
  },
  methods: {
    // set convertion direction base on selected input (either mile 2 km or km 2 mile)
    setConvertionDirection: function(dir) {
      this.convDirMiles2Km = dir;
    },
    // convert pace mile to km or other way arround if input is valid
    convertPace: function() {
      // based on which input elemt is selected convert pace mile-> km or the other way around
      let pace = this.convDirMiles2Km === true ? this.paceMile : this.paceKm;
      if (!pattern.test(pace)) return "";

      let split = pace.split(/[.,]/);
      let pacePerUnitInSecondes = parseInt(split[0]) * 60 + parseInt(split[1]); // Unit = km or mile depending an convDirMiles2Km

      const CONSTANT_MILES_2_KM = 0.62137119223733;
      let converter =
        this.convDirMiles2Km === true
          ? CONSTANT_MILES_2_KM
          : 1 / CONSTANT_MILES_2_KM;

      //convert and round round to next int
      let convertedPacePerUnitInSeconds = Math.round(
        pacePerUnitInSecondes * converter
      );

      //store pace per km in seconds
      if (this.convDirMiles2Km)
        this.paceKmInSeconds = convertedPacePerUnitInSeconds;
      else this.paceKmInSeconds = pacePerUnitInSecondes;

      return this.pace2string(convertedPacePerUnitInSeconds);
    },

    // create human readable string format: M.SS
    pace2string: function(paceInSeconds, displayTimeUnits = false) {
      if (!paceInSeconds) return "";

      // round in case paceInSeconds gets multiplied by double number (e.g. 42.2 for marathon distance)
      paceInSeconds = Math.round(paceInSeconds)

      let minutes = Math.floor(paceInSeconds / 60);
      let seconds = paceInSeconds - minutes * 60;
      // if seconds < 10 add leading 0
      if (seconds < 10) seconds = "0" + seconds;

      let paceAsString = minutes + "." + seconds;
      // if displayTimeUnits set return string with hours and minutes
      if (displayTimeUnits) {
        if (minutes >= 60) {
          var hours = Math.floor(paceInSeconds / 60 / 60);
          paceAsString = hours + "h" + minutes % 60 + "m" + seconds + "s";
        }
      }

      return paceAsString;
    }
  }
};
</script>

<style>
</style>