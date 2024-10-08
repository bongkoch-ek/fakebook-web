import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get) => ({
	posts : [],
	currentPost : null,
	loading: false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('http://localhost:8000/post', body , {
			headers : { Authorization : `Bearer ${token}`}
		})
		console.log(rs)
		set(state => ({
			posts : [ {...rs.data, user}, ...state.posts]
		}))
		
	},
	getAllPosts : async (token) => {
		set({loading: true})
		const rs = await  axios.get('http://localhost:8000/post', {
			headers : { Authorization : `Bearer ${token}`}
		})
		set({ posts: rs.data.posts , loading: false})
	},
	deletePost : async( token, id) => {
		const rs = await axios.delete(`http://localhost:8000/post/${id}`, {
			headers : {Authorization : `Bearer ${token}`}
		})
		set(state => ({
			posts: state.posts.filter(el => el.id !== id)
		}))
	},
	setCurrentPost : (post) => {
		set({currentPost : post})
	}
}))

export default usePostStore