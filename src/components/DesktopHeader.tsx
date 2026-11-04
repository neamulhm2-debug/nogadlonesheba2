import React from 'react';
import { NagadLogo } from './NagadLogo';
import { Volume2, VolumeX, RotateCcw, Code2, Smartphone } from 'lucide-react';
import { sounds } from '../utils/audio';

interface DesktopHeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReset: () => void;
  onOpenXmlInspector: () => void;
  isFramed: boolean;
  onToggleFrame: () => void;
  onNavigateScreen: (screenId: string) => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onReset,
  onOpenXmlInspector,
  isFramed,
  onToggleFrame,
  onNavigateScreen,
}) => {
  return (
    <header className="shrink-0 flex items-center justify-between gap-8 px-6 py-3.5 bg-slate-900 border-b border-slate-800 text-white select-none">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
        <NagadLogo size={32} />
        <span className="text-base font-bold tracking-tight text-white">
          নগদ লোন পোর্টাল
        </span>
      </div>

      {/* Zone 2: 4 concise single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
        <button
          onClick={() => onNavigateScreen('home')}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          হোম স্ক্রিন
        </button>
        <button
          onClick={() => onNavigateScreen('account_select')}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          অ্যাকাউন্ট নির্বাচন
        </button>
        <button
          onClick={() => onNavigateScreen('loan_info')}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          ঋণ তথ্য ফরম
        </button>
        <button
          onClick={() => onNavigateScreen('loan_summary')}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          সারসংক্ষেপ ও কিস্তি
        </button>
        <button
          onClick={() => onNavigateScreen('loan_pin')}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          পিন যাচাই
        </button>
      </nav>

      {/* Zone 3: 1 primary action cluster */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Toggle XML Code Inspector */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            onOpenXmlInspector();
          }}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Android XML কোড দেখুন"
        >
          <Code2 className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">XML কোড</span>
        </button>

        {/* Toggle Phone Frame Bezel */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            onToggleFrame();
          }}
          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            isFramed
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              : 'bg-orange-600/20 text-orange-400 border-orange-500/40'
          }`}
          title="ডিভাইস ফ্রেম টগল"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isFramed ? 'ফ্রেম অন' : 'ফুল ভিউ'}</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            onToggleSound();
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
          title={soundEnabled ? 'সাউন্ড বন্ধ করুন' : 'সাউন্ড চালু করুন'}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {/* Reset button */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            onReset();
          }}
          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF6B00] to-[#EC1C24] hover:opacity-90 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>রিসেট</span>
        </button>
      </div>
    </header>
  );
};
