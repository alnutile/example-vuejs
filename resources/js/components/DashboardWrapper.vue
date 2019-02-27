<template>
  <section>
    <div class="p-2">{{ this.range | capitalize }} View</div>
    <div class="container">
      <div class="row">
        <dashboard-buttons
          @change_range="rangeChosen"
          class="col-12 text-center mb-5"
          :range="range"
        ></dashboard-buttons>
      </div>
      <div class="row text-center">
        <dashboard-chart class="col-12" :charts="charts"></dashboard-chart>
      </div>
    </div>
  </section>
</template>

<script>
import DashboardButtons from "./DashboardButtons";
import DashboardChart from "./DashboardChart";
export default {
  components: {
    DashboardButtons,
    DashboardChart
  },
  created() {
    this.getData();
  },
  data() {
    return {
      range: "daily",
      charts: {}
    };
  },
  methods: {
    rangeChosen(range) {
      console.log("Got Event for Range Change", range);
      this.range = range;
      this.getData();
    },
    getData() {
      axios(`/api/data?range=${this.range}`)
        .then(results => {
          console.log(results);
          this.charts = results.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
