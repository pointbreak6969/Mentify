import React, { useState } from 'react';
import '../../../styles/posts.css'
const Posts = () => {
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 10,
      comments: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "Looking forward to more." }
      ]
    },
    {
      id: 2,
      title: "Second Post",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      likes: 5,
      comments: [
        { id: 1, text: "Interesting read." }
      ]
    },
  ]);

  const handleCreatePostClick = () => {
    setIsCreatePostVisible(true);
  };

  const handleBackClick = () => {
    setIsCreatePostVisible(false);
  };

  const handleLikeClick = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleCommentSubmit = (postId, commentText) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const newComment = { id: post.comments.length + 1, text: commentText };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(updatedPosts);
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
            Create a New Post
            <i className="fa-solid fa-pen-to-square my-1"></i>
          </button>
        </div>
      </div>

    
    <div className="max-w-screen-lg mx-auto mt-12">
      {/* Your Posts Section */}
      <div className="bg-gray-100 px-4 py-2 rounded shadow mb-8">
        <h2 className="text-lg font-semibold mb-2">Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="mb-2">{post.content}</p>
            <div className="flex items-center mb-2">
              <button onClick={() => handleLikeClick(post.id)} className="bg-gray-200 text-gray-600 px-3 py-1 rounded mr-2 flex items-center">
                <i className="fas fa-thumbs-up mr-2"></i> Like ({post.likes})
              </button>
              <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded">
                <i className="fas fa-pen-square mr-2"></i> Comment ({post.comments.length})
              </button>
            </div>
            <ul className="list-disc list-inside">
              {post.comments.map(comment => (
                <li key={comment.id} className="text-gray-600 mb-1">{comment.text}</li>
              ))}
            </ul>
            <form onSubmit={(e) => {
              e.preventDefault();
              const commentText = e.target.elements.comment.value;
              handleCommentSubmit(post.id, commentText);
              e.target.elements.comment.value = '';
            }} className="mt-2">
              <input type="text" name="comment" placeholder="Add a comment" className="border border-gray-300 rounded px-2 py-1 w-full" />
              <button type="submit" className="bg-[#418CA6] text-white px-3 py-1 mt-5 rounded ml-2 hover:bg-green-500">Submit</button>
            </form>
          </div>
        ))}
      </div>

      {/* Create New Post Section */}
      <div className="relative top-0">
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center ${isCreatePostVisible ? 'slide-in' : 'slide-out'}`}>
          <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
            <button
              className="text-[#418CA6] mb-4 flex items-center"
              onClick={handleBackClick}
            >
              <i className="fas fa-arrow-left mr-2"></i> Back
            </button>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Write Here"
              rows="10"
            />
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-300 text-black py-2 px-4 rounded" onClick={handleBackClick}>Cancel</button>
              <button className="bg-[#418CA6] text-white py-2 px-4 rounded">Create</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    </>
  );
};

export default Posts;
