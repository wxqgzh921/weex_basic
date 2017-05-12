//import Vue from 'vue'
import Vuex from 'vuex'
//import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
	mutations,
	actions,
	state:{
		detaillist:[
			{
				name:'111111111',
				price:400
			},
			{
				name:'22222222',
				price:400
			},
			{
				name:'11111113333311',
				price:400
			},
			{
				name:'555555',
				price:400
			},
			{
				name:'5666767',
				price:400
			},
	    ]
	}
})
