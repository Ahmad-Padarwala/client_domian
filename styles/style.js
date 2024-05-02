import { StyleSheet } from "react-native";

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
  maincontact: {
    flexDirection: "row",
    marginTop: 20,
  },
  contactLogo: {
    flex: 0,
    width: 45,
    backgroundColor: "#03C03C",
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  contactName: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
});

export { styles };
