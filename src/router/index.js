import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import User from '../components/User.vue'
import Applyroom from '../components/Applyroom.vue'
import Applypower from '../components/Applypower.vue'
import Student from '../components/Student.vue'
import Classroom from '../components/Classroom.vue'


Vue.use(Router)


export default new Router({
	routes: [
		{ path: '/' , redirect: '/login'},
		{ path: '/login' , component: Login },
		{ 
		path: '/home' , 
		component: Home , 
		redirect:'/welcome',
		children: [
		{ path: '/welcome' , component: Welcome },
		{ path: '/user' , component: User },
		{ path: '/applypower' , component: Applypower },
		{ path: '/Applyroom' , component: Applyroom },
		{ path: '/student' , component: Student },
		{ path: '/classroom' , component: Classroom }]
		}
		]
})