<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">NERD 2019: VueJS 2 w Al Nutile</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse" text-variant="white">
        <b-navbar-nav>
          <b-nav-item :active="range == 'daily'" @click="chooseRange('daily')">Daily</b-nav-item>
          <b-nav-item :active="range == 'monthly'" @click="chooseRange('monthly')">Monthly</b-nav-item>
          <b-nav-item :active="range == 'yearly'" @click="chooseRange('yearly')">Yearly</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["range"])
  },
  methods: {
    ...mapMutations(["rangePicker"]),
    chooseRange(range) {
      console.log("choose range", range);
      this.rangePicker(range);
    }
  }
};
</script>

<style>
</style>
