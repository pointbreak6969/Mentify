
import about from "../assets/about.png";
import about1 from "../assets/about1.png";
import '../styles/About.css'

function About() {
    return (
    <div>
        
      <div className="about-container">
        <div className="wrapper">
          <h1 className="top_header">Our Mission</h1>
          <p className="top_para">
          At Mentify, we are driven by a singular mission: to make mental health support accessible, engaging, and empowering for individuals worldwide. We believe in the transformative power of mental well-being and its ability to positively impact lives. Our goal is to provide a safe space where people can share their struggles, find relief, and build resilience. Through personalized tools, a supportive community, and professional guidance, we aim to help everyone achieve a healthier, happier mind.
          </p>
        </div>
        <div className="wrappers">
          <img src={about} alt="about_image" className="about_img" />
        </div>
      </div>

      <div className="container1">
        <h1 className="heading2">Who are we?</h1>
        <p className="para2">
          We are a passionate team dedicated to addressing social challenges, with a focus on mental health. Our diverse backgrounds in mental health, design, and technology unite to create Mentify, a platform aimed at providing relief from mental illness and promoting a healthy mindset. We are committed to making mental well-being accessible and empowering for everyone.
        </p>
      </div>

      <div className="contain">
        <h1 className="heading3">Our Story</h1>
        <div className="sub-container">
          <div className="wrap">
            <img src={about1} alt="" className="image_about my-10" style={{height:"500px"}} />
          </div>
          <div className="wraps">
            <p className="para3">
            The inspiration behind Mentifly stems from a deep-seated concern for the mental health of people, especially teenagers, in developing countries like Nepal, where mental health is often not given the same importance as physical health. <br /><br />

Meet Harke, a 19-year-old boy studying engineering. Harke was an average student in school, not excelling in sports, studies, or art. He is an introvert who struggles to share his feelings with others. His parents dreamt of seeing their son become an engineer. To fulfill his parents' dreams, he joined the science stream in +2 and then enrolled in an engineering college. However, in his first semester, he failed four subjects. Shocked by his low grades, Harke kept the news to himself. When his friends found out and mocked him, he fell into a deep depression. He felt trapped, unable to share his struggles with his parents for fear of disappointing them, and unable to confide in his friends without being ridiculed. He knew suicide wasn't an option, as it would devastate his parents, but this only deepened his depression. Every day, he hid his emotions and cried alone in a corner. <br /><br />

With Harke's story in mind, our team sought to create a web application that helps teenagers improve their mental health. Mentifly allows them to share their depressed feelings and anxious thoughts with others who understand and are going through similar experiences. The platform also provides access to therapists, offering a safe space for teenagers to talk about issues they can't easily share with their parents or friends.





            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="main_heading">What Sets Us Apart</h1>
        <div className="main_container">
          <div className="main1 box">
            <h1 className="mh1">Comprehensive Resource Library</h1>
            <p className="mp1">
            We provide a rich library of books and videos, offering valuable insights and practical strategies for managing mental health. Our resources are carefully curated to ensure that users have access to the most relevant and helpful information.
            </p>
          </div>

          <div className="main2 box">
            <h1 className="mh1">Community- Approach</h1>
            <p className="mp1">
              
 Mental wellness is not just about individual support; it's also about building connections. Our platform fosters a sense of community among users, encouraging anonymous sharing, collaboration, discussion, and the exchange of experiences and ideas.
            </p>
          </div>

          <div className="main3 box">
            <h1 className="mh1">Expert Professionals</h1>
            <p className="mp1">
            Our team consists of industry experts, therapists, and mental health professionals who are passionate about helping others. We handpick our professionals not only for their expertise but also for their genuine dedication to supporting mental well-being
            </p>
          </div>

          <div className="main4 box">
  <h1 className="mh1">Empowerment through Self-Discovery</h1>
  <p className="mp1">
  Mentify harnesses the power of self-discovery to educate and empower individuals on their mental health journey. We promote self-exploration, mindfulness, and personal growth, fostering a supportive community where every journey is valued.
  </p>
</div>

        </div>
      </div>

      <div className="lastp">
        <h1 className="last_h">Join Us</h1>
        <p className="last_p">
         

We invite you to join us on this transformative journey towards mental well-being and resilience.  
Whether you're facing anxiety, stress, or seeking overall mental balance, Mentify is here to support you every step of the way.   <br />
Our platform offers personalized tools, a supportive community, and access to professional therapists to help you manage your mental health effectively.   <br />
Discover a new sense of control and optimism with Mentify. <br />  
Join us today and take the first step towards a healthier, happier you. <br />
        </p>
      </div>

    </div>
  );
}
export default About;