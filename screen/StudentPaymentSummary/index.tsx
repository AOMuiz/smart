import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { hp } from "@/utils/dimensions";
import Button from "@/share/Button";
import { PAYMENT_SUMMARY } from "@/data";
import TableButton from "@/share/TableButton";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentSummary from "@/share/PaymentSummary";
import SecondaryCta from "@/share/SecondaryCta";
import { useNavigation } from "@react-navigation/native";

export default function StudentPaymentSummary() {
  const navigation = useNavigation<PaymentStackNavigationProp>();

  const [tableType, setTableType] = useState<
    "Pending payments" | "Payment history"
  >("Pending payments");

  const handleSummary = () => {
    console.log("summary");
  };

  const paymentSummary = PAYMENT_SUMMARY.map((item, index) => (
    <View key={item.id}>
      <PaymentSummary title={item.title} price={item.price} />
    </View>
  ));

  const handleEdit = () => {
    return navigation.navigate("StudentPayment");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgImageContainer}>
        <ImageBackground
          source={require("assets/pay_bg.jpg")}
          resizeMode="cover"
          style={styles.bgImage}
        ></ImageBackground>
        <Image
          source={require("@/assets/profile.png")}
          style={styles.profileImg}
        />
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: hp(18), fontWeight: "600" }}>
          OGUNSEGBE TOSIN
        </Text>
        <Text style={{ fontSize: hp(12) }}>J.S.S. 1</Text>
      </View>
      <TableButton
        tableTypes={[
          { type: "Pending payments", label: "Pending payments" },
          { type: "Payment history", label: "Payment history" },
        ]}
        activeTableType={tableType}
        setTableType={setTableType}
      />
      {tableType === "Pending payments" && (
        <View style={{ flex: 1 }}>
          <Text style={{ paddingHorizontal: hp(20), marginBottom: hp(25) }}>
            Please check out to complete your fee payment.
          </Text>
          <View
            style={
              {
                // borderWidth: 1,
                // borderColor: "blue",
                // borderRadius: hp(10),
              }
            }
          >
            {paymentSummary}
          </View>
          <View style={{ paddingHorizontal: hp(20) }}>
            <Button text="Check Out" handlePress={handleSummary} />
          </View>
          <View style={{ paddingHorizontal: hp(20), marginTop: hp(10) }}>
            <SecondaryCta text="Edit" handlePress={handleEdit} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bgImageContainer: { marginBottom: hp(22) },
  bgImage: {
    height: hp(125),
    position: "relative",
  },
  profileImg: {
    position: "absolute",
    top: hp(108),
    left: "45%",
  },
  title: {
    alignItems: "center",
    marginTop: hp(27),
    gap: hp(7),
  },
});
