<template>
  <section>
    <div class="p-2">{{ this.range | capitalize }} View</div>
    <div class="container">
      <div class="row">
        <dashboard-buttons
          @change_range="rangeChosen"
          class="col-12 text-center mb-2"
          :range="range"
        ></dashboard-buttons>
      </div>
      <div class="row text-center">
        <dashboard-chart class="col-12"></dashboard-chart>
      </div>
      <div>
        <stats :stats="charts.stats"></stats>
      </div>
    </div>
  </section>
</template>

<script>
import DashboardButtons from "./DashboardButtons";
import DashboardChart from "./DashboardChart";
import Stats from "./Stats";

import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    DashboardButtons,
    Stats,
    DashboardChart
  },
  computed: {
    ...mapState(["range", "charts"])
  },
  watch: {
    range(newValue, old) {
      console.log("old", old);
      console.log("newValue", newValue);
      this.getCharts(this.range);
    }
  },
  created() {
    this.getCharts(this.range);
  },
  methods: {
    ...mapActions(["getCharts"]),
    rangeChosen(range) {
      console.log("Got Event for Range Change", range);
      this.getCharts(range);
    }
  }
};
</script>
