<template lang='jade'>
  .login-form
    .form-item
      input.form-item__input(type='text' placeholder='Email' v-model='email')
    .form-item
      input.form-item__input(type='password' placeholder='Password' v-model='password')
    button.btn.btn__submit(@click='login') Login
    .error-message
      {{errorMessage}}
</template>
<script>
  module.exports = {
    data: function() {
      return {
        email: null,
        password: null,
        errorMessage: null
      }
    },

    methods: {
      login: function() {
        this.startLoading();

        var loginData = {
          email: this.email,
          password: this.password
        };

        var resource = this.$resource('auth');
        resource.save(loginData, function(data, _status, _request) {
          this.setAuthToken(data.token);
          this.stopLoading();
        }).error(function(data, _status, _request) {
          this.$set('errorMessage', data.error);
          this.stopLoading();
        });
      }
    }
  }
</script>

