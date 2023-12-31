import { StatusBar } from "expo-status-bar";
import {
  Image,
  InputAccessoryView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  ScrollView,
  Animated,
} from "react-native";
import { styled, withExpoSnack, useColorScheme } from "nativewind";
import ToastManager, { Toast } from "toastify-react-native";
import { useRef, useState } from "react";
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
const SSCrollView = styled(ScrollView);
export interface IUser {
  id: number;
  name: string;
  text: string;
}

const DynamicHeader = ({ value }: any) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const Header_Max_Heigth = 65;
  const Header_Min_Heigth = 65;
  const Scroll_Distance = Header_Max_Heigth - Header_Min_Heigth;
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Heigth, Header_Min_Heigth],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        height: animatedHeaderHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SImage
        source={
          colorScheme == "dark"
            ? require("../../assets/iconwhite.png")
            : require("../../assets/icon.png")
        }
        className="mt-4 w-10 h-10"
      />
    </Animated.View>
  );
};

function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  typography();
  const showToasts = () => {
    Toast.success("Post submited!");
  };
  const inputAccessoryViewID = "uniqueID";
  const [textFocus, setTextFocus] = useState<boolean>(false);
  const toggleFocus = () => setTextFocus((prev) => !prev);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const DATA = [
    {
      id: 1,
      name: "Gabriel Matiolli",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore vitae rem, optio adipisci minus architecto maxime obcaecati aut enim provident dolore ipsa eveniet error minima qui vero distinctio suscipit?
      Velit natus sunt enim voluptatum soluta? Amet error nulla reiciendis perspiciatis hic tempore aliquam doloribus vel, dolorem quibusdam consectetur neque, laboriosam itaque delectus, cupiditate molestiae facilis aperiam odio voluptate debitis`,
    },
    {
      id: 2,
      name: "Gabriel Matiolli",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore vitae rem, optio adipisci minus architecto maxime obcaecati aut enim provident dolore ipsa eveniet error minima qui vero distinctio suscipit?
      Velit natus sunt enim voluptatum soluta? Amet error nulla reiciendis perspiciatis hic tempore aliquam doloribus vel, dolorem quibusdam consectetur neque, laboriosam itaque delectus, cupiditate molestiae facilis aperiam odio voluptate debitis`,
    },
    {
      id: 3,
      name: "Gabriel Matiolli",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore vitae rem, optio adipisci minus architecto maxime obcaecati aut enim provident dolore ipsa eveniet error minima qui vero distinctio suscipit?
      Velit natus sunt enim voluptatum soluta? Amet error nulla reiciendis perspiciatis hic tempore aliquam doloribus vel, dolorem quibusdam consectetur neque, laboriosam itaque delectus, cupiditate molestiae facilis aperiam odio voluptate debitis`,
    },
    {
      id: 4,
      name: "Gabriel Matiolli",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore vitae rem, optio adipisci minus architecto maxime obcaecati aut enim provident dolore ipsa eveniet error minima qui vero distinctio suscipit?
      Velit natus sunt enim voluptatum soluta? Amet error nulla reiciendis perspiciatis hic tempore aliquam doloribus vel, dolorem quibusdam consectetur neque, laboriosam itaque delectus, cupiditate molestiae facilis aperiam odio voluptate debitis`,
    },
    {
      id: 5,
      name: "Gabriel Matiolli",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore vitae rem, optio adipisci minus architecto maxime obcaecati aut enim provident dolore ipsa eveniet error minima qui vero distinctio suscipit?
      Velit natus sunt enim voluptatum soluta? Amet error nulla reiciendis perspiciatis hic tempore aliquam doloribus vel, dolorem quibusdam consectetur neque, laboriosam itaque delectus, cupiditate molestiae facilis aperiam odio voluptate debitis`,
    },
  ];

  return !fontsLoaded && !fontError ? (
    <Image source={require("../../assets/splash.png")} />
  ) : (
    <SView className="bg-white dark:bg-zinc-900">
      <DynamicHeader value={scrollOffsetY} />
      <SSCrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        showsVerticalScrollIndicator={false}
        className="pb-20 h-full"
        scrollEventThrottle={5}
      >
        <SView className="flex items-center pl-4 h-full relative">
          <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
          <ToastManager style={{ fontFamily: "Inter" }} />

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
                inputAccessoryViewID={inputAccessoryViewID}
                multiline
                selectionColor={colorScheme == "dark" ? "#fff" : "#1a1a1a"}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
              />
            </SView>
            <SView className="w-full flex justify-end items-end pr-8">
              <STouchableOpacity
                className={`${
                  textFocus ? "flex" : "hidden"
                } bg-orange w-[30%] h-7 items-center justify-center rounded-full text-white`}
                onPress={showToasts}
              >
                <SText className="text-white font-inter font-extrabold">
                  Post
                </SText>
              </STouchableOpacity>
            </SView>
          </SView>

          {/* posts */}
          {DATA.map((item, index) => (
            <Post item={item} key={index} />
          ))}
          {/* posts */}

          <InputAccessoryView nativeID={inputAccessoryViewID}>
            <STouchableOpacity
              className="h-10 w-full bg-gray-100 flex items-end justify-center px-8"
              onPress={Keyboard.dismiss}
            >
              <SText className="text-blue-400 text-xl">Done</SText>
            </STouchableOpacity>
          </InputAccessoryView>
        </SView>
      </SSCrollView>
    </SView>
  );
}
export default withExpoSnack(Home);
