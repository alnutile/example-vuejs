<template>
  <section>
    <b-button-group>
      <b-button :pressed="range == 'daily'" @click="changeRange('daily')">Daily</b-button>
      <b-button :pressed="range == 'monthly'" @click="changeRange('monthly')">Monthly</b-button>
      <b-button :pressed="range == 'yearly'" @click="changeRange('yearly')">Yearly</b-button>
    </b-button-group>
  </section>
</template>

<script>
export default {
  props: ["range"],
  methods: {
    changeRange(range) {
      console.log("Range Coming In", range);
      this.$emit("change_range", range);
    }
  }
};
</script>

<style>
</style>
