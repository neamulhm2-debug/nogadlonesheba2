import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  isFramed?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  isFramed = true,
}) => {
  if (!isFramed) {
    return (
      <div className="w-full max-w-md mx-auto h-[780px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200">
        {/* Subtle Top Status Bar */}
        <div className="shrink-0 h-9 bg-black text-white px-5 flex items-center justify-between text-[11px] font-semibold select-none z-30">
          <span>10:35</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[375px] h-[780px] bg-slate-950 rounded-[48px] p-3 shadow-2xl ring-1 ring-slate-800/80 shadow-black/80 flex flex-col select-none">
      {/* Outer Phone Bezel & Hardware accents */}
      <div className="absolute -left-1 top-24 w-1 h-8 bg-slate-700 rounded-l" />
      <div className="absolute -left-1 top-36 w-1 h-12 bg-slate-700 rounded-l" />
      <div className="absolute -left-1 top-52 w-1 h-12 bg-slate-700 rounded-l" />
      <div className="absolute -right-1 top-32 w-1 h-16 bg-slate-700 rounded-r" />

      {/* Screen Container */}
      <div className="w-full h-full bg-black rounded-[38px] overflow-hidden flex flex-col relative border border-slate-800">
        {/* Dynamic Island / Notch + Status Bar */}
        <div className="shrink-0 h-10 bg-black text-white px-6 flex items-center justify-between text-[11px] font-bold z-30 relative">
          <span className="tracking-tight">10:35</span>

          {/* Centered pill notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-5 bg-neutral-900 rounded-full flex items-center justify-center gap-2 border border-neutral-800">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-800" />
            <div className="w-2 h-2 rounded-full bg-blue-950" />
          </div>

          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Dynamic App Content */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-white">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="shrink-0 h-4 bg-transparent flex items-center justify-center pointer-events-none relative z-30">
          <div className="w-28 h-1 bg-slate-400/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};
