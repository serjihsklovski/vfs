<template>
  <div id="app">
    <Navbar brand-logo="/static/brand-logo.svg" home-page="https://github.com/serjihsklovski/vfs"/>

    <section class="section">
      <h1>\{{ title }}</h1>

      <p>Author: <a href="https://github.com/serjihsklovski" target="_blank">\{{ author }}</a></p>
      <p>This project uses following frameworks and technologies:</p>

      <ul>
        <li v-for="technology in technologies">\{{ technology }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';

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
    components: { Navbar },
  };
</script>

<style lang="scss" scoped>
  $my-red: #d95642;
  $font-color: #f4f4f4;

  #app {
    a {
      color: $font-color;
    }

    background-color: $my-red;
    color: $font-color;
  }
</style>
