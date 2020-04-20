<template>
	<div>
		<!-- 面包屑 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		
		<!-- 卡片视图区 -->
		<el-card >
		<!-- 搜索和添加区域 -->
			<el-row :gutter="20">
				<el-col :span="7">
					<el-button type="primary">添加用户</el-button>
				</el-col>
			</el-row>
			
			<!-- 用户列表区 -->
			<el-table border stripe>
				<el-table-column type="index"></el-table-column>
				<el-table-column label="姓名"></el-table-column>
				<el-table-column label="邮箱"></el-table-column>
				<el-table-column label="电话"></el-table-column>
				<el-table-column label="角色"></el-table-column>
				<!-- <el-table-column label="状态"></el-table-column> -->
				<el-table-column label="操作">
					<template v-slot="scoped">
						<!-- 改 -->
						<el-tooltip effect="light" content="更改信息" placement="top" :enterable="false">
							<el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
						</el-tooltip>
						<!-- 删 -->
						<el-tooltip effect="light" content="删除角色" placement="top" :enterable="false">
							<el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
						</el-tooltip>
						<!-- 设 -->
						<el-tooltip effect="light" content="分配角色" placement="top" :enterable="false">
							<el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
						</el-tooltip>
						
			<!-- 分页区 -->
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="queryInfo.pagenum"
			      :page-sizes="[1, 2, 5, 10]"
			      :page-size="queryInfo.pagesize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
							
					</template>
				</el-table-column>
				
			</el-table>	
			
		</el-card>
		
	
		
	</div>
</template>

<script>
export default {
	data () {
		return {
			queryInfo:{
				query:'',
				pagenum:1,
				pagesize:2,
				
			},
			userlist:[],
			total:0,
			}
		},
		created () {
			
		},
		methods: {
			handleCurrentChange(newPage){
				console.log(newPage)
				this.queryInfo.pagenum = newPage
				//获取数据this.getUserList()
			},
			handleSizeChange(newSize){
				console.log(newSize)
				this.queryInfo.pagesize = newSize
				//获取数据请求
			},
		}
	}
	
</script>

<style>
</style>
