import { styled } from "nativewind";
import { Text, View } from "react-native";

const SView = styled(View);
const SText = styled(Text);
function Post() {
  return (
    <SView>
      <SText className="font-inter font-bold">Oi</SText>
    </SView>
  );
}

export default Post;
