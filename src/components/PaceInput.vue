<template>
    <v-text-field
      class="mx-4"
      :label="label"
      v-model="data"
      :rules="inputRules"
      type="tel"
      maxlength="4"
      @focus="$emit('focus', $event)"
    />
</template>

<script>
import { ref, watchEffect, watch } from "@vue/composition-api";

// regex checks if time format is: M.SS
const pattern = /^([0-9][.,][0-5][0-9])$/;

export default {
  props: {
    label: String,
    value: String
  },
  setup(props, context) {
    const inputRules = [
      value => {
        return pattern.test(value) || "Invalid Time Format use M.SS";
      }
    ];
    // input data
    const data = ref(props.value);
    watch(
      () => props.value,
      value => (data.value = value)
    );

    watchEffect(() => {
      let val = data.value;
      //when typing 3 numbers back to back => add "." automatically after first number
      if (val.length === 3 && !isNaN(val) && !val.includes(".")) {
        data.value = val.slice(0, 1) + "." + val.slice(1);
      }
      // if data is valid input update parent v-model
      if (pattern.test(data.value)) {
        context.emit("input", data.value);
      }
    });

    return { data, inputRules };
  }
};
</script>