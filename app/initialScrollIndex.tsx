import { ChatMessage, Message } from "@/components/chat-message";
import { LegendList } from "@legendapp/list";
import { useState } from "react";

export default function InitialScrollIndex() {
  const [messages] = useState<Message[]>([]);

  return (
    <LegendList
      data={messages}
      initialScrollIndex={messages.length - 1}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatMessage message={item} />}
    />
  );
}
