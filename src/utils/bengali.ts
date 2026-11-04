export const enToBnDigits = (num: number | string): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (digit) => bnDigits[parseInt(digit, 10)]);
};

export const formatTaka = (amount: number, inBengali: boolean = false): string => {
  const formatted = amount.toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return inBengali ? `৳${enToBnDigits(formatted)}` : `৳${formatted}`;
};

export const formatDecimalTaka = (amount: number, inBengali: boolean = false): string => {
  const formatted = amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return inBengali ? `৳${enToBnDigits(formatted)}` : `৳${formatted}`;
};
