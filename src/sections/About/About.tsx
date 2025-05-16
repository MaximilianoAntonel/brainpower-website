import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Companies to Do Meaningful Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At the core of our mission is a belief that artificial intelligence should not replace human creativity—it should amplify it. We automate what doesn't add value, so companies can focus on what really matters: building great products and experiences.
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission Block */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <img
              src="/path/to/mission-image.jpg"
              alt="Our Mission"
              className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help companies improve their operational efficiency by automating repetitive tasks. We act as pioneers who test and simplify new technological tools so our clients can focus on generating real value.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <div className="md:order-2 w-full md:w-1/2 mb-4 md:mb-0 md:ml-6">
              <img
                src="/path/to/vision-image.jpg"
                alt="Our Vision"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where technology is a natural extension of human potential. We want to lead the digital transformation of companies, promoting a culture of adaptability, continuous learning, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;