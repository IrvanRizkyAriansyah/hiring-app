import { TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

interface CardJobProps {
  status: "active" | "inactive" | "draft";
  startDate?: string;
  title: string;
  salaryFrom?: string;
  salaryTo?: string;
  onManage?: () => void;
  onDelete?: () => void;
}

export default function CardJob({
  status,
  startDate,
  title,
  salaryFrom,
  salaryTo,
  onManage,
  onDelete,
}: CardJobProps) {
  return (
    <div className="p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3">
          {/* Status + Date */}
          <div className="flex gap-4">
            <JobStatusBadge status={status} />

            {startDate && (
              <div className="rounded-lg border py-1 px-4 text-rk-neutral-90 border-rk-neutral-40 w-fit">
                started on {startDate}
              </div>
            )}
          </div>

          {/* Job Title */}
          <h1 className="text-[18px] leading-[28px] font-bold">{title}</h1>

          {/* Salary */}
          {(salaryFrom || salaryTo) && (
            <div className="flex items-center gap-1 text-rk-neutral-80">
              {salaryFrom && (
                <p className="text-rk-text-l font-rk-text-l-regular">
                  {salaryFrom}
                </p>
              )}

              {salaryFrom && salaryTo && (
                <p className="text-rk-text-l font-rk-text-l-regular">-</p>
              )}

              {salaryTo && (
                <p className="text-rk-text-l font-rk-text-l-regular">
                  {salaryTo}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Manage Button */}
        {onManage && (
          <button
            onClick={onManage}
            className="btn bg-rk-primary-main text-white rounded-lg"
          >
            Manage Job
          </button>
        )}
        {onDelete && (
          <button className="btn bg-rk-danger-main text-white">
            <TrashIcon />
          </button>
        )}
      </div>
    </div>
  );
}

interface JobStatusBadgeProps {
  status: "active" | "inactive" | "draft";
}

function JobStatusBadge({ status }: JobStatusBadgeProps) {
  const baseClass =
    "rounded-lg py-1 px-4 w-fit border-2 font-rk-text-m-bold text-rk-text-m";

  const variantClass = {
    active: "border-rk-success-main bg-rk-success-surface text-rk-success-main",
    inactive: "border-rk-danger-main bg-rk-danger-surface text-rk-danger-main",
    draft:
      "border-rk-secondary-main bg-rk-secondary-surface text-rk-secondary-main",
  };

  return <div className={`${baseClass} ${variantClass[status]}`}>{capitalize(status)}</div>;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
