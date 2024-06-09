import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "./customTextInput";

//props "searchWeather" untuk menangkap data dari app js
const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        {/* data dari searchWeather dilanjutkan oleh hooks use state "location" */}
        {/* User Input (CustomTextInput) --> State Update (setLocation) --> Button Press --> Call searchWeather(location) */}
        <Button title="Search" onPress={() => searchWeather(location)} />
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
