import React, { useState } from 'react';
import { Calendar, CheckSquare, Square, Info } from 'lucide-react';
import { LoanTopBar } from '../LoanTopBar';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';
import { formatTaka } from '../../utils/bengali';
import { LoanApplication } from '../../types/nagad';

interface LoanSummaryScreenProps {
  loan: LoanApplication;
  onConfirm: () => void;
  onBack: () => void;
  onClose: () => void;
  onHelp: () => void;
}

export const LoanSummaryScreen: React.FC<LoanSummaryScreenProps> = ({
  loan,
  onConfirm,
  onBack,
  onClose,
  onHelp,
}) => {
  const [agreed, setAgreed] = useState<boolean>(true);

  const handleProceed = () => {
    if (!agreed) {
      sounds.playErrorBeep();
      return;
    }
    sounds.playKeyClick();
    onConfirm();
  };

  return (
    <div className="flex flex-col h-full bg-[#1E1E1E] select-none text-white overflow-hidden">
      {/* Top Toolbar */}
      <LoanTopBar onClose={onClose} onHelp={onHelp} canGoBack={true} onBack={onBack} />

      {/* Step Progress Bar - Step 2 Active */}
      <StepProgressBar currentStep={2} isDark={true} />

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4">
        {/* Header */}
        <div className="text-center pt-1">
          <h2 className="text-lg font-bold text-white tracking-tight">
            লোনের বিস্তারিত
          </h2>
          <p className="text-[11px] text-neutral-400 mt-1">
            তথ্যগুলো যাচাই করুন — সব ঠিক থাকলে এগিয়ে যান
          </p>
        </div>

        {/* Top Summary Cards Row - android:background="@drawable/bg_summary_box" */}
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-md">
          {/* 1. Loan Amount */}
          <div className="flex flex-col items-center justify-center text-center p-1">
            <span className="text-[10px] font-medium text-neutral-400">লোন পরিমাণ</span>
            <span className="text-sm font-bold text-[#FF5722] mt-1 tabular-nums">
              {formatTaka(loan.loanAmount, true)}
            </span>
          </div>

          {/* 2. Total Profit */}
          <div className="flex flex-col items-center justify-center text-center p-1 border-x border-neutral-800">
            <span className="text-[10px] font-medium text-neutral-400">মোট মুনাফা</span>
            <span className="text-sm font-bold text-[#FF5722] mt-1 tabular-nums">
              {formatTaka(loan.profitAmount, true)}
            </span>
          </div>

          {/* 3. Total Payable */}
          <div className="flex flex-col items-center justify-center text-center p-1">
            <span className="text-[10px] font-medium text-neutral-400">সর্বমোট দেয়</span>
            <span className="text-sm font-bold text-[#FF5722] mt-1 tabular-nums">
              {formatTaka(loan.totalPayable, true)}
            </span>
          </div>
        </div>

        {/* Monthly Repayment Schedule Table Box - android:background="@drawable/bg_table_box" */}
        <div className="flex-1 flex flex-col p-4 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFA726]">
              <Calendar className="w-3.5 h-3.5" />
              <span>মাসিক পরিশোধ তালিকা</span>
            </div>
            <span className="text-[10px] text-neutral-400">
              স্বয়ংক্রিয় কর্তন
            </span>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-6 text-[11px] font-semibold text-neutral-500 py-2 border-b border-neutral-800/60">
            <span className="col-span-1">মাস</span>
            <span className="col-span-3">তারিখ</span>
            <span className="col-span-2 text-right">পরিমাণ</span>
          </div>

          {/* Table Rows */}
          <div className="flex-1 overflow-y-auto divide-y divide-neutral-800/40 text-xs">
            {loan.schedule.map((item) => (
              <div
                key={item.installmentNumber}
                className="grid grid-cols-6 items-center py-2.5 transition-colors hover:bg-neutral-800/30"
              >
                <span className="col-span-1 font-bold text-white tabular-nums">
                  {item.installmentNumber}
                </span>
                <span className="col-span-3 text-neutral-300">
                  {item.dueDate}
                </span>
                <span className="col-span-2 text-right font-bold text-[#FF5722] tabular-nums">
                  {formatTaka(item.amount, true)}
                </span>
              </div>
            ))}
          </div>

          {/* Informative Note */}
          <div className="mt-2 pt-2 border-t border-neutral-800 flex items-start gap-1.5 text-[10px] text-neutral-400">
            <Info className="w-3 h-3 text-[#FFA726] shrink-0 mt-0.5" />
            <span>নির্ধারিত তারিখে আপনার নগদ অ্যাকাউন্ট থেকে কিস্তি কর্তন করা হবে।</span>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setAgreed(!agreed);
          }}
          className="flex items-center gap-2 p-1 text-left cursor-pointer"
        >
          {agreed ? (
            <CheckSquare className="w-4 h-4 text-[#27AE60] shrink-0" />
          ) : (
            <Square className="w-4 h-4 text-neutral-500 shrink-0" />
          )}
          <span className="text-[11px] text-neutral-300 leading-tight">
            আমি নগদ ডিজিটাল লোন নীতিমালা ও কিস্তি পরিশোধের শর্তাবলীতে সম্মত আছি।
          </span>
        </button>

        {/* Final Confirmation Button - android:id="@+id/btnConfirmAndProceed" */}
        <div className="pb-3">
          <button
            id="btnConfirmAndProceed"
            onClick={handleProceed}
            disabled={!agreed}
            className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] shadow-md shadow-red-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ${
              !agreed ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'
            }`}
          >
            <span>সম্মতি দিন ও এগিয়ে যান</span>
            <span className="text-base font-bold">✓</span>
          </button>
        </div>
      </div>
    </div>
  );
};
