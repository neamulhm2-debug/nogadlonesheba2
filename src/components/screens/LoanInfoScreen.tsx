import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Phone, Coins, Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';
import { LoanTopBar } from '../LoanTopBar';
import { StepProgressBar } from '../StepProgressBar';
import { sounds } from '../../utils/audio';
import { formatTaka, enToBnDigits } from '../../utils/bengali';
import { LoanApplication } from '../../types/nagad';

interface LoanInfoScreenProps {
  initialLoan: LoanApplication;
  onNext: (updatedLoan: LoanApplication) => void;
  onClose: () => void;
  onHelp: () => void;
}

const loanAmounts = [1000, 2000, 3000, 5000, 10000, 15000, 20000];
const tenureOptions = [
  { months: 3, labelBn: '৩ মাস (৯০ দিন)', labelEn: '3 Months (90 days)' },
  { months: 6, labelBn: '৬ মাস (১৮০ দিন)', labelEn: '6 Months (180 days)' },
  { months: 9, labelBn: '৯ মাস (২৭০ দিন)', labelEn: '9 Months (270 days)' },
  { months: 12, labelBn: '১২ মাস (৩৬০ দিন)', labelEn: '12 Months (360 days)' },
];

export const LoanInfoScreen: React.FC<LoanInfoScreenProps> = ({
  initialLoan,
  onNext,
  onClose,
  onHelp,
}) => {
  const [fullName, setFullName] = useState<string>(initialLoan.fullName || 'মোহাম্মদ রফিকুল ইসলাম');
  const [mobileNumber, setMobileNumber] = useState<string>(initialLoan.mobileNumber || '01712-345678');
  const [loanAmount, setLoanAmount] = useState<number>(initialLoan.loanAmount || 3000);
  const [tenureMonths, setTenureMonths] = useState<number>(initialLoan.tenureMonths || 3);

  // Profit calculation: 4.5% flat fee for 3 months (scaled proportionally by tenure)
  const calculateLoanDetails = (amount: number, months: number) => {
    // 4.5% for 3 months = 1.5% per month
    const monthlyRate = 0.015;
    const profitRate = monthlyRate * months;
    const profitAmount = Math.round(amount * profitRate);
    const totalPayable = amount + profitAmount;
    const monthlyInstallment = Math.ceil(totalPayable / months);

    // Generate schedule
    const schedule = [];
    const baseDate = new Date(2026, 11, 4); // 04 Dec 2026
    for (let i = 1; i <= months; i++) {
      const dueDate = new Date(baseDate);
      dueDate.setMonth(baseDate.getMonth() + (i - 1));
      const formattedDate = dueDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      schedule.push({
        installmentNumber: i,
        dueDate: formattedDate,
        amount: monthlyInstallment,
      });
    }

    return { profitRate, profitAmount, totalPayable, monthlyInstallment, schedule };
  };

  const handleAmountChange = (amt: number) => {
    sounds.playKeyClick();
    setLoanAmount(amt);
  };

  const handleTenureChange = (months: number) => {
    sounds.playKeyClick();
    setTenureMonths(months);
  };

  const handleNextStep = () => {
    sounds.playKeyClick();
    const details = calculateLoanDetails(loanAmount, tenureMonths);
    onNext({
      ...initialLoan,
      fullName,
      mobileNumber,
      loanAmount,
      tenureMonths,
      profitRate: details.profitRate,
      profitAmount: details.profitAmount,
      totalPayable: details.totalPayable,
      monthlyInstallment: details.monthlyInstallment,
      schedule: details.schedule,
    });
  };

  const currentCalc = calculateLoanDetails(loanAmount, tenureMonths);

  return (
    <div className="flex flex-col h-full bg-[#2C3E50] select-none text-slate-800">
      {/* Top Toolbar */}
      <LoanTopBar onClose={onClose} onHelp={onHelp} />

      {/* Step Progress Bar - Step 1 Active */}
      <StepProgressBar currentStep={1} isDark={false} />

      {/* Form Content Container */}
      <div className="flex-1 overflow-y-auto bg-white p-4 space-y-4">
        {/* Security Notice Banner - android:background="@drawable/bg_green_box" */}
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#27AE60] shrink-0" />
          <p className="text-xs font-semibold text-[#27AE60] leading-snug">
            SSL ২৫৬-বিট এনক্রিপ্টেড - আপনার তথ্য সম্পূর্ণ নিরাপদ
          </p>
        </div>

        {/* Full Name Input (NID KYC Locked) - android:id="@+id/etFullName" */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-600">
              সম্পূর্ণ নাম (জাতীয় পরিচয়পত্র অনুসারে)
            </label>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" /> যাচাইকৃত
            </span>
          </div>
          <div className="mt-1 relative">
            <input
              id="etFullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-12 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              placeholder="আপনার পূর্ণ নাম লিখুন"
            />
          </div>
        </div>

        {/* Mobile Number Input (Locked Nagad Wallet) - android:id="@+id/etMobileNumber" */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-600">
              নগদ মোবাইল নম্বর
            </label>
            <span className="text-[10px] text-slate-400">অ্যাকাউন্ট সংযুক্ত</span>
          </div>
          <div className="mt-1 relative">
            <input
              id="etMobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full h-12 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </div>

        {/* Loan Amount Selector - android:id="@+id/spinnerLoanAmount" */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-600">
              লোনের পরিমাণ
            </label>
            <span className="text-xs font-bold text-[#EC1C24] tabular-nums">
              {formatTaka(loanAmount, true)}
            </span>
          </div>

          {/* Quick Amount Chips */}
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {loanAmounts.slice(0, 4).map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => handleAmountChange(amt)}
                className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                  loanAmount === amt
                    ? 'bg-[#EC1C24] text-white border-[#EC1C24] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {formatTaka(amt, true)}
              </button>
            ))}
          </div>

          {/* Spinner Dropdown for full list */}
          <div className="mt-2 relative">
            <select
              id="spinnerLoanAmount"
              value={loanAmount}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
              className="w-full h-11 px-3.5 pr-8 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 appearance-none focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              {loanAmounts.map((amt) => (
                <option key={amt} value={amt}>
                  {formatTaka(amt, true)} ({formatTaka(amt, false)})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Loan Tenure Selector - android:id="@+id/spinnerTenure" */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-600">
              পরিশোধের মেয়াদ
            </label>
            <span className="text-xs font-bold text-slate-800">
              {enToBnDigits(tenureMonths)} মাস
            </span>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            {tenureOptions.map((opt) => (
              <button
                key={opt.months}
                type="button"
                onClick={() => handleTenureChange(opt.months)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  tenureMonths === opt.months
                    ? 'bg-amber-500/10 border-amber-500 text-amber-950 ring-1 ring-amber-500'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{opt.labelBn}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  মাসিক {formatTaka(Math.ceil((loanAmount + Math.round(loanAmount * 0.015 * opt.months)) / opt.months), true)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Preview Box */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
          <div className="flex justify-between text-slate-600">
            <span>মাসিক কিস্তি:</span>
            <span className="font-bold text-slate-900 tabular-nums">
              {formatTaka(currentCalc.monthlyInstallment, true)} / মাস
            </span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>মুনাফা ও ফি ({enToBnDigits(Math.round(currentCalc.profitRate * 100))}%):</span>
            <span className="font-semibold text-amber-700 tabular-nums">
              {formatTaka(currentCalc.profitAmount, true)}
            </span>
          </div>
          <div className="pt-1 border-t border-slate-200 flex justify-between font-bold text-slate-900">
            <span>সর্বমোট পরিশোধ:</span>
            <span className="text-[#EC1C24] tabular-nums">
              {formatTaka(currentCalc.totalPayable, true)}
            </span>
          </div>
        </div>

        {/* Next Step Button - android:id="@+id/btnNextStep" */}
        <div className="pt-2 pb-4">
          <button
            id="btnNextStep"
            onClick={handleNextStep}
            className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] hover:opacity-95 active:scale-[0.98] shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>পরবর্তী ধাপে যান</span>
            <span className="text-base font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
