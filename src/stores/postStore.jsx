import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get) => ({
	posts : [],
	currentPost : null,
	loading: false,
	createPost : async (body, token) => {
		const rs = await axios.post('http://localhost:8000/post', body , {
			headers : { Authorization : `Bearer ${token}`}
		})
		
		return rs.data
	},
	getAllPosts : async (token) => {
		set({loading: true})
		const rs = await  axios.get('http://localhost:8000/post', {
			headers : { Authorization : `Bearer ${token}`}
		})
		set({ posts: rs.data.posts , loading: false})
	}
}))

export default usePostStore