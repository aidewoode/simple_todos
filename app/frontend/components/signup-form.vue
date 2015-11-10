<template lang='jade'>
  .signup-form
    .form-item
      input.form-item__input(type='text' placeholder='Email' v-model='email')
    .form-item
      input.form-item__input(type='password' placeholder='Password' v-model='password')
    .form-item
      input.form-item__input(type='password' placeholder='Password Confirm' v-model='passwordConfirmation')
    button.btn.btn__submit(@click='createUser') SignUp
    .error-message
      {{errorMessage}}
</template>
<script>
  module.exports = {
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
        this.startLoading();

        var user = {
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          }
        };

        var resource = this.$resource('users');
        resource.save(user, function(data, _status, _request) {
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
