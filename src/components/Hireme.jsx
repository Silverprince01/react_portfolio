import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center justify-center">
        <div >
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I'm always eager to showcase my latest work on my portfolio website.
            Please feel free to explore my projects, from web design to graphic
            art, and see how my skills and creativity can contribute to your
            team or project. Your feedback is invaluable, so don't hesitate to
            reach out if you have any inquiries or opportunities to collaborate.
          </p>
          <div className="flex justify-center">

          <button className="btn-primary mt-10">Say Hello</button>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Hireme;
