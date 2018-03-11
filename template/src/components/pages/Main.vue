<template>
  <section class="section">
    <h1>\{{ title }}</h1>

    <p>Author: <a href="https://github.com/serjihsklovski" target="_blank">\{{ author }}</a></p>
    <p>This project uses following frameworks and technologies:</p>

    <ul>
      <li v-for="technology in technologies">\{{ technology }}</li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Main',
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
</style>
