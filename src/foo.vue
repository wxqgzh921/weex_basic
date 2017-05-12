<template>
  <div class="body">
    <headerbar></headerbar>
    <div class="main">
    	<tab></tab>
		  <List></List>
    </div>
		<footbar></footbar>
  </div>
</template>

<script>
import headerbar from './components/headerbar.vue'
import tab from './components/tab.vue'
import List from './components/List.vue'
import footbar from './components/footbar.vue'
  export default {
    components:{
    	headerbar,
    	tab,
			List,
			footbar
    }
  }
</script>

<style>
	.body{
		flex-direction: column;
		height:100%;
	}
</style>