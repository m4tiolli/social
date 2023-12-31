import { styled } from "nativewind";
import { Text, View } from "react-native";

const SView = styled(View);
const SText = styled(Text);
function Settings() {
  return (
    <SView>
      <SText>Settings</SText>
    </SView>
  );
}

export default Settings;
