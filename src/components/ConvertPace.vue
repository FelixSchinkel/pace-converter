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
    inputRules: [
      value => !!value || "Required.",
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

      let converter =
        this.convDirMiles2Km === true ? 0.62137119223733 : 1 / 0.62137119223733;

      let pacePerUnitInSeconds = pacePerUnitInSecondes * converter;

      // create human readable string format: M.SS
      let convertedPace =
        Math.floor(pacePerUnitInSeconds / 60) +
        "." +
        (pacePerUnitInSeconds % 60).toFixed(0);

      return convertedPace;
    }
  }
};
</script>

<style>
</style>