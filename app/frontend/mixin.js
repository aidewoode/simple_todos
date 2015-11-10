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
        localStorage.setItem('authToken', token);

        // set expired time, the default is 24h.
        localStorage.setItem('authTokenExpireTime', Date.now() + 8.64e+5);
        this.$root.authToken = token;
      },

      clearAuthToken: function() {
        delete localStorage.authToken;
        delete localStorage.authTokenExpireTime;
      },

      getAuthToken: function() {
        var expireTime = localStorage.authTokenExpireTime;

        if (expireTime === undefined) {
          return '';
        }

        if (expireTime < Date.now()) {
          this.clearAuthToken();
          return '';
        } else {
          return localStorage.authToken;
        }
      },

      errorHandle: function(status) {
        if (status === 401) {
          this.$root.authToken = '';
          this.clearAuthToken();
        }
      }
    }
  });
}
