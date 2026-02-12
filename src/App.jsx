import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TicketViews from "./components/TicketViews";
import MyTicketsPanel from "./components/MyTicketsPanel";
import TicketConversationView from "./components/TicketConversationView";
import TodoPannel from "./components/TodoPannel";

function App() {
  const [hideTicketViews, setHideTicketViews] = useState(false);

  return (
    <>
      <Header />

      <div className="flex h-screen">

        <Sidebar />

        {/* TicketViews (Hide when clicked) */}
        {!hideTicketViews && (
          <div className="w-80 transition-all duration-300">
            <TicketViews />
          </div>
        )}

        {/* MyTicketsPanel */}
        <div
          className={`transition-all duration-300 ${
            hideTicketViews ? "flex-1" : "w-80"
          }`}
        >
          <MyTicketsPanel
            onToggle={() => setHideTicketViews((prev) => !prev)}
          />
        </div>

        <div className="flex-1">
          <TicketConversationView />
        </div>

        <TodoPannel />

      </div>
    </>
  );
}

export default App;
