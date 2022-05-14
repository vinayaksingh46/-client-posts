import React, { useState,useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch,useSelector } from "react-redux";

import useStyles from "./FormStyles";
import { createPost,updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};
// function Form({currentId,setCurrentId}) {
  
//   const dispatch = useDispatch();
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//   const [postData, setPostData] = useState({
//     creator: "",
//     title: "",
//     message: "",
//     tags: "",
//     selectedFile: ""
//   });

//   useEffect(() => {
//     if(post)
//       setPostData(post);
//   }, [post])

//   const handleChange = (event) => {
//     const eventName = event.target.name;
//     const eventVal = event.target.value;
//     if(eventName==='tags')
//     {
//       console.log('inside tags')
//       setPostData({
//         ...postData,
//         [eventName]: eventVal.split(','),
//       });
      
//     }else{
//     setPostData({
//       ...postData,
//       [eventName]: eventVal,
//     });
//   }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if(currentId)
//     {
//       dispatch(updatePost(currentId,postData))
//     }
//     else{
//       dispatch(createPost(postData));
//     }
//     clear();
//   };
  
//   const clear = () => {
//     setCurrentId(null)
//     setPostData({ title:'',creator:'',message:'',tags:'',selectedFile:''})
//   };

//   const classes = useStyles();

//   return (
//     <Paper className={classes.paper}>
//       <form
//         autoComplete="off"
//         className={`${classes.form} ${classes.root}`}
//         noValidate
//         onSubmit={handleSubmit}
//       >
//         <Typography varient="h6">{!currentId?`Creating`:`Editing`} a memory</Typography>
//         <TextField
//           name="creator"
//           onChange={handleChange}
//           variant="outlined"
//           label="Creator"
//           fullWidth
//           value={postData.creator}
//         />
//         <TextField
//           name="title"
//           onChange={handleChange}
//           variant="outlined"
//           label="title"
//           fullWidth
//           value={postData.title}
//         />
//         <TextField
//           name="message"
//           onChange={handleChange}
//           variant="outlined"
//           label="message"
//           fullWidth
//           value={postData.message}
//         />
//         <TextField
//           name="tags"
//           onChange={handleChange}
//           variant="outlined"
//           label="tags"
//           fullWidth
//           value={postData.tags}
//         />
//         <div className={classes.fileInput}>
//           <Filebase
//             type="file"
//             multiple={false}
//             onDone={({base64}) => {
//               setPostData({ ...postData, selectedFile: base64 });
//             }}
//           ></Filebase>
//         </div>
//         <Button
//           className={classes.buttonSubmit}
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//         >
//           Submit
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           onClick={clear}
//           fullWidth
//         >
//           Clear
//         </Button>
//       </form>
//     </Paper>
//   );
// }

export default Form;

