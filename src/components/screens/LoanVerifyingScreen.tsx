import React, { useState, useEffect } from 'react';
import { X, HelpCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { NagadLogo } from '../NagadLogo';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';
import { enToBnDigits } from '../../utils/bengali';

interface LoanVerifyingScreenProps {
  onApproved: () => void;
  onClose: () => void;
  onHelp: () => void;
}

const checkSteps = [
  'এনআইডি ও কেওয়াইসি তথ্য পরীক্ষা করা হচ্ছে...',
  'ক্রেডিট স্কোর ও লেনদেন হিস্ট্রি যাচাই করা হচ্ছে...',
  'এসএমএস সিকিউরিটি কোড কনফার্ম করা হচ্ছে...',
  'ঋণ বরাদ্দ ও টার্মস অনুমোদন করা হচ্ছে...',
  'ডিজিটাল ঋণ অনুমোদন সফল হয়েছে!',
];

export const LoanVerifyingScreen: React.FC<LoanVerifyingScreenProps> = ({
  onApproved,
  onClose,
  onHelp,
}) => {
  const [currentSubStep, setCurrentSubStep] = useState<number>(1);
  const [progressPercent, setProgressPercent] = useState<number>(20);
  const [isReadyToApprove, setIsReadyToApprove] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubStep((prev) => {
        if (prev < 5) {
          const next = prev + 1;
          setProgressPercent(next * 20);
          sounds.playKeyClick();
          return next;
        } else {
          clearInterval(interval);
          setIsReadyToApprove(true);
          sounds.playCashChime();
          return 5;
        }
      });
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  const handleApprove = () => {
    sounds.playCashChime();
    onApproved();
  };

  return (
    <div className="flex flex-col h-full bg-[#121217] select-none text-white overflow-hidden relative">
      {/* Top Background Gradient Glow matching the screenshot */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[#ff5722]/35 via-[#e65100]/15 to-transparent pointer-events-none" />

      {/* Top Toolbar matching screenshot */}
      <div className="relative shrink-0 flex items-center justify-between px-5 py-3.5 z-20">
        <button
          onClick={() => {
            sounds.playKeyClick();
            onClose();
          }}
          className="w-9 h-9 rounded-full bg-[#3c2a2b]/90 hover:bg-[#523334] active:scale-95 transition-all flex items-center justify-center text-white/90 shadow-md cursor-pointer"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="flex items-center justify-center">
          <NagadLogo size={32} />
        </div>

        <button
          onClick={() => {
            sounds.playKeyClick();
            onHelp();
          }}
          className="w-9 h-9 rounded-full bg-[#3c2a2b]/90 hover:bg-[#523334] active:scale-95 transition-all flex items-center justify-center text-white/90 shadow-md cursor-pointer"
          title="সাহায্য"
        >
          <HelpCircle className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Step Progress Bar - Step 5 Active */}
      <div className="relative z-20">
        <StepProgressBar currentStep={5} isDark={true} />
      </div>

      {/* Center Content Body matching 18_1d0a574a.png */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        
        {/* Animated Circular Progress Ring with Nagad Logo inside */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Rotating Arc Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-neutral-800" />
          
          <svg className="absolute inset-0 w-full h-full -rotate-90 animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#verifyingGradient)"
              strokeWidth="5"
              strokeDasharray="276"
              strokeDashoffset="120"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="verifyingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#ff7849" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Logo Badge */}
          <div className="w-24 h-24 rounded-full bg-[#18181c] border border-neutral-700/80 flex flex-col items-center justify-center shadow-inner">
            <NagadLogo size={30} />
            <span className="text-xs font-black text-[#EC1C24] tracking-tight mt-1">
              নগদ
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-white mt-6 tracking-tight">
          তথ্য যাচাই হচ্ছে
        </h2>

        {/* Dynamic Subtitle */}
        <p className="text-xs text-[#94a3b8] mt-1.5 max-w-[260px] min-h-[32px] transition-all">
          {checkSteps[currentSubStep - 1]}
        </p>

        {/* 5 Progress Dots matching the screenshot */}
        <div className="flex items-center gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((stepNum) => (
            <div
              key={stepNum}
              className={`rounded-full transition-all duration-300 ${
                currentSubStep === stepNum
                  ? 'w-2.5 h-2.5 bg-[#ea580c] ring-4 ring-[#ea580c]/30 shadow-xs shadow-orange-500'
                  : currentSubStep > stepNum
                  ? 'w-2 h-2 bg-[#ea580c]'
                  : 'w-2 h-2 bg-neutral-700'
              }`}
            />
          ))}
        </div>

        {/* Horizontal Linear Progress Bar matching screenshot */}
        <div className="w-48 h-1 bg-neutral-800 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ffffff] transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Indicator Text: ধাপ ১ / ৫ */}
        <span className="text-[11px] text-neutral-400 font-medium mt-2 tabular-nums">
          ধাপ {enToBnDigits(currentSubStep)} / ৫
        </span>

        {/* Bottom 3 Dots from screenshot */}
        <div className="flex items-center gap-1.5 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/60" />
          <div className="w-2 h-2 rounded-full bg-[#ea580c] shadow-xs" />
        </div>

        {/* Final Approve Action Button when ready */}
        <div className="w-full max-w-[280px] mt-6 min-h-[50px]">
          {isReadyToApprove ? (
            <button
              onClick={handleApprove}
              className="w-full py-3 px-4 rounded-xl text-white font-bold text-xs bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#dc2626] shadow-lg shadow-orange-950/60 active:scale-98 transition-all flex items-center justify-center gap-2 animate-in zoom-in-95 cursor-pointer"
            >
              <span>লোন অনুমোদন করুন ও রসিদ দেখুন</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>যাচাই সম্পন্ন হওয়া পর্যন্ত অনুগ্রহ করে অপেক্ষা করুন...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
