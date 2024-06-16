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
      buttonMsg: "Read More",
      link:'https://www.kahlilgibran.com/images/The%20Prophet%20Ebook%20by%20Kahlil%20Gibran.pdf'
    },
    {
      image: book2,
      title: "The Light We",
      author: "Michelle",
      buttonMsg: "Read More",
      link:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Light-We-Carry-by-Michelle-Obama.pdf"
    },
    {
      image: book3,
      title: "Atomic habits",
      author: "James Clear",
      buttonMsg: "Read More",
      link:"https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf"
    },
    {
      image: book4,
      title: "Works Simply",
      author: "Carson Tate",
      buttonMsg: "Read More",
            link:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Light-We-Carry-by-Michelle-Obama.pdf"
    },
    {
      image: book1,
      title: "Loving Bravely",
      author: "Alexis Hambrook",
      buttonMsg: "Read More",
            link:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Light-We-Carry-by-Michelle-Obama.pdf"
    },
    
    {
      image: book3,
      title: "Mindset",
      author: "Carol S. Dweck",
      buttonMsg: "Read More",
            link:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Light-We-Carry-by-Michelle-Obama.pdf"
    },
    
    {
      image: book2,
      title: "The Power Of Now",
      author: "Ekhart Tolle",
      buttonMsg: "Read More",
            link:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Light-We-Carry-by-Michelle-Obama.pdf"
    },
    
    {
      image: book4,
      title: "Art Of Happiness",
      author: "Dalai Lama",
      buttonMsg: "Read More",
      link:""
    }
  ];


  const Videos=[
    {
    title:"Small, consistent changes can have on an individual's life",
    image:video1,
    time:"10:20",
    buttonMsg: "Click to watch",
    link:"https://www.youtube.com/watch?v=EjsTWJ7U1rk"
},
{
  title:"Embrace Sensitivity: Empower Your Mind",
  image:video2,
  time:"10:20",
  buttonMsg: "Click to watch",
  link:"https://www.youtube.com/watch?v=r0lRm2J6drs"

},
{
  title:"Transform Your Mind with Kindness",
  image:video3,
  time:"10:20",
buttonMsg: "Click to watch",
link:"https://youtube.com/watch?v=xnstfM6RpWA"
},
{
  title:"Transform  Life, Overcome Mental Struggles",
  image:video4,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Embrace sensitivity, nurture mental wellness",
  image:video5,
  time:"10:20",
  buttonMsg: "Click to watch"

},
{
  title:"Navigating chaos, finding peace within.",
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
  title:"Transform  Life, Overcome Mental Struggles",
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
            link={item.link}
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
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default Library;
