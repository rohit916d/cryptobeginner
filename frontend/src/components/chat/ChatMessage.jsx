/**
 * ChatMessage — a single chat bubble in the Crypto Assistant panel.
 * from: "user" | "bot"
 */
export default function ChatMessage({ from, text }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={isUser ? "chat-bubble-user" : "chat-bubble-bot"}>{text}</div>
    </div>
  );
}
