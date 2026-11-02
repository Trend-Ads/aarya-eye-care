"use client";

import React from "react";

interface BookAppointmentButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BookAppointmentButton({
  children,
  className = "px-4 py-2 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white text-xs font-semibold transition-colors cursor-pointer",
}: BookAppointmentButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-appointment-modal"));
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children || <span>Book Appointment</span>}
    </button>
  );
}
