import React, { useEffect, useState } from 'react';

const faqQuestions = [
    {
      id: 'majors',
      question: 'What majors are offered at Saint Joseph\'s University, New York?',
      file: 'majors.txt',
      ticket: 'FAQ-001'
    },
    {
      id: 'mascots',
      question: 'What are the name of the mascot for Brooklyn campus?',
      file: 'mascots.txt',
      ticket: 'FAQ-002'
    },
    {
      id: 'addresses',
      question: 'What is the full address of the Brooklyn campus?',
      file: 'addresses.txt',
      ticket: 'FAQ-003'
    },
    {
      id: 'clubs',
      question: 'What clubs and student organizations are available on campus?',
      file: 'clubs.txt',
      ticket: 'FAQ-004'
    },
    {
      id: 'athletics',
      question: 'What athletic teams does the university have?',
      file: 'athletics.txt',
      ticket: 'FAQ-005'
    },
    {
      id: 'dining',
      question: 'What are the best places to eat near campus?',
      file: 'dining.txt',
      ticket: 'FAQ-006'
    },
    {
      id: 'dorms',
      question: 'How far are the dorms from the main campus buildings?',
      file: 'dorms.txt',
      ticket: 'FAQ-007'
    },
    {
      id: 'support',
      question: 'Are student support services like counseling and tutoring available?',
      file: 'support-services.txt',
      ticket: 'FAQ-008'
    },
    {
      id: 'buildings_numbers',
      question: 'How many buildings are there on the Brooklyn campus?',
      file: 'number_of_buildings.txt',
      ticket: 'FAQ-009'
    },
    {
      id: 'buildings_names',
      question: 'What are the names of the buildings on the Brooklyn and Long Island campuses?',
      file: 'buildings_names.txt',
      ticket: 'FAQ-010'
    },
    {
      id: 'common_hour',
      question: 'What time does the common hour start on the Brooklyn campus?',
      file: 'common_hour.txt',
      ticket: 'FAQ-011'
    },
];

export default function FAQ() {
  const [faqData, setFaqData] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const loadFAQData = async () => {
      const loadedData = await Promise.all(
        faqQuestions.map(async (item) => {
          try {
            const response = await fetch(`/Git-and-Github/features/${item.file}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            const trimmedText = text.trim();
            const hasAnswer = trimmedText.length > 0;
            
            return {
              ...item,
              answer: trimmedText,
              hasAnswer,
              isLoading: false
            };
          } catch (error) {
            console.error(`Error loading ${item.file}:`, error);
            return {
              ...item,
              answer: '',
              hasAnswer: false,
              isLoading: false
            };
          }
        })
      );
      
      setFaqData(loadedData);
    };

    loadFAQData();
  }, []);

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const MissingFeature = ({ ticket, question }) => (
    <div className="missing-feature">
      <div className="missing-feature-content">
        <span className="missing-icon">🚧</span>
        <span className="missing-text">
          {question} - FEATURE NOT IMPLEMENTED
        </span>
        <span className="ticket-number">Ticket #{ticket}</span>
      </div>
      <div className="missing-instructions">
        <p>📝 To implement this feature:</p>
        <ol>
          <li>Fork this repository</li>
          <li>Edit <code>features/{ticket.toLowerCase().replace('faq-', '')}.txt</code></li>
          <li>Add the answer content to the file</li>
          <li>Commit and push your changes</li>
          <li>Create a Pull Request</li>
        </ol>
      </div>
    </div>
  );

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">
          Have questions about Saint Joseph's University, New York? 
          Find answers to common questions below. Some features are still being implemented by our community!
        </p>
        
        <div className="faq-container">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleExpanded(item.id)}
                aria-expanded={expandedItems[item.id]}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle">
                  {expandedItems[item.id] ? '−' : '+'}
                </span>
              </button>
              
              {expandedItems[item.id] && (
                <div className="faq-answer">
                  {item.hasAnswer ? (
                    <div className="faq-answer-content">
                      {item.answer.split('\n').map((line, index) => (
                        <p key={index}>{line || '\u00A0'}</p>
                      ))}
                    </div>
                  ) : (
                    <MissingFeature 
                      ticket={item.ticket} 
                      question={item.question}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};