import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I am Akhmad</h1>
        <p className="text-xl text-gray-600">Welcome to my page. Discover more about my work</p>
      </header>

      <div className="flex gap-6">
        <a
          href="/blog/welcome"  target="_blank"
          className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          My Blog Posts
        </a>

        <a
          href="https://goakhmad.com"  target="_blank"
          className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Portfolio Website
        </a>
      </div>
    </div>
  );
};

export default Home;