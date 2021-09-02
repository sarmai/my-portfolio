<template>
  <div>
    <section>
      <h1 class="font-size-lg | color-primary | title">
        myWorks(<span>selected = </span>true)
      </h1>
      <div class="body" v-for="work in works" :key="work.id">
        <img
          class="img"
          :src="require('@/assets/img/' + work.imgName)"
          :alt="'Cover image for ' + work.title"
        />
        <h2>{{ work.title }}</h2>
        <p>{{ work.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      works: [
        {
          id: 0,
          title: "Internet Forum",
          imgName: "forum-img-cover.png",
          description:
            "An online forum where you can create an account, post and comment, communicate with other users and a whole lot more.",
        },
        {
          id: 1,
          title: "Coffee Shop",
          imgName: "coffeeshop-img-cover.png",
          description:
            "Design and development of a cozy website for a cozy cafe.",
        },
        {
          id: 2,
          title: "Groupie Tracker",
          imgName: "gtracker-img-cover.png",
          description: "A visual representation of an open Artists API",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
