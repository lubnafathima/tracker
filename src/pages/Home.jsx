import { useState } from "react";
import Inbox from "../components/Inbox";
import Compose from "../components/Compose";
import Sent from "../components/Sent";
import Navbar from "../components/Navbar";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("inbox");

  const renderComponent = () => {
    switch (activeComponent) {
      case "inbox":
        return <Inbox />;
      case "compose":
        return <Compose />;
      case "sent":
        return <Sent />;
      default:
        return <Inbox />;
    }
  };

  return (
    <div className="w-full">
      <header className="shadow-md w-full flex items-center justify-center">
        <Navbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      </header>
      <div className="p-6 lg:p-8">{renderComponent()}</div>
    </div>
  );
};

export default Main;
