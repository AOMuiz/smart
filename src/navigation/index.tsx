import { createStackNavigator } from "@react-navigation/stack";
import FeeStack from "./fee";
import PaymentStack from "./payment";
import InstitutionPage from "@/screen/InstitutionPage";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PaymentPage" component={PaymentStack} />
      <Stack.Screen name="FeePage" component={FeeStack} />
      <Stack.Screen name="InstitutionPage" component={InstitutionPage} />
    </Stack.Navigator>
  );
};

export default MainStack;
