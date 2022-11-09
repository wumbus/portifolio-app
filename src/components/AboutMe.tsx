import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Lise, nice to meet you. Pleace take a look around.</p>
          </div>
          <div>
            <p className="pb-4">I am 20 years old student. I currently in my 3rd of a 5 year long integrated master’s in computer science, with a specialization within software. The education will earn me the title Master of Science (Norwegian: sivilingeniør).</p>
            <p>I am a hardworking and motivated student who enjoys challenges. I am always ready to learn something new, especially when related to IT. I am not afraid of responsibility, and I able to organize projects and co-workers. I never give up before a problem is solved, and I am not afraid to ask for help either. I enjoy both working alone and within a group.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
