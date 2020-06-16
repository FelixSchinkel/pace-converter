<template>
  <v-card class="mx-auto">
    <v-card-text>
      <v-row>
        <v-text-field label="pace/mile" v-model="paceMile" :rules="inputRules" type="number"/>
        <v-chip class="ma-2" label>&lt;-&gt;</v-chip>
        <v-text-field label="pace/km" :value="convertMile2Km" :rules="inputRules" type="number"/>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// regex checks if time format is: M.SS
const pattern = /^([0-9][.,][0-5][0-9])$/;

export default {
  data: () => ({
    paceMile: "",
    inputRules: [
      value => !!value || "Required.",
      value => {
        return pattern.test(value) || "Invalid Time Format use M.SS";
      }
    ]
  }),
  methods: {
    recalculatePace() {}
  },
  computed: {
    convertMile2Km() {
      if(!pattern.test(this.paceMile)) return ""
     
      let split = this.paceMile.split(/[.,]/);
      let pacePerMileInSecondes = parseInt(split[0]) * 60 + parseInt(split[1]);
      let pacePerKmInSeconds = pacePerMileInSecondes * 0.62137119223733;

      // create human readable string format: M.SS
      let convertedPaceInKm =
        Math.floor(pacePerKmInSeconds / 60) +
        "." +
              // create human readable string format: M.SS
        (pacePerKmInSeconds % 60).toFixed(0);

      return convertedPaceInKm;
    }
  }
};
</script>

<style>
</style>