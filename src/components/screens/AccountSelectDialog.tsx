import React, { useState } from 'react';
import { X, Check, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { NagadLogo } from '../NagadLogo';
import { sounds } from '../../utils/audio';

interface AccountSelectDialogProps {
  onSelectRegular: () => void;
  onClose: () => void;
}

export const AccountSelectDialog: React.FC<AccountSelectDialogProps> = ({
  onSelectRegular,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<'regular' | 'islamic'>('regular');
  const [islamicNotice, setIslamicNotice] = useState<string | null>(null);

  const handleSelectIslamic = () => {
    sounds.playKeyClick();
    setIslamicNotice('সুদমুক্ত ইসলামিক লোন প্রক্রিয়াটি প্রস্তুতি পর্যায়ে রয়েছে — বর্তমানে নগদ রেগুলার অ্যাকাউন্টে তাৎক্ষণিক লোন সক্রিয়!');
    setTimeout(() => setIslamicNotice(null), 3500);
  };

  const handleProceed = () => {
    sounds.playKeyClick();
    onSelectRegular();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2C3E50]/90 backdrop-blur-xs flex items-center justify-center p-4">
      {/* Main Container Card - android:background="@drawable/bg_dialog_card" */}
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700/30 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Gradient Area - android:background="@drawable/bg_orange_gradient" */}
        <div className="relative bg-gradient-to-br from-[#FF6B00] via-[#F37021] to-[#EC1C24] p-5 text-center text-white flex flex-col items-center">
          <button
            onClick={() => {
              sounds.playKeyClick();
              onClose();
            }}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
            title="বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>

          <NagadLogo size={44} />

          <h2 className="text-lg font-bold text-white mt-2 leading-tight">
            আপনার নগদ অ্যাকাউন্ট কোনটি?
          </h2>

          <p className="text-xs text-white/90 mt-1 max-w-[280px]">
            সঠিক অ্যাকাউন্টের ধরন বেছে নিলে আপনার অভিজ্ঞতা আরও ভালো হবে
          </p>
        </div>

        {/* Account Selection Options */}
        <div className="p-5 space-y-3">
          {islamicNotice && (
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
              <span>{islamicNotice}</span>
            </div>
          )}

          {/* Nagad Regular (Selectable) - android:id="@+id/layoutNagadRegular" */}
          <div
            id="layoutNagadRegular"
            onClick={() => {
              sounds.playKeyClick();
              setSelectedType('regular');
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedType('regular')}
            className={`cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3 relative ${
              selectedType === 'regular'
                ? 'border-[#FF6B00] bg-orange-50/40 shadow-xs'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            {/* Card Graphic */}
            <div className="w-13 h-9 rounded-lg bg-gradient-to-br from-[#EC1C24] to-[#FF6B00] text-white flex items-center justify-center font-bold text-[10px] tracking-wider shadow-xs shrink-0 relative overflow-hidden">
              <span className="z-10">REGULAR</span>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-white/20 rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  নগদ রেগুলার
                </h4>
                <span className="text-[10px] bg-red-100 text-[#EC1C24] font-semibold px-1 rounded-sm">
                  প্রস্তাবিত
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                সাধারণ নগদ অ্যাকাউন্ট — সবার জন্য
              </p>
              <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-[#D35400] bg-amber-100/80 px-2 py-0.5 rounded-md">
                <span>⚡ তাৎক্ষণিক লোন</span>
              </div>
            </div>

            {/* Radio Button */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                selectedType === 'regular'
                  ? 'border-[#FF6B00] bg-[#FF6B00] text-white'
                  : 'border-slate-300 bg-white'
              }`}
            >
              {selectedType === 'regular' && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
          </div>

          {/* Nagad Islamic (Locked / Informative for this workflow) - android:id="@+id/layoutNagadIslamic" */}
          <div
            id="layoutNagadIslamic"
            onClick={handleSelectIslamic}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelectIslamic()}
            className="cursor-pointer p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100/60 transition-all flex items-center gap-3 relative opacity-85"
          >
            {/* Islamic Graphic */}
            <div className="w-13 h-9 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold text-[10px] tracking-wider shadow-xs shrink-0 relative overflow-hidden">
              <span className="z-10">ISLAMIC</span>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-white/20 rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-800 leading-tight">
                  নগদ ইসলামিক
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-1 rounded-sm">
                  শরীয়াহ
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                শরীয়াহ সম্মত ইসলামিক অ্যাকাউন্ট
              </p>
              <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-[#27AE60] bg-emerald-100/70 px-2 py-0.5 rounded-md">
                <span>🍃 সুদমুক্ত সেবা</span>
              </div>
            </div>

            {/* Radio Button (Disabled) */}
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-slate-100 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* Bottom Action Button - android:id="@+id/btnProceed" */}
          <button
            id="btnProceed"
            onClick={handleProceed}
            className="w-full mt-4 py-3 px-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#EC1C24] hover:from-[#f06400] hover:to-[#db131a] active:scale-[0.98] shadow-md shadow-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>নগদ রেগুলার নিয়ে এগিয়ে যান</span>
            <span className="text-base font-bold">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};
