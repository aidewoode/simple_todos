<template lang='jade'>
input.todo-list__create(placeholder='Create your todos...' v-model='newTodo' @keyup.enter='createTodo')
ul.todo-list__items
  li.todo-list__item(v-for='todo in todos')
    .todo-list__check(class="{{todo.checked ? 'checked': ''}}")
      i.icon.icon--check(@click='check(todo)')
    .todo-list__content(class="{{todo.checked ? 'checked': ''}}") {{todo.body}}
    .todo-list__remove
      i.icon.icon--remove(@click='removeTodo(todo)')
</template>
<script>
  module.exports = {
    data: function() {
      return {
        todos: null,
        newTodo: null
      }
    },

    ready: function() {
      var resource = this.$resource('tasks');
      resource.get(function(data, _status, _request) {
        this.$set('todos', data.todos);
      });
    },

    methods: {
      createTodo: function() {
        this.startLoading();

        var todo = {
          task: {
            body: this.newTodo
          }
        };

        this.$set('newTodo', '');

        var resource = this.$resource('tasks');
        resource.save(todo, function(data, _status, _request) {
          this.todos.push(data.task);
          this.stopLoading();
        }).error(function(_data, _status, _request) {
          this.stopLoading();
        });
      },

      removeTodo: function(todo) {
        this.startLoading();

        var resource = this.$resource('tasks/:id');
        resource.delete({id: todo.id}, function(_data, _status, _request) {
          this.todos.$remove(todo);
          this.stopLoading();
        });
      },

      check: function(todo) {
        var resource = this.$resource('check');
        todo.checked = !todo.checked
        resource.save({id: todo.id});
      }
    }
  }
</script>
<style>
  .todo-list__create {
    width: 100%;
    outline: none;
    padding: .83rem;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, .03);
    font-family: 'Lato-Light';
  }

  .todo-list__items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list__item {
    padding: .83rem;
    border-bottom: 1px dashed #eee;
    display: flex;
  }

  .todo-list__check {
    width: 10%;
    color: #eee;
  }

  .todo-list__remove {
    width: 10%;
    text-align: right;
    color: rgb(219, 77, 109);
  }

  .todo-list__content {
    width: 80%;
    word-break: break-word;
  }

  .todo-list__check.checked {
    color: #5dac81;
  }

  .todo-list__content.checked {
    text-decoration: line-through;
  }
</style>
