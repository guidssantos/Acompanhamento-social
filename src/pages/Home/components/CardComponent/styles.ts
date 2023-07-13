import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    width: 170,
    height: 160,
    borderRadius: 10

  },
  headerContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  headerTitle:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  numberTitle:{
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  numberDescription:{
    textAlign: 'center',
    fontWeight: 'bold'
  }
});