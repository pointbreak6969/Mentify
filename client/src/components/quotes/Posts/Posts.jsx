import React, { useEffect, useState } from "react";
import "../../../styles/posts.css";
import image from "../../../assets/ann.png";
import axios from "axios";

const Posts = () => {
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/post/getAllPost",
        { withCredentials: true }
      );
      const data = response.data.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertTime = (time) => {
    const createdAt = new Date(time);
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hourCycle: "h12",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Asia/Kathmandu",
    };
    const formatter = new Intl.DateTimeFormat("en-NP", options);
    const formattedDateTime = formatter.format(createdAt);
    return formattedDateTime;
  };

  const handlePostSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/post/uploadPost",
        { content: postContent },
        { withCredentials: true }
      );
      setNewPost([...newPost, response.data.data]);
      setPostContent("");
      setIsCreatePostVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeClick = async (postId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/post/likePost/${postId}`,
        {},
        { withCredentials: true }
      );
      // Update the post in state with updated likes
      const updatedPosts = posts.map((post) =>
        post._id === postId ? { ...post, likes: response.data.likes } : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/comment/addComment/${postId}`,
        { comment },
        { withCredentials: true }
      );
      // Update the post in state with updated comments
      const updatedPosts = posts.map((post) =>
        post._id === postId
          ? { ...post, comments: [...post.comments, response.data.comment] }
          : post
      );
      setPosts(updatedPosts);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreatePostClick = () => {
    setIsCreatePostVisible(true);
  };

  const handleBackClick = () => {
    setIsCreatePostVisible(false);
  };

  return (
    <>
      {/* Button to toggle Create New Post visibility */}
      <div className="bg-gray-100 flex items-center justify-center h-0 my-12">
        <div className="flex w-full max-w-screen-lg px-4 gap-20">
          <button className="bg-[#418CA6] text-white py-2 px-4 rounded flex gap-2 justify-center items-center">
            Your Posts <i className="fa-brands fa-readme my-2"></i>
          </button>
          <button
            className="bg-[#418CA6] text-white py-2 px-4 rounded flex gap-2 items-center"
            onClick={handleCreatePostClick}
          >
            Create a New Post <i className="fa-solid fa-pen-to-square my-1"></i>
          </button>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-12">
        {/* Your Posts Section */}
        <div className="bg-gray-100 px-4 py-2 rounded shadow mb-8">
          <h2 className="text-lg font-semibold mb-2">Posts</h2>
          {[...posts, ...newPost].map((post) => (
            <div
              key={post._id}
              className="bg-white p-4 rounded shadow mb-4 flex items-start justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-5">
                  <img src={image} alt="Profile" />
                  <div className="text-gray-500 text-sm mb-2">
                    {convertTime(post.createdAt)}
                  </div>
                </div>
                <p className="mb-2 font-bold text-xl">{post.content}</p>

                <div className="flex items-center mb-2">
                  <button
                    onClick={() => handleLikeClick(post._id)}
                    className="bg-gray-200 text-gray-600 px-3 py-1 rounded mr-2 flex items-center"
                  >
                    <i className="fas fa-thumbs-up mr-2"></i> Like ({post.likes})
                  </button>
                  <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded">
                    <i className="fas fa-pen-square mr-2"></i> Comment (
                    {post.comments.length})
                  </button>
                </div>
                <ul className="list-disc list-inside">
                  {post.comments.map((comment) => (
                    <li
                      key={comment._id}
                      className="text-gray-600 mb-1"
                    >
                      {comment.content}
                    </li>
                  ))}
                </ul>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentSubmit(post._id);
                  }}
                  className="mt-2"
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a comment"
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#418CA6] text-white px-3 py-1 mt-5 rounded ml-2 hover:bg-green-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {post.image && (
                <img src={post.image.url} alt="Post" className="w-24 h-24 ml-4" />
              )}
            </div>
          ))}
        </div>

        {/* Create New Post Section */}
        {isCreatePostVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
              <button
                className="text-[#418CA6] mb-4 flex items-center"
                onClick={handleBackClick}
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
              <form onSubmit={handlePostSubmission}>
                <textarea
                  name="content"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                  placeholder="Write Here"
                  rows="4"
                />
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  className="mb-4"
                />
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="bg-gray-300 text-black py-2 px-4 rounded"
                    onClick={handleBackClick}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#418CA6] text-white py-2 px-4 rounded"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
