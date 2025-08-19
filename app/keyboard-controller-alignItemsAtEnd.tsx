import { ChatMessage, Message } from "@/components/chat-message";
import { faker } from "@faker-js/faker";
import { LegendList } from "@legendapp/list/keyboard-controller";
import { useState } from "react";

export default function SafeArea() {
  const [messages] = useState<Message[]>(() =>
    Array.from({ length: 50 }).map((_, i) => ({
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
      alignItemsAtEnd
      keyExtractor={(item) => item.id}
      initialScrollIndex={messages.length - 1}
      renderItem={({ item }) => <ChatMessage message={item} />}
    />
  );
}
