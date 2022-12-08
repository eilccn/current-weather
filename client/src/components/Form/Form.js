import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleAdd = (tag) =>
    setPostData((prevPostData) => ({
      ...prevPostData,
      tags: [...prevPostData.tags, tag.trim()],
    }));

  const handleDelete = (tagToDelete) =>
    setPostData((prevPostData) => ({
      ...prevPostData,
      tags: prevPostData.tags.filter((tag) => tag !== tagToDelete),
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(
          currentId,
          { ...postData, name: user?.result?.name },
          navigate
        )
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography varient="h6" align="center">
          *****************Instructions***************** 
          Sign in. Click the apple. Post an image in 
          response to your prompt. Remember to 
          tag your post with the exact prompt.

          ********************About********************
          This is a photo archival project that provides 
          users with randomly generated nouns that are used as photo 
          or drawing prompts. All of the photos compiled from 
          multiple contributors will then be organized 
          by prompt, displaying collections of iterations of each prompt.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Post
        </Typography>
        {/* <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        /> */}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          multiline
          minRows={4}
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />
        {/* <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value.split(",") });
          }}
        /> */}
        <div style={{ padding: "5px 0", width: "94%" }}>
          <ChipInput
            name="tags"
            value={postData.tags}
            onAdd={handleAdd}
            onDelete={handleDelete}
            label="Tags (use exact prompt)"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color='#D3D3D3'
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="#7393B3"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
