import React, { useState, useMemo } from 'react';
import { quizData } from './data';
import { PartType } from './types';
import QuestionCard from './components/QuestionCard';
import { BookOpen, Award, RotateCcw, CheckSquare, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (showWarning) setShowWarning(false);
  };

  const calculateScore = () => {
    let correctCount = 0;
    quizData.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });
    // Formula: 10 * (correct / total)
    const rawScore = 10 * (correctCount / quizData.length);
    return {
      score: parseFloat(rawScore.toFixed(1)), // Keep 1 decimal place
      correctCount,
      total: quizData.length
    };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < quizData.length) {
      setShowWarning(true);
      // Optional: scroll to first unanswered question
      const firstUnanswered = quizData.find(q => !answers[q.id]);
      if (firstUnanswered) {
        const element = document.getElementById(`question-${firstUnanswered.id}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowWarning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group questions by part
  const groupedQuestions = useMemo(() => {
    const groups: Record<string, typeof quizData> = {};
    Object.values(PartType).forEach(part => {
      groups[part] = quizData.filter(q => q.part === part);
    });
    return groups;
  }, []);

  const results = calculateScore();

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">Grammar Master</h1>
          </div>
          
          <div className="flex items-center space-x-4">
             {!isSubmitted ? (
               <div className="text-sm font-medium text-gray-500">
                 {Object.keys(answers).length} / {quizData.length} Answered
               </div>
             ) : (
               <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full text-green-800 font-bold border border-green-200">
                 <Award size={18} />
                 <span>Score: {results.score} / 10</span>
               </div>
             )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        
        {/* Intro / Instructions */}
        {!isSubmitted && (
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Advanced Word Form Assessment</h2>
            <p className="opacity-90 mb-6">Complete all 30 questions to receive your band score. Choose the best word form to complete each sentence.</p>
            <div className="flex gap-4 text-sm font-medium bg-white/10 p-4 rounded-lg inline-flex backdrop-blur-sm">
              <span className="flex items-center"><CheckSquare className="w-4 h-4 mr-2"/> 30 Questions</span>
              <span className="flex items-center"><Award className="w-4 h-4 mr-2"/> Band Score 0-10</span>
            </div>
          </div>
        )}

        {/* Results Banner (Visible only after submit) */}
        {isSubmitted && (
           <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-indigo-600 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete</h2>
              <p className="text-gray-500 mb-6">Here is your performance breakdown</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                 <div className="p-4 bg-gray-50 rounded-xl">
                   <div className="text-3xl font-bold text-indigo-600">{results.score}</div>
                   <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">Band Score</div>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl">
                   <div className="text-3xl font-bold text-green-600">{results.correctCount}</div>
                   <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">Correct</div>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl">
                   <div className="text-3xl font-bold text-gray-700">{Math.round((results.correctCount / results.total) * 100)}%</div>
                   <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">Accuracy</div>
                 </div>
              </div>

              <button 
                onClick={handleReset}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-200"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Assessment
              </button>
           </div>
        )}

        {/* Question Sections */}
        {Object.entries(groupedQuestions).map(([partTitle, questions]) => (
          <section key={partTitle} className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <h2 className="text-xl font-bold text-gray-800 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 inline-block">
                {partTitle}
              </h2>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <div className="space-y-6">
              {questions.map((q) => (
                <div id={`question-${q.id}`} key={q.id}>
                  <QuestionCard
                    question={q}
                    selectedOptionId={answers[q.id]}
                    isSubmitted={isSubmitted}
                    onSelect={handleSelect}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Warning Toast */}
        {showWarning && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center animate-bounce z-50">
            <AlertCircle className="w-5 h-5 mr-3" />
            Please answer all questions before submitting.
          </div>
        )}
      </main>

      {/* Footer / Submit Action */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-500 hidden sm:block">
            {isSubmitted ? 'Review your answers above.' : 'Good luck!'}
          </div>
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center"
            >
              Submit Answers
            </button>
          ) : (
             <button
              onClick={handleReset}
              className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-lg transition-colors flex items-center justify-center"
            >
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;