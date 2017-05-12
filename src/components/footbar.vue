<template>
	<div class="footer">
		<div class="rout">
			<image style="width:62px;height:62px;" src="http://opodd7inn.bkt.clouddn.com/home.png"></image>
			<text>首页</text>
		</div>
		<div class="rout">
			<image style="width:62px;height:62px;" src="http://opodd7inn.bkt.clouddn.com/%E6%B6%88%E6%81%AF-2.png"></image>
			<text>微聊</text>
		</div>
		<div class="rout">
			<image style="width:62px;height:62px;" src="http://opodd7inn.bkt.clouddn.com/fs.png"></image>
			<text>推荐</text>
		</div>
		<div class="rout">
			<image style="width:62px;height:62px;" src="http://opodd7inn.bkt.clouddn.com/%E5%AE%A2%E6%88%B7.png"></image>
			<text>我的</text>
		</div>
	</div>
</template>
<script>
	export default{
		name:'footer'
	}
</script>
<style>
	.footer{
		flex-direction: row;
		height:100px;
		background-color: #f4f4f4;

	}
	.rout{
		flex: 1;
		margin-left:20px;
		margin-right:20px;
		align-items:center;
	}
</style>