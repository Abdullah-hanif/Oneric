import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Navigation from "./src/components/navigation/Navigation";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/_store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden={true} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
