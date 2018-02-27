<template>
  <div id="app">
    <h1>\{{ title }}</h1>

    <p>Author: <a href="https://github.com/serjihsklovski" target="_blank">\{{ author }}</a></p>
    <p>This project uses following frameworks and technologies:</p>

    <ul>
      <li v-for="technology in technologies">\{{ technology }}</li>
    </ul>
  </div>
</template>

<script>
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
