import React from 'react';
import {
  Smartphone,
  Layers,
  FileCode2,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Sliders,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { ScreenState, LoanApplication } from '../types/nagad';
import { formatDecimalTaka, formatTaka } from '../utils/bengali';
import { sounds } from '../utils/audio';

interface DesktopSidebarProps {
  currentScreen: ScreenState;
  onSelectScreen: (screen: ScreenState) => void;
  loan: LoanApplication;
  balance: number;
  onUpdateBalance: (newBalance: number) => void;
  onOpenXmlInspector: (fileId: string) => void;
  onReset: () => void;
}

const screenNavItems: {
  id: ScreenState;
  labelBn: string;
  labelEn: string;
  xmlFile?: string;
  badge?: string;
}[] = [
  {
    id: 'home',
    labelBn: '১. নগদ হোম স্ক্রিন',
    labelEn: 'Nagad Home Screen',
    xmlFile: 'nagad_home.xml',
  },
  {
    id: 'account_select',
    labelBn: '২. অ্যাকাউন্ট নির্বাচন ডায়ালগ',
    labelEn: 'Account Type Select Dialog',
    xmlFile: 'dialog_account_select.xml',
  },
  {
    id: 'loan_info',
    labelBn: '৩. ধাপ ১: ঋণ তথ্যাবলী ফরম',
    labelEn: 'Step 1: Loan Info Form',
    xmlFile: 'screen_loan_info.xml',
  },
  {
    id: 'loan_summary',
    labelBn: '৪. ধাপ ২: সারসংক্ষেপ ও পরিশোধ তালিকা',
    labelEn: 'Step 2: Summary & Schedule',
    xmlFile: 'screen_loan_summary.xml',
  },
  {
    id: 'loan_balance',
    labelBn: '৫. ধাপ ৩: লোন ও মোট পরিশোধ হিসাব',
    labelEn: 'Step 3: Loan & Repayment Breakdown',
    badge: 'পিন এর আগে',
  },
  {
    id: 'loan_pin',
    labelBn: '৬. ধাপ ৪: পিন যাচাইকরণ কিপ্যাড',
    labelEn: 'Step 4: PIN Verification',
    xmlFile: 'screen_loan_pin.xml',
  },
  {
    id: 'loan_sms_verification',
    labelBn: '৭. ধাপ ৫: SMS ভেরিফিকেশন',
    labelEn: 'Step 5: SMS Verification (From Image)',
  },
  {
    id: 'loan_verifying_progress',
    labelBn: '৮. তথ্য যাচাই হচ্ছে (এনিমেশন)',
    labelEn: 'Information Verification Progress',
    badge: 'নতুন ছবি অনুযায়ী',
  },
  {
    id: 'loan_success',
    labelBn: '৯. অনুমোদন ও ডিজিটাল রসিদ',
    labelEn: 'Approved Receipt & Schedule',
  },
];

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentScreen,
  onSelectScreen,
  loan,
  balance,
  onUpdateBalance,
  onOpenXmlInspector,
  onReset,
}) => {
  return (
    <aside className="w-80 shrink-0 bg-slate-900 border-l border-slate-800 p-5 overflow-y-auto hidden xl:flex flex-col justify-between text-slate-300 select-none">
      <div className="space-y-5">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>স্ক্রিন ও লেআউট নেভিগেটর</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            এসএমএস পেস্টের পর স্বয়ংক্রিয় তথ্য যাচাই এবং চূড়ান্ত রসিদ
          </p>
        </div>

        {/* Screen list */}
        <div className="space-y-1.5">
          {screenNavItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <div
                key={item.id}
                className={`p-2.5 rounded-xl border transition-all text-xs flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-500/15 border-amber-500/60 text-white font-bold shadow-xs'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    sounds.playKeyClick();
                    onSelectScreen(item.id);
                  }}
                  className="flex-1 text-left cursor-pointer truncate mr-2"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="truncate">{item.labelBn}</span>
                    {item.badge && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1 py-0.2 rounded font-semibold shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    {item.xmlFile || item.labelEn}
                  </div>
                </button>

                {item.xmlFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.playKeyClick();
                      onOpenXmlInspector(
                        item.id === 'home'
                          ? 'home'
                          : item.id === 'account_select'
                          ? 'account_select'
                          : item.id === 'loan_info'
                          ? 'loan_info'
                          : item.id === 'loan_summary'
                          ? 'loan_summary'
                          : 'loan_pin'
                      );
                    }}
                    className="p-1 rounded hover:bg-slate-700 text-amber-400 shrink-0 cursor-pointer"
                    title="XML কোড দেখুন"
                  >
                    <FileCode2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Application State Monitor */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
          <div className="flex items-center justify-between text-slate-400 font-semibold border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>লোন হিসাব মনিটর</span>
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
              সক্রিয়
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">লোন পরিমাণ:</span>
            <span className="font-bold text-[#FF5722] tabular-nums">
              {formatTaka(loan.loanAmount, true)}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">পরিশোধের মেয়াদ:</span>
            <span className="font-medium text-slate-200">
              {loan.tenureMonths} মাস
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">সর্বমোট প্রদেয়:</span>
            <span className="font-bold text-amber-400 tabular-nums">
              {formatTaka(loan.totalPayable, true)}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">মাসিক কিস্তি:</span>
            <span className="font-bold text-white tabular-nums">
              {formatTaka(loan.monthlyInstallment, true)}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-800 space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>নগদ ফিনটেক মাইক্রো-লোন ওয়ার্কফ্লো</span>
        </div>
        <button
          onClick={() => {
            sounds.playKeyClick();
            onReset();
          }}
          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span>ওয়ার্কফ্লো পুনরায় শুরু করুন</span>
        </button>
      </div>
    </aside>
  );
};
