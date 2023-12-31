import { styled } from "nativewind";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { IUser } from "../../Screens/Home";

const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const SAntDesign = styled(AntDesign);
const SOcticons = styled(Octicons);
const SFeather = styled(Feather);

function Post({ item }: { item: IUser }) {
  const [lines, setLines] = useState(2);
  const expandText = () => {
    lines == 2 ? setLines(0) : setLines(2);
  };
  return (
    <SView
      className={`w-11/12 my-6 py-4 -ml-4 flex justify-center items-center bg-zinc-100 dark:bg-zinc-700 dark:shadow-none rounded-lg shadow-sm ios:shadow-zinc-400 relative dark:ios:shadow-none`}
    >
      <SView
        className={`flex flex-row ${
          lines == 2 ? "items-center" : "items-start"
        } justify-center w-full gap-x-2`}
      >
        <SImage
          source={require("../../Assets/me.jpg")}
          className="w-14 h-14 rounded-full"
        />
        <SView className="flex justify-center items-start text-left w-3/4">
          <SText className="font-inter font-bold text-orange dark:text-white text-left">
            {item.name}
          </SText>
          <SText className="pr-2 pt-1 dark:text-white" numberOfLines={lines}>
            {item.text}
          </SText>
          <STouchableOpacity onPress={expandText}>
            <SText className="text-blue-600 dark:text-blue-500">
              see {lines == 2 ? "more" : "less"}...
            </SText>
          </STouchableOpacity>
        </SView>
      </SView>
      <SView className="w-full flex flex-row justify-evenly items-center border-t-[1px] border-zinc-300 mt-2 -mb-4 h-10 rounded-b-lg">
        <SAntDesign name="hearto" size={20} className="text-red" />
        <SOcticons name="comment" size={20} className="text-orange" />
        <SFeather name="bookmark" size={20} className="text-yellow" />
      </SView>
    </SView>
  );
}

export default Post;
