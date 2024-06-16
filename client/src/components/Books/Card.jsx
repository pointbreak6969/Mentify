import React from 'react';
import '../../styles/Cardcomp.css';

const Card = ({ image, title, author, price, time, buttonMsg, expanded, content, onToggleExpand,link }) => {
  return (
    <div className="library mx-6 my-6 shadow-lg w-80 h-96 flex flex-col">
      <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col h-full relative">
        <div className="relative">
          <img className="w-full h-56 object-cover" src={image} alt="Book Image" />
          <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-75 font-bold text-xl">
            {time}
          </div>
        </div>
        <div className="px-6 py-4 flex-1 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-xl line-clamp">{title}</div>
            <div style={{ color: '#4CAF50' }} className="font-bold">{price}</div>
          </div>
          <p className="text-gray-700 text-base">{author}</p>
          {expanded && (
            <div className="mt-4">
              <p className="text-gray-600">{content}</p>
            </div>
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href={link} target='blank'
            style={{
              backgroundColor: '#1884A8',
              color: 'white',
              fontWeight: 'bold',
              padding: '8px 20px',
              borderRadius: '5px',
              width: '100%',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1884A8'}
            onClick={onToggleExpand}
          >
            {buttonMsg}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
