import { ChatMessage, Message } from "@/components/chat-message";
import { faker } from "@faker-js/faker";
import { LegendList } from "@legendapp/list";
import { useState } from "react";

export default function Gap() {
  const [messages] = useState<Message[]>(() =>
    Array.from({ length: 5 }).map((_, i) => ({
      id: faker.string.uuid(),
      role: i % 2 === 0 ? "user" : "assistant",
      parts: [
        {
          type: "text",
          text: faker.lorem.sentence(),
        },
      ],
    }))
  );

  return (
    <LegendList
      data={messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
      contentContainerStyle={{ backgroundColor: "orange", gap: 20 }}
    />
  );
}
