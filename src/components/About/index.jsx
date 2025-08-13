import React from "react";
import "./style.css";
import meimg from "../../images/WhatsApp Image 2025-08-13 at 15.08.33.jpeg";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-6 w-full min-h-screen about-me-custom">
        {/* Mətn hissəsi */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Hi! I’m <span className="text-black">Gulchin Ramazanova</span> – a
            passionate and creative Frontend Developer.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy building user-centered, modern, and mobile-friendly web
            applications. My core technologies include{" "}
            <span className="font-semibold">
              React, JavaScript, TypeScript, Redux, Tailwind CSS, and HTML/CSS
            </span>
            .
            <br />
            <br />
            I'm constantly working on improving myself  , and I truly enjoy
            learning new technologies and applying them in real-world projects.
            Creating minimalist designs, fast interfaces, and functional UIs is
            something I care deeply about.
            <br />
            <br />
            My goal is to expand my technical skills and become a valuable team
            member in collaborative environments. Currently, I’m working on
            real-world projects while also developing my personal portfolio and
            side projects to continue growing as a developer.
          </p>
        </div>

        {/* Şəkil hissəsi */}
        <div className="flex-shrink-0">
          <img
            src={meimg}
            alt="Gulchin Ramazanova"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col items-center justify-center py-12 w-full min-h-screen about-me-custom gap-16">
        <h2 className="text-3xl font-semibold text-center mb-6 w-1/2">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1300px]">
          <SkillCard
            title="Frontend"
            skills={["React", "JavaScript (ES6+)", "Redux / Redux Toolkit"]}
          />
          <SkillCard
            title="UI Design"
            skills={["HTML5", "CSS3 / Tailwind CSS", "Responsive Design"]}
          />
          <SkillCard
            title="Tools"
            skills={["RESTful APIs", "Git / GitHub", "DevTools"]}
          />

          <SkillCard
            title="Soft Skills"
            customWidth="w-[980px] h-[400px]"
            skills={[
              "Strong problem-solving and debugging skills",
              "Analytical thinking",
              "Ability to break down complex problems into manageable parts",
              "Logical reasoning",
              "Attention to detail",
              "Communication and collaboration",
              "Time management",
              "Adaptability and learning new tech fast",
              "Teamwork in agile environments",
              "Self-motivated and disciplined",
              "Continuous learning mindset",
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <SectionList
        title="My Education"
        items={[
          {
            place:
              "Azerbaijan State Oil and Industry University (ASOIU)",
            desc: "Bachelor’s Degree in Information Technology",
            date: "2022 – 2026 (expected)",
          },
          {
            place: "Step IT Academy",
            desc: "Front-end Development Program",
            date: "July 8, 2022 – March 6, 2025",
          },
        ]}
      />

      <SectionList
        title="My Experience"
        items={[
          {
            place: "BlackWell LLC",
            desc: "Junior Frontend Developer",
            date: "July 2025 – Present",
          },
          {
            place: "Pasha Hackathon 2025",
            desc: "Junior Frontend Developer",
          },
          {
            place: "Step IT Academy",
            desc: "Front-end Development Program",
            date: "July 8, 2022 – March 6, 2025",
          },
        ]}
      />
    </>
  );
};

const SkillCard = ({ title, skills, customWidth }) => (
  <div
    className={`${customWidth || "w-[300px] h-[250px]"} border border-black rounded-xl p-6 shadow-md`}
  >
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <ul className="list-disc list-inside text-sm space-y-1">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const SectionList = ({ title, items }) => (
  <section className="flex flex-col items-center justify-center py-16 w-full about-me-custom">
    <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
    <div className="flex flex-col gap-6 w-full max-w-3xl">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border-l-4 border-black-500 "
        >
          <h3 className="text-lg font-semibold">{item.place}</h3>
          <p className="text-gray-700">{item.desc}</p>
          {item.date && (
            <span className="text-sm text-gray-500 block mt-2">{item.date}</span>
          )}
        </div>
      ))}
    </div>
  </section>
);


export default About;
