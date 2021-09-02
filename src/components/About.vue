<template>
  <div class="about">
    <section>
      <h1 class="font-size-lg | color-primary">aboutMe()</h1>
      <div class="body | flow | font-size-md">
        <p>
          My journey as a web developer started back in 2018. I tried to build a
          portfolio for my sister’s arts. My sister ended up changing her career
          path (oops :)), but I got too involved with HTML & CSS.
        </p>
        <p>
          Today I am still super passionate about learning new things,
          perfecting my coding skills, and building awesome enjoyable products!
        </p>
      </div>
      <img src="@/assets/img/me.png" alt="Photo of me" class="img" />
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.body p::first-line {
  color: var(--accent);
}

.body::before {
  content: "/*";
}

.body::after {
  content: "*/";
}

.body::before,
.body::after {
  color: var(--bg-light);
}
</style>
