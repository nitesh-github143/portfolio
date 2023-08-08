import React from "react";

const skills = [
  {
    id: 1,
    name: "HTML",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    imageAlt: "HTML Logo",
    description:
      "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
  },
  {
    id: 2,
    name: "CSS",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh0bWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt: "CSS Logo",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IigzoEBkjG_q1NacfNz7Y4Mua4cwrMrNz47L0sxaBoloM8M&s",
    imageAlt: "Tailwind CSS Logo",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: 4,
    name: "Bootstrap",
    href: "#",
    imageSrc:
      "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png",
    imageAlt: "Bootstrap Logo",
    description:
      "Bootstrap is a popular front-end framework for building responsive and mobile-first websites.",
  },
  {
    id: 5,
    name: "JavaScript",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZqqbFn0KptXCb_og8l1G8U7_p6TM1YkxTw&usqp=CAU",
    imageAlt: "JavaScript Logo",
    description:
      "JavaScript is a high-level, interpreted programming language that enables interactive web development.",
  },
  {
    id: 6,
    name: "React",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHjhzWGxNL4iY_8e9vi84czPAyW7NFA6nlw&usqp=CAU",
    imageAlt: "React Logo",
    description:
      "React is a JavaScript library for building user interfaces, particularly for single-page applications.",
  },
  {
    id: 7,
    name: "Node.js",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPz8R3t3u0LF16E_85OZKDzhJHdEq451x4A&usqp=CAU",
    imageAlt: "Node.js Logo",
    description:
      "Node.js is an open-source, cross-platform JavaScript runtime environment used for server-side development.",
  },
  {
    id: 8,
    name: "Express.js",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFRKmezLru0Ip7MpINXqLeNgo5XrumCYSDw&usqp=CAU",
    imageAlt: "Express.js Logo",
    description:
      "Express.js is a fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    id: 9,
    name: "MongoDB",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcnxvokiAAsQU3ss-OnQP-lCo4RzJFS3tAA&usqp=CAU",
    imageAlt: "MongoDB Logo",
    description:
      "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.",
  },
  {
    id: 10,
    name: "Mongoose",
    href: "#",
    imageSrc:
      "data:image/png;base64,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",
    imageAlt: "Mongoose Logo",
    description:
      "Mongoose is an elegant MongoDB object modeling tool designed for Node.js.",
  },
  {
    id: 11,
    name: "React Native",
    href: "#",
    imageSrc:
      "data:image/png;base64,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",
    imageAlt: "React Native Logo",
    description:
      "React Native is a framework for building native mobile apps using React for the frontend.",
  },
];

const Skills = () => {
  return (
    <div className="border-t border-gray-800 bg-gray-900 relative">
      <div
        className="bg-black bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://images.unsplash.com/photo-1521999693742-4717d76f97cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNraWxsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          top: 0,
        }}
      >
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 relative">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            My Skills
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="group relative border border-gray-700 rounded-md p-2"
              >
                <div className=" aspect-w-1 w-full h-40 overflow-hidden rounded-md bg-gray-800 lg:aspect-none group-hover:opacity-75 lg:h-40">
                  <img
                    src={skill.imageSrc}
                    alt={skill.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200">
                      <a href={skill.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {skill.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
