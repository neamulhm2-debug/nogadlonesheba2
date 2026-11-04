import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Send Money: Curved circular arrow with ৳ symbol
export const IconSendMoney: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="#EC1C24" strokeWidth="2.5" strokeDasharray="95 20" strokeLinecap="round" />
    <path d="M14 26L18 30L22 26" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="24" y="29" fill="#EC1C24" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">৳</text>
  </svg>
);

// 2. Cash Out: Wallet with outgoing arrow and ৳
export const IconCashOut: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M9 16C9 13.7909 10.7909 12 13 12H35C37.2091 12 39 13.7909 39 16V32C39 34.2091 37.2091 36 35 36H13C10.7909 36 9 34.2091 9 32V16Z" stroke="#EC1C24" strokeWidth="2.5" />
    <path d="M9 20H39" stroke="#EC1C24" strokeWidth="2" />
    <path d="M28 28H42M42 28L37 23M42 28L37 33" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="28" r="4.5" stroke="#EC1C24" strokeWidth="2" />
    <text x="20" y="31.5" fill="#EC1C24" fontSize="9" fontWeight="bold" textAnchor="middle">৳</text>
  </svg>
);

// 3. Mobile Recharge: Smartphone with lightning bolt
export const IconMobileRecharge: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="14" y="8" width="20" height="32" rx="4" stroke="#EC1C24" strokeWidth="2.5" />
    <line x1="22" y1="12" x2="26" y2="12" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="35" r="1.5" fill="#EC1C24" />
    <path d="M25 17L21 24H27L23 31" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 4. Add Money: Open wallet with +
export const IconAddMoney: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M10 16C10 13.7909 11.7909 12 14 12H34C36.2091 12 38 13.7909 38 16V32C38 34.2091 36.2091 36 34 36H14C11.7909 36 10 34.2091 10 32V16Z" stroke="#EC1C24" strokeWidth="2.5" />
    <circle cx="31" cy="24" r="3.5" fill="#EC1C24" />
    <path d="M35 11V6M32.5 8.5H37.5" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 20H38" stroke="#EC1C24" strokeWidth="2" />
  </svg>
);

// 5. Transfer Money: Cycle arrows with ৳
export const IconTransferMoney: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="#EC1C24" strokeWidth="2.5" strokeDasharray="30 15 30 15" strokeLinecap="round" />
    <path d="M32 14L37 19L32 24" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 34L11 29L16 24" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="24" y="29" fill="#EC1C24" fontSize="16" fontWeight="bold" textAnchor="middle">৳</text>
  </svg>
);

// 6. Bill Pay: Invoice document with calculations and ৳
export const IconBillPay: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M13 8C13 6.89543 13.8954 6 15 6H33C34.1046 6 35 6.89543 35 8V38L30 35L24 38L18 35L13 38V8Z" stroke="#EC1C24" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="18" y1="13" x2="30" y2="13" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="19" x2="30" y2="19" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="25" x2="26" y2="25" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="33" r="6" fill="#FFFFFF" stroke="#EC1C24" strokeWidth="2" />
    <text x="34" y="36.5" fill="#EC1C24" fontSize="8" fontWeight="bold" textAnchor="middle">৳</text>
  </svg>
);

// 7. EMI Payment: Calculator with % and keypad
export const IconEmiPayment: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="13" y="8" width="22" height="32" rx="4" stroke="#EC1C24" strokeWidth="2.5" />
    <text x="24" y="19" fill="#EC1C24" fontSize="11" fontWeight="bold" textAnchor="middle">%</text>
    <line x1="18" y1="23" x2="30" y2="23" stroke="#EC1C24" strokeWidth="1.5" />
    <circle cx="18" cy="28" r="1.5" fill="#EC1C24" />
    <circle cx="24" cy="28" r="1.5" fill="#EC1C24" />
    <circle cx="30" cy="28" r="1.5" fill="#EC1C24" />
    <circle cx="18" cy="34" r="1.5" fill="#EC1C24" />
    <circle cx="24" cy="34" r="1.5" fill="#EC1C24" />
    <circle cx="30" cy="34" r="1.5" fill="#EC1C24" />
  </svg>
);

// 8. Loan: Hand holding money sack with ৳
export const IconLoan: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Money sack */}
    <path d="M24 10C21 10 19 12 18 14H30C29 12 27 10 24 10Z" stroke="#EC1C24" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 16C13 19 13 26 15 30C17 33 31 33 33 30C35 26 35 19 32 16H16Z" stroke="#EC1C24" strokeWidth="2.5" strokeLinejoin="round" />
    <text x="24" y="26" fill="#EC1C24" fontSize="11" fontWeight="bold" textAnchor="middle">৳</text>
    {/* Supporting hand below */}
    <path d="M10 36H28C31 36 34 34 36 32L38 30" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 40H26" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 9. Toll: Toll booth barrier with car
export const IconToll: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Barrier post & arm */}
    <rect x="8" y="16" width="6" height="22" rx="1.5" stroke="#EC1C24" strokeWidth="2" />
    <path d="M14 18L38 12" stroke="#EC1C24" strokeWidth="3" strokeLinecap="round" />
    {/* Car */}
    <path d="M18 32H38M18 32L21 26H35L38 32M18 32V38M38 32V38" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22" cy="35" r="2" fill="#EC1C24" />
    <circle cx="34" cy="35" r="2" fill="#EC1C24" />
  </svg>
);

// 10. Donation: Hand offering heart
export const IconDonation: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Heart in hand */}
    <path d="M24 16C22 13 18 13 16 15C14 17 14 20 16 22L24 30L32 22C34 20 34 17 32 15C30 13 26 13 24 16Z" fill="#EC1C24" stroke="#EC1C24" strokeWidth="1.5" />
    {/* Hand */}
    <path d="M10 32C12 30 17 28 22 28H32C35 28 38 30 38 33C38 35 34 37 30 38H14" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 11. Zakat: Hand offering charity coin bag
export const IconZakat: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="18" r="8" stroke="#EC1C24" strokeWidth="2.5" />
    <text x="24" y="22" fill="#EC1C24" fontSize="10" fontWeight="bold" textAnchor="middle">৳</text>
    <path d="M18 10H30" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 34C14 31 18 30 22 30H32C35 30 38 32 38 35C38 37 34 39 30 40H14" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 12. Other Services: 4 rounded squares with +
export const IconOtherServices: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="11" y="11" width="10" height="10" rx="2" stroke="#EC1C24" strokeWidth="2.5" />
    <rect x="27" y="11" width="10" height="10" rx="2" stroke="#EC1C24" strokeWidth="2.5" />
    <rect x="11" y="27" width="10" height="10" rx="2" stroke="#EC1C24" strokeWidth="2.5" />
    <rect x="27" y="27" width="10" height="10" rx="2" stroke="#EC1C24" strokeWidth="2.5" />
    <path d="M32 30V34M30 32H34" stroke="#EC1C24" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 13. Contact Us: Map location pin with telephone handset
export const IconContact: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 8C17.3726 8 12 13.3726 12 20C12 28.5 24 40 24 40C24 40 36 28.5 36 20C36 13.3726 30.6274 8 24 8Z" stroke="#EC1C24" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="20" r="5" stroke="#EC1C24" strokeWidth="2" />
    <path d="M22 18C22 17.5 22.5 17 23 17H25C25.5 17 26 17.5 26 18V21C26 21.5 25.5 22 25 22H23C22.5 22 22 21.5 22 21V18Z" fill="#EC1C24" />
  </svg>
);

// 14. Zakat Calculator: Mosque dome with % calculator
export const IconZakatCalculator: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Mosque Dome Shape */}
    <path d="M24 6C23 8 16 14 16 22H32C32 14 25 8 24 6Z" stroke="#EC1C24" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="16" y="22" width="16" height="18" rx="2" stroke="#EC1C24" strokeWidth="2.5" />
    <text x="24" y="32" fill="#EC1C24" fontSize="9" fontWeight="bold" textAnchor="middle">%</text>
    <circle cx="20" cy="36" r="1.5" fill="#EC1C24" />
    <circle cx="24" cy="36" r="1.5" fill="#EC1C24" />
    <circle cx="28" cy="36" r="1.5" fill="#EC1C24" />
  </svg>
);

// 15. Limits & Charges: Table grid with + - × ÷ and ৳
export const IconLimitsCharges: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="11" y="9" width="26" height="30" rx="3" stroke="#EC1C24" strokeWidth="2.5" />
    <line x1="11" y1="24" x2="37" y2="24" stroke="#EC1C24" strokeWidth="2" />
    <line x1="24" y1="9" x2="24" y2="39" stroke="#EC1C24" strokeWidth="2" />
    <text x="17.5" y="19" fill="#EC1C24" fontSize="12" fontWeight="bold" textAnchor="middle">✕</text>
    <text x="30.5" y="19" fill="#EC1C24" fontSize="12" fontWeight="bold" textAnchor="middle">−</text>
    <text x="17.5" y="34" fill="#EC1C24" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
    <text x="30.5" y="34" fill="#EC1C24" fontSize="11" fontWeight="bold" textAnchor="middle">৳</text>
  </svg>
);

// 16. Insurance Policy: Umbrella
export const IconInsurance: React.FC<IconProps> = ({ className = '', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M12 24C12 16 17 10 24 10C31 10 36 16 36 24C32 22 28 24 24 22C20 24 16 22 12 24Z" stroke="#EC1C24" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="24" y1="22" x2="24" y2="34" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 34C24 36.5 21.5 38 19 36" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="7" x2="24" y2="10" stroke="#EC1C24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
