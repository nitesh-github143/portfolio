import React from "react";

const Profile = () => {
  return (
    <div
      className="border-t border-gray-800 bg-gray-900 pb-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(https://images.unsplash.com/photo-1598369621747-83595bf3e687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vYmlsZSUyMGFuZCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="bg-black py-4 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">
            Full Stack Web & Mobile App Developer
          </h1>
          <p className="text-gray-300">
            Passionate about building web applications and mobile apps!
          </p>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="text-center">
          <img
            className="rounded-full w-40 h-40 mx-auto border-4 border-white"
            src="https://pbs.twimg.com/profile_images/1628252735295610882/Y4ELn2Cj_400x400.jpg"
            alt="Profile"
          />
          <h2 className="text-2xl font-bold mt-4 text-white">
            Nitesh Chowdhary
          </h2>
          <p className="text-gray-300">MERN stack Developer</p>
          <p className="text-gray-300">React Native Developer</p>
          <p className="text-gray-300">Location: Siliguri, India</p>
          <p className="text-gray-300">Email: niteshchowdhary0102@gmail.com</p>
          <p className="text-gray-300">Phone: 8653255256</p>
        </div>
        {/* Content Goes Here */}
      </main>
    </div>
  );
};

export default Profile;
