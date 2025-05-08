
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LessonPreview from '@/components/LessonPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LessonPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
