'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution built with Next.js and Prisma',
      tech: ['Next.js', 'Prisma', 'Stripe'],
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      icon: '🌐',
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaboration tool with Firebase backend',
      tech: ['Vite', 'Firebase', 'WebSocket'],
      bgColor: 'bg-pink-400',
      borderColor: 'border-black',
      icon: '📱',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with MongoDB integration',
      tech: ['TanStack', 'MongoDB', 'Chart.js'],
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      icon: '📊',
    },
    {
      title: 'Social Media Platform',
      description: 'Full-stack social platform with real-time messaging',
      tech: ['Next.js', 'Neon DB', 'Socket.io'],
      bgColor: 'bg-green-400',
      borderColor: 'border-black',
      icon: '💬',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Pop Art Background Pattern */}

      {/* Hero Section */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div
            className={`space-y-10 transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl  text-black leading-none tracking-tight bangersFont">
                Code
                <span className="block text-green-800 text-shadow-lg">
                  Mack
                </span>
              </h1>
              <div className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] p-6 transform ">
                <p className="text-xl font-bold text-black leading-relaxed">
                  CRAFTING RADICAL WEB EXPERIENCES WITH CUTTING-EDGE TECH!
                  SPECIALIZED IN REACT, NEXT.JS & SCALABLE BACKENDS!
                </p>
              </div>
            </div>

            {/* Pop Art Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black uppercase tracking-widest">
                🔥 TECH ARSENAL 🔥
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Vite', color: 'bg-purple-400' },
                  { name: 'Next.js', color: 'bg-yellow-400' },
                  { name: 'TanStack Start', color: 'bg-pink-400' },
                  { name: 'Neon DB', color: 'bg-cyan-400' },
                  { name: 'MongoDB', color: 'bg-green-400' },
                  { name: 'Firebase', color: 'bg-orange-400' },
                  { name: 'Prisma', color: 'bg-blue-400' },
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`${tech.color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] px-6 py-3 font-bold text-black uppercase text-sm hover:shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer transform hover:rotate-2`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible
                        ? 'popIn 0.6s ease-out forwards'
                        : 'none',
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Pop Art CTA Buttons */}
            <div className="flex gap-6 pt-6">
              <button className="bg-red-500 border-6 border-black shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] px-10 py-6 font-bold text-white text-xl uppercase hover:shadow-[10px_10px_0px_0px_rgba(18,18,18,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:-rotate-1">
                VIEW MY WORK! 💥
              </button>
              <button className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] px-10 py-6 font-bold text-black text-xl uppercase hover:shadow-[10px_10px_0px_0px_rgba(18,18,18,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:rotate-1">
                DOWNLOAD CV 📄
              </button>
            </div>
          </div>

          {/* Right side - Pop Art Photo */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 border-8 border-black shadow-[12px_12px_0px_0px_rgba(18,18,18,1)] transform relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white border-6 border-black rounded-full mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                      <span className="text-6xl">📸</span>
                    </div>
                    <div className="bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                      <p className="text-black font-bold uppercase">
                        YOUR PHOTO HERE!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pop Art decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 border-4 border-black transform rotate-45 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]"></div>
              <div className="absolute top-1/2 -right-10 w-16 h-16 bg-purple-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop Art About Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto bg-white p-8 shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] border-4 border-black">
          <div className="text-center mb-16">
            <h2 className="text-6xl  text-black mb-6 transform bangersFont">
              ABOUT ME!
            </h2>
            <div className="w-32 h-2 bg-red-500 mx-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-yellow-300 border-6 border-black shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] p-8 transform ">
                <p className="text-lg font-bold text-black leading-relaxed">
                  I&apos;M A PASSIONATE FULL-STACK DEVELOPER WITH 5+ YEARS OF
                  EXPERIENCE CREATING DIGITAL SOLUTIONS THAT MAKE A DIFFERENCE!
                  MY JOURNEY BEGAN WITH CURIOSITY AND EVOLVED INTO DEEP
                  EXPERTISE!
                </p>
              </div>
              <div className="bg-pink-300 border-6 border-black shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] p-8 transform ">
                <p className="text-lg font-bold text-black leading-relaxed">
                  I SPECIALIZE IN BUILDING SCALABLE APPS WITH REACT ECOSYSTEM!
                  PERFORMANCE, UX, AND CLEAN CODE ARE MY SUPERPOWERS! EVERY
                  PROJECT GETS THE SAME DEDICATION AND ATTENTION TO DETAIL!
                </p>
              </div>

              <div className="flex gap-8 pt-4">
                <div className="bg-cyan-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] p-4 text-center transform ">
                  <div className="text-4xl font-black text-black">50+</div>
                  <div className="text-black font-bold">PROJECTS</div>
                </div>
                <div className="bg-green-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] p-4 text-center transform">
                  <div className="text-4xl font-black text-black">5+</div>
                  <div className="text-black font-bold">YEARS</div>
                </div>
                <div className="bg-purple-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] p-4 text-center transform ">
                  <div className="text-4xl font-black text-black">100%</div>
                  <div className="text-black font-bold">SATISFIED</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform ">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold text-black mb-2 text-lg">
                  UI/UX DESIGN
                </h3>
                <p className="text-sm font-bold text-black">
                  CREATING RADICAL INTERFACES!
                </p>
              </div>
              <div className="bg-blue-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform ">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-black mb-2 text-lg">
                  PERFORMANCE
                </h3>
                <p className="text-sm font-bold text-black">
                  BLAZING FAST APPS!
                </p>
              </div>
              <div className="bg-red-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-bold text-black mb-2 text-lg">
                  DEVELOPMENT
                </h3>
                <p className="text-sm font-bold text-black">
                  FULL-STACK MASTERY!
                </p>
              </div>
              <div className="bg-green-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform ">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-black mb-2 text-lg">
                  RESPONSIVE
                </h3>
                <p className="text-sm font-bold text-black">
                  MOBILE-FIRST POWER!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop Art Portfolio Section with Carousel */}
      <section className="relative px-8 py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-black mb-6 transform ">
              🚀 FEATURED PROJECTS! 🚀
            </h2>
            <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-4 inline-block transform ">
              <p className="text-xl font-bold text-black uppercase">
                CHECK OUT MY RADICAL WORK!
              </p>
            </div>
          </div>

          {/* Pop Art Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex ">
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-0">
                    <div
                      className={`${project.bgColor} ${project.borderColor} border-0 overflow-hidden relative`}
                    >
                      <div
                        className={`h-80 ${project.bgColor} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-6">
                            <div className="text-8xl filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                              {project.icon}
                            </div>
                            <div className="bg-white border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-4 transform ">
                              <span className="text-black font-bold text-2xl uppercase">
                                {project.title}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-6 right-6">
                          <div className="w-6 h-6 bg-red-500 border-2 border-black animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                          <div className="w-4 h-4 bg-blue-500 border-2 border-black animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform "></div>
                        </div>
                      </div>
                      <div className="p-10 bg-white border-t-8 border-black">
                        <h3 className="font-black text-3xl text-black mb-6 uppercase transform ">
                          {project.title}
                        </h3>
                        <div className="bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 mb-8">
                          <p className="text-black font-bold text-lg leading-relaxed uppercase">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-8">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] px-6 py-3 font-black uppercase text-sm hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:rotate-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6">
                          <button className="flex-1 bg-red-500 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-4 font-black text-white text-xl uppercase hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:-rotate-1">
                            VIEW PROJECT! 👀
                          </button>
                          <button className="bg-white border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 py-4 font-black text-black text-xl uppercase hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:rotate-1">
                            DEMO 🚀
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pop Art Carousel Controls */}
            <div className="flex justify-center mt-10 space-x-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-6 h-6 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:rotate-45 ${
                    index === currentProject
                      ? 'bg-red-500 scale-125'
                      : 'bg-white hover:bg-yellow-300'
                  }`}
                />
              ))}
            </div>

            {/* Pop Art Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentProject(
                  (prev) => (prev - 1 + projects.length) % projects.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-yellow-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 font-black text-2xl text-black hover:rotate-12"
            >
              ←
            </button>
            <button
              onClick={() =>
                setCurrentProject((prev) => (prev + 1) % projects.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-yellow-400 border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 font-black text-2xl text-black hover:-rotate-12"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Pop Art Contact Section */}
      <section className="relative px-8 py-20 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-6xl font-black text-black mb-6 transform ">
              LET&apos;S WORK TOGETHER!
            </h2>
            <div className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-4 inline-block transform ">
              <p className="text-xl font-bold text-black uppercase">
                READY TO CREATE SOMETHING AMAZING? HIT ME UP!
              </p>
            </div>
          </div>

          <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 transform ">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Pop Art Contact Info */}
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-black text-left transform ">
                  GET IN TOUCH! 📞
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-red-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-200">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="text-left">
                      <p className="font-black text-black text-lg uppercase">
                        EMAIL
                      </p>
                      <p className="text-black font-bold">hello@yourname.dev</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-200">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div className="text-left">
                      <p className="font-black text-black text-lg uppercase">
                        LINKEDIN
                      </p>
                      <p className="text-black font-bold">
                        linkedin.com/in/yourname
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-200">
                      <span className="text-2xl">🐙</span>
                    </div>
                    <div className="text-left">
                      <p className="font-black text-black text-lg uppercase">
                        GITHUB
                      </p>
                      <p className="text-black font-bold">
                        github.com/yourname
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pop Art Contact Form */}
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full px-6 py-4 bg-yellow-200 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-black placeholder-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 uppercase"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full px-6 py-4 bg-pink-200 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-black placeholder-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 uppercase"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="YOUR MESSAGE"
                    className="w-full px-6 py-4 bg-cyan-200 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-black placeholder-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 resize-none uppercase"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-6 font-black text-white text-2xl uppercase hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform hover:rotate-1"
                >
                  SEND MESSAGE! 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pop Art Footer */}
      <footer className="px-8 py-8 bg-black border-t-8 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] px-8 py-4 inline-block transform ">
            <p className="text-black font-black uppercase text-lg">
              © 2025 YOUR NAME - BUILT WITH NEXT.JS & PURE AWESOMENESS! 💥
            </p>
          </div>
        </div>
      </footer>

      {/* Pop Art Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');

        .font-black {
          font-family: 'Black Ops One', cursive;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .text-shadow-lg {
          text-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
        }

        /* Pop Art hover effects */
        .hover-pop:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
        }
      `}</style>
    </div>
  );
}
