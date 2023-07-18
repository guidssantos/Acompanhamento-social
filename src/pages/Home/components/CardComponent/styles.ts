import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '48%',
    height: 170,
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