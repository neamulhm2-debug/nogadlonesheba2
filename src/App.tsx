/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenState, LoanApplication, TransactionItem } from './types/nagad';
import { sounds } from './utils/audio';
import { DesktopHeader } from './components/DesktopHeader';
import { DesktopSidebar } from './components/DesktopSidebar';
import { PhoneFrame } from './components/PhoneFrame';
import { HomeScreen } from './components/screens/HomeScreen';
import { AccountSelectDialog } from './components/screens/AccountSelectDialog';
import { LoanInfoScreen } from './components/screens/LoanInfoScreen';
import { LoanSummaryScreen } from './components/screens/LoanSummaryScreen';
import { LoanBalanceScreen } from './components/screens/LoanBalanceScreen';
import { LoanPinScreen } from './components/screens/LoanPinScreen';
import { LoanSmsVerificationScreen } from './components/screens/LoanSmsVerificationScreen';
import { LoanVerifyingScreen } from './components/screens/LoanVerifyingScreen';
import { LoanSuccessScreen } from './components/screens/LoanSuccessScreen';
import { XmlInspectorModal } from './components/XmlInspectorModal';
import { LoanHelpModal } from './components/LoanHelpModal';
import { NotificationModal } from './components/NotificationModal';

const initialTransactions: TransactionItem[] = [
  {
    id: 'tx1',
    title: 'মোবাইল রিচার্জ (গ্রামীনফোন)',
    type: 'recharge',
    amount: 50,
    date: '০৩ নভে, ২০২৬',
    isCredit: false,
    trxId: 'NGD82910381',
  },
  {
    id: 'tx2',
    title: 'মানি রিসিভড (০১৮১...৭৭)',
    type: 'send_money',
    amount: 500,
    date: '০১ নভে, ২০২৬',
    isCredit: true,
    trxId: 'NGD71920472',
  },
  {
    id: 'tx3',
    title: 'দারাজ বাংলাদেশ পেমেন্ট',
    type: 'cash_out',
    amount: 320,
    date: '২৮ অক্টো, ২০২৬',
    isCredit: false,
    trxId: 'NGD61028471',
  },
];

const defaultLoan: LoanApplication = {
  fullName: 'মোহাম্মদ রফিকুল ইসলাম',
  mobileNumber: '01712-345678',
  accountType: 'regular',
  loanAmount: 3000,
  tenureMonths: 3,
  profitRate: 0.045,
  profitAmount: 135,
  totalPayable: 3135,
  monthlyInstallment: 1045,
  schedule: [
    { installmentNumber: 1, dueDate: '04 Dec, 2026', amount: 1045 },
    { installmentNumber: 2, dueDate: '04 Jan, 2027', amount: 1045 },
    { installmentNumber: 3, dueDate: '04 Feb, 2027', amount: 1045 },
  ],
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('home');
  const [balance, setBalance] = useState<number>(1250.5);
  const [transactions, setTransactions] = useState<TransactionItem[]>(initialTransactions);
  const [loan, setLoan] = useState<LoanApplication>(defaultLoan);
  const [trxId, setTrxId] = useState<string>('NGD984218943');

  // UI modes & modals
  const [isFramed, setIsFramed] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isXmlInspectorOpen, setIsXmlInspectorOpen] = useState<boolean>(false);
  const [activeXmlFileId, setActiveXmlFileId] = useState<string>('home');
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  const handleToggleSound = () => {
    sounds.soundEnabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  const handleReset = () => {
    setCurrentScreen('home');
    setBalance(1250.5);
    setTransactions(initialTransactions);
    setLoan(defaultLoan);
  };

  const handleOpenXmlInspector = (fileId: string = 'home') => {
    setActiveXmlFileId(fileId);
    setIsXmlInspectorOpen(true);
  };

  const handleDisbursementSuccess = () => {
    const newTrxId = `NGD${Math.floor(100000000 + Math.random() * 900000000)}`;
    setTrxId(newTrxId);
    const updatedBalance = balance + loan.loanAmount;
    setBalance(updatedBalance);

    // Append new loan credit transaction
    const newTransaction: TransactionItem = {
      id: `tx_${Date.now()}`,
      title: 'নগদ ডিজিটাল লোন অনুমোদন',
      type: 'loan',
      amount: loan.loanAmount,
      date: 'আজকের লেনদেন',
      isCredit: true,
      trxId: newTrxId,
    };
    setTransactions([newTransaction, ...transactions]);

    setCurrentScreen('loan_success');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 overflow-x-hidden">
      {/* Desktop Top Bar */}
      <DesktopHeader
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onReset={handleReset}
        onOpenXmlInspector={() => handleOpenXmlInspector('home')}
        isFramed={isFramed}
        onToggleFrame={() => setIsFramed(!isFramed)}
        onNavigateScreen={(screenId) => setCurrentScreen(screenId as ScreenState)}
      />

      {/* Main Workspace: Central Smartphone simulator + Desktop Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Central interactive phone area */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 lg:p-6 overflow-y-auto">
          {/* Viewport helper info header */}
          <div className="mb-3 text-center">
            <h1 className="text-base font-bold text-white flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC1C24] animate-pulse" />
              <span>নগদ অ্যাপ — ডিজিটাল লোন আবেদন, যাচাই ও রসিদ</span>
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              এসএমএস পেস্টের সাথে সাথে স্বয়ংক্রিয় তথ্য যাচাই এবং অনুমোদন রসিদ
            </p>
          </div>

          {/* Interactive Phone Frame Container */}
          <div className="w-full max-w-lg flex items-center justify-center">
            <PhoneFrame isFramed={isFramed}>
              {/* Screen 1: Home */}
              {currentScreen === 'home' && (
                <HomeScreen
                  onOpenLoan={() => setCurrentScreen('account_select')}
                  onOpenNotification={() => setIsNotificationOpen(true)}
                />
              )}

              {/* Screen 2: Account Select Modal */}
              {currentScreen === 'account_select' && (
                <div className="relative w-full h-full">
                  <HomeScreen
                    onOpenLoan={() => {}}
                    onOpenNotification={() => {}}
                  />
                  <AccountSelectDialog
                    onSelectRegular={() => setCurrentScreen('loan_info')}
                    onClose={() => setCurrentScreen('home')}
                  />
                </div>
              )}

              {/* Screen 3: Step 1 Information Form */}
              {currentScreen === 'loan_info' && (
                <LoanInfoScreen
                  initialLoan={loan}
                  onNext={(updatedLoan) => {
                    setLoan(updatedLoan);
                    setCurrentScreen('loan_summary');
                  }}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 4: Step 2 Loan Summary & Schedule */}
              {currentScreen === 'loan_summary' && (
                <LoanSummaryScreen
                  loan={loan}
                  onConfirm={() => setCurrentScreen('loan_balance')}
                  onBack={() => setCurrentScreen('loan_info')}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 5: Step 3 Balance Details (Before PIN - No wallet balance, only loan & repay details) */}
              {currentScreen === 'loan_balance' && (
                <LoanBalanceScreen
                  currentBalance={balance}
                  loan={loan}
                  onProceedToPin={() => setCurrentScreen('loan_pin')}
                  onBack={() => setCurrentScreen('loan_summary')}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 6: Step 4 PIN Verification */}
              {currentScreen === 'loan_pin' && (
                <LoanPinScreen
                  onVerify={() => setCurrentScreen('loan_sms_verification')}
                  onBack={() => setCurrentScreen('loan_balance')}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 7: Step 5 SMS Verification (Auto-proceeds to verifying animation on paste) */}
              {currentScreen === 'loan_sms_verification' && (
                <LoanSmsVerificationScreen
                  mobileNumber={loan.mobileNumber}
                  onProceedToVerifying={() => setCurrentScreen('loan_verifying_progress')}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 8: তথ্য যাচাই হচ্ছে (From User's Uploaded Screenshot 18_1d0a574a.png) */}
              {currentScreen === 'loan_verifying_progress' && (
                <LoanVerifyingScreen
                  onApproved={handleDisbursementSuccess}
                  onClose={() => setCurrentScreen('home')}
                  onHelp={() => setIsHelpOpen(true)}
                />
              )}

              {/* Screen 9: Loan Approved & Digital Receipt (With no wallet balance, clear repayment dates) */}
              {currentScreen === 'loan_success' && (
                <LoanSuccessScreen
                  loan={loan}
                  trxId={trxId}
                  onFinish={() => setCurrentScreen('home')}
                />
              )}
            </PhoneFrame>
          </div>

          {/* Quick Flow Breadcrumbs below phone */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">ধাপসমূহ:</span>
            {[
              { id: 'home', label: 'হোম' },
              { id: 'account_select', label: 'অ্যাকাউন্ট' },
              { id: 'loan_info', label: '১. তথ্য' },
              { id: 'loan_summary', label: '২. সারসংক্ষেপ' },
              { id: 'loan_balance', label: '৩. মোট হিসাব' },
              { id: 'loan_pin', label: '৪. পিন' },
              { id: 'loan_sms_verification', label: '৫. SMS কোড' },
              { id: 'loan_verifying_progress', label: 'যাচাই হচ্ছে' },
              { id: 'loan_success', label: 'রসিদ' },
            ].map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setCurrentScreen(step.id as ScreenState)}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                    currentScreen === step.id
                      ? 'bg-[#EC1C24] text-white font-bold'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {step.label}
                </button>
                {idx < 8 && <span className="text-slate-600">›</span>}
              </React.Fragment>
            ))}
          </div>
        </main>

        {/* Desktop Sidebar: layout navigator, live state, XML inspector trigger */}
        <DesktopSidebar
          currentScreen={currentScreen}
          onSelectScreen={(screen) => setCurrentScreen(screen)}
          loan={loan}
          balance={balance}
          onUpdateBalance={(newBal) => setBalance(newBal)}
          onOpenXmlInspector={handleOpenXmlInspector}
          onReset={handleReset}
        />
      </div>

      {/* Android XML Inspector Modal */}
      <XmlInspectorModal
        isOpen={isXmlInspectorOpen}
        onClose={() => setIsXmlInspectorOpen(false)}
        activeFileId={activeXmlFileId}
        onSelectScreen={(screenId) => setCurrentScreen(screenId as ScreenState)}
      />

      {/* Loan FAQ & Help Modal */}
      <LoanHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Notifications Modal */}
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        onOpenLoan={() => setCurrentScreen('account_select')}
      />
    </div>
  );
}
