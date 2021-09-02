<template>
  <div class="wrapper | color-light-grey">
    <Hello id="hello" />
    <br />
    <About id="about" />
    <br />
    <Works id="works" />
    <br />
    <Skills id="skills" />
    <br />
    <Contact id="contact" />
  </div>
</template>

<script>
import Hello from "@/components/Hello.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Hello,
    About,
    Works,
    Skills,
    Contact,
  },
};
</script>

<style scoped>
</style>
