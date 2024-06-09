import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default CustomTextInput;
