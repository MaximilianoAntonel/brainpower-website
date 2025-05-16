import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Search, MessageSquare, Brain } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'RAG Agent',
      description: 'Retrieval-Augmented Generation technology helps teams find answers internally in seconds from enterprise databases and documents. Reduce information search time by up to 80% by centralizing knowledge.',
      icon: <Search size={64} strokeWidth={1.5} />,
    },
    {
      title: 'Chatbot',
      description: 'Custom conversational assistants for specific tasks like technical support or administrative automation. Works via voice or text, integrable with existing platforms (web, WhatsApp, etc.). Improves customer experience while reducing operational load.',
      icon: <MessageSquare size={64} strokeWidth={1.5} />,
    },
    {
      title: 'Custom LLMs',
      description: 'Fine-tuned language models trained with client data for improved accuracy and performance. Local installation on client infrastructure ensures privacy, control, and customization. Ideal for companies requiring absolute control over data and models.',
      icon: <Brain size={64} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide tailored AI solutions to help businesses automate tasks, improve efficiency, and focus on what matters most.
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;