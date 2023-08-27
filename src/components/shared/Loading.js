import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";

export default function FullScreenLoader({
  show,
  setShow,
  download = false,
  showProgress = false,
  progress = 0,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(false);
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={"blue"} size={60} />
        {showProgress && (
          <View alignItems="center">
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              {progress} %
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Downloading...
            </Text>
          </View>
        )}
        {download && <Text style={{ color: "white" }}>Downloading...</Text>}
      </View>
    </Modal>
  );
}
