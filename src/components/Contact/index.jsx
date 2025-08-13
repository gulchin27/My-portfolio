import React from "react";
import { Mail, Linkedin, Github } from "lucide-react"; 

const Index = () => {
  const contacts = [
    {
      label: "E-mail",
      value: "ramazanovagulcin0@gmail.com",
      href: "mailto:ramazanovagulcin0@gmail.com",
      icon: <Mail className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gulcin-ramazanova",
      href: "https://www.linkedin.com/in/gulcin-ramazanova-a44388328/",
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "GitHub",
      value: "github.com/gulchin27",
      href: "https://github.com/gulchin27",
      icon: <Github className="w-5 h-5 text-gray-800" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 max-w-lg mx-auto">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-4"
        >
          {contact.icon}
          <div>
            <p className="text-sm font-medium text-gray-700">{contact.label}</p>
            <p className="text-gray-500 text-sm">{contact.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Index;
