"use client";

import dynamic from "next/dynamic";

const AgentChatWidget = dynamic(() => import("@/components/AgentChat"), {
  ssr: false,
});

export default function AgentChatLoader() {
  return <AgentChatWidget />;
}
