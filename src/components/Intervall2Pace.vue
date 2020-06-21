<template>
  <v-card>
    <v-card-title>Intervall Pace</v-card-title>
    <v-card-subtitle>Define Intervall distance + time -> get Pace per km</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-text-field label="distance" v-model="distance" class="mx-4" />
        <v-radio-group v-model="distanceUnit" row>
          <v-radio label="m" value="m"></v-radio>
          <v-radio label="km" value="km"></v-radio>
        </v-radio-group>
        <v-icon>mdi-plus</v-icon>
        <PaceInput label="time" v-model="time" />
        <v-radio-group v-model="timeUnit" row>
          <v-radio label="seconds" value="s"></v-radio>
          <v-radio label="minutes + seconds" value="ms"></v-radio>
        </v-radio-group>
        <v-icon>mdi-equal</v-icon>
        <v-text-field label="pace/km" v-model="pace" readonly class="mx-4" />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import PaceInput from "./PaceInput";

const pattern = /^([0-9][.][0-5][0-9])$/;

export default {
  components: { PaceInput },
  data: () => ({
    distance: "",
    distanceUnit: "m",
    time: "",
    timeUnit: "ms"
  }),
  computed: {
    pace: function() {
      if (!this.distance && !this.time) return;
      if (this.timeUnit === "ms" && !pattern.test(this.time)) return;
      // convert distance to meters and time to seconds
      
      let dist;
      if (this.distanceUnit === "km") dist = this.distance * 1000;
      else dist = this.distance;

      let seconds;
      if (this.timeUnit === "ms") {
        let timeSplit;
        if (this.time.includes(".")) {
          timeSplit = this.time.split(".");
          if (timeSplit[1].length === 1) timeSplit[1] = timeSplit[1] + "0";
        } else timeSplit = [this.time, 0];

        seconds = parseInt(timeSplit[0] * 60) + parseInt(timeSplit[1]);
      } else seconds = this.time;

      // calc pace
      let pace = (1000 * seconds) / dist;

      return (
        Math.floor(pace / 60) + "m" + (pace % 60) + "s (" + pace + " seconds)"
      );
    }
  }
};
</script>

<style>
</style>