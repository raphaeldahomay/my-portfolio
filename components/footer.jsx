// components/Footer.jsx

export default function Footer() {
    return (
      <footer className="bg-white mb-4 lg:w-[900px] md:w-[900px] shadow-[0_0_10px_rgba(0,0,3,0.2)] rounded bg-gray-0 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 text-center">
        <div className="flex justify-center gap-9 mb-3">
          {/* GitHub */}
          <a
            href="https://github.com/raphaeldahomay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <i className="fab fa-github text-3xl" />
          </a>
  
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/raphael-dahomay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-linkedin text-3xl" />
          </a>
  
          {/* Letterboxd */}
          <a
            href="https://letterboxd.com/raphaeldahomay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Letterboxd"
            className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <i className="fab fa-letterboxd text-3xl" />
          </a>
        </div>
  
        <p className="text-sm">&copy; 2025 Raphael Dahomay. All rights reserved.</p>
      </footer>
    );
  }
  