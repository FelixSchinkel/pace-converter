<template>
  <v-btn text color="primary" @click="nextItem">{{selectedItem}}</v-btn>
</template>

<script>
export default {
  props: {
    items: Array, // max size = 2
    value: String
  },
  data: () => ({
    // per default show first item in 'items'
    displayedItemIndex: 0
  }),
  computed: {
    selectedItem: function() {
      this.$emit("input", this.items[this.displayedItemIndex]);
      return this.items[this.displayedItemIndex];
    }
  },
  methods: {
    nextItem: function() {
      // on each klick: cycle throug possible items
      console.log(this.displayedItemIndex, this.items.length);
      if (this.displayedItemIndex >= this.items.length - 1) {
        this.displayedItemIndex = 0;
      } else {
        this.displayedItemIndex++;
      }
    }
  }
};
</script>

<style>
</style>