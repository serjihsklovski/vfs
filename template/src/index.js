import './assets/lib/bulma/bulma.scss';

import Vue from 'vue';

import App from './components/App';
import router from './router';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>',
});
