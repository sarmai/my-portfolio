<template>
  <div>
    <router-link to="#hello" class="nav-logo"
      ><img
        src="@/assets/img/logo-image.jpg"
        alt="Logo image"
        class="logo-img"
      />
      <a
        href="mailto:dev.sarmai@outlook.com"
        class="color-light-grey | email-link"
        >dev.sarmai@outlook.com</a
      >
    </router-link>
    <ul class="navbar | p-1 | bg-dark">
      <li class="nav-item">
        <router-link to="#hello" class="color-light-grey | nav-link"
          ><i class="fas fa-hand-spock"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="#about" class="color-light-grey | nav-link"
          ><i class="fas fa-qrcode"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="#works" class="color-light-grey | nav-link"
          ><i class="fas fa-briefcase"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="#skills" class="color-light-grey | nav-link"
          ><i class="fas fa-dumbbell"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="#contact" class="color-light-grey | nav-link"
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
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--accent);
}

.navbar a.router-link-exact-active {
  color: var(--accent);
}

.logo-img {
  position: absolute;
  transform: translate(10px, 10px);
  max-width: 75px;
  height: auto;
  border-radius: 50%;
}

.email-link {
  right: 4%;
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: translateY(35%);
}

.email-link::before {
  content: "";
  display: block;
  inline-size: 150px;
  block-size: 1px;
  background: var(--light-grey);
  transform: translate(-11.5px, -110%);
}
</style>
