<template>
	<div class="headbar">
		<div style="flex:0.3;justify-content:center; align-items:center; flex-direction: row;">
			<text style="color:#fff;font-size: 40px;">上海</text>
			<image style="width:40px;height:40px;" :src="xiaoicon"></image>
		</div>
		<div style="flex:1;justify-content: center;">
			<div style="flex-direction:row;justify-content:space-between;background-color:#eff6e6;height:70px;justify-content: center;align-items: center;margin-left:20px;margin-right:20px;border-radius: 3px;">
				<image style="width:45px;height:45px;" :src="searchicon"></image>
				<text style="font-size: 32px;color:#555;">挑好房，上安居客</text>
				<image style="width:45px;height:45px;" :src="maicon"></image>
			</div>
		</div>
		<div style="flex:0.3;justify-content:center; align-items:center;flex-direction: row;">
			<image style="width:45px;height:45px;margin-left:-30px;margin-right:10px;" :src="whereicon"></image>
			<text style="color:#fff;font-size: 40px;">地图</text>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				xiaoicon:'http://opodd7inn.bkt.clouddn.com/%E5%B0%8F%E4%B8%89%E8%A7%92down.png',
				searchicon:'http://opodd7inn.bkt.clouddn.com/%E6%90%9C%E7%B4%A2_%E6%90%9C%E7%B4%A2.png',
				maicon:'http://opodd7inn.bkt.clouddn.com/%E6%89%AB%E7%A0%81.png',
				whereicon:'http://opodd7inn.bkt.clouddn.com/%E5%9C%B0%E5%9B%BE.png'
			}
		},
		methods:{
			
		},
		created(){
			
		}
	}
</script>
<style>
	.headbar{
		flex-direction: row;
		height:100px;
		background-color:#62ab00;
	}
</style>