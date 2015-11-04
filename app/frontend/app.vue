<template lang='jade'>
 .site-content
   .status-bar
     i.icon.icon--off.logout-button(v-if='isAuth' @click='logout')
     loader(v-if='loading')
   .site-title Simple Todos
   router-view
</template>
<script>
  module.exports = {
    data: function() {
      return {
        authToken: require('js-cookie').get('auth_token'),
        loading: false
      };
    },

    computed: {
      isAuth: function() {
        return this.authToken !== undefined
      }
    },

    components: {
      'loader': require('./components/loader.vue')
    },

    methods: {
      logout: function() {
        this.$set('authToken', undefined);
        require('js-cookie').remove('auth_token');
      }
    }
  }
</script>
