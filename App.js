import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
