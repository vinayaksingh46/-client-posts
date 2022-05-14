import React from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import Form from "../Forms/Form";
import Posts from "../Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { useEffect, useState } from "react";
import useStyles from "./styles";

function Home() {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId,dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts currentid={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
