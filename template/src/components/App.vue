<template>
  <div id="app">
    <Navbar brand-logo="/static/brand-logo.svg" home-page="https://github.com/serjihsklovski/vfs"/>
    <Hero/>

    <section class="section">
      <h1>\{{ title }}</h1>

      <p>Author: <a href="https://github.com/serjihsklovski" target="_blank">\{{ author }}</a></p>
      <p>This project uses following frameworks and technologies:</p>

      <ul>
        <li v-for="technology in technologies">\{{ technology }}</li>
      </ul>
    </section>

    <CustomFooter/>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import Hero from './Hero.vue';
  import CustomFooter from './CustomFooter.vue';

  export default {
    name: 'App',
    data () {
      return {
        title: 'Vue Project Template',
        author: 'Sergey Sokolov (serjihsklovski)',
        technologies: [
          'Webpack',
          'Babel',
          'Vue.js',
          'Bulma',
          'Sass',
        ],
      };
    },
    components: { Navbar, Hero, CustomFooter },
  };
</script>

<style lang="scss" scoped>
</style>
