"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  classNames?: {
    container?:string
  }
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  action,
  children,
  classNames
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className={`modal-box w-11/12 max-w-5xl relative bg-white p-0 rounded-lg ${classNames?.container}`}>
        <div className="flex justify-between items-center border-b border-rk-neutral-30 p-6">
          <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <h3 className="text-rk-text-s font-rk-text-s-regular">{subtitle}</h3>
          </div>
          <button
            className="btn btn-sm btn-circle btn-ghost"
            onClick={onClose}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 max-h-[500] overflow-auto">{children}</div>

        {action && <div className="modal-action p-6 border-t border-rk-neutral-30">{action}</div>}
      </div>
    </div>
  );
};

export default Modal;
