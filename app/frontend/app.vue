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
      var authToken = this.getAuthToken();

      return {
        authToken: authToken,
        loading: false
      };
    },

    computed: {
      isAuth: function() {
        return this.authToken !== ''
      }
    },

    components: {
      'loader': require('./components/loader.vue')
    },

    methods: {
      logout: function() {
        this.$set('authToken', '');
        this.clearAuthToken();
      }
    }
  }
</script>
