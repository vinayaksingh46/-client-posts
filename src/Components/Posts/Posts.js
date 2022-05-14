import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

import useStyles from "./PostStyle";

function Posts({currentId,setCurrentId}) {
  const post = useSelector((state) => state.posts);

  const classes = useStyles()

  return (
    !post.length ? (
      <CircularProgress />
    ) : ( 
      <Grid className={classes.container} container alignItems="stretch" spacing ={3}>
        {post.map((indivisualPost) => (
          <Grid key={indivisualPost._id} item xs={12} sm={6} md={6}>
              <Post post ={indivisualPost} currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;

