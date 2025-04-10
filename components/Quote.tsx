"use client";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Quote({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded-2xl shadow-xl w-8/12 overflow-y-scroll relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Company Details </h2>
          <IoIosCloseCircleOutline
            onClick={onClose}
            className="h-8 w-8  text-gray-400 hover:text-gray-800"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
