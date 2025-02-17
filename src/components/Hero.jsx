import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/badru-fuad",
      logo: "logo-linkedin",
    },
    // "logo-facebook",
    // "",
    // "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col justify-center md:justify-start items-center bg-gray-100"
    >
      <div className="px-8">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-800 font-bold">
            <span className=" md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Badru Fuad</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon.id}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link}>

                <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
