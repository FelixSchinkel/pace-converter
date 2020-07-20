<template>
  <v-btn text color="primary" @click="clickToggle">{{toggleItems}}</v-btn>
</template>

<script>
export default {
  props: {
    items: Array, // max size = 2
    value: String
  },
  data: () => ({
    toggle: true
  }),
  computed: {
    toggleItems: function() {
      let val = "";
      this.toggle ? (val = this.items[0]) : val = this.items[1];
      this.$emit("input", val);
      return val;
    }
  },
  methods: {
    clickToggle: function() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style>
</style>