<template>
  <section>
    <b-card bg-variant="light" class="text-center mb-2">
      <vue-chart
        v-if="charts.columns != undefined"
        :columns="charts.columns"
        :rows="charts.rows"
        :options="charts.options"
      ></vue-chart>
    </b-card>
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
