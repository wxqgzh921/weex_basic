<template>
	<div>
		<div class="tab">
			<div v-for="item1 in itemsone" >
				<image style="width:140px;height:140px;" :src="item1.image"></image>
				<text style="text-align: center;">{{item1.type}}</text>
			</div>
		</div>
		<div class="tab">
			<div v-for="item2 in itemstwo" >
				<image style="width:140px;height:140px;" :src="item2.image"></image>
				<text style="text-align: center;">{{item2.type}}</text>
			</div>
		</div>
		<div class="tab_div">
			<text class="title">安居头条</text>
			<slider class="slider" interval="3000" auto-play="true">
				<div class="frame" v-for="list in lists">
			    	<text class="text">• {{list.listtext}}</text>
			    </div>
			</slider>
		</div>
	</div>
</template>
<script>
	export default{
		name:'tab',
		data(){
			return{
				itemsone:[
					{
						image:'http://opodd7inn.bkt.clouddn.com/1.png',
						type:'新房'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/2.png',
						type:'二手房'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/3.png',
						type:'租房'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/4.png',
						type:'商铺写字楼'
					}
				],
				itemstwo:[
					{
						image:'http://opodd7inn.bkt.clouddn.com/5.png',
						type:'卖房'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/6.png',
						type:'海外地产'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/7.png',
						type:'帮你找房'
					},
					{
						image:'http://opodd7inn.bkt.clouddn.com/8.png',
						type:'小区'
					}
				],
				lists:[
					{
						listtext:'人民日报 1111111111'
					},
					{
						listtext:'人民日报 2222222222'
					},
					{
						listtext:'人民日报 3333333333'
					},
					{
						listtext:'人民日报 4444444444'
					},
					{
						listtext:'人民日报 5555555555'
					}
				]
			}
		},
		methods:{
			
		}
	}
</script>
<style>
	.tab{
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top:40px;
		padding-left:10px;
		padding-right:10px;
	}
	.tab_div{
		flex-direction: row;
		padding-left:10px;
		padding-right:10px;
		margin-top:20px;
		background:#edfee8;
		height:120px;
		overflow: hidden;
	}
	.title{
		flex:0.4;
		font-size: 45px;
		font-weight: bold;
		color:#65ad06;
		font-style:oblique;
		line-height: 120px;
	}
	.text{
		height:120px;
		line-height: 120px;
		font-size:42px;
		color:#898e87;
	}
	.slider {
		margin-left:40px;
	    flex:1;
	    width:500px;
	    height: 120px;
	    line-height:120px;
	    flex-direction: column;
	}
	.frame {
		flex:1;
		/*width:500px;*/
		/*flex-direction: column;*/
	    position: relative;
	}
	.weex-root ul{
		width:500px !important;
	}
</style>