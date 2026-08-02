import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "./chat/ChatBot";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />

      <ChatBot />
    </div>
  );
}