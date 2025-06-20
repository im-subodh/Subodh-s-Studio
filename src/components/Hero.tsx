
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Creative 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Visual{" "}
            </span>
            Storyteller
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning visual content through expert video editing, 
            graphic design, and social media creativity. Bringing brands to life with 
            cutting-edge tools and innovative storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Videos Edited</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Social Posts</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
