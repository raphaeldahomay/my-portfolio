export default function AboutMeSection() {
    return (
      <section
        id="about"
        className="dark:bg-gray-900 lg:px-0 lg:w-[1000px]"
      >
        <div className="mx-auto flex flex-col lg:flex-row gap-5">
  
          {/* LEFT BOX — About Me */}
          <div className="bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded-2xl p-6 flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <img
              src="/profile_picture.jpg"
              alt="Raphael Dahomay"
              className="w-40 h-40 rounded-lg object-cover mb-4 float-right ml-[8px]"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Born and raised in the Caribbean, I had to leave in search of better opportunities—but I’ve never forgotten where I come from. <br /><br />
              My journey took me from Canada to France, and now to Luxembourg. 
              My father was a mathematician, and I believe he passed on to me his love for numbers. 
              In 2021, I discovered the world of finance and was immediately drawn to it—
              I loved how numbers shape decisions and strategies in this field. <br /><br />But over time, I felt the need to build and express my own ideas. 
              That’s when coding came into my life at just the right moment. 
              I wrote my first line of code less than two years ago, and even though I’m still early in my journey, 
              my passion for computer science has helped me progress quickly. 
              I believe in deep, consistent practice—and that’s what I’ve committed to ever since.
            </p>
            <div className="flex justify-end">
            <a
            href="/Raphael_Dahomay_CV.pdf"
            download
            className="inline-block relative group transition"
            >
                <span className="relative z-10 text-[1.1rem]">Download CV →</span>
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </a>
            </div>
          </div>
  
          {/* RIGHT BOX — Tech Stack */}
          <div className="bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded-2xl p-6 flex-1">
            <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
  
            {/* Frontend */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <h4 className="col-span-4 text-lg font-semibold mb-2">Frontend</h4>
              {[
                ["JavaScript", "/javascript.svg"],
                ["HTML", "/html.svg"],
                ["React", "/react.svg"],
                ["Tailwind CSS", "/tailwind.svg"],
                ["Next.js", "/next.svg"],
                ["CSS", "/css.svg"],
              ].map(([name, src]) => (
                <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <div key={name} className="flex flex-col items-center">
                  <img src={src} alt={name} className="w-18 h-18" />
                  <span className="text-sm mt-2">{name}</span>
                </div>
                </a>
              ))}
            </div>
  
            {/* Backend */}
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-4 text-lg font-semibold mb-2">Backend</h4>
              {[
                ["Python", "/python.svg"],
                ["Flask", "/flask.svg"],
                ["Django", "/django.svg"],
                ["FastAPI", "/fastapi.svg"],
                ["Streamlit", "/streamlit.svg"],
                ["SQL", "/sql.svg"],
              ].map(([name, src]) => (
                <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <div key={name} className="flex flex-col items-center">
                  <img src={src} alt={name} className="w-18 h-18" />
                  <span className="text-sm mt-2">{name}</span>
                </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  