import React from 'react';
import { X, HelpCircle, ArrowLeft } from 'lucide-react';
import { NagadLogo } from './NagadLogo';
import { sounds } from '../utils/audio';

interface LoanTopBarProps {
  onClose: () => void;
  onHelp?: () => void;
  canGoBack?: boolean;
  onBack?: () => void;
}

export const LoanTopBar: React.FC<LoanTopBarProps> = ({
  onClose,
  onHelp,
  canGoBack = false,
  onBack,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] text-white shadow-xs z-10">
      {canGoBack && onBack ? (
        <button
          onClick={() => {
            sounds.playKeyClick();
            onBack();
          }}
          className="p-1.5 rounded-full hover:bg-black/20 active:scale-90 transition-all text-white"
          title="পিছনে যান"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={() => {
            sounds.playKeyClick();
            onClose();
          }}
          className="p-1.5 rounded-full hover:bg-black/20 active:scale-90 transition-all text-white"
          title="বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Center Logo */}
      <div className="flex items-center gap-1.5">
        <NagadLogo size={30} />
        <span className="font-bold text-white text-base tracking-tight">নগদ লোন</span>
      </div>

      {/* Help Icon */}
      <button
        onClick={() => {
          sounds.playKeyClick();
          if (onHelp) onHelp();
        }}
        className="p-1.5 rounded-full hover:bg-black/20 active:scale-90 transition-all text-white"
        title="সাহায্য"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
};
