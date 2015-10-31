<template lang='jade'>
  .signup-form
    .form-item
      input.form-item__input(type='text' placeholder='Email' v-model='email')
    .form-item
      input.form-item__input(type='password' placeholder='Password' v-model='password')
    .form-item
      input.form-item__input(type='password' placeholder='Password Confirm' v-model='passwordConfirmation')
    button.btn.btn__submit(v-on='click: createUser') Signup
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
        passwordConfirmation: null,
        errorMessage: null
      }
    },

    methods: {
      createUser: function() {
        this.$set('loading', true);

        var user = {
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          }
        };

        var resource = this.$resource('users');
        resource.save(user, function(data, _status, _request) {
          require('js-cookie').set('auth_token', data.token);
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
