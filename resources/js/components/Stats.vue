<template>
  <section>
    <b-card-group deck>
      <b-card bg-variant="light" header="Foo" class="text-center">
        <b-card-text v-if="statsLoaded()">{{ stats.foo }}</b-card-text>
      </b-card>
      <b-card bg-variant="light" header="Bar" class="text-center">
        <b-card-text v-if="statsLoaded()">{{ stats.bar }}</b-card-text>
      </b-card>
    </b-card-group>
  </section>
</template>

<script>
export default {
  props: ["stats"],
  methods: {
    statsLoaded() {
      return !_.isEmpty(this.stats);
    }
  }
};
</script>

<style>
</style>w
