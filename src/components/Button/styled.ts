import { StyleSheet } from "react-native";

export default StyleSheet.create({
  botao: {
    height: 40,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#33384e",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    fontSize: 15,
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