<template>
  <div class="font-size-lg | number-line">
    <div v-for="n in numbers" :key="n" class="color-light">
      <p>{{ n }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberLine",
  data() {
    return {
      numbers: 400,
    };
  },
};
</script>

<style scoped>
.number-line {
  position: absolute;
  transform: translate(10px, -120px);
  cursor: default;
}
</style>
