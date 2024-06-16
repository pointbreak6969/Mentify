import React, { useState } from 'react';
import Navbar from '../components/nav/Navbar';
import anno from '../assets/ann.png'
const Feedback = () => {
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Discovering Mentify has been transformative for me. The resources on mindfulness, gratitude, and self-care have empowered me to prioritize my mental well-being daily. The insights and tools provided have truly enhanced my journey towards greater emotional balance and resilience. Thank you, Mentify, for being a beacon of support and inspiration!",
    },
    {
      id: 2,

      content: "Mentify has had a profound impact on countless lives, including mine. By providing accessible resources and a supportive community focused on mental health, Mentify has empowered individuals to adopt mindfulness, gratitude, and self-care practices. These tools have not only enhanced daily happiness and resilience but have also fostered a deeper sense of emotional balance and well-being. Mentify is not just a website; it's a lifeline that equips us with the knowledge and support needed to navigate life's challenges with greater confidence and positivity.",
    },
    {
      id: 3,
      content: "Mentify provides invaluable resources and a compassionate community dedicated to mental health. Through its emphasis on mindfulness, gratitude, and self-care, Mentify empowers individuals to cultivate daily happiness and resilience. It's a guiding light, fostering emotional balance and equipping us to face life's challenges with strength and positivity."
    },
    {
      id: 4,
      content: "Mentify is a supportive platform that has positively impacted countless lives, mine included. With accessible resources and a nurturing community focused on mental health, Mentify encourages mindfulness, gratitude, and self-care practices. These tools enhance daily well-being and emotional resilience, empowering individuals to navigate life with confidence and optimism."
    },
    {
      id: 5,
      content: "Mentify has transformed the lives of many through its accessible resources and supportive community. By promoting mindfulness, gratitude, and self-care, Mentify empowers individuals to enhance their happiness and resilience. It's more than a website; it's a lifeline that fosters emotional well-being and equips users to thrive."
    },
    {
      id: 6,
      content: "Mentify has been instrumental in improving countless lives, including mine. Through its accessible resources and supportive community focused on mental health, Mentify encourages the adoption of mindfulness, gratitude, and self-care practices. These strategies promote daily happiness, resilience, and emotional balance, empowering individuals to navigate life's challenges with strength and positivity."
    },
    {
      id: 7,
      content: "Mentify plays a crucial role in supporting mental health with its accessible resources and nurturing community. By fostering mindfulness, gratitude, and self-care practices, Mentify enhances daily well-being and resilience. It's a lifeline that empowers individuals to maintain emotional balance and navigate life's complexities with confidence and optimism."
    }
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
