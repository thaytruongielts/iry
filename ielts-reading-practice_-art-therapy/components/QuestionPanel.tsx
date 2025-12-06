import React from 'react';
import { 
  QUESTIONS_27_33, 
  QUESTIONS_34_37, 
  QUESTIONS_38_40, 
  SUMMARY_TEXT_PARTS,
  SUMMARY_OPTIONS 
} from '../constants';
import { UserAnswers } from '../types';

interface QuestionPanelProps {
  answers: UserAnswers;
  onAnswerChange: (id: number, value: string) => void;
  disabled?: boolean;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({ answers, onAnswerChange, disabled = false }) => {
  
  const handleChange = (id: number, value: string) => {
    if (!disabled) {
      onAnswerChange(id, value);
    }
  };

  return (
    <div className="space-y-8 p-4 pb-20">
      {/* Section 27-33 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg text-slate-800 mb-2">Questions 27-33</h3>
        <p className="text-sm text-slate-600 italic mb-4">
          Do the following statements agree with the information given in the text?<br/>
          Write <strong>TRUE</strong>, <strong>FALSE</strong>, or <strong>NOT GIVEN</strong>.
        </p>
        <div className="space-y-6">
          {QUESTIONS_27_33.map((q) => (
            <div key={q.id} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="font-bold text-slate-700 w-6 flex-shrink-0">{q.id}.</span>
                <p className="text-slate-800 text-sm md:text-base">
                  {(q as any).text}
                </p>
              </div>
              <div className="flex gap-4 ml-8 mt-1">
                {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                  <label key={opt} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      disabled={disabled}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-semibold text-slate-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 34-37 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg text-slate-800 mb-2">Questions 34-37</h3>
        <p className="text-sm text-slate-600 italic mb-4">
          Complete the sentences below.<br/>
          Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.
        </p>
        <div className="space-y-4">
          {QUESTIONS_34_37.map((q: any) => (
            <div key={q.id} className="flex flex-wrap items-baseline gap-2 text-slate-800 leading-loose">
              <span className="font-bold text-slate-700 mr-1">{q.id}.</span>
              <span>{q.textBefore}</span>
              <input
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                disabled={disabled}
                placeholder="..."
                className="border-b-2 border-slate-300 px-2 py-0 focus:outline-none focus:border-blue-600 bg-transparent text-blue-700 font-medium min-w-[150px] text-center"
              />
              <span>{q.textAfter}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 38-40 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg text-slate-800 mb-2">Questions 38-40</h3>
        <p className="text-sm text-slate-600 italic mb-4">
          Complete the summary with the list of words, A-F.
        </p>

        {/* Options List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 bg-slate-50 p-4 rounded border border-slate-200">
          {SUMMARY_OPTIONS.map((opt) => (
             <div key={opt.label} className="text-sm">
                <span className="font-bold text-slate-700">{opt.label}</span>. {opt.value}
             </div>
          ))}
        </div>

        <div className="text-slate-800 leading-relaxed text-justify">
          <span>{SUMMARY_TEXT_PARTS[0]}</span>
          {/* Q38 */}
          <span className="inline-flex items-center mx-1">
            <span className="font-bold text-xs mr-1 align-top relative -top-2">38</span>
            <select 
              value={answers[38] || ''} 
              onChange={(e) => handleChange(38, e.target.value)}
              disabled={disabled}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-200 outline-none font-semibold text-blue-700"
            >
              <option value="">-</option>
              {SUMMARY_OPTIONS.map(o => <option key={o.label} value={o.label}>{o.label}</option>)}
            </select>
          </span>
          <span>{SUMMARY_TEXT_PARTS[1]}</span>
           {/* Q39 */}
           <span className="inline-flex items-center mx-1">
            <span className="font-bold text-xs mr-1 align-top relative -top-2">39</span>
            <select 
              value={answers[39] || ''} 
              onChange={(e) => handleChange(39, e.target.value)}
              disabled={disabled}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-200 outline-none font-semibold text-blue-700"
            >
              <option value="">-</option>
              {SUMMARY_OPTIONS.map(o => <option key={o.label} value={o.label}>{o.label}</option>)}
            </select>
          </span>
          <span>{SUMMARY_TEXT_PARTS[2]}</span>
           {/* Q40 */}
           <span className="inline-flex items-center mx-1">
            <span className="font-bold text-xs mr-1 align-top relative -top-2">40</span>
            <select 
              value={answers[40] || ''} 
              onChange={(e) => handleChange(40, e.target.value)}
              disabled={disabled}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-200 outline-none font-semibold text-blue-700"
            >
              <option value="">-</option>
              {SUMMARY_OPTIONS.map(o => <option key={o.label} value={o.label}>{o.label}</option>)}
            </select>
          </span>
          <span>{SUMMARY_TEXT_PARTS[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;