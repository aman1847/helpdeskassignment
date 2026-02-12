import React from "react";

export default function TicketConversationView() {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* Ticket Header */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Payment Failed During Checkout
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              TKT-4587 | Created 02/10/2026 09:14 AM IST
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <span className="cursor-pointer hover:text-gray-700">✉️</span>
            <span className="cursor-pointer hover:text-gray-700">👁️</span>
            <span className="cursor-pointer hover:text-gray-700">⋯</span>
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
              AK
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="mt-6 bg-gray-50 rounded-xl border p-4">
          <div className="flex gap-6 border-b pb-2 mb-3 text-sm font-medium">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Public Reply
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              Private Note
            </button>
          </div>

          <div className="text-sm text-gray-600 mb-3">
            To:{" "}
            <span className="bg-gray-200 px-2 py-1 rounded-lg">
              Riya Sharma ✕
            </span>
          </div>

          <textarea
            placeholder="Write your response here..."
            className="w-full h-24 bg-white border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-gray-700 font-bold">B</span>
              <span className="cursor-pointer hover:text-gray-700 italic">I</span>
              <span className="cursor-pointer hover:text-gray-700">📎</span>
              <span className="cursor-pointer hover:text-gray-700">😊</span>
            </div>

            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition">
              Send Reply
            </button>
          </div>
        </div>

        {/* Conversation Thread */}
        <div className="mt-6 space-y-4">
          
          {/* Message 1 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">
                  RS
                </div>
                <div>
                  <p className="font-medium text-sm">Riya Sharma</p>
                  <p className="text-xs text-gray-500">
                    Customer
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                Feb 10, 2026 09:18 AM
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700">
              Hi Team, I tried completing my purchase twice, but the payment
              failed both times. The amount was deducted from my account.
              Please assist urgently.
            </p>

            <div className="mt-3 flex gap-3">
              <span className="bg-gray-200 text-xs px-3 py-1 rounded-lg">
                payment_receipt.jpg
              </span>
            </div>
          </div>

          {/* Message 2 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                  AK
                </div>
                <div>
                  <p className="font-medium text-sm">Aman Kumar</p>
                  <p className="text-xs text-gray-500">
                    Support Executive
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                Feb 10, 2026 09:30 AM
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700">
              Hello Riya, thank you for reaching out. We are currently checking
              with the payment gateway provider. If the transaction failed,
              the deducted amount will be automatically refunded within 3–5
              business days.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
