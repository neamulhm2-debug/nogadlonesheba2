import React from 'react';
import { User, FileText, CreditCard, Lock, ShieldCheck, Check } from 'lucide-react';

interface StepProgressBarProps {
  currentStep: number; // 1: তথ্য, 2: সারসংক্ষেপ, 3: ব্যালেন্স, 4: পিন, 5: যাচাই
  isDark?: boolean;
}

interface StepItem {
  number: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: StepItem[] = [
  { number: 1, label: 'তথ্য', icon: User },
  { number: 2, label: 'সারসংক্ষেপ', icon: FileText },
  { number: 3, label: 'ব্যালেন্স', icon: CreditCard },
  { number: 4, label: 'পিন', icon: Lock },
  { number: 5, label: 'যাচাই', icon: ShieldCheck },
];

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  currentStep,
  isDark = true,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between px-4 py-3 select-none bg-black/40 backdrop-blur-xs border-b border-neutral-800/60 z-20">
      {steps.map((step, idx) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;
        const isLocked = step.number > currentStep;
        const IconComponent = step.icon;

        return (
          <React.Fragment key={step.number}>
            {/* Step Node */}
            <div className="flex flex-col items-center min-w-[44px]">
              {isActive ? (
                // Active node: Orange rounded rectangle with glow matching the screenshot
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#f97316] to-[#dc2626] p-0.5 shadow-lg shadow-orange-500/40 ring-1 ring-orange-400 flex items-center justify-center">
                  <div className="w-full h-full bg-[#18181c] rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-orange-400 stroke-[2.5]" />
                  </div>
                </div>
              ) : isCompleted ? (
                // Completed node: Green circular ring with dark center and green icon
                <div className="w-7 h-7 rounded-full bg-[#121417] border border-[#00e676] flex items-center justify-center shadow-xs">
                  <IconComponent className="w-3.5 h-3.5 text-[#00e676] stroke-[2.2]" />
                </div>
              ) : (
                // Locked/Pending node: Dark subtle ring
                <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-neutral-500">
                  <IconComponent className="w-3.5 h-3.5 text-neutral-500 stroke-[1.8]" />
                </div>
              )}

              {/* Step Label */}
              <span
                className={`text-[10px] mt-1 font-semibold tracking-tight transition-colors ${
                  isActive
                    ? 'text-orange-400 font-bold'
                    : isCompleted
                    ? 'text-[#00e676]'
                    : 'text-neutral-500'
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting Line between steps */}
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-[1.5px] mx-1 transition-all ${
                  step.number < currentStep
                    ? 'bg-[#00e676]'
                    : 'bg-neutral-700/60'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
