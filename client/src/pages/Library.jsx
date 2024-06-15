import React from 'react';
import Card from '../components/Books/Card'; 
import book1 from '../assets/Books/book-1.png';
import book2 from "../assets/Books/book-2.png";
import book3 from "../assets/Books/book-3.png";
import book4 from "../assets/Books/book-4.png";
import book5 from "../assets/Books/book-5.png";

const Library = () => {
  const books = [
    {
      image: book1,
      title: "Title 1",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    {
      image: book2,
      title: "Title 2",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    {
      image: book3,
      title: "Title 3",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    {
      image: book4,
      title: "Title 4",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    {
      image: book1,
      title: "Title 5",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    
    {
      image: book3,
      title: "Title 5",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    
    {
      image: book2,
      title: "Title 5",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    },
    
    {
      image: book4,
      title: "Title 5",
      author: "Steve Jobs",
      buttonMsg: "Read More"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 text-center my-12">Books</h1>
      <div className="flex flex-wrap justify-center">
        {books.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            buttonMsg={item.buttonMsg}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-gray-800 text-center my-12">Videos</h1>
    </>
  );
};

export default Library;
