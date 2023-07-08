import React from "react";
import { Snackbar } from "react-native-paper";

interface AlertProps {
  message: string;
  error?: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Alert({ message, error=false, setError }){

  return (
    <Snackbar
      visible={error}
      onDismiss={() => setError(false)}
      duration={1500}
      action={{
        label: "OK",
        onPress: () => setError(false)
      }}
    >
      {message}
    </Snackbar>
  )
}