import React from 'react'
import Card from '../components/Books/Card';
import doctor1 from '../assets/Doctor/d1.jpg';
import doctor2 from '../assets/Doctor/d2.jpg';
import doctor3 from '../assets/Doctor/d3.jpg';
import doctor4 from '../assets/Doctor/d4.jpg';
import doctor5 from '../assets/Doctor/d5.jpg';
import doctor6 from '../assets/Doctor/d6.jpg';
import doctor7 from '../assets/Doctor/d7.jpg';

// import doctor1 from '../assets/Doctor/d1.png';

const Prof = () => {
    const doctors = [
        {
          name: "Dr. Ramesh Pokharel",
          category: "Mental Health",
          image: doctor2,
          buttonMsg: "Book Appointment",
          price:"$ 50.00",
        },
        {
          name: "Dr. Saroj Shrestha",
          category: "Mental Health",
          image: doctor5,
          buttonMsg: "Book Appointment",
          price:"$ 45.00",
        },
        {
          name: "Dr. Anila Shrestha",
          category: "Mental Health",
          image: doctor6,
          buttonMsg: "Book Appointment",
          price:"$ 55.00",
        },
        {
          name: "Dr. Suresh Prajapati",
          category: "Mental Health",
          image: doctor5,
          buttonMsg: "Book Appointment",
          price:"$ 58.00",
        },
        {
          name: "Dr. Aditi Gurung",
          category: "Mental Health",
          image: doctor7,
          buttonMsg: "Book Appointment",
          price:"$ 50.00",
        },
        {
          name: "Dr. Shivani Rana",
          category: "Mental Health",
          image: doctor7,
          buttonMsg: "Book Appointment",
          price:"$ 50.00",
        },
        {
          name: "Dr. Shivani Rana",
          category: "Mental Health",
          image: doctor6,
          buttonMsg: "Book Appointment",
          price:"$ 65.00",
        },
        {
          name: "Dr. Sanjay Gurung",
          category: "Mental Health",
          image: doctor2,
          buttonMsg: "Book Appointment",
          price:"$ 59.00",
        }
      ];
      
    return (
<>
<div className="proff">
<h1 className=" my-5 font-bold text-4xl text-center ">Connect With Our Professionals</h1>
<button style={{backgroundColor:'#1884A8',padding:'11px 11px',borderRadius:'11px',color:'white' }} className='mx-12 font-bold '>Therapists</button>
        <div className="flex flex-wrap justify-center">
        {doctors.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.name}
            author={item.category}
            buttonMsg={item.buttonMsg}
            price={item.price}
          />
        ))}
      </div>
      </div>
    </>
)
}

export default Prof