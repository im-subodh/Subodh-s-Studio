import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Subodh's Studio
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Portfolio</a>
            <a href="#tools" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Tools</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">Portfolio</a>
              <a href="#tools" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">Tools</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
