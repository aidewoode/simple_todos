require('normalize.css');
require('./css/index.css');

var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var App = require('./app.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

// config router
require('./routers')(router);

router.start(App, '#js-app');
