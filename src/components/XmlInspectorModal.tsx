import React, { useState } from 'react';
import { X, Copy, Check, FileCode2, ExternalLink } from 'lucide-react';
import { xmlFiles } from '../data/xmlSources';
import { sounds } from '../utils/audio';

interface XmlInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeFileId?: string;
  onSelectScreen?: (screenId: string) => void;
}

export const XmlInspectorModal: React.FC<XmlInspectorModalProps> = ({
  isOpen,
  onClose,
  activeFileId = 'home',
  onSelectScreen,
}) => {
  const [selectedFileId, setSelectedFileId] = useState<string>(activeFileId);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentFile = xmlFiles.find((f) => f.id === selectedFileId) || xmlFiles[0];

  const handleCopy = () => {
    sounds.playKeyClick();
    navigator.clipboard.writeText(currentFile.xml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-slate-200">
        {/* Header */}
        <div className="shrink-0 px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2.5">
            <FileCode2 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Android XML Layout Inspector
              </h3>
              <p className="text-xs text-slate-400">
                মূল অ্যান্ড্রয়েড লেআউট ফাইল ও উপাদান বিশ্লেষণ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">কপি হয়েছে</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>XML কপি করুন</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                sounds.playKeyClick();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Row for Files */}
        <div className="shrink-0 px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          {xmlFiles.map((file) => (
            <button
              key={file.id}
              onClick={() => {
                sounds.playKeyClick();
                setSelectedFileId(file.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                selectedFileId === file.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span className="font-mono">{file.filename}</span>
              <span className="text-[10px] text-slate-400">({file.bengaliTitle})</span>
            </button>
          ))}
        </div>

        {/* Code Content View */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-xs text-slate-300 selection:bg-amber-500/30">
          <pre className="leading-relaxed">
            <code>
              {currentFile.xml.split('\n').map((line, idx) => (
                <div key={idx} className="flex hover:bg-slate-900/70 px-2 rounded">
                  <span className="w-10 select-none text-slate-600 text-right pr-4 shrink-0 tabular-nums">
                    {idx + 1}
                  </span>
                  <span className="text-slate-200">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Footer info bar */}
        <div className="shrink-0 px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{currentFile.title}</span>
          {onSelectScreen && (
            <button
              onClick={() => {
                sounds.playKeyClick();
                onSelectScreen(currentFile.id);
                onClose();
              }}
              className="text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>এই স্ক্রিনটি অ্যাপে দেখুন</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
