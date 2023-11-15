import { X } from "@tamagui/lucide-icons";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import {
  GestureResponderEvent,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  H6,
  Sheet,
  Spinner,
  TextArea,
  XStack,
  YStack,
} from "tamagui";

interface CustomSheetProps {
  showInputAccessoryView: boolean | undefined;
  setShowInputAccessoryView:
    | ((open: boolean) => void)
    | Dispatch<SetStateAction<boolean>>;
}

// Replies
export const CustomSheet = ({
  showInputAccessoryView,
  setShowInputAccessoryView,
}: CustomSheetProps) => {

  return (
    <Sheet
      moveOnKeyboardChange={false}
      open={showInputAccessoryView}
      onOpenChange={setShowInputAccessoryView}
      modal={true}
      snapPoints={[50]}
      dismissOnSnapToBottom
      zIndex={100_000}
    >
      <Sheet.Overlay backgroundColor="rgba(0,0,0,0.3)" />
      <Sheet.Frame
        flex={1}
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        padding="$6"
        backgroundColor={"white"}
        space="$2"
      >
        <YStack alignItems="center">
          <XStack alignItems="center">
            <View
              style={{
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // NOTE: we close the input accessory if X is pressed
                  setShowInputAccessoryView(false);
                }}
              >
                <X />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
              }}
            ></View>
          </XStack>
          <TextArea
            multiline
            placeholder="Add a reply"
            onBlur={() => {
              // NOTE: we use the foucs lost of the text input to detect out of sheet and close it
              setShowInputAccessoryView(false);
            }}
            size="$4"
            borderWidth={2}
            width="100%"
            textAlignVertical="top"
          />
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
};
