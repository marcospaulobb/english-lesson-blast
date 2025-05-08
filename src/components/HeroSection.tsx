
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { currentLesson } from '@/data/phrasalVerbsLesson';

const HeroSection = () => {
  const { toast } = useToast();
  
  const sendLesson = () => {
    // In a real app, this would connect to an email API
    // For now, we'll just show a toast notification
    toast({
      title: "Lesson Sent Successfully!",
      description: `A lesson on "${currentLesson.title}" was sent to Marcos Paulo's email.`,
      duration: 5000,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-up">
          <h1 className="text-3xl md:text-5xl font-bold text-edu-blue-dark tracking-tight">
            Enhance Your English With <br />
            <span className="text-edu-blue">Practical Phrasal Verbs</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Boost your English proficiency with our specialized lessons focused on 
            practical phrasal verbs used in everyday conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              onClick={sendLesson}
              size="lg" 
              className="bg-edu-accent hover:bg-edu-accent-light text-white font-semibold px-8 animate-bounce-subtle"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Lesson to Marcos Paulo
            </Button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 mt-8 max-w-md w-full">
            <div className="text-left">
              <h3 className="font-semibold text-edu-blue mb-2">This lesson includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-edu-green text-white rounded-full p-1 flex items-center justify-center h-5 w-5 text-xs mt-0.5">✓</span>
                  <span>5 essential business phrasal verbs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-edu-green text-white rounded-full p-1 flex items-center justify-center h-5 w-5 text-xs mt-0.5">✓</span>
                  <span>Clear explanations of meanings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-edu-green text-white rounded-full p-1 flex items-center justify-center h-5 w-5 text-xs mt-0.5">✓</span>
                  <span>Real-world example sentences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
