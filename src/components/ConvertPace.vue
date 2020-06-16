<template>
  <v-card class="mx-auto">
    <v-card-text>
      <v-row>
        <v-text-field label="pace/mile" v-model="paceMile" :rules="inputRules" />
        <v-chip class="ma-2" label>&lt;-&gt;</v-chip>
        <v-text-field label="pace/km" :value="convertMile2Km" :rules="inputRules"/>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    paceMile: "",
    inputRules: [
      value => !!value || 'Required.',
      value => {
        // regex checks if time format is: M.SS
        const pattern = /^([0-9].[0-5][0-9])$/
        return pattern.test(value) || 'Invalid Time Format use M.SS'
      }
    ]
  }),
  methods: {
    recalculatePace(){

    }
  },
  computed: {
    convertMile2Km() {
      let split = this.paceMile.split(".");

      // let mile = parseFloat(this.paceMile)

      // convertMile2Km mile to km
      // 1.6 km = 1 mile

      let paceMileInSecondes = parseInt(split[0]) * 60 + parseInt(split[1]);
      let paceKmInSeconds = paceMileInSecondes * 0.62137119223733;

      let convertedPaceInKm =
        Math.floor(paceKmInSeconds / 60) +
        "." +
        (paceKmInSeconds % 60).toFixed(0);

      return convertedPaceInKm;
    }
  }
};
</script>

<style>
</style>