import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-[3%] min-w-[60px] bg-blue-900 flex flex-col items-center py-6 space-y-8 shrink-0">
      <div className="text-white text-xl cursor-pointer">🏠</div>
      <div className="text-white text-xl cursor-pointer">📊</div>
      <div className="text-white text-xl cursor-pointer">📁</div>
      <div className="text-white text-xl cursor-pointer">📅</div>
      <div className="text-white text-xl cursor-pointer">📨</div>
      <div className="text-white text-xl cursor-pointer">⭐</div>
      <div className="text-white text-xl cursor-pointer">🔔</div>
      <div className="text-white text-xl cursor-pointer">⚙️</div>
      <div className="text-white text-xl cursor-pointer">📌</div>
      <div className="text-white text-xl cursor-pointer">❓</div>
    </div>
  );
};

export default Sidebar;
