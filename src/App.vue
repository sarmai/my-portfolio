<template>
  <div id="app">
    <NumberLine />
    <NavbarMobile />
    <router-view />
  </div>
</template>

<script>
import NavbarMobile from "./components/NavbarMobile.vue";
import NumberLine from "./components/NumberLine.vue";

export default {
  name: "App",
  components: {
    NavbarMobile,
    NumberLine,
  },
};
</script>


<style>
#app {
  overflow: hidden;
  position: relative;
  padding-bottom: 100px;
}
</style>
