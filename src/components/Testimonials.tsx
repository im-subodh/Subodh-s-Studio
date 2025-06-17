
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content: "Absolutely incredible work! The video editing skills are top-notch and the turnaround time was amazing. Our social media engagement increased by 300% after working together.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Founder",
      company: "StyleCo",
      content: "The graphic design work exceeded all expectations. The brand identity created was exactly what we envisioned and more. Highly professional and creative!",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      company: "LifestyleBrand",
      content: "Working on my Instagram content was a game-changer. The posts are visually stunning and perfectly capture my brand aesthetic. Couldn't be happier!",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear from satisfied clients who've 
            experienced the impact of great visual content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-purple-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-purple-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
