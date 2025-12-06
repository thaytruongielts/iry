import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { SECTIONS, TIMINGS, ALL_QUESTIONS } from './constants';
import { Phase, UserAnswers } from './types';
import Timer from './components/Timer';
import QuestionPanel from './components/QuestionPanel';
import { Play, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('intro');
  const [timeLeft, setTimeLeft] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [score, setScore] = useState<number | null>(null);

  // Define the workflow sequence
  const getNextPhase = (current: Phase): Phase | null => {
    switch (current) {
      case 'intro': return 'read-1';
      case 'read-1': return 'answer-1';
      case 'answer-1': return 'read-2';
      case 'read-2': return 'answer-2';
      case 'answer-2': return 'read-3';
      case 'read-3': return 'answer-3';
      case 'answer-3': return 'read-4';
      case 'read-4': return 'answer-4';
      case 'answer-4': return 'review';
      case 'review': return 'result';
      default: return null;
    }
  };

  const getDurationForPhase = (p: Phase): number => {
    switch (p) {
      case 'read-1': return TIMINGS.READ_1;
      case 'answer-1': return TIMINGS.ANSWER_1;
      case 'read-2': return TIMINGS.READ_2;
      case 'answer-2': return TIMINGS.ANSWER_2;
      case 'read-3': return TIMINGS.READ_3;
      case 'answer-3': return TIMINGS.ANSWER_3;
      case 'read-4': return TIMINGS.READ_4;
      case 'answer-4': return TIMINGS.ANSWER_4;
      case 'review': return TIMINGS.REVIEW;
      default: return 0;
    }
  };

  // Logic to move to next phase
  const advancePhase = useCallback(() => {
    const next = getNextPhase(phase);
    if (next) {
      if (next === 'result') {
        calculateScore();
      }
      setPhase(next);
      setTimeLeft(getDurationForPhase(next));
      // Scroll to top when phase changes
      window.scrollTo(0, 0);
    }
  }, [phase]);

  // Timer Effect
  useEffect(() => {
    if (phase === 'intro' || phase === 'result') return;

    if (timeLeft <= 0) {
      advancePhase();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, timeLeft, advancePhase]);

  // Calculate Score
  const calculateScore = () => {
    let correctCount = 0;
    ALL_QUESTIONS.forEach(q => {
      const userAnswer = userAnswers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });
    const finalScore = (correctCount / ALL_QUESTIONS.length) * 10;
    setScore(finalScore);
  };

  const handleAnswerChange = (id: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: value }));
  };

  // Helper to get active content
  const activeContent = useMemo(() => {
    if (phase === 'intro' || phase === 'result' || phase === 'review') {
      return SECTIONS; // All sections
    }
    const match = phase.match(/-(1|2|3|4)$/);
    if (match) {
      const sectionId = parseInt(match[1]);
      return SECTIONS.filter(s => s.id === sectionId);
    }
    return SECTIONS;
  }, [phase]);

  const isAnswerPhase = phase.startsWith('answer') || phase === 'review';
  const isReviewPhase = phase === 'review';

  // --- Views ---

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-white text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl font-bold mb-2">IELTS Reading Practice</h1>
            <p className="text-blue-100">The Beginnings of Art Therapy</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-4 text-slate-600">
              <p className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1">1</span>
                <span>You will read 4 sections of the passage one by one.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1">2</span>
                <span>Each reading section is timed (1 min or 1.5 mins).</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1">3</span>
                <span>After each reading, you have 1.2 mins to answer questions while viewing the text.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1">4</span>
                <span>Finally, you have 2.5 mins to review the whole passage and all answers.</span>
              </p>
            </div>
            
            <button 
              onClick={() => advancePhase()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 p-8 text-white text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Test Completed</h1>
            <div className="mt-6 inline-block bg-white/20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-wider opacity-80 mb-1">Your Score</p>
              <p className="text-5xl font-bold">{score?.toFixed(1)} <span className="text-2xl opacity-60">/ 10</span></p>
            </div>
          </div>
          
          <div className="p-6 max-h-[60vh] overflow-y-auto">
             <h3 className="font-bold text-lg mb-4 text-slate-700">Detailed Results</h3>
             <div className="space-y-3">
               {ALL_QUESTIONS.map(q => {
                 const userAnswer = userAnswers[q.id]?.trim() || '(No Answer)';
                 const isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
                 return (
                   <div key={q.id} className={`p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} flex justify-between items-start`}>
                     <div>
                       <span className={`font-bold mr-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{q.id}.</span>
                       <span className="text-slate-800 font-medium">{userAnswer}</span>
                     </div>
                     {!isCorrect && (
                       <div className="text-right">
                         <span className="text-xs text-slate-500 uppercase font-bold">Correct Answer</span>
                         <p className="text-green-700 font-bold">{q.answer}</p>
                       </div>
                     )}
                   </div>
                 )
               })}
             </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <button 
              onClick={() => window.location.reload()}
              className="text-indigo-600 font-bold hover:underline"
            >
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header / Timer Bar */}
      <header className="flex-none h-16 bg-white border-b border-slate-200 flex items-center px-4 md:px-8 justify-between shadow-sm z-10">
        <h2 className="font-bold text-slate-800 text-lg hidden md:block">
          {isReviewPhase ? "Final Review" : isAnswerPhase ? "Reading & Answering" : "Reading Time"}
        </h2>
        <div className="flex-1 md:flex-none flex justify-center md:justify-end">
          <Timer 
            secondsLeft={timeLeft} 
            totalSeconds={getDurationForPhase(phase)} 
            label={isReviewPhase ? "Review Time" : isAnswerPhase ? "Answer Time" : "Reading Time"}
          />
        </div>
        {!isReviewPhase && !isAnswerPhase && (
           <button 
             onClick={advancePhase}
             className="ml-4 text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded"
           >
             Skip
           </button>
        )}
        {isReviewPhase && (
           <button 
             onClick={advancePhase}
             className="ml-4 text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold shadow"
           >
             Submit
           </button>
        )}
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative flex flex-col md:flex-row">
        
        {/* Left/Top: Reading Passage */}
        <div className={`
          flex-1 overflow-y-auto p-6 md:p-10 bg-white
          ${isAnswerPhase ? 'md:w-1/2 border-r border-slate-200' : 'w-full max-w-4xl mx-auto'}
        `}>
          <div className="max-w-3xl mx-auto">
            {activeContent.map((section) => (
              <div key={section.id} className="mb-8 last:mb-0 animate-fadeIn">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif border-b border-slate-100 pb-2">
                  {section.title}
                </h3>
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-lg leading-relaxed text-slate-700 font-serif text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right/Bottom: Questions (Only visible in Answer/Review phases) */}
        {isAnswerPhase && (
          <div className="flex-1 md:w-1/2 bg-slate-50 border-t md:border-t-0 overflow-y-auto">
            <div className="p-4 bg-yellow-50 border-b border-yellow-100 text-yellow-800 text-sm flex items-center gap-2 sticky top-0 z-10">
              <AlertCircle size={16} />
              <span>Read the text on the left and answer the questions below.</span>
            </div>
            <QuestionPanel 
              answers={userAnswers} 
              onAnswerChange={handleAnswerChange} 
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default App;