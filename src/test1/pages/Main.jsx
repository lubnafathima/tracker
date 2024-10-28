import { useState } from "react";
import { generateUniqueLink, generateUniqueId } from "../utils/linkUtils";

const Main = () => {
  const [email, setEmail] = useState("");

  const sendEmailWithLink = () => {
    const linkId = generateUniqueId();
    const uniqueLink = generateUniqueLink(email, linkId);

    console.log(`Sending email to ${email} with link: ${uniqueLink}`);
    alert(`Link sent to ${email}:\n${uniqueLink}`);

    setEmail("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Link Tracking App</h1>

      <div className="my-4 text-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter recipient's email"
          className="border p-2 rounded"
        />
        <button
          onClick={sendEmailWithLink}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Send Link
        </button>
      </div>
    </div>
  );
};

export default Main;
