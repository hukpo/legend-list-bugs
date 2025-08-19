import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Link href="/initialScrollIndex" asChild>
        <Button title="initialScrollIndex" />
      </Link>

      <Link href="/gap-extra-padding" asChild>
        <Button title="gap-extra-padding" />
      </Link>

      <Link href="/keyboard-controller-padding" asChild>
        <Button title="keyboard-controller-padding" />
      </Link>

      <Link href="/keyboard-controller-alignItemsAtEnd" asChild>
        <Button title="keyboard-controller-alignItemsAtEnd" />
      </Link>

      <Link href="/alignItemsAtEnd" asChild>
        <Button title="alignItemsAtEnd" />
      </Link>
    </View>
  );
}
