<template>
  <v-card>
    <v-card-title>Intervall Pace</v-card-title>
    <v-card-subtitle>Define Intervall distance + time -> get Pace per km</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-text-field label="distance" v-model="distance" class="mx-4" type="tel">
          <template v-slot:append-outer>
            <DropDownSelect :items="distanceUnitOptions" v-model="distanceUnit" />
          </template>
        </v-text-field>
        <v-icon>mdi-plus</v-icon>
        <v-text-field class="mx-4" label="time" v-model="time">
          <template v-slot:append-outer>
            <DropDownSelect :items="timeUnitOptions" v-model="timeUnit" />
          </template>
        </v-text-field>
        <v-icon>mdi-equal</v-icon>
        <v-text-field label="pace/km" v-model="pace" readonly class="mx-4" />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// import PaceInput from "./PaceInput";
import DropDownSelect from "./DropDownSelect";

const pattern = /^([0-9][.][0-5][0-9])$/;

export default {
  components: { /* PaceInput ,*/ DropDownSelect },
  data: () => ({
    distance: "",
    distanceUnit: "m",
    distanceUnitOptions: ["m", "km", "mi"], //TODO use enum

    time: "",
    timeUnit: "ms",
    timeUnitOptions: ["seconds", "minutes + seconds"] //TODO use enum
  }),
  computed: {
    pace: function() {
      if (!this.distance && !this.time) return;
      if (this.timeUnit === "minutes + seconds" && !pattern.test(this.time))
        return;

      // convert distance to meters and time to seconds
      let dist;
      switch (this.distanceUnit) {
        case "km": {
          dist = this.distance * 1000;
          break;
        }
        case "m": {
          dist = this.distance;
          break;
        }
        case "mi": {
          dist = this.distance * 1609.344;
          break;
        }
        default: {
          console.error("cant convert intervall distance!");
        }
      }

      let seconds;
      //if input in minutes -> convert to seconds
      if (this.timeUnit === "minutes + seconds") {
        let timeSplit;
        if (this.time.includes(".")) {
          timeSplit = this.time.split(".");
          // if input like '3.' add '0 ' to fix conversation to seconds
          if (timeSplit[1].length === 0) timeSplit[1] = "0";
          console.log("timepslit", timeSplit);
        } else {
          timeSplit = [this.time, 0];
        }
        seconds = parseInt(timeSplit[0] * 60) + parseInt(timeSplit[1]);
      } else seconds = this.time;

      // calc pace using rule of three 
      let pace = Math.floor((1000 * seconds) / dist);

      return (
        Math.floor(pace / 60) + "m" + (pace % 60) + "s (" + pace + " seconds)"
      );
    }
  }
};
</script>

<style>
</style>