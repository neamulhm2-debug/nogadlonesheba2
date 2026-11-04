import React, { useState } from 'react';
import { Lock, ShieldCheck, Delete } from 'lucide-react';
import { LoanTopBar } from '../LoanTopBar';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';

interface LoanPinScreenProps {
  onVerify: () => void;
  onBack: () => void;
  onClose: () => void;
  onHelp: () => void;
}

export const LoanPinScreen: React.FC<LoanPinScreenProps> = ({
  onVerify,
  onBack,
  onClose,
  onHelp,
}) => {
  const [pin, setPin] = useState<string>('');
  const [errorShake, setErrorShake] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleKeyPress = (key: string) => {
    sounds.playKeyClick();
    if (key === 'backspace') {
      setPin((prev) => prev.slice(0, -1));
      setErrorMessage(null);
    } else if (key === '*') {
      // Wildcard
      if (pin.length < 4) {
        setPin((prev) => prev + '0');
      }
    } else {
      if (pin.length < 4) {
        const newPin = pin + key;
        setPin(newPin);
        setErrorMessage(null);
      }
    }
  };

  const handleVerify = () => {
    if (pin.length < 4) {
      sounds.playErrorBeep();
      setErrorShake(true);
      setErrorMessage('অনুগ্রহ করে ৪-সংখ্যার সঠিক পিন নম্বর দিন');
      setTimeout(() => setErrorShake(false), 500);
      return;
    }

    sounds.playKeyClick();
    onVerify();
  };

  const handleQuickDemoPin = () => {
    sounds.playKeyClick();
    setPin('1234');
    setErrorMessage(null);
  };

  const keypadKeys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '*', '0', 'backspace'
  ];

  return (
    <div className="flex flex-col h-full bg-[#1E1E1E] select-none text-white overflow-hidden">
      {/* Top Toolbar */}
      <LoanTopBar onClose={onClose} onHelp={onHelp} canGoBack={true} onBack={onBack} />

      {/* Step Progress Bar - Step 4: পিন Active */}
      <StepProgressBar currentStep={4} isDark={true} />

      {/* Main Container */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
          {/* Lock Icon */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mt-1 shadow-md">
            <Lock className="w-6 h-6" />
          </div>

          <h2 className="text-lg font-bold text-white mt-2">
            পিন যাচাইকরণ
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5 text-center">
            নগদ অ্যাকাউন্টের ৪-সংখ্যার গোপন পিন দিন
          </p>

          {/* Secure Notice Banner - android:background="@drawable/bg_green_box" */}
          <div className="mt-3 w-full p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="w-4 h-4 text-[#27AE60] shrink-0" />
            <span className="text-[11px] font-medium text-[#27AE60]">
              আপনার পিন এনক্রিপ্টেড পদ্ধতিতে সুরক্ষিতভাবে প্রেরণ করা হয়
            </span>
          </div>

          {/* PIN Dots Box - android:background="@drawable/bg_pin_box" */}
          <div
            className={`mt-4 w-full h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-5 transition-transform ${
              errorShake ? 'animate-shake border-red-500' : ''
            }`}
          >
            {[0, 1, 2, 3].map((idx) => {
              const isFilled = idx < pin.length;
              return (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-150 ${
                    isFilled
                      ? 'bg-[#FF6B00] scale-125 shadow-xs shadow-orange-500/50'
                      : 'bg-neutral-800 border-2 border-neutral-700'
                  }`}
                />
              );
            })}
          </div>

          {errorMessage && (
            <p className="text-xs text-red-400 font-medium mt-2 animate-in fade-in">
              {errorMessage}
            </p>
          )}

          {/* Quick Demo Fill Pill */}
          <button
            type="button"
            onClick={handleQuickDemoPin}
            className="mt-2 text-[11px] text-amber-400/90 hover:text-amber-300 underline font-medium cursor-pointer"
          >
            ডেমো পিন বসান (১২৩৪)
          </button>
        </div>

        {/* Custom Keypad Grid (3 columns x 4 rows) */}
        <div className="w-full max-w-[280px] grid grid-cols-3 gap-2.5 my-3">
          {keypadKeys.map((key) => {
            const isBackspace = key === 'backspace';
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleKeyPress(key)}
                className="h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 border border-neutral-800 flex items-center justify-center font-bold text-lg text-white shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                {isBackspace ? (
                  <Delete className="w-5 h-5 text-neutral-300" />
                ) : (
                  <span>{key}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Submit Button - android:id="@+id/btnVerifyPin" */}
        <div className="w-full pb-3">
          <button
            id="btnVerifyPin"
            onClick={handleVerify}
            className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] hover:opacity-95 active:scale-[0.98] shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>পিন যাচাই করুন</span>
            <span className="text-base">🛡</span>
          </button>
        </div>
      </div>
    </div>
  );
};
