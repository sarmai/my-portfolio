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
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
