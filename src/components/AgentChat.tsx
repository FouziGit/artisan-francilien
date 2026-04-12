"use client";

import { useState } from "react";
import { AgentChat as Chat, createAgentChat } from "@21st-sdk/nextjs";
import { useChat } from "@ai-sdk/react";
import theme from "@/app/theme.json";

const chat = createAgentChat({
  agent: "artisan-francilien",
  tokenUrl: "/api/an-token",
});

export default function AgentChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, status, stop, error } = useChat({ chat });

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-120px)] rounded-2xl border border-[#E8E0D0] bg-[#FDFBF7] shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8E0D0] bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-[#1B1B1B]">Artisan Francilien — Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#6B6B6B] hover:text-[#1B1B1B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-[calc(100%-52px)]">
            <Chat
              messages={messages}
              onSend={(msg: { role: "user"; content: string }) => sendMessage({ text: msg.content })}
              status={status}
              onStop={stop}
              error={error ?? undefined}
              theme={theme}
            />
          </div>
        </div>
      )}
    </>
  );
}
