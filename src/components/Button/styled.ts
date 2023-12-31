import { StyleSheet } from "react-native";

export default StyleSheet.create({
  botao: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#fff",
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  badgeStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#E2773B'
  }
});