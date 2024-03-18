import { hp } from "@/utils/dimensions";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PaymentDetailProps {
  title: string;
  price: string;
}

export default function PaymentSummary({ title, price }: PaymentDetailProps) {
  return (
    <View style={styles.paymentSummaryContainer}>
      <View style={styles.Container}>
        <View style={styles.titleDetail}>
          <Text style={styles.title}>{title}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentSummaryContainer: {},
  Container: {
    backgroundColor: "#F9F9F9",
    padding: hp(20),
    margin: hp(20),
    marginVertical: hp(0),
    gap: hp(14),
    // borderWidth: 1,
    // borderColor: "blue",
    // borderRadius: hp(10),
  },
  titleDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(14),
    color: "#93999E",
  },
  price: {
    fontSize: hp(20),
    fontWeight: "300",
  },
  pay: {
    backgroundColor: "#DC350026",
    padding: hp(10),
    borderRadius: hp(10),
  },
  payButton: {
    color: "#DC3500",
    paddingHorizontal: 12,
  },
});
