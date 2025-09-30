import { useRouter } from 'next/router'

export default function AboutMeSection() {
    const { basePath } = useRouter()
    return (
      <section
        id="about"
        className="dark:bg-gray-900 lg:px-0 lg:w-[900px] md:w-[900px]"
      >
        <div className="mx-auto flex flex-col lg:flex-row gap-5">
  
          {/* LEFT BOX — About Me */}
          <div className="bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded p-6 flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <img
              src={`${basePath}/profile_picture.jpg`}
              alt="Raphael Dahomay"
              className="w-40 h-40 rounded-lg object-cover mb-4 float-right ml-[8px]"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Born and raised in the Caribbean, I left in search of opportunities but never forgot my roots. <br /><br />
              My path has taken me from Canada to Luxembourg and now back to France, shaping both my outlook and ambition. 
              With a mathematician father, I inherited a love for numbers that first drew me to finance in 2021, 
              where I discovered how data shapes strategy and decisions. Soon after, I turned to coding as a way to create and bring ideas to life. <br /><br />
              I wrote my first line of code less than two years ago, and while I remain endlessly curious,
              I now plan to focus intensively on finance, data, and econometrics, with the goal of developing efficient, impactful software at 
              the intersection of tech and finance. <br /><br />
            </p>
            <div className="flex justify-end">
            <a
            href="/my-portfolio/financial_resume_raphael_dahomay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group transition"
            >
                <span className="relative z-10 text-[1.1rem] text-[#2B7AB9]">Download CV →</span>
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#2B7AB9] transition-all duration-500 group-hover:w-full"></span>
            </a>
            </div>
          </div>
  
          {/* RIGHT BOX — Tech Stack */}
          <div className="bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded p-6 flex-1">
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
                <div key={name} className="flex flex-col items-center">
                  <img src={`${basePath}${src}`} alt={name} className="w-18 h-18 transition-transform duration-300 hover:scale-120" />
                  <span className="text-sm mt-2">{name}</span>
                </div>
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
                <div key={name} className="flex flex-col items-center">
                  <img src={`${basePath}${src}`} alt={name} className="w-18 h-18 transition-transform duration-300 hover:scale-120" />
                  <span className="text-sm mt-2">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  
