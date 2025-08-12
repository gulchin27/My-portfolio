import React from "react";
import "./style.css";

const About = () => {
  return (
    <>
 
      <section className="flex flex-col items-center justify-center py-12 w-full min-h-screen about-me-custom">
        <h2 className="text-3xl font-semibold text-center mb-6 w-1/2">
          Hi! I’m Gulchin Ramazanova – a passionate and creative Frontend Developer.
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed w-1/2">
          I enjoy building user-centered, modern, and mobile-friendly web applications. My core
          technologies include React, JavaScript, TypeScript, Redux, Tailwind CSS, and HTML/CSS.
          <br />
          <br />
          I'm constantly working on improving myself, and I truly enjoy learning new technologies
          and applying them in real-world projects. Creating minimalist designs, fast interfaces,
          and functional UIs is something I care deeply about.
          <br />
          <br />
          My goal is to expand my technical skills and become a valuable team member in
          collaborative environments. Currently, I’m working on real-world projects while also
          developing my personal portfolio and side projects to continue growing as a developer.
        </p>
        <img src="" alt="" />
      </section>


      <section className="flex flex-col items-center justify-center py-12 w-full min-h-screen about-me-custom gap-16">
        <h2 className="text-3xl font-semibold text-center mb-6 w-1/2">My Skills</h2>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1300px]">

          <SkillCard title="Frontend" skills={["React", "JavaScript (ES6+)", "Redux / Redux Toolkit"]} />

          <SkillCard title="UI Design" skills={["HTML5", "CSS3 / Tailwind CSS", "Responsive Design"]} />

          <SkillCard title="Tools" skills={["RESTful APIs", "Git / GitHub", "DevTools"]} />

          <div className="w-[980px] h-[400px] border border-black rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Strong problem-solving and debugging skills</li>
              <li>Analytical thinking</li>
              <li>Ability to break down complex problems into manageable parts</li>
              <li>Logical reasoning</li>
              <li>Attention to detail</li>
              <li>Communication and collaboration</li>
              <li>Time management</li>
              <li>Adaptability and learning new tech fast</li>
              <li>Teamwork in agile environments</li>
              <li>Self-motivated and disciplined</li>
              <li>Continuous learning mindset</li>
            </ul>
          </div>
        </div>
      </section>
<section className="flex flex-col items-center justify-center py-12 w-full about-me-custom">
  <h2 className="text-3xl font-semibold text-center mb-6 w-1/2">My Education</h2>
  <ul className="list-disc list-inside text-lg space-y-4 max-w-3xl">
    <li>
      <strong>Azerbaijan State Oil and Industry University (ASOIU)</strong> <br />
      Bachelor’s Degree in Information Technology <br />
      2022 – 2026 (expected)
    </li>
    <li>
      <strong>Step IT Academy</strong> <br />
      Front-end Development Program <br />
      July 8, 2022 – March 6, 2025
    </li>
  </ul>
</section>

    </>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="w-[300px] h-[250px] border border-black rounded-xl p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <ul className="list-disc list-inside text-sm space-y-1">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default About;
