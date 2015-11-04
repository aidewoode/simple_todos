module.exports = function(vue) {
  vue.mixin({
    methods: {
      startLoading: function() {
        this.$root.loading = true;
      },

      stopLoading: function() {
        this.$root.loading = false;
      },

      setAuthToken: function(token) {
        require('js-cookie').set('auth_token', token);
        this.$root.authToken = token;
      }
    }
  });
}
