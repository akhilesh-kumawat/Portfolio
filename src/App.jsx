import React, { useState } from 'react';

const frontendSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS'
];

const backendSkills = [
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase'
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="font-[Poppins] scroll-smooth">
      {/* Navbar */}
      <nav className="hidden md:flex justify-around items-center h-[17vh] ">
        <div className="text-4xl">Akhilesh Kumawat</div>
        <ul className="flex gap-8 text-2xl">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex md:hidden justify-around px-4 py-3 items-center mb-6">
        <div className="text-4xl ">Akhilesh Kumawat</div>
        <div className="relative">
          <div className="flex flex-col justify-between h-6 w-8 cursor-pointer" onClick={toggleMenu}>
            <span className={`block h-1 bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
          {menuOpen && (
            <ul className="absolute right-0 bg-white shadow-lg mt-2 rounded overflow-hidden text-center">
              {['about', 'experience', 'projects', 'contact'].map((link) => (
                <li key={link} className="p-3 hover:bg-gray-100">
                  <a href={`#${link}`} onClick={toggleMenu}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Profile Section */}
      <section id="profile" className="flex flex-col md:flex-row justify-center items-center top-20 h-[120vh] md:h-[84vh] gap-10 px-6 md:px-20">
        <div className=" relative">
          <img src="src/assets/akhileshkumawat.jpg" alt="Profile" className="w-[25rem] h-[25rem] rounded-full object-cover" />
        </div>

        <div className="text-center md:text-left flex flex-col items-center gap-2">
          <p className="font-bold text-sm text-gray-500">Hello, I'm</p>
          <h1 className="text-5xl font-bold">Akhilesh Kumawat</h1>
          <p className="text-2xl font-bold my-3 text-gray-600 ">Full Stack Developer</p>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="src/assets/resume.pdf" className="border border-gray-700 py-2 px-4 rounded-full hover:bg-black hover:text-white transition-all">Download CV</a>
            <a href="#contact" className="border border-gray-700 py-2 px-4 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all">Contact Info</a>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-8 cursor-pointer" onClick={() => window.location.href='https://www.linkedin.com/in/akhilesh-kumawat-8b9638275//'} />
            <img src="src/assets/github.png" alt="Github" className="h-8 cursor-pointer" onClick={() => window.location.href='https://github.com/akhilesh-kumawat'} />
          </div>
        </div>
       
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-10">
        <p className="text-center font-semibold text-sm text-gray-500">Get To Know More</p>
        <h1 className="text-center text-5xl font-bold md:mb-15">About Me</h1>
          <div className='flex flex-col gap-3 justify-center mt-10 align-center'>
            <div className="flex gap-4 mb-4 justify-center">
              <div className="p-6 border rounded-2xl text-center border-gray-600">
                <img src="src/assets/experience.png" alt="Experience" className="h-6 mx-auto" />
                <h3 className="font-bold">Experience</h3>
                <p className='text-gray-600'>3 months <br />Full Stack Development</p>
              </div>
              <div className="p-6 border rounded-2xl border-gray-600 text-center">
                <img src="src/assets/education.png" alt="Education" className="h-6 mx-auto" />
                <h3 className="font-bold">Education</h3>
                <p className='text-gray-600'>Bachelor of Technology</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              I am a Full Stack Developer skilled in crafting scalable web apps using React, Tailwind, Node.js, and MongoDB. I value clean architecture, version control, and deployment. Passionate about solving problems with efficient, maintainable code across both client and server.
            </p>
          </div>
         
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-16 bg-gray-100 text-center">
        <p className="text-center font-semibold text-gray-500">Explore My</p>
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mt-4 mb-4 text-gray-600">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-2 p-6">
              {frontendSkills.map((skill) => (
                <article className='flex items-center gap-2 p-2' key={skill}>
                <div className='w-5 h-5'>
                  <img
                  className='w-5 h-5 object-cover'
                  src="src/assets/checkmark.png"
                  class="icon"
                />
                </div>
                <div>
                  <h3 className='font-bold'>{skill}</h3>
                  <p className='font-semibold text-gray-500'>Experienced</p>
                </div>
              </article>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-600">Backend Development</h3>
            <div className="grid grid-cols-2 gap-2 p-6">
              {backendSkills.map((skill) => (
                <article className='flex items-center gap-2 p-2' key={skill}>
                <div className='w-5 h-5'>
                  <img
                  className='w-5 h-5 object-cover'
                  src="src/assets/checkmark.png"
                  class="icon"
                />
                </div>
                <div>
                  <h3 className='font-bold'>{skill}</h3>
                  <p className='font-semibold text-gray-500'>Experienced</p>
                </div>
              </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-20 py-10">
        <p className="text-center font-semibold text-gray-500">Browse My Recent</p>
        <h1 className="text-center text-5xl font-bold">Projects</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center">
          {[1, 2, 3].map(num => (
            <div key={num} className="p-6 border rounded-2xl bg-gray-100 text-center">
              <img src={`src/assets/project-${num}.png`} alt={`Project ${num}`} className="rounded-xl w-full h-48 object-cover mb-4" />
              <h2 className="font-bold text-xl mb-2">Project {num}</h2>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/akhilesh-kumawat" className="border border-gray-600 px-4 py-1 rounded-full hover:bg-black hover:text-white">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-5">
        <p className="text-center text-gray-500">Get in Touch</p>
        <h1 className="text-center text-5xl font-bold">Contact Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 border rounded-2xl p-6 bg-white w-1/2 mx-auto border-gray-600">
          <div className="flex items-center gap-4 ">
            <img src="src/assets/email.png" alt="Email" className="h-6" />
            <a href="mailto:akhileshkumawat2003@gmail.com" className="text-lg">Gmail</a>
          </div>
          <div className="flex items-center gap-4 ">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="h-6" />
            <a href="https://www.linkedin.com/in/akhilesh-kumawat-8b9638275/" className="text-lg">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center mt-5">
        <ul className="flex justify-center gap-6 mb-4">
          <li className='text-2xl'><a href="#about">About</a></li>
          <li className='text-2xl'><a href="#experience">Experience</a></li>
          <li className='text-2xl'><a href="#projects">Projects</a></li>
          <li className='text-2xl'><a href="#contact">Contact</a></li>
        </ul>
        <p className='text-gray-700 text-sm'>Copyright © 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
