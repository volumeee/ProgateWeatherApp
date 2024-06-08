import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import CustomTextInput from "./customTextInput";

const WeatherSearch = () => {
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;
