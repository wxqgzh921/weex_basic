import foo from './src/foo.vue'
import store from './src/store/index.js'
import router from './src/router/index.js'
foo.el = '#root'
foo.store = store



//export default new Vue(foo);
export default new Vue({
	el:'#root',
	router,
	store
})

router.push('/');
