import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Button, TextInput } from "react-native";

import { Card, Subheader } from "react-native-material-ui";
import { TextField } from "react-native-material-textfield";
import { calcGenetic } from "./Genetic";

import { styles } from "../styles";

export default function App() {
  const [coeffs, setCoeffs] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    y: "",
  });

const numberize = (obj, res = {}) => {
    for (const prop in obj) {
        res[prop] = Number(obj[prop]);
    }
        return res;
    };

  const inputCall = (value, type) => setCoeffs({ ...coeffs, [type]: value });

  const onChange = (value, type) => inputCall(value, type);

  const clickHandler = () => {
    Alert.alert("Result", `${calcGenetic(numberize(coeffs)).filter((item) => item)}`);
  };

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.card}>
          <Subheader text="Genetic" />

          <TextField
            label="Input a"
            onChangeText={(text) => onChange(text, "a")}
            keyboardType={"number-pad"}
            value={coeffs.a}
          />
          <TextField
            label="Input b"
            onChangeText={(text) => onChange(text, "b")}
            keyboardType={"number-pad"}
            value={coeffs.b}
          />
          <TextField
            label="Input c"
            onChangeText={(text) => onChange(text, "c")}
            keyboardType={"number-pad"}
            value={coeffs.c}
          />
          <TextField
            label="Input d"
            onChangeText={(text) => onChange(text, "d")}
            keyboardType={"number-pad"}
            value={coeffs.d}
          />
          <TextField
            label="Input y"
            onChangeText={(text) => onChange(text, "y")}
            keyboardType={"number-pad"}
            value={coeffs.y}
          />
          <Button title="Calculate" onPress={clickHandler} />
        </View>
      </Card>
    </View>
  );
}
