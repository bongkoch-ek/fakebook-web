import React, { useEffect } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'

export default function PostContainer() {
    const posts = usePostStore(state => state.posts)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const token = useUserStore(state => state.token)

	useEffect( ()=>{
		getAllPosts(token)
	},[] )
	
	return (
		<div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
			<CreatePost />
			{ posts.map(el => (
				<PostItem key={el.id} post={el} />
			))}
		</div>
	)
}
