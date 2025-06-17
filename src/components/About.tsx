
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate creative professional specializing in video editing, graphic design, 
              and social media content creation. With over 3 years of experience, I've helped brands 
              and individuals tell their stories through compelling visual content.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From crafting engaging Instagram reels to creating stunning brand visuals, 
              I combine technical expertise with creative vision to deliver content that 
              not only looks amazing but drives real results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-900 mb-2">Video Editing</h3>
                <p className="text-gray-600 text-sm">Reels, shorts, promotional videos, and cinematic content</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-900 mb-2">Graphic Design</h3>
                <p className="text-gray-600 text-sm">Logos, branding, social media graphics, and print design</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm">Instagram posts, stories, and engaging social content</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-900 mb-2">Branding</h3>
                <p className="text-gray-600 text-sm">Complete brand identity and visual storytelling</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                  alt="Creative workspace" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                3+ Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
