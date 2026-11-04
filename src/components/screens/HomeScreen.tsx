import React, { useState } from 'react';
import {
  Bell,
  ArrowRight,
  QrCode,
  Users,
  User,
  History,
  Lock,
  ChevronRight,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { NagadLogo } from '../NagadLogo';
import { sounds } from '../../utils/audio';
import {
  IconSendMoney,
  IconCashOut,
  IconMobileRecharge,
  IconAddMoney,
  IconTransferMoney,
  IconBillPay,
  IconEmiPayment,
  IconLoan,
  IconToll,
  IconDonation,
  IconZakat,
  IconOtherServices,
  IconContact,
  IconZakatCalculator,
  IconLimitsCharges,
  IconInsurance
} from '../NagadIcons';
import { PromoBannerSlider } from '../PromoBannerSlider';

interface HomeScreenProps {
  onOpenLoan: () => void;
  onOpenNotification: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenLoan,
  onOpenNotification,
}) => {
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'trx' | 'contacts' | 'profile'>('home');
  const [activeFeatureModal, setActiveFeatureModal] = useState<{ title: string; desc: string } | null>(null);

  const handleCardClick = (title: string, desc: string) => {
    sounds.playKeyClick();
    setActiveFeatureModal({ title, desc });
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5F5] select-none text-slate-800 relative overflow-hidden">
      {/* Top Scenic Banner Header */}
      <div className="relative shrink-0 overflow-hidden bg-gradient-to-b from-[#fef2f2] via-[#fff7ed] to-white border-b border-slate-100">
        {/* Scenic Background Illustration (Padma Bridge & Village Landscape) */}
        <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
            {/* Water / River */}
            <path d="M0,70 C100,60 200,80 400,65 L400,120 L0,120 Z" fill="#bae6fd" opacity="0.6" />
            {/* Bridge Arches */}
            <path d="M0,45 L400,45 M30,45 L30,68 M80,45 L80,68 M130,45 L130,68 M180,45 L180,68 M230,45 L230,68 M280,45 L280,68 M330,45 L330,68" stroke="#cbd5e1" strokeWidth="2.5" />
            <path d="M0,52 Q55,30 110,52 Q165,30 220,52 Q275,30 330,52 Q385,30 440,52" fill="none" stroke="#94a3b8" strokeWidth="2" />
            {/* Trees & small house */}
            <circle cx="340" cy="50" r="14" fill="#86efac" />
            <circle cx="360" cy="45" r="18" fill="#4ade80" />
            <polygon points="310,65 330,45 350,65" fill="#f87171" />
            <rect x="315" y="65" width="30" height="15" fill="#fef08a" />
          </svg>
        </div>

        {/* Header Controls */}
        <header className="relative z-10 flex items-center justify-between px-4 pt-3 pb-3">
          <div className="flex items-center gap-2">
            <NagadLogo size={36} />
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#EC1C24] tracking-tight leading-none">
                নগদ
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                ডাক বিভাগের ডিজিটাল লেনদেন
              </span>
            </div>
          </div>

          {/* Notification Bell with 99+ badge matching screenshot */}
          <button
            onClick={() => {
              sounds.playKeyClick();
              onOpenNotification();
            }}
            className="relative p-2 rounded-full hover:bg-white/60 active:scale-90 transition-transform cursor-pointer"
            title="নোটিফিকেশন"
          >
            <Bell className="w-5 h-5 text-slate-800" />
            <span className="absolute -top-0.5 -right-0.5 px-1.5 py-0.2 rounded-full bg-[#EC1C24] text-white font-bold text-[9px] shadow-xs">
              99+
            </span>
          </button>
        </header>
      </div>

      {/* Feature Description Modal */}
      {activeFeatureModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 flex flex-col text-slate-800 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-sm text-slate-900">{activeFeatureModal.title}</h4>
              <button
                onClick={() => setActiveFeatureModal(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              {activeFeatureModal.desc}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  setActiveFeatureModal(null);
                  onOpenLoan();
                }}
                className="flex-1 py-2 rounded-xl bg-[#EC1C24] text-white font-bold text-xs hover:bg-red-700 transition-colors cursor-pointer"
              >
                লোন আবেদন দেখুন
              </button>
              <button
                onClick={() => setActiveFeatureModal(null)}
                className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto pb-20 p-3.5 space-y-3.5">
        
        {/* Loan Banner - White card with red money sack & right red arrow button */}
        <div
          id="layoutLoanBanner"
          onClick={() => {
            sounds.playKeyClick();
            onOpenLoan();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenLoan()}
          className="group relative overflow-hidden rounded-2xl p-3.5 bg-white border border-slate-200/80 shadow-xs hover:shadow-md active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {/* Red rounded square with money sack icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#EC1C24] text-white flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform shrink-0">
              <IconLoan size={28} className="text-white" />
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#EC1C24] transition-colors leading-tight">
                লোন নিন সহজে
              </h3>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                আপনার প্রয়োজন, আমাদের সাথে
              </p>
            </div>
          </div>

          {/* Right Red Circular Arrow Button matching screenshot */}
          <div className="w-8 h-8 rounded-full bg-[#EC1C24] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </div>
        </div>

        {/* 1. Primary Grid Menu (4 columns x 2 rows = 8 services) */}
        <div className="grid grid-cols-4 gap-2.5">
          {/* Row 1 */}
          {/* 1. সেন্ড মানি */}
          <button
            onClick={() => handleCardClick('সেন্ড মানি', 'যেকোনো নগদ অ্যাকাউন্টে তাৎক্ষণিকভাবে এবং ফ্রিতে সেন্ড মানি করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconSendMoney size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              সেন্ড মানি
            </span>
          </button>

          {/* 2. ক্যাশ আউট */}
          <button
            onClick={() => handleCardClick('ক্যাশ আউট', 'যেকোনো নগদ উদ্যোক্তা পয়েন্ট থেকে স্বল্পতম খরচে ক্যাশ আউট করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconCashOut size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              ক্যাশ আউট
            </span>
          </button>

          {/* 3. মোবাইল রিচার্জ */}
          <button
            onClick={() => handleCardClick('মোবাইল রিচার্জ', 'গ্রামীনফোন, রবি, এয়ারটেল, বাংলালিংক ও টেলিটকে আকর্ষণীয় ক্যাশব্যাকসহ রিচার্জ করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconMobileRecharge size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              মোবাইল রিচার্জ
            </span>
          </button>

          {/* 4. অ্যাড মানি */}
          <button
            onClick={() => handleCardClick('অ্যাড মানি', 'ব্যাংক অ্যাকাউন্ট অথবা ভিসা/মাস্টারকার্ড থেকে নগদ ওয়ালেটে অ্যাড মানি করুন ফ্রিতে।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconAddMoney size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              অ্যাড মানি
            </span>
          </button>

          {/* Row 2 */}
          {/* 5. ট্রান্সফার মানি */}
          <button
            onClick={() => handleCardClick('ট্রান্সফার মানি', 'যেকোনো ব্যাংক অ্যাকাউন্ট ও কার্ডে সরাসরি নগদ থেকে ফান্ড ট্রান্সফার করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconTransferMoney size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              ট্রান্সফার মানি
            </span>
          </button>

          {/* 6. বিল পে */}
          <button
            onClick={() => handleCardClick('বিল পে', 'বিদ্যুৎ, গ্যাস, পানি, ইন্টারনেট এবং শিক্ষা প্রতিষ্ঠানের বিল সহজে পরিশোধ করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconBillPay size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              বিল পে
            </span>
          </button>

          {/* 7. ইএমআই পেমেন্ট */}
          <button
            onClick={() => handleCardClick('ইএমআই পেমেন্ট', 'বিভিন্ন ব্যাংক ও পার্টনার প্রতিষ্ঠানের কিস্তি বা ইএমআই সরাসরি নগদ দিয়ে পরিশোধ করুন।')}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
          >
            <IconEmiPayment size={30} />
            <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
              ইএমআই পেমেন্ট
            </span>
          </button>

          {/* 8. লোন (ACTIVE - Leads to Loan Application!) */}
          <button
            id="layoutLoanGrid"
            onClick={() => {
              sounds.playKeyClick();
              onOpenLoan();
            }}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-red-200/90 shadow-xs hover:shadow-md hover:border-[#EC1C24] active:scale-95 transition-all text-center cursor-pointer min-h-[88px] relative group"
          >
            <IconLoan size={32} className="group-hover:scale-105 transition-transform" />
            <span className="text-[11px] font-bold text-[#EC1C24] mt-2 leading-tight">
              লোন
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white" />
          </button>
        </div>

        {/* 2. Promotional Carousel Banner Slider (Robi, Banglalink, Grameenphone with sideways sliding animation) */}
        <PromoBannerSlider
          onBannerClick={(banner) => {
            handleCardClick(banner.title, banner.offerDetail);
          }}
        />

        {/* 3. Section: "সার্ভিস সমূহ" (Services) */}
        <div>
          <h4 className="text-xs font-bold text-slate-600 mb-2 px-0.5">
            সার্ভিস সমূহ
          </h4>

          <div className="grid grid-cols-4 gap-2.5">
            {/* 1. টোল (Toll) */}
            <button
              onClick={() => handleCardClick('টোল সেবা', 'পদ্মা সেতু, বঙ্গবন্ধু সেতু এবং দেশের প্রধান মহাসড়কের টোল প্লাজায় নগদ দিয়ে স্বয়ংক্রিয়ভাবে টোল পরিশোধ করুন।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconToll size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                টোল
              </span>
            </button>

            {/* 2. ডোনেশন (Donation) */}
            <button
              onClick={() => handleCardClick('ডোনেশন সেবা', 'দেশের শীর্ষস্থানীয় স্বেচ্ছাসেবী সংস্থা ও দুর্যোগ তহবিলে সরাসরি আর্থিক সহায়তা প্রদান করুন।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconDonation size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                ডোনেশন
              </span>
            </button>

            {/* 3. যাকাত (Zakat) */}
            <button
              onClick={() => handleCardClick('যাকাত সেবা', 'শরীয়াহ সম্মত বিভিন্ন নির্ভরযোগ্য ইসলামিক চ্যারিটি ও যাকাত তহবিলে যাকাতের অর্থ বিতরণ করুন।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconZakat size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                যাকাত
              </span>
            </button>

            {/* 4. অন্যান্য সেবাসমূহ (Other Services) */}
            <button
              onClick={() => handleCardClick('অন্যান্য সেবাসমূহ', 'টিকিট ক্রয়, পাসপোর্ট ফি, ট্রাফিক জরিমানা, এনআইডি ফি ও অন্যান্য ডিজিটাল সরকারি ফি পরিশোধ।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconOtherServices size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                অন্যান্য সেবাসমূহ
              </span>
            </button>
          </div>
        </div>

        {/* 4. Section: "অন্যান্য" (Others) */}
        <div className="pb-2">
          <h4 className="text-xs font-bold text-slate-600 mb-2 px-0.5">
            অন্যান্য
          </h4>

          <div className="grid grid-cols-4 gap-2.5">
            {/* 1. যোগাযোগ করুন (Contact Us) */}
            <button
              onClick={() => handleCardClick('যোগাযোগ করুন', 'নগদ ২৪/৭ হেল্পলাইন: ১৬১৬৭ অথবা ০৭৯৬৭-১৬১৬৭৭ এ ডায়াল করুন। ইমেইল: info@nagad.com.bd')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconContact size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                যোগাযোগ করুন
              </span>
            </button>

            {/* 2. যাকাত ক্যালকুলেটর (Zakat Calculator) */}
            <button
              onClick={() => handleCardClick('যাকাত ক্যালকুলেটর', 'আপনার স্বর্ণ, রৌপ্য, নগদ অর্থ ও ব্যবসায়িক সম্পদের সঠিক নিসাব ও যাকাতের পরিমাণ সহজে হিসাব করুন।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconZakatCalculator size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                যাকাত ক্যালকুলেটর
              </span>
            </button>

            {/* 3. লিমিট ও চার্জ (Limits & Charges) */}
            <button
              onClick={() => handleCardClick('লিমিট ও চার্জ', 'নগদে ক্যাশ আউট চার্জ হাজারে মাত্র ৯.৯৯ টাকা (অ্যাপ দিয়ে) এবং সেন্ড মানি সম্পূর্ণ ফ্রি! দৈনিক লেনদেন সীমা সর্বোচ্চ ৳৫০,০০০।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconLimitsCharges size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                লিমিট ও চার্জ
              </span>
            </button>

            {/* 4. ইন্সুরেন্স পলিসি (Insurance Policy) */}
            <button
              onClick={() => handleCardClick('ইন্সুরেন্স পলিসি', 'জীবন বীমা ও স্বাস্থ্য সুরক্ষা পলিসি গ্রহণ করুন এবং মাসিক কিস্তি নগদ অ্যাপের মাধ্যমে জমা দিন।')}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-sm active:scale-95 transition-all text-center cursor-pointer min-h-[88px]"
            >
              <IconInsurance size={30} />
              <span className="text-[11px] font-medium text-slate-800 mt-2 leading-tight">
                ইন্সুরেন্স পলিসি
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <nav className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 shadow-lg flex items-center justify-around z-20 px-2">
        {/* 1. Home */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setActiveBottomTab('home');
          }}
          className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer ${
            activeBottomTab === 'home' ? 'text-[#EC1C24]' : 'text-slate-500'
          }`}
        >
          <NagadLogo size={20} />
          <span className="text-[10px] font-semibold mt-1">হোম</span>
        </button>

        {/* 2. Transactions */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setActiveBottomTab('trx');
            handleCardClick('লেনদেন বিবরণী', 'আপনার সকল সফল লেনদেন, স্টেটমেন্ট এবং রসিদ এই ট্যাবে সংরক্ষিত থাকে।');
          }}
          className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer ${
            activeBottomTab === 'trx' ? 'text-[#EC1C24]' : 'text-slate-500'
          }`}
        >
          <History className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">লেনদেন</span>
        </button>

        {/* 3. QR Floating Center Button */}
        <div className="flex-1 flex justify-center items-center relative -top-3">
          <button
            onClick={() => {
              sounds.playKeyClick();
              handleCardClick('কিউআর স্ক্যানার', 'মার্চেন্ট কিউআর কোড স্ক্যান করে নিমেষেই পেমেন্ট করুন।');
            }}
            className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#EC1C24] to-[#F97316] text-white flex items-center justify-center shadow-md shadow-red-500/40 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            title="কিউআর স্ক্যান"
          >
            <QrCode className="w-6 h-6" />
          </button>
        </div>

        {/* 4. Contacts */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setActiveBottomTab('contacts');
            handleCardClick('ফোনবুক কন্টাক্টস', 'আপনার মোবাইল ফোনের কন্টাক্ট লিস্ট থেকে সহজে নম্বর সিলেক্ট করে সেন্ড মানি বা মোবাইল রিচার্জ করুন।');
          }}
          className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer ${
            activeBottomTab === 'contacts' ? 'text-[#EC1C24]' : 'text-slate-500'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">কন্টাক্টস</span>
        </button>

        {/* 5. My Nagad */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setActiveBottomTab('profile');
            handleCardClick('আমার নগদ', 'আপনার প্রোফাইল, কেওয়াইসি তথ্য, ভাষা পরিবর্তন এবং নিরাপত্তা সেটিংস।');
          }}
          className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer ${
            activeBottomTab === 'profile' ? 'text-[#EC1C24]' : 'text-slate-500'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-1">আমার নগদ</span>
        </button>
      </nav>
    </div>
  );
};
