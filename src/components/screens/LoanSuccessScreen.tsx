import React, { useState } from 'react';
import { CheckCircle2, Download, Home, Sparkles, Calendar, ArrowRight, Clock, FileCheck } from 'lucide-react';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';
import { formatDecimalTaka, formatTaka, enToBnDigits } from '../../utils/bengali';
import { LoanApplication } from '../../types/nagad';

interface LoanSuccessScreenProps {
  loan: LoanApplication;
  newBalance?: number;
  trxId: string;
  onFinish: () => void;
}

export const LoanSuccessScreen: React.FC<LoanSuccessScreenProps> = ({
  loan,
  trxId,
  onFinish,
}) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = () => {
    sounds.playKeyClick();
    setDownloaded(true);
    // Generate official digital loan receipt text without any wallet balance
    const receiptContent = `
========================================
           নগদ ডিজিটাল লোন রসিদ
========================================
ট্রানজেকশন আইডি: ${trxId}
তারিখ: 04 Nov, 2026
গ্রাহকের নাম: ${loan.fullName}
মোবাইল নম্বর: ${loan.mobileNumber}
অ্যাকাউন্ট টাইপ: নগদ রেগুলার

অনুমোদিত ঋণের পরিমাণ: ${formatDecimalTaka(loan.loanAmount, false)}
মুনাফা চার্জ: ${formatDecimalTaka(loan.profitAmount, false)}
সর্বমোট পরিশোধযোগ্য: ${formatDecimalTaka(loan.totalPayable, false)}
পরিশোধের মেয়াদ: ${loan.tenureMonths} মাস
মাসিক কিস্তি: ${formatDecimalTaka(loan.monthlyInstallment, false)}

কিস্তি পরিশোধের পূর্ণ সময়সূচী:
${loan.schedule.map((item) => `  • কিস্তি ${item.installmentNumber}: ${item.dueDate} - ${formatDecimalTaka(item.amount, false)}`).join('\n')}

স্ট্যাটাস: সফলভাবে অনুমোদিত ও বিতরণকৃত (Approved & Disbursed)
========================================
নগদ - ডাক বিভাগের ডিজিটাল আর্থিক সেবা
`;
    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nagad_loan_receipt_${trxId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col h-full bg-[#1E1E1E] select-none text-white overflow-hidden">
      {/* Step Progress Bar - All Steps Completed */}
      <StepProgressBar currentStep={5} isDark={true} />

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-between space-y-4">
        <div className="w-full flex flex-col items-center pt-1">
          {/* Animated Success Badge */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-white mt-2.5 text-center tracking-tight">
            লোন সফলভাবে অনুমোদিত!
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5 text-center">
            আপনার ডিজিটাল ঋণ প্রক্রিয়া সফলভাবে সম্পন্ন হয়েছে
          </p>

          {/* Amount Badge: কত টাকা লোন নিচ্ছেন */}
          <div className="mt-3 px-5 py-2 rounded-2xl bg-neutral-900 border border-neutral-800 text-center shadow-md">
            <span className="text-[10px] text-neutral-400 block font-medium">অনুমোদিত লোন পরিমাণ</span>
            <span className="text-2xl font-black text-[#27AE60] tabular-nums">
              +{formatDecimalTaka(loan.loanAmount, true)}
            </span>
          </div>

          {/* Digital Receipt Card: কত টাকা লোন এবং কবে কবে পরিশোধ করবে */}
          <div className="mt-3 w-full p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2.5 text-xs shadow-md">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span className="text-neutral-400">ট্রানজেকশন আইডি:</span>
              <span className="font-mono font-bold text-amber-400">{trxId}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">গ্রাহকের নাম:</span>
              <span className="font-semibold text-neutral-200">{loan.fullName}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">নগদ মোবাইল নম্বর:</span>
              <span className="font-semibold text-neutral-200">{loan.mobileNumber}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">সর্বমোট প্রদেয় অর্থ:</span>
              <span className="font-extrabold text-[#FF5722] tabular-nums">
                {formatDecimalTaka(loan.totalPayable, true)}
              </span>
            </div>

            {/* Repayment Schedule Section (কবে পরিশোধ করতে হবে) */}
            <div className="pt-2 border-t border-neutral-800">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-neutral-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>কিস্তি পরিশোধের তারিখ ও সময়সূচী:</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-medium">
                  {enToBnDigits(loan.tenureMonths)} মাস মেয়াদ
                </span>
              </div>

              <div className="space-y-1.5 bg-neutral-950/80 p-2.5 rounded-xl border border-neutral-800/80">
                {loan.schedule.map((item) => (
                  <div
                    key={item.installmentNumber}
                    className="flex items-center justify-between text-[11px]"
                  >
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{enToBnDigits(item.installmentNumber)}ম কিস্তি:</span>
                      <span className="font-semibold text-white ml-0.5">{item.dueDate}</span>
                    </span>
                    <span className="font-bold text-[#FF5722] tabular-nums">
                      {formatTaka(item.amount, true)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-2 pb-2">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-98 border border-neutral-700 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>{downloaded ? 'রসিদ সংরক্ষিত হয়েছে ✓' : 'রসিদ ডাউনলোড করুন'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playKeyClick();
              onFinish();
            }}
            className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] hover:opacity-95 active:scale-[0.98] shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
