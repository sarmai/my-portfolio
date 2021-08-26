<template>
  <div class="body | number-line">
    <div v-for="n in numbers" :key="n" class="color-light">
      <span>{{ n }}</span>
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
  transform: translate(10px, -100px);
  cursor: default;
}
</style>
