import { StyleSheet } from "react-native";
const primaryColor = "#03C03C";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 45,
    paddingHorizontal: 13,
  },
  serchIcon: {
    marginLeft: "86%",
  },
  headingTitle: {
    fontSize: 34,
    fontWeight: "500",
  },
  maincustomer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  customerLogo: {
    flex: 0,
    width: 45,
    backgroundColor: primaryColor,
    height: 45,
    borderRadius: 100,
    paddingTop: 3,
    alignItems: "center",
  },
  customerName: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  searchcontainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  backIcon: {
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    fontSize: 18,
  },
  textcontainer: {
    width: 320,
    paddingHorizontal: 10,
  },
  addIconMain: {
    position: "absolute",
    bottom: "4%",
    right: "7%",
  },
  addIcon: {
    backgroundColor: primaryColor,
    width: 60,
    height: 60,
    borderRadius: 100,
    paddingLeft: 14,
    paddingTop: 13,
  },
  mainAddContact: {
    flexDirection: "row",
  },
  customerTitle: {
    textAlignVertical: "center",
    fontSize: 22,
    marginLeft: 8,
    fontWeight: "500",
  },
  saveName: {
    fontSize: 18,
    marginLeft: "15%",
    backgroundColor: primaryColor,
    paddingHorizontal: 24,
    paddingVertical: 8,
    color: "white",
    borderRadius: 20,
    fontWeight: "500",
  },
  formMain: {
    marginTop: 30,
  },
  mainInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 9,
    marginBottom: 20,
  },
  formInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1.4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 15,
    fontSize: 18,
    borderRadius: 3,
  },
  singleInput: {
    marginLeft: 37,
  },
  errorText: {
    color: "red",
  },
});

export { styles, primaryColor };
