import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { hp } from "@/utils/dimensions";
import Dropdown from "@/share/drop";
import TableOne from "@/share/Table";
import AppDataTable from "@/share/DataTable";
import TableButton from "@/share/TableButton";

export default function InstitutionPage() {
  const [tableType, setTableType] = useState<"completed" | "outstanding">(
    "completed"
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <View style={styles.overlay} />
        <ImageBackground
          source={require("assets/homeBg.png")}
          resizeMode="cover"
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("assets/badge.png")} />
          <View
            style={{ alignItems: "center", marginTop: 10, gap: 5, zIndex: 2 }}
          >
            <Text style={{ fontSize: hp(20), fontWeight: "600" }}>
              JOY-MARVY SCHOOL
            </Text>
            <Text style={{ fontSize: hp(15) }}>Learning for development</Text>
          </View>
        </ImageBackground>
      </View>
      <TableButton
        tableTypes={[
          { type: "completed", label: "Completed Payments" },
          { type: "outstanding", label: "Pending Paymnets" },
        ]}
        activeTableType={tableType}
        setTableType={setTableType}
      />

      <View
        style={{
          flexDirection: "row",
          marginBottom: hp(16),
          gap: hp(20),
          paddingHorizontal: 10,
        }}
      >
        <Dropdown
          label={"2023 / 2024 Academic session"}
          data={[
            {
              label: "2022 / 2023 Academic session",
              value: "2022 / 2023 Academic session",
            },
            {
              label: "2023 / 2024 Academic session",
              value: "2023 / 2024 Academic session",
            },
          ]}
          onSelect={() => null}
          iconName={"chevron-down-outline"}
          labelStyle={{ fontWeight: "400", fontSize: hp(12) }}
          containerStyle={{ flex: 2, borderWidth: 1, borderColor: "#E4E4E4" }}
        />

        <Dropdown
          label={"Term"}
          data={[
            {
              label: "2rd Term",
              value: "2rd Term",
            },
            {
              label: "3rd Term",
              value: "3rd Term",
            },
          ]}
          onSelect={() => null}
          iconName={"chevron-down-outline"}
          labelStyle={{ fontWeight: "400", fontSize: hp(12) }}
          containerStyle={{ flex: 1, borderWidth: 1, borderColor: "#E4E4E4" }}
        />
      </View>

      {/* <TableOne showOptions={tableType === "outstanding" && true} /> */}
      <View style={{ padding: hp(15), height: "auto", flex: 1 }}>
        <AppDataTable showOptions={tableType === "outstanding" && true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  heroContainer: {
    height: hp(220),
    borderBottomEndRadius: hp(30),
    borderBottomStartRadius: hp(30),
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(122, 122, 122, 0.361)",
    zIndex: 1,
  },
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(40),
  },
  activeButtonContainer: {
    backgroundColor: "#DC3500",
    padding: hp(20),
    borderTopEndRadius: hp(10),
    borderTopStartRadius: hp(10),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  activeTabButtonText: {
    color: "#ffff",
    fontSize: hp(12),
  },
  tabButtonContainer: {
    paddingHorizontal: hp(25),
    padding: hp(20),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  tabButtonText: {
    color: "#BEBEBE",
    fontSize: hp(12),
  },
});
