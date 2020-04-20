<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
		</el-breadcrumb>
		<h1>待处理</h1>
	<el-row>
	  <el-col :span="8">
	    <el-card>
	      <div style="padding: 14px;">
	        <div style="display: flex;padding-bottom: 10%;">
				<h2>教室申请：</h2>
				<h2 style="padding-right:10px;">0</h2>
				<h2>条</h2>
			</div>
	        <div class="bottom clearfix">
	          <time class="time">{{ currentDate }}</time>
	        </div>
	      </div>
		  
	    </el-card>
	  </el-col>
	</el-row>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      currentDate: new Date()
	    };
	  },
	  methods:{
	  }
	}
</script>

<style>
	.time {
	    font-size: 13px;
	    color: #999;
	  }
	  
	  .bottom {
	    margin-top: 13px;
	    line-height: 12px;
	  }
	
	  .button {
	    padding: 0;
	    float: right;
	  }
	
	  .image {
	    width: 100%;
	    display: block;
	  }
	
	  .clearfix:before,
	  .clearfix:after {
	      display: table;
	      content: "";
	  }
	  
	  .clearfix:after {
	      clear: both
	  }
</style>
