import React from "react";

export function CustomBuildingBadge({
  children,
  className = "",
  icon = "question_mark",
  status = "fallback",
}) {
  const statusColor = {
    new: "bg-brown-sugar-500",
    ongoing: "bg-golden-rod-500",
    sold: "bg-cadet-blue-500",
    fallback: "bg-slate-500",
  };

  return (
    <div className="indicator" data-testid="custom-badge">
      <span
        data-testid="badge-icon"
        className={`indicator-item badge rounded-full h-7 w-7 lg:h-14 lg:w-14 border-none material-symbols-outlined material-symbols-filled text-xl lg:text-4xl text-white ${statusColor[status]} ${className}`}
      >
        {icon}
      </span>

      {children}
    </div>
  );
}
