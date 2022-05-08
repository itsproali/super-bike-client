import React from "react";

const About = () => {
  return (
    <div className="mx-3 md:mx-12 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos="zoom-in-down" data-aos-duration="1500">
          <img
            className="w-5/6 mx-auto"
            src="https://i.ibb.co/tQzmzMS/mdali-yellow-bg-profile.png"
            alt="Mohammad Ali"
          />
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1500">
          <h1 className="active text-5xl font-semibold">Mohammad Ali</h1>
          <h3
            className="text-xl font-semibold"
            style={{ color: "var(--blue)" }}
          >
            Junior Front-end Developer
          </h3>
          <p className="text-slate-600 my-6">
            Hi Dear, I am Mohammad Ali. I am a junior Front-end web developer
            (still learning). I can build any eye catchy dynamic website using:
            <ul className="list-disc ml-4">
              <li>HTML</li>
              <li>CSS(Vanilla, Bootstrap, Tailwind)</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </p>
          <a href="https://www.linkedin.com/in/itsproali/" target="blank">
            <button className="red-btn px-8 py-4 shadow-lg">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
