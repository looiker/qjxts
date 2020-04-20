<template>
	<div>	<!-- 面包屑 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>信息管理</el-breadcrumb-item>
		  <el-breadcrumb-item>学生信息</el-breadcrumb-item>
		</el-breadcrumb>
		
		<!-- 卡片视图区 -->
		<el-card >
		<!-- 搜索和添加区域 -->
			<el-row :gutter="20">
				<el-col :span="7">
					<el-input placeholder="请输入内容"  class="">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
			</el-row>
			
			<!-- 用户列表区 -->
			<el-table border stripe>
				<el-table-column type="index"></el-table-column>
				<el-table-column label="姓名"></el-table-column>
				<el-table-column label="学号"></el-table-column>
				<el-table-column label="性别"></el-table-column>
				<el-table-column label="所属学院"></el-table-column>
				<el-table-column label="专业班级"></el-table-column>
				<el-table-column label="人脸信息"></el-table-column>
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
</script>

<style>
</style>
