import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styled, withExpoSnack, useColorScheme } from "nativewind";
import ToastManager, { Toast } from "toastify-react-native";
import { useState } from "react";
import { typography } from "../Assets/Utils/Typography";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Post from "../Components/Post/Post";
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STextInput = styled(TextInput);
const STouchableOpacity = styled(TouchableOpacity);

function Home() {
  typography();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const showToasts = () => {
    Toast.success("Post submited!");
  };

  const [textFocus, setTextFocus] = useState<boolean>(false);
  const toggleFocus = () => setTextFocus((prev) => !prev);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return !fontsLoaded && !fontError ? (
    <Image source={require("../../assets/splash.png")} />
  ) : (
    <SView className="flex items-center pl-4 h-full relative bg-white dark:bg-zinc-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <ToastManager style={{ fontFamily: "Inter" }} />
      <SImage
        source={
          colorScheme == "dark"
            ? require("../../assets/iconwhite.png")
            : require("../../assets/icon.png")
        }
        className="mt-4 w-10 h-10"
      />
      <SView
        className={`flex gap-4 ${
          textFocus ? "pb-4" : "pb-0"
        } my-2 w-11/12 bg-zinc-100 dark:bg-zinc-700 rounded-lg android:shadow-md ios:shadow-sm ios:shadow-zinc-400 relative`}
      >
        <SView
          className={`${
            textFocus ? "items-start" : "items-center"
          } flex flex-row justify-center w-full`}
        >
          <SImage
            source={require("../Assets/me.jpg")}
            className="w-10 h-10 bg-orange rounded-full -ml-5 mr-2"
          />
          <STextInput
            placeholder="What are you thinking today?"
            placeholderTextColor={"#a1a1aa"}
            className="w-3/4 text-lg text-black dark:text-white mx-1 font-inter font-semibold"
            textAlignVertical="top"
            multiline
            selectionColor={colorScheme == "dark" ? "#fff" : "#1a1a1a"}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            blurOnSubmit
          />
        </SView>
        <SView className="w-full flex justify-end items-end pr-8">
          <STouchableOpacity
            className={`${
              textFocus ? "flex" : "hidden"
            } bg-orange w-[30%] h-7 items-center justify-center rounded-full text-white`}
            onPress={showToasts}
          >
            <SText className="text-white font-inter font-extrabold">Post</SText>
          </STouchableOpacity>
        </SView>
      </SView>
      <Post />
    </SView>
  );
}
export default withExpoSnack(Home);
