export default function Interest() {
    return (
      <section
        className="lg:w-[900px] md:w-[900px] rounded dark:bg-gray-900"
        id="interest"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: Movie & Book interests */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-[0_0_10px_rgba(0,0,3,0.2)] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">🎬 Movie lover?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Check out what I’ve been watching lately on{' '}
                  <a
                    href="https://letterboxd.com/raphaeldahomay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2B7AB9] font-semibold"
                  >
                    Letterboxd →
                  </a>.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">📚 Bookworm?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  See my current reads and favorite titles on{' '}
                  <a
                    href="https://www.goodreads.com/user/show/178065613-raphael-dahomay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2B7AB9] font-semibold"
                  >
                    Goodreads →
                  </a>.
                </p>
              </div>
            </div>
          </div>
  
          {/* Box 2: Research Sample */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-[0_0_10px_rgba(0,0,3,0.2)] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Curious about my research?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Read one of my recent papers where I dive into a financial valuation case.
              </p>
              <div className="flex">
              <a
                href="https://riddlecapitalresearch.com/team-login/team-dashboard/pdf/2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group transition relative"
              >
                <span className="relative z-10 text-[1.1rem] text-[#2B7AB9]">View Reseaech Paper →</span>
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#2B7AB9] transition-all duration-500 group-hover:w-full"></span>
              </a>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  