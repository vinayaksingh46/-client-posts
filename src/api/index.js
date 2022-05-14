import axios from "axios"

const URL = "https://memogram-vs.herokuapp.com/posts";

const URL = "http://localhost:5000/posts";

const API_URL=axios.create({baseURL:"https://memogram-vs.herokuapp.com"})
const postCalls="/posts"
const authCalls="/auth"

export const fetchAllPosts= async ()=> {
return await axios.get(postCalls)
}

export const createPost =(post)=> {
    return axios.post(postCalls,post)
}

export const updatePost =(id,updatedPost)=>{
    return axios.patch(`${postCalls}/${id}`,updatedPost)
}

export const deletePost =(id)=>{
    return axios.delete(`${postCalls}/${id}`)
}

export const likePost =(id)=>{
    return  axios.patch(`${postCalls}/${id}/likePost`)
}

export const signIn=(formData)=>{API_URL.post(authCalls+"/signIn",formData)}
export const signUp=(formData)=>{API_URL.post(authCalls+"/signUp",formData)}