import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { api } from "../../lib/api";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi! Ask me anything about Crypto.",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMsg = message;

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: userMsg,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/chat", {
        message: userMsg,
      });

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: res.data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Server error.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-xl z-50"
        >
          <MessageCircle />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-[#111] border border-gray-700 rounded-xl overflow-hidden z-50 shadow-2xl">

          <div className="flex justify-between items-center bg-yellow-500 text-black px-4 py-3 font-bold">
            Crypto Assistant
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "user"
                    ? "text-right"
                    : "text-left"
                }
              >
                <div
                  className={
                    m.from === "user"
                      ? "inline-block bg-yellow-500 text-black px-3 py-2 rounded-lg"
                      : "inline-block bg-gray-700 text-white px-3 py-2 rounded-lg"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-400">
                Typing...
              </div>
            )}
          </div>

          <div className="flex border-t border-gray-700">
            <input
              className="flex-1 bg-[#111] p-3 outline-none text-white"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="px-4 bg-yellow-500 text-black"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}