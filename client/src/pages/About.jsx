
import about from "../assets/about.png";
import about1 from "../assets/about1.png";
import '../styles/About.css'

function About() {
  {console.log("aaye")}
    return (
    <div>
        
      <div className="about-container">
        <div className="wrapper">
          <h1 className="top_header">Our Mission</h1>
          <p className="top_para">
            At Himalayen Sikchya, we are driven by a singular mission: to make
            education accessible, engaging, and empowering for learners
            worldwide. We believe in the transformative power of knowledge and
            its ability to positively impact lives.
          </p>
        </div>
        <div className="wrappers">
          <img src={about} alt="about_image" className="about_img" />
        </div>
      </div>

      <div className="container1">
        <h1 className="heading2">Who are we?</h1>
        <p className="para2">
          We are a passionate team of educators, designers, and tech enthusiasts
          committed to revolutionizing the way people learn. Our diverse
          backgrounds and experiences converge to create a dynamic and
          innovative e-learning platform that goes beyond traditional
          boundaries.
        </p>
      </div>

      <div className="contain">
        <h1 className="heading3">Our Story</h1>
        <div className="sub-container">
          <div className="wrap">
            <img src={about1} alt="" className="image_about" />
          </div>
          <div className="wraps">
            <h1 className="heading4">Launch and Community Building</h1>
            <p className="para3">
              Himalayan Sikchya was born out of a shared vision to democratize
              education. Recognizing the evolving landscape of learning and the
              need for flexible, accessible, and high-quality education, we
              embarked on a journey to create a platform that empowers
              individuals to achieve their academic and professional goals.
            </p>
            <p className="para4">
              The idea was sparked during a late-night discussion among
              educators frustrated with the limitations of traditional teaching
              methods. Inspired by a shared commitment to make learning
              accessible to all, the vision for{" "}
              <span>Your E-Learning Platform Name</span> began to take
              shape.Himalayan Sikchya officially launched, marking the beginning
              of our commitment to empowering learners globally. As the
              community grew, so did our dedication to fostering a supportive
              environment where learners could connect, share insights, and
              collaborate. Himalayan Sikchya officially launched, marking the
              beginning of our commitment to empowering learners globally. As
              the community grew, so did our dedication to fostering a
              supportive environment where learners could connect, share
              insights, and collaborate.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="main_heading">What Sets Us Apart</h1>
        <div className="main_container">
          <div className="main1 box">
            <h1 className="mh1">Inclusive Learning Environment</h1>
            <p className="mp1">
              We strive to create an inclusive and welcoming space for learners
              of all backgrounds and abilities. Our courses are designed to
              cater to diverse learning styles, ensuring that every individual
              can thrive in their educational journey.
            </p>
          </div>

          <div className="main2 box">
            <h1 className="mh1">Cutting-Edge Technology</h1>
            <p className="mp1">
              Embracing the latest advancements in technology, we leverage
              cutting-edge tools and interactive features to enhance the
              learning experience. From virtual classrooms to hands-on
              simulations, we're at the forefront of educational technology.
            </p>
          </div>

          <div className="main3 box">
            <h1 className="mh1">Expert Educators</h1>
            <p className="mp1">
              Our team of educators consists of industry experts, scholars, and
              professionals who are passionate about sharing their knowledge. We
              handpick instructors who not only excel in their fields but also
              have a genuine enthusiasm for teaching.
            </p>
          </div>

          <div className="main4 box">
            <h1 className="mh1">Community-Centric Approach</h1>
            <p className="mp1">
              Learning is not just about acquiring knowledge; it's also about
              building connections. Our platform fosters a sense of community
              among learners, encouraging collaboration, discussion, and the
              exchange of ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="lastp">
        <h1 className="last_h">Join Us in the Learning Revolution</h1>
        <p className="last_p">
          We invite you to join us on this exciting journey of discovery and
          growth. Whether you're a student, professional, or lifelong learner,{" "}
          <span className="span1">[Himalayan Sikshya]</span> is here to support
          you on your path to success.
        </p>
        <p className="last_p">
          Thank you for choosing Himalayan Sikchya. Let's learn, grow, and
          innovate together!
        </p>
        <p className="last_p">
          Feel free to customize this content to better fit the unique aspects
          and values of your e-learning platform.
        </p>
      </div>

    </div>
  );
}
export default About;