import Image from "next/image";
import { useRouter } from 'next/router'

export default function Hero() {
    const { basePath } = useRouter()
    return (
        <section className="shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded lg:w-[900px] md:w-[900px] m-0 flex flex-col justify-center px-15 py-10 bg-white dark:bg-gray-900">
          {/* Center Top */}
          <div className="mb-0 flex justify-center mt-1">
            <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-indigo-900">Raphael Dahomay</span>
                <svg
                  className="absolute left-0 bottom-[-10px] w-full h-[50px]"
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20,80 Q150,120 280,80"
                    stroke="#ff4081"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    className="animate-[draw_2s_ease-in-out_forwards]"
                  />
                </svg>
              </span>
            </h2>
          </div>
    
          {/* Below Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-20 mt-0 sm:mt-15">
            {/* Left Side */}
            <div className="w-full sm:w-1/2 flex flex-col items-left text-left gap-4 mt-10 sm:mt-0">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Self-taught developer with a strong finance background.
              </p>
              {/* Mini Character #1 */}
              <img
                src={`${basePath}/programmer.svg`} // <- Replace with your actual image path
                alt="Mini character coding"
                className= "text-black w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-300"
                fill= "currentColor"
              />
            </div>
    
            {/* Right Side */}
            <div className="w-full sm:w-1/2 flex flex-col items-end text-right gap-4 mt-10 sm:mt-0">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                I build useful web tools and turn data into action.
              </p>
              {/* Mini Character #2 */}
              <img
                src={`${basePath}/data.svg`} // <- Replace with your second character image
                alt="Mini character thinking"
                className= "text-black w-[100px] h-[100px] transform hover:scale-110 transition-transform duration-300"
                fill= "currentColor"
              />
            </div>
          </div>
    
          {/* Scroll Down Indicator */}
          <a href="#projects" className="mt-0 flex justify-center">
          <div className="hover:text-[#2B7AB9] flex justify-center sm:mt-10 animate-bounce text-gray-400 dark:text-gray-500 text-3xl">
            ↓
          </div>
          </a>
        </section>
      );
    };