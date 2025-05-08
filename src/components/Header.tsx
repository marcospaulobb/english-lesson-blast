
import React from 'react';
import { GlobeIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 bg-white border-b border-gray-100 animate-fade-in">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobeIcon size={28} className="text-edu-blue" />
          <h1 className="text-xl font-bold text-edu-blue-dark">English Lesson Blast</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-edu-blue transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-edu-blue transition-colors">Lessons</a></li>
            <li><a href="#" className="text-gray-600 hover:text-edu-blue transition-colors">Resources</a></li>
            <li><a href="#" className="text-gray-600 hover:text-edu-blue transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
