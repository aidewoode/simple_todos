<template lang='jade'>
  .login-form
    .form-item
      input.form-item__input(type='text' placeholder='Email' v-model='email')
    .form-item
      input.form-item__input(type='password' placeholder='Password' v-model='password')
    button.btn.btn__submit(v-on='click: login') Login
    .error-message
      {{errorMessage}}
</template>
<script>
  module.exports = {
    inherit: true,

    data: function() {
      return {
        email: null,
        password: null,
        errorMessage: null
      }
    },

    methods: {
      login: function() {
        this.$set('loading', true);

        var loginData = {
          email: this.email,
          password: this.password
        };

        var resource = this.$resource('auth');
        resource.save(loginData, function(data, _status, _request) {
          require('js-cookie').set('auth_token', data.token)
          this.$set('authToken', data.token);
          this.$set('loading', false);
        }).error(function(data, _status, _request) {
          this.$set('errorMessage', data.error);
          this.$set('loading', false);
        });
      }
    }
  }
</script>

