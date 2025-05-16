import React from 'react';
import Button from '../Button/Button';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 gap-6">
      <div className="flex-1 order-2 md:order-1">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <Button variant="primary" size="sm" className="mt-2">
          Get in touch
        </Button>
      </div>
      <div className="flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0 md:ml-4">
        <div className="text-blue-500 w-16 h-16 md:w-20 md:h-20">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;