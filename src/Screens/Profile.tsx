import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";

const SView = styled(View);
const SText = styled(Text);

function Profile() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SView className="flex h-full w-full justify-center items-center">
      <SText onPress={toggleColorScheme}>profile</SText>
    </SView>
  );
}

export default Profile;
