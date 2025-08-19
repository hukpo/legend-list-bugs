import { LegendList, LegendListProps } from "@legendapp/list";
import { Text, View } from "react-native";

export type ChatMessage = {
  id: string;
  parts: { type: "text"; text: string }[];
};

export type ChatProps = Omit<
  LegendListProps<ChatMessage>,
  "data" | "children"
> & {
  data: ChatMessage[];
};

export const Chat = ({ data, ...props }: ChatProps) => {
  return (
    <LegendList
      {...props}
      data={data}
      renderItem={({ item }) => (
        <View>
          {item.parts.map((part, index) => {
            if (part.type === "text") {
              return <Text key={index}>{part.text}</Text>;
            }

            return null;
          })}
        </View>
      )}
    />
  );
};
