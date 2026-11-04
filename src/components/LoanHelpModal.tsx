import React from 'react';
import { X, HelpCircle, CheckCircle2, Shield, Calendar, AlertCircle } from 'lucide-react';
import { sounds } from '../utils/audio';

interface LoanHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoanHelpModal: React.FC<LoanHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#FF6B00] via-[#F37021] to-[#EC1C24] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-200" />
            <h3 className="text-base font-bold">নগদ লোন সম্পর্কে সাধারণ জিজ্ঞাসা</h3>
          </div>
          <button
            onClick={() => {
              sounds.playKeyClick();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto text-xs text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#EC1C24]" />
              নগদ ডিজিটাল লোন কী?
            </h4>
            <p className="leading-relaxed">
              নগদ মোবাইল আর্থিক সেবার মাধ্যমে অনুমোদিত গ্রাহকদের জন্য তাৎক্ষণিক ক্ষুদ্রঋণ (Digital Nano Loan) সুবিধা। কোনো জামানত বা ফিজিক্যাল পেপারওয়ার্ক ছাড়াই সরাসরি নগদ ওয়ালেটে টাকা পৌঁছে যায়।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
              <Shield className="w-4 h-4 text-[#27AE60]" />
              লোন পাওয়ার যোগ্যতা কী?
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>নগদ রেগুলার সক্রিয় অ্যাকাউন্ট থাকতে হবে।</li>
              <li>জাতীয় পরিচয়পত্র (NID) দ্বারা ভেরিফাইড বায়োমেট্রিক KYC সম্পন্ন হতে হবে।</li>
              <li>নিয়মিত ওয়ালেট লেনদেন ও সন্তোষজনক ক্রেডিট স্কোর।</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-1">
              <Calendar className="w-4 h-4 text-[#F37021]" />
              কিস্তি পরিশোধ পদ্ধতি কী?
            </h4>
            <p className="leading-relaxed">
              পরিশোধ তালিকার তারিখ অনুসারে আপনার নগদ মূল ওয়ালেট থেকে সমপরিমাণ কিস্তির টাকা স্বয়ংক্রিয়ভাবে কর্তন করা হবে। কিস্তির নির্ধারিত দিনের পূর্বে ওয়ালেটে পর্যাপ্ত ব্যালেন্স বজায় রাখুন।
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-tight">
              পিন বা ওটিপি কখনোই কারো সাথে শেয়ার করবেন না। নগদ কর্তৃপক্ষ কখনোই গ্রাহকের কাছে পিন জানতে চায় না।
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => {
              sounds.playKeyClick();
              onClose();
            }}
            className="px-4 py-2 bg-[#EC1C24] text-white font-bold text-xs rounded-xl hover:bg-red-700 transition-colors"
          >
            বুঝেছি
          </button>
        </div>
      </div>
    </div>
  );
};
