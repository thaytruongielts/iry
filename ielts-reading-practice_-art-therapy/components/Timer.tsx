import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  secondsLeft: number;
  totalSeconds: number;
  label?: string;
}

const Timer: React.FC<TimerProps> = ({ secondsLeft, totalSeconds, label }) => {
  const percentage = Math.max(0, (secondsLeft / totalSeconds) * 100);
  
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  
  const isUrgent = secondsLeft < 10;

  return (
    <div className="flex flex-col gap-1 w-full max-w-xs">
      <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
        <span className="flex items-center gap-2">
          <Clock size={16} className={isUrgent ? "text-red-500 animate-pulse" : "text-blue-600"} />
          {label || "Time Remaining"}
        </span>
        <span className={`font-mono text-lg ${isUrgent ? "text-red-600 font-bold" : "text-slate-800"}`}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${isUrgent ? 'bg-red-500' : 'bg-blue-600'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;