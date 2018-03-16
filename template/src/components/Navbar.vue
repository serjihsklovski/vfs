<template>
<nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" :href="homePage" target="_blank">
        <img class="logo" :src="brandLogo"/>
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: [ 'brandLogo', 'homePage' ],
};
</script>

<style lang="scss" scoped>
</style>
