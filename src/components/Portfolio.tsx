
const Portfolio = () => {
  const portfolioItems = [
    {
      type: "Video",
      title: "Brand Promotional Reel",
      description: "30-second Instagram reel showcasing a lifestyle brand",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Video Editing"
    },
    {
      type: "Design",
      title: "Social Media Campaign",
      description: "Complete Instagram post series for fashion brand",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Graphic Design"
    },
    {
      type: "Video",
      title: "Product Showcase",
      description: "Dynamic product video with motion graphics",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Video Editing"
    },
    {
      type: "Design",
      title: "Brand Identity",
      description: "Complete visual identity for tech startup",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Branding"
    },
    {
      type: "Video",
      title: "Event Highlights",
      description: "Conference recap video with interviews",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      category: "Video Editing"
    },
    {
      type: "Design",
      title: "Instagram Stories",
      description: "Animated story templates for influencer",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Social Media"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my creative work spanning video editing, graphic design, 
            and social media content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-white transition-colors duration-200">
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
