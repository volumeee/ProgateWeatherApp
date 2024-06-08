import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const WeatherInfo = () => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of Jakarta</Text>
      <Text style={[styles.marginTop20, styles.temperature]}>15C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: "https://openweathermap.org/img/w/04d.png" }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.bold, styles.marginLeft]}>Clouds</Text>
      </View>
      <Text style={styles.text}>overcast clouds</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>visibility :</Text>
        <Text style={[styles.marginLeft, styles.text]}>10 km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.marginLeft, styles.text]}>10 m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherInfo;
