import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-background transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-lg text-text-primary pr-4">{question}</h3>
        {isOpen ? (
          <HiChevronUp className="text-accent text-xl flex-shrink-0" />
        ) : (
          <HiChevronDown className="text-accent text-xl flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-secondary">
          <p className="text-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: "How do I book a tour?",
      answer: "Simply fill out the contact form or send me an email with your travel dates, group size, and interests. I'll get back to you within 24 hours to discuss your custom itinerary and answer any questions."
    },
    {
      question: "What's included in the tour price?",
      answer: "Tour prices include my guide services, itinerary planning, and coordination. They do not include accommodation, meals, entrance fees, or transportation costs, which vary based on your preferences. I'll provide a detailed breakdown when we discuss your custom itinerary."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! I work with restaurants and venues that can accommodate vegetarian, vegan, halal, kosher, and allergy-related dietary needs. Just let me know your requirements when booking."
    },
    {
      question: "What happens if the weather is bad?",
      answer: "Japan's weather can be unpredictable, but I always have backup plans. We can adjust the itinerary to indoor activities or reschedule outdoor experiences. My goal is to make every day enjoyable, rain or shine."
    },
    {
      question: "Do you provide transportation?",
      answer: "I help arrange all transportation based on your group size and preferences. This can include private vehicles, trains, or a combination. We'll discuss the best options for your itinerary during planning."
    },
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking at least 2-3 months in advance, especially for cherry blossom season (March-April) and autumn colors (October-November). However, I can sometimes accommodate last-minute requests depending on availability."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30+ days before the tour receive a full refund. Cancellations 15-29 days before receive a 50% refund. Cancellations within 14 days are non-refundable. I recommend purchasing travel insurance for added protection."
    },
    {
      question: "Do you offer tours for solo travelers?",
      answer: "While I specialize in families and groups of 4 or more, I occasionally accommodate solo travelers or couples. Please contact me to discuss availability and pricing."
    },
    {
      question: "What should I pack for my trip?",
      answer: "This depends on the season and activities planned. I provide a detailed packing list once we confirm your itinerary. Generally, comfortable walking shoes, layered clothing, and a portable charger are essentials."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, I am a fully licensed tour operator (License #XXXXXX) and carry comprehensive liability insurance for your peace of mind."
    },
    {
      question: "Can you help with visa requirements?",
      answer: "While I don't process visas, I can provide guidance on requirements for your nationality and connect you with resources to help with the application process."
    },
    {
      question: "What makes your tours different from group tours?",
      answer: "Unlike large group tours, my journeys are completely personalized and flexible. You set the pace, choose the experiences, and have my undivided attention. It's like traveling with a knowledgeable local friend who customizes everything to your interests."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Everything you need to know about traveling with Ikuyo Travels
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-accent bg-opacity-10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-text-secondary mb-6">
            I'm here to help! Feel free to reach out with any questions about your Japan journey.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
