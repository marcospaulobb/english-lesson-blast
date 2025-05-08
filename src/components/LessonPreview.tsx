
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentLesson } from '@/data/phrasalVerbsLesson';

const LessonPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-edu-blue-dark mb-4">Preview Today's Lesson</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentLesson.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {currentLesson.phrasalVerbs.map((item, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-edu-blue hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-edu-blue-light to-edu-blue text-white">
                <CardTitle className="text-xl font-bold">{item.verb}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Meaning:</h4>
                  <p className="text-gray-600">{item.meaning}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Example:</h4>
                  <p className="text-gray-600 italic">{item.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonPreview;
