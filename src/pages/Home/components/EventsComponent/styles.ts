import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 15

  },
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 15
  },
  headerTitle:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  numberTitle:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  numberDescription:{
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonContainer:{
    marginHorizontal: 15,
  },
  dateTitle:{
    fontWeight: 'bold',
    marginLeft: 15
  }
});