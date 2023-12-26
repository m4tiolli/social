import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, View } from "react-native";
import { styled, withExpoSnack } from "nativewind";
import ToastManager, { Toast } from "toastify-react-native";

const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STextInput = styled(TextInput);

function App() {
  const showToasts = () => {
    Toast.success("Promised is resolved");
  };

  return (
    <SView className="flex items-center h-full relative bg-white dark:bg-zinc-700">
      <ToastManager />
      <SImage
        source={require("./assets/icon.png")}
        className="my-4 w-10 h-10"
      />
      <SView className="flex flex-row items-center justify-center gap-4 h-20 pb-4 my-4 w-4/5 bg-gray-100 rounded-lg shadow-md shadow-gray-400">
        <SView className="w-10 h-10 bg-red-400 rounded-full" />
        <STextInput
          placeholder="What are you thinking today?"
          className="p-4 w-3/4 h-fit text-lg flex items-center"
        />
      </SView>
      <SText className="dark:text-white text-zinc-700" onPress={showToasts}>
        Open up App.tsx to start working on your app!
      </SText>
      <StatusBar style="auto" />
    </SView>
  );
}
export default withExpoSnack(App);
