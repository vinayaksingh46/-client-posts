import * as API from "../api/index"

export const signIn = (formData,history) => async (dispatch) => {
    try {
      
    //   const { data } = await api.createPost(post);
      
    //   const action = { type: CREATE, payload: data };
    //   dispatch({ type: CREATE, payload: data });
    const {data} = await API.signIn(formData)

    history.push('/')
    } catch (error) {
      console.log(error);
    }
  };

export const signUp = (post) => async (dispatch) => {
try {
    
    
} catch (error) {
    console.log(error);
}
};