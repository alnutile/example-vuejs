<template>
  <section>
    <div class="p-2">Wrapper...</div>
    <div class="container">
      <div class="row">
        <dashboard-buttons
          @change_range="rangeChosen"
          class="col-12 text-center mb-5"
          :range="range"
        ></dashboard-buttons>
      </div>
    </div>
  </section>
</template>

<script>
import DashboardButtons from "./DashboardButtons";
export default {
  components: {
    DashboardButtons
  },
  created() {
    this.getData();
  },
  data() {
    return {
      range: "daily"
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
