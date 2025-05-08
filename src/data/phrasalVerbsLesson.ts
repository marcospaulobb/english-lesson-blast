
export interface PhrasalVerb {
  verb: string;
  meaning: string;
  example: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  phrasalVerbs: PhrasalVerb[];
}

export const currentLesson: Lesson = {
  id: "lesson-1",
  title: "Essential Business Phrasal Verbs",
  description: "Master these common phrasal verbs used in professional environments to enhance your business English skills.",
  phrasalVerbs: [
    {
      verb: "Look into",
      meaning: "To investigate or research something",
      example: "The team will look into the customer complaints and provide a solution by next week."
    },
    {
      verb: "Set up",
      meaning: "To establish, arrange or prepare something",
      example: "We need to set up a meeting with our new clients as soon as possible."
    },
    {
      verb: "Break down",
      meaning: "To analyze in detail or separate into parts",
      example: "Let's break down the project requirements to understand what needs to be done."
    },
    {
      verb: "Follow up",
      meaning: "To continue or pursue an action after an initial effort",
      example: "I'll follow up with an email summarizing our discussion points."
    },
    {
      verb: "Figure out",
      meaning: "To understand or solve a problem after thinking about it",
      example: "We need to figure out why sales have decreased in the last quarter."
    }
  ]
};
