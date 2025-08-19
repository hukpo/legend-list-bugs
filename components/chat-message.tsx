import { Text, View } from "react-native";

export type Message = {
  id: string;
  role: "user" | "assistant";
  parts: { type: "text"; text: string }[];
};

export const ChatMessage = ({ message }: { message: Message }) => {
  return (
    <View
      style={{
        borderRadius: 12,
        padding: 10,
        maxWidth: "70%",
        backgroundColor: message.role === "user" ? "#3b82f6" : "#9ca3af",
        alignSelf: message.role === "user" ? "flex-end" : "flex-start",
      }}
    >
      {message.parts.map((part, index) => {
        if (part.type === "text") {
          return (
            <Text
              key={index}
              style={{
                color: message.role === "user" ? "#fff" : "#f9fafb",
              }}
            >
              {part.text}
            </Text>
          );
        }

        return null;
      })}
    </View>
  );
};
