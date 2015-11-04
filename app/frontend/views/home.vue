<template lang='jade'>
  .user-form(v-if='!$root.isAuth')
    ul.user-form__nav
      li.user-form__nav__item(@click='isLogin = !isLogin' class="{{isLogin ? 'active': '' }}") Login
      li.user-form__nav__item(@click='isLogin = !isLogin' class="{{isLogin ? '': 'active' }}") SignUp
    login-form(v-if='isLogin')
    signup-form(v-if='!isLogin')
  .todo-list(v-if='$root.isAuth')
    todo-list
</template>
<script>
  module.exports = {
    data: function() {
      return {
        isLogin: true
      }
    },

    components: {
      'login-form': require('../components/login-form.vue'),
      'signup-form': require('../components/signup-form.vue'),
      'todo-list': require('../components/todo-list.vue')
    }
  }
</script>
<style>
  .user-form,
  .todo-list {
    max-width: 500px;
    margin: auto;
    margin-top: 5.5rem;
    background-color: #fff;
    box-shadow: 1px 1px 10px #eee;
  }

  .user-form__nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .user-form__nav__item {
    display: inline-block;
    width: 50%;
    text-align: center;
    padding: .45rem;
    cursor: pointer;
    background-color: #eee;
    color: #555;
  }

  .user-form__nav__item.active {
    cursor: text;
    pointer-events: none;
    background-color: #fff;
  }

  @media screen and (max-width: 480px) {
    .todo-list,
    .user-form {
      margin-right: 20px;
      margin-left:  20px;
    }
  }
</style>
