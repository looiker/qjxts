<template>
	<el-container class="home-container">
		<!-- 侧边栏 -->
		<el-aside :width="isCollapse ? '64px' : '300px'">
			<div :class="isCollapse ? 'titleun' : 'title'">七剑下天山</div>
			<!-- 侧边栏菜单区 -->
			   <el-menu
					background-color="#fff"
					text-color="#000"
					active-text-color="#6778F0"
					unique-opened
					:collapse="isCollapse"
					:collapse-transition="false"
					router
					default-active="welcome"
					>
				  <!-- 一级菜单 -->
				  <!-- 首页 -->
			      <el-submenu index="1">
			        <template slot="title">
						<i class="el-icon-message-solid"></i>
						<span>首页</span>
			        </template>
					<el-menu-item index="welcome" >
						<template slot="title">
							<i class="el-icon-bell"></i>
							<span>首页信息</span>
						</template>
					</el-menu-item>
					</el-submenu>	  
				  <!-- 权限管理 -->
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-s-management"></i>
							<span>申请管理</span>
						</template>
					<el-menu-item index="applypower" >
						<template slot="title">
							<i class="el-icon-copy-document"></i>
							<span>申请权限</span>
						</template>
					</el-menu-item>
					<el-menu-item index="applyroom" >
						<template slot="title">
							<i class="el-icon-house"></i>
							<span>申请教室</span>
						</template>
					</el-menu-item>
					</el-submenu>
					<!-- 信息管理 -->
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-s-order"></i>
							<span>信息管理</span>
						</template>
					<el-menu-item index="student">
						<template slot="title">
							<i class="el-icon-user"></i>
							<span>学生信息</span>
						</template>
					</el-menu-item>
						<el-menu-item index="classroom">
						<template slot="title">
							<i class="el-icon-school"></i>
							<span>教室信息</span>
						</template>
						</el-menu-item>
					</el-submenu>
					<!-- 用户中心 -->
					<el-submenu index="4">
					  <template slot="title">
					    <i class="el-icon-user-solid"></i>
					    <span>用户管理</span>
					  </template>
						<el-menu-item index="user" >
							<template slot="title">
								<i class="el-icon-user"></i>
								<span>用户中心</span>
							</template>
						</el-menu-item>
					</el-submenu>
			    </el-menu>
		</el-aside>
		
	  <!-- 页面主体区域 -->
	  <el-container>
		<!-- 头部 -->
		<el-header >
			<div class="toggle-button" @click="toggleCollapse">
				<i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>	
			</div>
			<!-- 头像 -->
			<div>
			    <el-avatar  > user </el-avatar>
			</div>
		</el-header>
		<!-- 主体 -->
	    <el-main>
			<router-view></router-view>
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>
	export default{
		data () {
			return{
				isCollapse: false,
				welcome:'',
				Menulist: [
					'welcome',
				],
				activePath: '',
				
			}
		},
		
		methods:{
			toggleCollapse(){
				// 点击按钮切换菜单折叠和展开
				this.isCollapse = !this.isCollapse
				
			},

				}

	}
</script>

<style lang="less" scoped>
	.home-container{
		height: 100%;
	}
	.el-header{
		background-color: #6778F0;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		align-items: center;
		color: #fff;
		font-size: 20px;
		> div {
			display: flex;
			align-items:center;
			span{
				margin-left: 15px
			}
		}
		
	}
	
	.el-aside{
		background-color: #fff;
		box-shadow: 0 0 5px #888888;
		.title{
			line-height: 80px;
			height: 10%;
			bottom: 50%;
			text-align: center;
			font-size: 14px;
			font-weight: 700;
		}
		.titleun{
			line-height: 80px;
			height: 10%;
			bottom: 50%;
			text-align: center;
			font-size: 10px;
			font-weight: 100;
		}
		.el-menu{
			border-right: 0;
		}
	}
		.el-main{
		background-color: #F4F6F9;
	}
		.toggle-button{
		margin-left: 1%;
		width: 15%;
		height: 15%;
		color:#fff;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}


</style>
