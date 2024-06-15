import React from 'react';

const Card = ({ image, title, author, buttonMsg,price }) => {
  return (
    <div className="library mx-6 my-6 shadow-lg w-80 h-96 flex flex-col">
      <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col h-full">
        <img className="w-full h-56 object-cover" src={image} alt="Book Image" />
        <div className="px-6 py-4 flex-1 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-xl">{title}</div>
            <div style={{ color: '#4CAF50' }} className="font-bold">{price}</div>
          </div>
          <p className="text-gray-700 text-base">{author}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
       <button
            style={{
              backgroundColor: '#1884A8',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '5px',
              width: '100%',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            className="text-white font-bold py-2 px-4 rounded w-full"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1884A8'}
          >
            {buttonMsg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
