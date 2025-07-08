export default function Projects() {
    return (
    <section id="projects" className="bg-white lg:w-[1000px] shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded-2xl py-5 px-4 bg-gray-0 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
      My Projects
    </h2>

    {/* 🛠️ In Development */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
        🛠️ In Development
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Equilance",
            desc: "A customizable multi-asset tracker built for users who want deeper insights into their portfolio performance, \
            allocation, and historical returns.",
            link: "#",
            image: "/in_development.png",
          },
          {
            title: "PuppyLife",
            desc: "A dog simulator web game built with Flask and JavaScript, featuring animated breeds and naming interactions.",
            link: "#",
            image: "/puppylife.png",
          },
          {
            title: "CineClues",
            desc: "Web game where users guess movie titles from riddles. Built with HTML/CSS/JS + TMDB API.",
            link: "https://raphaeldahomay.github.io/rebus-quizz-app/",
            image: "/cineclues.png",
          }
        ].map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {project.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {project.desc}
            </p>
          </a>
        ))}
      </div>
    </div>

    {/* ✅ Completed & Maintained */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
        ✅ Completed & Maintained
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "10-K Retriever",
            desc: "Scrapes and processes SEC filings to extract the main financial tables and run valuation models.",
            link: "https://github.com/raphaeldahomay/10k-retriever",
            image: "/tenk_retriever.png",
          },
          {
            title: "Geostock",
            desc: "Retrieves stock data and calculates key financial metrics like CAGR, beta, Sharpe ratio, and VaR.",
            link: "https://github.com/raphaeldahomay/stock-metrics-analyzer",
            image: "/stock_metrics.png",
          },
          {
            title: "CGÉD",
            desc: "Official website of Collectif Guadeloupe Éthique et Démocratie — sharing news, \
            statements, and democratic initiatives for Guadeloupe.",
            link: "https://www.collectif-ged.fr/",
            image: "/cged.jpg",
          },
        ].map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {project.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {project.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
  {/* Extra GitHub link */}
  <div className="flex mt-12 justify-center">
    <a href="https://github.com/raphaeldahomay?tab=repositories" className="inline-block relative group transition">
        <span className="relative z-10 text-[1.1rem]">See more →</span>
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
    </a>
  </div>
</section>

    )
}