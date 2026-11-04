import React from 'react';
import { Coins, Sparkles, ArrowRight, Calendar, CreditCard, CheckCircle2 } from 'lucide-react';
import { LoanTopBar } from '../LoanTopBar';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';
import { formatDecimalTaka, formatTaka, enToBnDigits } from '../../utils/bengali';
import { LoanApplication } from '../../types/nagad';

interface LoanBalanceScreenProps {
  currentBalance?: number;
  loan: LoanApplication;
  onProceedToPin: () => void;
  onBack: () => void;
  onClose: () => void;
  onHelp: () => void;
}

export const LoanBalanceScreen: React.FC<LoanBalanceScreenProps> = ({
  loan,
  onProceedToPin,
  onBack,
  onClose,
  onHelp,
}) => {
  const handleNext = () => {
    sounds.playKeyClick();
    onProceedToPin();
  };

  return (
    <div className="flex flex-col h-full bg-[#1E1E1E] select-none text-white overflow-hidden">
      {/* Top Toolbar */}
      <LoanTopBar onClose={onClose} onHelp={onHelp} canGoBack={true} onBack={onBack} />

      {/* Step Progress Bar - Step 3: ব্যালেন্স Active (before PIN) */}
      <StepProgressBar currentStep={3} isDark={true} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between space-y-4">
        <div>
          {/* Header */}
          <div className="text-center pt-1">
            <h2 className="text-lg font-bold text-white tracking-tight">
              লোন ও পরিশোধের মোট হিসাব
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              কত টাকা লোন পাচ্ছেন এবং মোট কত টাকা পরিশোধ করতে হবে তার বিবরণ
            </p>
          </div>

          {/* Primary Loan & Repayment Card */}
          <div className="mt-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3.5 shadow-md">
            
            {/* 1. How much loan is being taken */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">লোন নিচ্ছেন (প্রাপ্ত অর্থ)</span>
                  <span className="text-[10px] text-neutral-400">সরাসরি ওয়ালেটে যোগ হবে</span>
                </div>
              </div>
              <span className="text-base font-extrabold text-emerald-400 tabular-nums">
                +{formatDecimalTaka(loan.loanAmount, true)}
              </span>
            </div>

            {/* 2. Processing Fee */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">প্রসেসিং ফি:</span>
              <span className="font-semibold text-emerald-400">
                ৳০.০০ (ফ্রি অফার)
              </span>
            </div>

            {/* 3. Profit / Charges */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">
                মুনাফা চার্জ ({enToBnDigits(Math.round(loan.profitRate * 100))}%):
              </span>
              <span className="font-semibold text-amber-400 tabular-nums">
                +{formatDecimalTaka(loan.profitAmount, true)}
              </span>
            </div>

            {/* 4. TOTAL PAYABLE (How much has to be paid) */}
            <div className="border-t border-neutral-800 pt-3.5 bg-neutral-950/60 -mx-4 -mb-3.5 p-4 rounded-b-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-200 block">
                  সর্বমোট পরিশোধ করতে হবে
                </span>
                <span className="text-[10px] text-neutral-400">
                  {enToBnDigits(loan.tenureMonths)} মাসে সম্পূর্ণ পরিশোধযোগ্য
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-[#FF5722] tabular-nums block leading-tight">
                  {formatDecimalTaka(loan.totalPayable, true)}
                </span>
                <span className="text-[10px] text-neutral-400">
                  ({formatTaka(loan.monthlyInstallment, true)} × {enToBnDigits(loan.tenureMonths)} কিস্তি)
                </span>
              </div>
            </div>
          </div>

          {/* Repayment Schedule Info Card */}
          <div className="mt-4 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-neutral-300">
              <span className="flex items-center gap-1.5 text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>পরিশোধের মেয়াদ:</span>
              </span>
              <span className="font-bold text-white">
                {enToBnDigits(loan.tenureMonths)} মাস ({enToBnDigits(loan.tenureMonths * 30)} দিন)
              </span>
            </div>

            <div className="flex items-center justify-between text-neutral-300">
              <span className="flex items-center gap-1.5 text-neutral-400">
                <CreditCard className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>প্রতি মাসের কিস্তি:</span>
              </span>
              <span className="font-extrabold text-[#FF5722] tabular-nums">
                {formatTaka(loan.monthlyInstallment, true)} / মাস
              </span>
            </div>

            <div className="flex items-center justify-between text-neutral-300 pt-1 border-t border-neutral-800/80">
              <span className="text-neutral-400">প্রথম কিস্তির তারিখ:</span>
              <span className="font-semibold text-amber-400">
                {loan.schedule[0]?.dueDate || '04 Dec, 2026'}
              </span>
            </div>
          </div>

          {/* Security & Instant Credit Notice */}
          <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center gap-2 text-amber-300">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
            <span>পরবর্তী ধাপে পিন ও SMS কোড দিয়ে লোন অনুমোদন সম্পন্ন করুন।</span>
          </div>
        </div>

        {/* Proceed to PIN Button */}
        <div className="pt-2 pb-4">
          <button
            type="button"
            onClick={handleNext}
            className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] hover:opacity-95 active:scale-[0.98] shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>পরবর্তী ধাপে পিন দিন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
