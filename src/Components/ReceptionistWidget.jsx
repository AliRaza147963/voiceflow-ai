import { useState } from "react";

export default function ReceptionistWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m your AI Receptionist. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    let botReply = "I'm here to help with calls, bookings, and support.";

    // Simple smart replies (you can upgrade later)
    if (input.toLowerCase().includes("appointment")) {
      botReply = "📅 Sure! I can book an appointment for you. What day works best?";
    } else if (input.toLowerCase().includes("call")) {
      botReply = "📞 I can arrange a call for you. Please share your preferred time.";
    } else if (input.toLowerCase().includes("price")) {
      botReply = "💰 Our plans start at $497/month. Would you like details?";
    }

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="ai-btn" onClick={() => setOpen(!open)}>
        🎧
      </div>

      {/* Chat Box */}
      {open && (
        <div className="ai-box">
          <div className="ai-header">
            AI Receptionist
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}