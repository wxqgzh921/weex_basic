import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/'
			components:(resolve) => require(['../foo.vue'],resolve)
		},
		{
			path:'/chat'
			components:(resolve) => require(['../components/Chat.vue'],resolve)
		},
		{
			path:'/like'
			components:(resolve) => require(['../components/Like.vue'],resolve)
		},
		{
			path:'/mine'
			components:(resolve) => require(['../components/Mine.vue'],resolve)
		}
	]
})

