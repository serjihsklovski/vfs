<template>
  <div id="app">
    <navbar brand-logo="/static/brand-logo.svg" home-page="https://github.com/serjihsklovski/vfs"/>
    <hero/>
    <router-view/>
    <custom-footer/>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  import Hero from './Hero';
  import CustomFooter from './CustomFooter';

  export default {
    name: 'App',
    components: { Navbar, Hero, CustomFooter },
  };
</script>

<style lang="scss" scoped>
</style>
