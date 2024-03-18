import FeeSummary from "@/screen/FeeSummary";
import StudentPayment from "@/screen/StudentPayment";
import StudentPaymentSummary from "@/screen/StudentPaymentSummary";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentPayment" component={StudentPayment} />
      <Stack.Screen
        name="StudentPaymentSummary"
        component={StudentPaymentSummary}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
