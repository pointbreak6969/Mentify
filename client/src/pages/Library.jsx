import React from 'react';
import Card from '../components/Books/Card'; 
import book1 from '../assets/Books/book-1.png';
import book2 from "../assets/Books/book-2.png";
import book3 from "../assets/Books/book-3.png";
import book4 from "../assets/Books/book-4.png";
import book5 from "../assets/Books/book-5.png";
import video1 from '../assets/Video/1.png';
import video2 from '../assets/Video/2.png';
import video3 from '../assets/Video/3.png';
import video4 from '../assets/Video/4.png';
import video5 from '../assets/Video/5.png';
import video6 from '../assets/Video/6.png';
const Library = () => {
  const books = [
    {
      image: book1,
      title: "The Propphet",
      author: "kahlilgibram",
      buttonMsg: "Read More"
    },
    {
      image: book2,
      title: "The Light We",
      author: "Michelle",
      buttonMsg: "Read More"
    },
    {
      image: book3,
      title: "Atomic habits",
      author: "James Clear",
      buttonMsg: "Read More"
    },
    {
      image: book4,
      title: "Works Simply",
      author: "Carson Tate",
      buttonMsg: "Read More"
    },
    {
      image: book1,
      title: "Loving Bravely",
      author: "Alexis Hambrook",
      buttonMsg: "Read More"
    },
    
    {
      image: book3,
      title: "Mindset",
      author: "Carol S. Dweck",
      buttonMsg: "Read More"
    },
    
    {
      image: book2,
      title: "The Power Of Now",
      author: "Ekhart Tolle",
      buttonMsg: "Read More"
    },
    
    {
      image: book4,
      title: "Art Of Happiness",
      author: "Dalai Lama",
      buttonMsg: "Read More"
    }
  ];


  const Videos=[
    {
    title:"Small, consistent changes can have on an individual's life",
    image:video1,
    time:"10:20",
    buttonMsg: "Click to watch"
},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video2,
  time:"10:20",
  buttonMsg: "Click to watch",

},
{
  title:"Small changes can have on an individual's life",
  image:video3,
  time:"10:20",
buttonMsg: "Click to watch"
},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video4,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video5,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video6,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video2,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Small, consistent changes can have on an individual's life",
  image:video3,
  time:"10:20",
  buttonMsg: "Click to watch"

},
]

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
      <div className="flex flex-wrap justify-center">
        {Videos.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            time={item.time}
            buttonMsg={item.buttonMsg}
          />
        ))}
      </div>
    </>
  );
};

export default Library;
