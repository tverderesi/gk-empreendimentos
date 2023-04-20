import React from "react";

export function CustomBuildingBadge({
  children,
  className = "",
  icon,
  status = "fallback",
}) {
  const statusColor = {
    new: "bg-brown-sugar-500",
    ongoing: "bg-golden-rod-500",
    sold: "bg-cadet-blue-500",
    fallback: "bg-slate-500",
  };

  return (
    <div className="indicator">
      <span
        className={`indicator-item badge rounded-full h-14 w-14 border-none material-symbols-outlined material-symbols-filled text-4xl text-white ${statusColor[status]}`}
      >
        {icon}
      </span>

      {children}
    </div>
  );
}
