import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../stores/userStore'
import { PhotoIcon } from '../icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import usePostStore from '../stores/postStore'
import AddPicture from './AddPicture'

export default function PostFormEdit() {
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const createPost = usePostStore(state => state.createPost)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const currentPost = usePostStore(state => state.currentPost)
    const [message, setMessage] = useState(currentPost.message)
    const [addPic, setAddPic] = useState(false)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const hdlChange = e => {
        setMessage(e.target.value)
    }
    const hdlEditPost = async e => {
        try {
            setLoading(true)
            const body = new FormData()
            body.append('message', message)
            if (file) {
                body.append('image', file)
            }
           
            e.target.closest('dialog').close()
        } catch (err) {
            const errMsg = err.response?.data?.error || err.message
            console.log(errMsg)
            toast.error(errMsg)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col gap-2">
            {loading && <span className="loading loading-dots loading-xs"></span>}
            <h3 className="text-xl text-center">Edit post</h3>
            <div className="divider mt-1 mb-0"></div>
            <div className="flex gap-2">
                <Avatar
                    className='w-11 h-11 rounded-full'
                    imgSrc={user.profileImage}
                />
                <div className="flex flex-col">
                    <div className="text-sm">{user.firstName} {user.lastName}</div>
                    <select className="select bg-slate-200 select-xs w-full max-w-xs"
                        defaultValue={'who can see?'}
                    >
                        <option disabled>who can see?</option>
                        <option>public</option>
                        <option>friends</option>
                    </select>
                </div>
            </div>
            <textarea className="textarea textarea-ghost"
                placeholder={`what do you think? ${user.firstName}`}
                value={message}
                onChange={hdlChange}
                rows={message.split('\n').length}
            ></textarea>
            {addPic &&
                <AddPicture closeMe={() => setAddPic(false)}
                    file={file} setFile={setFile}
                />}
            <div className="flex border rounded-lg p-2 justify-between items-center">
                <p>add with your post</p>
                <div className="flex gap-2">
                    <div
                        onClick={() => setAddPic(prv => !prv)}
                        className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center
	active:scale-110">
                        <PhotoIcon className="w-7 h-7" />
                    </div>
                </div>
            </div>
            <button className={`btn btn-sm ${message.trim() ? 'btn-primary' : 'btn-disabled'}`} onClick={hdlEditPost}>Edit Post</button>
        </div>
    )
}
