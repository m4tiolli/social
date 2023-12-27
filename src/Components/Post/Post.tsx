import { styled } from "nativewind";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
function Post() {
  const [lines, setLines] = useState(2);
  const expandText = () => {
    lines == 2 ? setLines(0) : setLines(2);
  };
  return (
    <SView
      className={`w-11/12 my-6 py-4 flex flex-row ${
        lines == 2 ? "items-center" : "items-start"
      } justify-center gap-x-4 bg-zinc-100 dark:bg-zinc-700 dark:shadow-none rounded-lg shadow-md ios:shadow-zinc-400`}
    >
      <SImage
        source={require("../../Assets/me.jpg")}
        className="w-14 h-14 rounded-full"
      />
      <SView className="flex justify-center items-start text-left w-3/4">
        <SText className="font-inter font-bold text-orange dark:text-white text-left">
          Gabriel Matiolli
        </SText>
        <SText
          className="pr-2 pt-1 -mb-1 dark:text-white text-black"
          numberOfLines={lines}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsa
          ab architecto provident quibusdam veritatis illum ut totam mollitia,
          dolorum, corporis delectus aspernatur incidunt? Nisi saepe quas facere
          tenetur qui? Quis, cum quaerat! Laboriosam, voluptate consequatur
          expedita soluta aperiam neque porro, voluptates est atque voluptatem
          quas excepturi commodi! Sunt non temporibus ratione molestiae aperiam
          suscipit consequatur deserunt voluptatem quaerat nihil.
        </SText>
        <TouchableOpacity onPress={expandText}>
          <SText className="text-blue-600 dark:text-blue-500">
            see {lines == 2 ? "more" : "less"}...
          </SText>
        </TouchableOpacity>
      </SView>
    </SView>
  );
}

export default Post;
