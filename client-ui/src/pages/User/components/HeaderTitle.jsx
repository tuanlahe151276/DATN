import React from "react";

export default function HeaderTitle({ title }) {
  return (
    <div className="pb-2 mb-4 flex-wrap md:flex-nowrap items-center justify-between flex border-b border-[#dee2e6]">
      <h1 className="w-full md:w-auto text-[28px] mb-2 font-medium">{title}</h1>
    </div>
  );
}
