import React, { useState } from 'react';
import Navbar from '../components/nav/Navbar';
import anno from '../assets/ann.png'
const Feedback = () => {
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,

      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ]);

  const handleCreatePostClick = () => {
    setIsCreatePostVisible(true);
  };

  const handleBackClick = () => {
    setIsCreatePostVisible(false);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-100 flex items-center justify-center h-0 my-12">
        <div className="flex w-full max-w-screen-lg px-4 gap-20">
          <button
            className="bg-[#418CA6] text-white py-2 px-4 rounded flex gap-2 items-center"
            onClick={handleCreatePostClick}
          >
            Write Feedback
            <i className="fa-solid fa-pen-to-square my-1"></i>
          </button>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-12">
        {/* Posts Section */}
        <div className="bg-gray-100 px-4 py-2 rounded shadow mb-8">
          <h2 className="text-lg font-semibold mb-2">Feedback</h2>
          {posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
                <img src={anno}/>
              <h2 className="text-lg font-bold mb-2">anonymous</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>

        {/* Create New Post Section */}
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
              <button className="bg-[#418CA6] text-white py-2 px-4 rounded">Submmit</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Feedback;
