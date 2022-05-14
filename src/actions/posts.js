import * as api from "../api";
import {CREATE,UPDATE,FETCH_ALL,DELETE,LIKE} from "../constants/actionTypes"
//Action Creator

export const getPosts = () => async (dispatch) => {
  try {
    
    const { data } = await api.fetchAllPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    
    const { data } = await api.createPost(post);
    
    const action = { type: CREATE, payload: data };
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id,updatedPost)=>async (dispatch)=>{
  try {
    const {data} = await api.updatePost(id,updatedPost);
    const action = { type: UPDATE, payload: data };
    dispatch(action);

  } catch (error) {
    console.log(error);
  }
}

export const deletePost =(id)=> async(dispatch)=>{
  try {
    await api.deletePost(id);
    const action = { type: DELETE, payload: id };
    dispatch(action);

  } catch (error) {
    console.log(error);
  }
}

export const likePost =(id)=> async(dispatch)=>{
  try {
    const {data} = await api.likePost(id);
    const action = { type: LIKE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
}
