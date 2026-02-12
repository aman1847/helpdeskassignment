import React from "react";

const MyTicketsPanel = ({ onToggle }) => {
  const tickets = [
    { id: 1, title: "Server capacity issue", status: "Open", date: "Jun 12" },
    { id: 2, title: "Login authentication error", status: "In Progress", date: "Jun 11" },
    { id: 3, title: "Database backup failed", status: "Pending", date: "Jun 10" },
    { id: 4, title: "UI alignment bug", status: "Closed", date: "Jun 09" },
    { id: 5, title: "API timeout problem", status: "Open", date: "Jun 08" },
  ];

  return (
    <div className="h-full bg-white rounded-2xl shadow-md p-5 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            onClick={onToggle}
            className="text-blue-600 text-xl cursor-pointer"
          >
            ☰
          </div>
          <h2 className="text-lg font-semibold">My Tickets</h2>
        </div>
      </div>

      {/* Search Box */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Tickets"
          className="w-full px-4 py-2 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
      </div>

      {/* Ticket List */}
      <div className="space-y-3 overflow-y-auto">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="p-3 border border-gray-100 rounded-xl hover:shadow-md cursor-pointer transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium truncate">
                {ticket.title}
              </h3>
              <span className="text-xs text-gray-400">
                {ticket.date}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Status: {ticket.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTicketsPanel;
