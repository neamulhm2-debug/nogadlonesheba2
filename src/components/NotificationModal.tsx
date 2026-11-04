import React from 'react';
import { X, Bell, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
import { sounds } from '../utils/audio';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLoan: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  onOpenLoan,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold">নোটিফিকেশন ও বার্তা</h3>
          </div>
          <button
            onClick={() => {
              sounds.playKeyClick();
              onClose();
            }}
            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {/* Notification 1: Loan eligible */}
          <div className="pt-2 flex items-start gap-3 text-xs">
            <div className="w-8 h-8 rounded-full bg-red-50 text-[#EC1C24] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900">নগদ লোন প্রি-অ্যাপ্রুভড!</h4>
              <p className="text-slate-600 text-[11px] mt-0.5">
                আপনার লেনদেনের ভিত্তিতে আপনি সর্বোচ্চ ৳২০,০০০ পর্যন্ত তাৎক্ষণিক লোনের জন্য যোগ্য।
              </p>
              <button
                onClick={() => {
                  sounds.playKeyClick();
                  onClose();
                  onOpenLoan();
                }}
                className="mt-2 text-xs font-bold text-[#EC1C24] flex items-center gap-1 hover:underline"
              >
                <span>আবেদন করুন</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Notification 2: Security */}
          <div className="pt-3 flex items-start gap-3 text-xs">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900">নিরাপত্তা সতর্কতা</h4>
              <p className="text-slate-600 text-[11px] mt-0.5">
                আপনার ৪-সংখ্যার গোপন পিন ও ওটিপি কারো সাথে শেয়ার করবেন না। নগদ কর্মকর্তা কখনো পিন চান না।
              </p>
              <span className="text-[10px] text-slate-400 mt-1 block">২ ঘণ্টা আগে</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 text-center">
          <button
            onClick={() => {
              sounds.playKeyClick();
              onClose();
            }}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
