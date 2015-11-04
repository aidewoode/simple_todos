require('normalize.css');
require('./css/index.css');

var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var App = require('./app.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

// set mixin
require('./mixin')(Vue);

// config router
require('./routers')(router);

router.start(App, '#js-app');
