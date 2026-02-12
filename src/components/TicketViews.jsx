import React from "react";

const TicketViews = () => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Ticket Views</h2>

      

      {/* Options */}
      <ul className="space-y-3 text-sm">
        <li className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          My Tickets
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          Past Due
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          High Priority
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          Unassigned
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          Closed Tickets
        </li>
        <li className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          <span>💬</span>
          Live Support
        </li>
        <li className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          <span>📋</span>
          Boards
        </li>
      </ul>
    </div>
  );
};

export default TicketViews;