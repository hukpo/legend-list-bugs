import { Chat, ChatMessage } from "@/components/chat";
import { useState } from "react";

export default function Index() {
  const [messages] = useState<ChatMessage[]>([]);

  return (
    <Chat
      data={messages}
      initialScrollIndex={messages.length - 1}
      keyExtractor={(item) => item.id}
    />
  );
}
