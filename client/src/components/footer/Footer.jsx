import React from "react";
// import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <>
      <div className="bg-slate-700 text-white mt-20 p-5 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl border-b-1">
            <h2 className="pb-2">Learn Anything From Himalayan Sikshya</h2>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-0.5 md:grid-rows-1 md:grid-cols-3 justify-start mt-3 border-b-1 pb-2">
            <div>
              <h4 className="text-xl">Business</h4>
              <div className="mt-2">
                <p>Become A Teacher</p>
                <p>About us</p>
                <p>Contact us</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl">Legal</h4>
              <div className="mt-2">
                <p>Terms and Conditions </p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
              </div>
            </div>
            <div className="mt-3 md:mt-0">
              <h4 className="text-xl">Community</h4>
              <div className="mt-2">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Linkedin</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex sm:items-center sm:justify-between flex-col sm:flex-row gap-2 sm:gap-0">
            <div>
                <img src={logo} alt="logo" className="w-20"/>
            </div>
            <div>
                <p className="text-lg">© 2024 Himalayan Sikshya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;