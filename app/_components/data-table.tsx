import React from "react";

interface Column {
  key: string;
  label: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  freezeKey?: string;
}

export default function DataTable({ columns, data, freezeKey }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
      <table className="table">
        <thead>
          <tr>
            <th className="sticky left-0  z-20 bg-rk-neutral-20">
              <input type="checkbox" className="checkbox checkbox-sm" />
            </th>

            {columns.map((col) => (
              <th
                key={col.key}
                className={col.key === freezeKey ? "sticky z-20 left-13 bg-rk-neutral-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.2)]" : "bg-rk-neutral-20"}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row: any, index: number) => (
            <tr key={index}>
              <td className="sticky left-0 z-10 bg-rk-neutral-10">
                <input type="checkbox" className="checkbox checkbox-sm" />
              </td>

              {columns.map((col, colIndex) => (
                <td
                  key={col.key}
                  className={
                    col.key === freezeKey
                      ? `sticky z-10 left-13 bg-base-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.2)] ${col.className || ""}`
                      : col.className
                  }
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
