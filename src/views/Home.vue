<template>
  <div class="color-light-grey">
    <Hello />
    <section class="p-1" id="about">
      <h1 class="color-primary | title">About</h1>
      <p class="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        inventore officia quis expedita voluptas, dignissimos iusto ab
        asperiores magni, pariatur ut culpa iure magnam ad nemo eos autem vitae
        at quasi numquam ex cupiditate quae. Facere neque quod blanditiis! A
        libero repudiandae ducimus quidem. At ducimus facere quia facilis
        tempora.
      </p>
    </section>
    <section class="p-1" id="works">
      <h1 class="color-primary | title">Works</h1>
      <p class="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        inventore officia quis expedita voluptas, dignissimos iusto ab
        asperiores magni, pariatur ut culpa iure magnam ad nemo eos autem vitae
        at quasi numquam ex cupiditate quae. Facere neque quod blanditiis! A
        libero repudiandae ducimus quidem. At ducimus facere quia facilis
        tempora.
      </p>
    </section>
    <section class="p-1" id="skills">
      <h1 class="color-primary | title">Skills</h1>
      <p class="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        inventore officia quis expedita voluptas, dignissimos iusto ab
        asperiores magni, pariatur ut culpa iure magnam ad nemo eos autem vitae
        at quasi numquam ex cupiditate quae. Facere neque quod blanditiis! A
        libero repudiandae ducimus quidem. At ducimus facere quia facilis
        tempora.
      </p>
    </section>
    <section class="p-1" id="contact">
      <h1 class="color-primary | title">Contact</h1>
      <p class="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        inventore officia quis expedita voluptas, dignissimos iusto ab
        asperiores magni, pariatur ut culpa iure magnam ad nemo eos autem vitae
        at quasi numquam ex cupiditate quae. Facere neque quod blanditiis! A
        libero repudiandae ducimus quidem. At ducimus facere quia facilis
        tempora.
      </p>
    </section>
  </div>
</template>

<script>
import Hello from "@/components/Hello.vue";

export default {
  name: "Home",
  components: {
    Hello,
  },
};
</script>
