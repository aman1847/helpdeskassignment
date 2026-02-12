import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900 px-6 py-3 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <div className="bg-white text-blue-900 font-bold w-9 h-9 flex items-center justify-center rounded-lg text-lg">
                    C
                </div>
                <h1 className="text-white text-lg font-semibold tracking-wide">
                    Help Desk
                </h1>
            </div>

            {/* Center Search */}
            <div className="flex-1 flex justify-center">
                <div className="w-[420px] max-w-full relative">
                    <input
                        type="text"
                        placeholder="Search Capacity"
                        className="w-full px-5 py-3 rounded-full bg-white text-black text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>
            </div>


            {/* Right Section */}
            <div className="flex items-center gap-6 relative">
                {/* Create Button with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-white text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        Create ▾
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2">
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                New Ticket
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                New Task
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                New Request
                            </div>
                        </div>
                    )}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <span className="text-white text-xl cursor-pointer">🔔</span>
                    <span className="text-white text-xl cursor-pointer">💬</span>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="w-9 h-9 rounded-full border-2 border-white cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;