<template>
	<div>
		<!-- 面包屑 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>申请管理</el-breadcrumb-item>
		  <el-breadcrumb-item>申请教室</el-breadcrumb-item>
		</el-breadcrumb>
		
		<!-- 申请处理表 -->
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
				<el-table-column label="申请人"></el-table-column>
				<el-table-column label="编号"></el-table-column>
				<el-table-column label="教室"></el-table-column>
				<el-table-column label="开始时间"></el-table-column>
				<el-table-column label="结束时间"></el-table-column>
				<el-table-column label="申请时间"></el-table-column>
				<el-table-column label="申请日期"></el-table-column>
				<el-table-column label="申请原因"></el-table-column>
				<el-table-column label="状态"></el-table-column>
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
	export default{
		data () {
			return{
				// 申请用户列表的参数对象
				queryInfo:{
					query:'',
					pagenum: 1,
					pagesize: 2
				},
				ApplyroomList: [],
				total: 0
			}
		},
		created() {
			this.getApplyroomList()
		},
		methods:{
			async getApplyroomList () {
			  const {data:res} = await this.$http.get('admin/getApply',{ params:this.queryInfo})
			  if(res.meta.status !== 200) {
				  return this.$message.error('获取用户列表失败！')
			  }
			  this.ApplyroomList = res.data.data
			  this.total = res.data.total
			  console.log(res)	
			}
		}
		
	}
</script>

<style>
</style>
