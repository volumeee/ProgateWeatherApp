import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";
import axios from "axios";
import { BASE_URL, API_KEY } from "./src/constant";

const App = () => {
  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
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
