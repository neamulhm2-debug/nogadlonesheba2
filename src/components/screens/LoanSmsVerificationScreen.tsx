import React, { useState, useEffect } from 'react';
import { X, HelpCircle, Bell, Clock, Info, Clipboard, ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';
import { NagadLogo } from '../NagadLogo';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';

interface LoanSmsVerificationScreenProps {
  mobileNumber: string;
  onProceedToVerifying: () => void;
  onClose: () => void;
  onHelp: () => void;
}

export const LoanSmsVerificationScreen: React.FC<LoanSmsVerificationScreenProps> = ({
  mobileNumber,
  onProceedToVerifying,
  onClose,
  onHelp,
}) => {
  const [pastedMessage, setPastedMessage] = useState<string>('');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(25);
  const [simulatedSmsIncoming, setSimulatedSmsIncoming] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Simulated SMS text sent to the user's mobile number
  const simulatedSmsText = `Never Share Any Code. Nagad Loan OTP/Code: 849201. Valid for 25s. Do not share with anyone.`;

  // Countdown timer for 25 seconds
  useEffect(() => {
    // Show simulated push notification after 1.2s
    const notifTimer = setTimeout(() => {
      setSimulatedSmsIncoming(true);
      sounds.playKeyClick();
    }, 1200);

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          return 25;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(notifTimer);
      clearInterval(timer);
    };
  }, []);

  // When user pastes the SMS: auto-paste and immediately transition to the verification progress screen!
  const handlePasteClick = () => {
    sounds.playKeyClick();
    setPastedMessage(simulatedSmsText);
    setErrorMessage(null);
    setSimulatedSmsIncoming(false);

    // Auto-proceed to the verification progress screen after brief visual feedback
    setTimeout(() => {
      sounds.playKeyClick();
      onProceedToVerifying();
    }, 400);
  };

  const handleVerify = () => {
    if (!pastedMessage.trim()) {
      handlePasteClick();
      return;
    }

    sounds.playKeyClick();
    onProceedToVerifying();
  };

  return (
    <div className="flex flex-col h-full bg-[#121217] select-none text-white overflow-hidden relative">
      {/* Top Background Gradient Glow matching the screenshot */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#ff5722]/40 via-[#e65100]/20 to-transparent pointer-events-none" />

      {/* Top Toolbar matching screenshot */}
      <div className="relative shrink-0 flex items-center justify-between px-5 py-3.5 z-20">
        {/* Close Button: Circular dark translucent with white X */}
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

        {/* Center Nagad Logo */}
        <div className="flex items-center justify-center">
          <NagadLogo size={32} />
        </div>

        {/* Help Button: Circular dark translucent with white ? */}
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

      {/* Simulated Incoming Push Notification Toast */}
      {simulatedSmsIncoming && (
        <div className="absolute top-28 left-4 right-4 z-40 bg-neutral-900/95 border border-amber-500/60 rounded-2xl p-3 shadow-2xl flex items-start gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EC1C24] to-[#F37021] text-white flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">নগদ বার্তা (SMS)</span>
              <span className="text-[10px] text-amber-400 font-mono">এখনই</span>
            </div>
            <p className="text-[11px] text-neutral-300 font-mono mt-0.5 truncate">
              {simulatedSmsText}
            </p>
          </div>
          <button
            onClick={handlePasteClick}
            className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-[10px] shrink-0 hover:bg-amber-500/30 cursor-pointer"
          >
            পেস্ট করুন
          </button>
        </div>
      )}

      {/* Scrollable Content Body */}
      <div className="relative z-10 flex-1 overflow-y-auto flex flex-col justify-between">
        {/* Upper SMS Header & Notification Rules */}
        <div className="px-5 pt-3 flex flex-col items-center">
          {/* Circular SMS Icon Badge */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b45309]/50 via-[#78350f]/60 to-[#451a03]/80 border-2 border-orange-500/40 flex items-center justify-center shadow-lg shadow-orange-950/50 relative">
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-7 rounded-lg bg-white/95 flex items-center justify-center text-[10px] font-black text-[#9a3412] tracking-wider shadow-xs">
                SMS
              </div>
              <div className="absolute -bottom-1 left-2 w-2 h-2 bg-white/95 rotate-45" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-xl font-bold text-white mt-3 text-center tracking-tight">
            SMS ভেরিফিকেশন
          </h2>
          <p className="text-xs text-white/80 mt-0.5 text-center">
            নগদ থেকে একটি বিশেষ বার্তা পাঠানো হবে
          </p>

          {/* Amber Info Box with 2 rows */}
          <div className="w-full mt-4 p-4 rounded-2xl bg-[#281c1c]/90 border border-orange-500/30 space-y-3.5 shadow-md">
            {/* Row 1 */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-600/60 flex items-center justify-center text-white shrink-0">
                <Bell className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-xs text-white/90 leading-tight">
                নগদ থেকে আপনার নম্বরে একটি{' '}
                <span className="text-yellow-400 font-bold underline decoration-yellow-400">
                  ভেরিফিকেশন মেসেজ
                </span>{' '}
                পাঠানো হবে।
              </p>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#52251a]/90 flex items-center justify-center text-amber-300 shrink-0">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <p className="text-xs text-white/90 leading-tight">
                মেসেজ পাওয়ার পর{' '}
                <span className="text-yellow-400 font-bold underline decoration-yellow-400">
                  মাত্র ২৫ সেকেন্ডের
                </span>{' '}
                মধ্যে সম্পূর্ণ মেসেজটি ভেরিফাই করুন।
              </p>
            </div>
          </div>

          {/* Status Badge: ভেরিফিকেশন প্রক্রিয়াধীন... */}
          <div className="mt-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#3f191b] border border-[#7f1d1d] text-white text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>ভেরিফিকেশন প্রক্রিয়াধীন...</span>
              <span className="ml-1 text-[10px] text-amber-400 font-mono tabular-nums">
                ({secondsRemaining}s)
              </span>
            </div>
          </div>
        </div>

        {/* Lower Dark Container Card - rounded top matching screenshot */}
        <div className="mt-4 bg-[#18181c] border-t border-neutral-800 rounded-t-[32px] p-5 space-y-3.5 shadow-2xl">
          {/* Notice Box */}
          <div className="p-3 rounded-xl bg-[#231e1c] border border-amber-600/30 flex items-start gap-2.5">
            <div className="w-4 h-4 rounded-full bg-amber-500 text-black flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              i
            </div>
            <p className="text-xs text-white/90 leading-snug">
              নগদ থেকে পাওয়া{' '}
              <span className="text-amber-500 font-bold">
                সম্পূর্ণ মেসেজটি ইনবক্সে গিয়ে
              </span>{' '}
              কপি করুন। এবং মেসেজটি নিচের বক্সে পেস্ট করুন।
            </p>
          </div>

          {/* Dashed Paste Button - মেসেজ পেস্ট করুন (Auto proceeds) */}
          <button
            type="button"
            onClick={handlePasteClick}
            className="w-full py-2.5 px-4 rounded-xl border border-dashed border-amber-500/80 bg-amber-950/20 hover:bg-amber-950/40 active:scale-[0.99] text-amber-400 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
          >
            <Clipboard className="w-4 h-4 text-amber-400" />
            <span>মেসেজ পেস্ট করুন</span>
          </button>

          {/* Textarea Section with label */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5 text-xs text-neutral-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>সম্পূর্ণ মেসেজ এখানে পেস্ট করুন</span>
            </div>

            <div className="relative">
              <textarea
                value={pastedMessage}
                onChange={(e) => {
                  setPastedMessage(e.target.value);
                  setErrorMessage(null);
                }}
                placeholder={`নগদ থেকে পাওয়া সম্পূর্ণ বার্তাটি এখানে পেস্ট করুন।\nউদাহরণ: Never Share Any Code. OTP/Code: XXXXXX...`}
                className="w-full h-24 p-3 rounded-2xl bg-[#1c1a20] border border-neutral-800 focus:border-amber-500/80 focus:outline-none text-xs text-white placeholder-neutral-500 resize-none font-mono leading-relaxed"
              />
              <span className="absolute bottom-2.5 right-3 text-[10px] text-neutral-500 tabular-nums">
                {pastedMessage.length}
              </span>
            </div>

            {errorMessage && (
              <div className="mt-1 flex items-center gap-1 text-xs text-red-400 animate-in fade-in">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Primary Action Button: মেসেজ ভেরিফাই করুন 🛡 */}
          <div className="pt-1 pb-2">
            <button
              type="button"
              onClick={handleVerify}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#dc2626] hover:opacity-95 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-orange-900/40 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>মেসেজ ভেরিফাই করুন</span>
              <ShieldCheck className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
