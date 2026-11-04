export type ScreenState = 
  | 'home'
  | 'account_select'
  | 'loan_info'
  | 'loan_summary'
  | 'loan_balance'
  | 'loan_pin'
  | 'loan_sms_verification'
  | 'loan_verifying_progress'
  | 'loan_success';

export interface RepaymentInstallment {
  installmentNumber: number;
  dueDate: string;
  amount: number;
}

export interface LoanApplication {
  fullName: string;
  mobileNumber: string;
  accountType: 'regular' | 'islamic';
  loanAmount: number;
  tenureMonths: number;
  profitRate: number; // e.g. 0.045 for 4.5%
  profitAmount: number;
  totalPayable: number;
  monthlyInstallment: number;
  schedule: RepaymentInstallment[];
}

export interface TransactionItem {
  id: string;
  title: string;
  type: 'loan' | 'send_money' | 'recharge' | 'add_money' | 'cash_out';
  amount: number;
  date: string;
  isCredit: boolean;
  trxId: string;
}
