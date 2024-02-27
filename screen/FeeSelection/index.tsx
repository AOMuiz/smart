import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Notes from "@/share/Notes";
import TuitionContainer from "@/share/TuitionContainer";
import DETAILS_DATA from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "@/share/Details";
import Button from "@/share/Button";
import { useNavigation } from "@react-navigation/native";
import { hp } from "@/utils/dimensions";

const details = DETAILS_DATA.map((item) => (
  <View key={item.title}>
    <Details title={item.title} options={item.dropdown} />
  </View>
));

const FeeSelection = () => {
  const navigation = useNavigation<FeeScreenNavigationProp>();

  const handlePress = () => {
    return navigation.navigate("FeeSummary");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ position: "relative" }}>
        <TuitionContainer title="Add tuition fee" />
        <View style={{ paddingVertical: 15 }}>
          <Text>Please fill in the details below to add a new fee</Text>
        </View>
        {details}
        <Notes />
        <Button handlePress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeeSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(20),
    backgroundColor: "#fff",
  },
});