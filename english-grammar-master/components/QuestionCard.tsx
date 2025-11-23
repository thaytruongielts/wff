import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, Circle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedOptionId: string | undefined;
  isSubmitted: boolean;
  onSelect: (questionId: number, optionId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  isSubmitted,
  onSelect,
}) => {
  const isCorrect = isSubmitted && selectedOptionId === question.correctOptionId;
  const isIncorrect = isSubmitted && selectedOptionId !== question.correctOptionId;

  return (
    <div className={`p-6 bg-white rounded-xl shadow-sm border transition-all duration-300 ${
      isSubmitted 
        ? isCorrect 
          ? 'border-green-200 shadow-green-50' 
          : 'border-red-200 shadow-red-50'
        : 'border-gray-200 hover:shadow-md'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-800 leading-relaxed">
          <span className="font-bold text-indigo-600 mr-2">Q{question.id}.</span>
          {question.questionText.split('_').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="inline-block px-4 border-b-2 border-indigo-300 mx-1 w-12 text-center text-indigo-800 font-bold">
                   {isSubmitted && selectedOptionId ? question.options.find(o => o.id === selectedOptionId)?.text : ''}
                </span>
              )}
            </React.Fragment>
          ))}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          
          let containerClass = "relative flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ";
          
          if (!isSubmitted) {
            containerClass += isSelected 
              ? "border-indigo-600 bg-indigo-50 text-indigo-900" 
              : "border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-gray-700";
          } else {
            // Submitted state logic
            // STRICT RULE: Only show Correct/Incorrect for user's selection. Do not reveal answer if wrong.
            if (isSelected) {
               if (option.id === question.correctOptionId) {
                 containerClass += "border-green-500 bg-green-50 text-green-900";
               } else {
                 containerClass += "border-red-500 bg-red-50 text-red-900";
               }
            } else {
              containerClass += "border-gray-100 bg-gray-50 text-gray-400 opacity-60";
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => !isSubmitted && onSelect(question.id, option.id)}
              className={containerClass}
            >
              <div className="flex-shrink-0 mr-3">
                {!isSubmitted && (
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-indigo-600' : 'border-gray-300'}`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-indigo-600" />}
                  </div>
                )}
                {isSubmitted && isSelected && option.id === question.correctOptionId && (
                   <CheckCircle className="w-6 h-6 text-green-600" />
                )}
                {isSubmitted && isSelected && option.id !== question.correctOptionId && (
                   <XCircle className="w-6 h-6 text-red-600" />
                )}
                {isSubmitted && !isSelected && (
                   <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              <span className="font-semibold mr-2">{option.id}.</span>
              <span className="truncate">{option.text}</span>
              
              {/* Status Text for User Selection Only */}
              {isSubmitted && isSelected && (
                <div className={`absolute right-3 text-xs font-bold uppercase tracking-wider ${
                  option.id === question.correctOptionId ? 'text-green-600' : 'text-red-600'
                }`}>
                  {option.id === question.correctOptionId ? 'Correct' : 'Incorrect'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;