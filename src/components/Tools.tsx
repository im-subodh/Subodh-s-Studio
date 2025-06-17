
const Tools = () => {
  const tools = [
    { name: "CapCut", icon: "🎬", description: "Mobile video editing" },
    { name: "Adobe Premiere Pro", icon: "🎞️", description: "Professional video editing" },
    { name: "After Effects", icon: "✨", description: "Motion graphics & VFX" },
    { name: "Canva", icon: "🎨", description: "Graphic design & templates" },
    { name: "Photoshop", icon: "🖼️", description: "Photo editing & design" },
    { name: "Illustrator", icon: "📐", description: "Vector graphics" },
    { name: "Figma", icon: "🔧", description: "UI/UX design" },
    { name: "AI Tools", icon: "🤖", description: "AI-powered content creation" }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tools I Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging industry-leading software and cutting-edge AI tools to create 
            exceptional visual content
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Always Learning, Always Growing</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            I continuously expand my skillset with the latest tools and techniques 
            to deliver cutting-edge creative solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
