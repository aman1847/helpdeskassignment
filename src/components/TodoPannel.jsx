import React, { useState } from "react";

export default function TodoPannel() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="w-80 bg-white h-screen shadow-lg border-l p-5 overflow-y-auto">

      {/* Status Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          In Progress
        </button>
        <button className="text-gray-400 hover:text-gray-600 text-lg">
          ✕
        </button>
      </div>

      {/* Priority */}
      <div className="mb-5">
        <label className="text-xs text-gray-500 block mb-1">Priority</label>
        <div
          onClick={() => toggle("priority")}
          className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer"
        >
          <span className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            High
          </span>
          <span>{open === "priority" ? "▲" : "⌄"}</span>
        </div>

        {open === "priority" && (
          <div className="mt-2 border rounded-lg p-2 text-sm bg-gray-50 space-y-1">
            <div className="hover:bg-gray-200 p-1 rounded cursor-pointer">Low</div>
            <div className="hover:bg-gray-200 p-1 rounded cursor-pointer">Medium</div>
            <div className="hover:bg-gray-200 p-1 rounded cursor-pointer">High</div>
          </div>
        )}
      </div>

      {/* Assigned To */}
      <div className="mb-5">
        <label className="text-xs text-gray-500 block mb-1">Assigned To</label>
        <div
          onClick={() => toggle("assigned")}
          className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
              SK
            </div>
            <span className="text-sm">Sahil Khan</span>
          </div>
          <span>{open === "assigned" ? "▲" : "⌄"}</span>
        </div>

        {open === "assigned" && (
          <div className="mt-2 border rounded-lg p-2 text-sm bg-gray-50 space-y-1">
            <div className="hover:bg-gray-200 p-1 rounded cursor-pointer">Aman Mehra</div>
            <div className="hover:bg-gray-200 p-1 rounded cursor-pointer">Riya Sharma</div>
          </div>
        )}
      </div>

      {/* Expandable Sections */}
      <div className="space-y-3 text-sm text-gray-600 border-t pt-4">
        {["Subtasks", "Linked Issues", "Activity Log"].map((item) => (
          <div key={item}>
            <div
              onClick={() => toggle(item)}
              className="flex justify-between cursor-pointer py-2"
            >
              {item}
              <span>{open === item ? "▲" : "›"}</span>
            </div>

            {open === item && (
              <div className="bg-gray-50 p-2 rounded text-xs text-gray-500">
                Dummy content for {item}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
