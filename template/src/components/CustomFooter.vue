<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p><strong>vfs</strong> by Sergey Sokolov aka serjihsklovski, 2018</p>

        <a
            v-for="social in socials"
            :href="social.address"
            :title="social.name + ':serjihsklovski'"
            class="social"
            target="_blank"
        >
          <img :src="social.logoPath" :alt="social.name" width="32" height="32">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'CustomFooter',
    data () {
      return {
        socials: [
          {
            name: 'github',
            address: 'https://github.com/serjihsklovski',
            logoPath: '/static/social-1_logo-github.svg',
          },
          {
            name: 'twitter',
            address: 'https://twitter.com/serjihsklovski',
            logoPath: '/static/social-1_logo-twitter.svg',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .social img {
    margin: 0 10px;
  }
</style>
