<template>
  <section>
    <vue-chart
      v-if="charts.columns != undefined"
      :columns="charts.columns"
      :rows="charts.rows"
      :options="charts.options"
    ></vue-chart>
  </section>
</template>

<script>
export default {
  props: ["charts"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
