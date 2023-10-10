import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import
import project1 from "../assets/images/pismo.png";
import project2 from "../assets/images/shortener.png";
import project3 from "../assets/images/lendsqr.png";
import project4 from "../assets/images/jobfilter.png";
import project5 from "../assets/images/country.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Pismo Clone",
      github_link: "https://github.com/Silverprince01/pismoClone",
      live_link: "https://pismoclone.netlify.app",
    },
    {
      img: project2,
      name: "Url Shortener",
      github_link: "https://github.com/Silverprince01/Url-shortener",
      live_link: "https://url-shotener.netlify.app",
    },
    {
      img: project3,
      name: "LendSqr Test",
      github_link: "https://github.com/Silverprince01/leannsqr-test",
      live_link: "https://badru-fuad-lendsqr-fe-test.netlify.app",
    },
    {
      img: project4,
      name: "Job Filter",
      github_link:
        "https://github.com/Silverprince01/jobFilter",
      live_link: "https://filterjobss.netlify.app",
    },
    {
      img: project5,
      name: "React Country",
      github_link: "https://github.com/Silverprince01/Country-Rest-API",
      live_link: "https://contryrest-api.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default Project;
