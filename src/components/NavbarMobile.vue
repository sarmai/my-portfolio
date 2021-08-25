<template>
  <div>
    <ul class="navbar color-light-grey">
      <li class="nav-item">
        <router-link to="/" class="nav-link"
          ><i class="fas fa-hand-spock"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link"
          ><i class="fas fa-qrcode"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/work" class="nav-link"
          ><i class="fas fa-briefcase"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/skills" class="nav-link"
          ><i class="fas fa-dumbbell"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link"
          ><i class="fas fa-address-book"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarMobile",
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1em;
}
</style>
