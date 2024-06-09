import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";
import axios from "axios";
import { BASE_URL, API_KEY } from "./src/constant";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("");

  const searchWeather = (location) => {
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        // Konversi visibility ke kilometer
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        // Konversi suhu ke Celsius
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  };

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
});

export default App;
