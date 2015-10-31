module.exports = function(router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./views/home.vue')
    }
  });
}
