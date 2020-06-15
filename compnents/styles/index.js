import { StyleSheet } from "react-native";
import BootstrapStyleSheet from "react-native-bootstrap-styles";

// const BootstrapStyleSheet = require('react-native-bootstrap-styles');

const BODY_COLOR = "#000022",
  TEXT_MUTED = "#888888";

// custom constants
const constants = {
  BODY_COLOR,
  TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: "red",
  },
};
// let styles = {};
const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
export const s = bootstrapStyleSheet.create();
export const c = bootstrapStyleSheet.constants;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%"
    },
    imgSmall: {
        // flex: 1,
        height: 200,
        width: 200,
        // padding: 100,
    },
  center: { alignItems: "center", justifyContent: "center"},
  bottom: {
    position: "absolute",
    bottom: 0,
  },
  text10: { fontSize: 10 },
  text20: { fontSize: 20 },
  text30: { fontSize: 30 },
  text40: { fontSize: 40 },
  textCursive: { fontFamily: "" },
  m0: {
    margin: 0,
  },
  m1: {
    margin: "1%",
  },
  m2: {
    margin: "2%",
  },
  m3: {
    margin: "3%",
  },
  m4: {
    margin: "4%",
  },
  m5: {
    margin: "5%",
  },
  m10: {
    margin: "10%",
  },
  m15: {
    margin: "15%",
  },
  m20: {
    margin: "20%",
  },
  mL0: {
    marginLeft: 0,
  },
  mL1: {
    marginLeft: "1%",
  },
  mL2: {
    marginLeft: "2%",
  },
  mL3: {
    marginLeft: "3%",
  },
  mL4: {
    marginLeft: "4%",
  },
  mL5: {
    marginLeft: "5%",
  },
  mL10: {
    marginLeft: "10%",
  },
  mL15: {
    marginLeft: "15%",
  },
  mL20: {
    marginLeft: "20%",
  },
  mR0: {
    marginRight: 0,
  },
  mR1: {
    marginRight: "1%",
  },
  mR2: {
    marginRight: "2%",
  },
  mR3: {
    marginRight: "3%",
  },
  mR4: {
    marginRight: "4%",
  },
  mR5: {
    marginRight: "5%",
  },
  mR10: {
    marginRight: "10%",
  },
  mR15: {
    marginRight: "15%",
  },
  mR20: {
    marginRight: "20%",
  },
  mT0: {
    marginTop: 0,
  },
  mT1: {
    marginTop: "1%",
  },
  mT2: {
    marginTop: "2%",
  },
  mT3: {
    marginTop: "3%",
  },
  mT4: {
    marginTop: "4%",
  },
  mT5: {
    marginTop: "5%",
  },
  mT10: {
    marginTop: "10%",
  },
  mT15: {
    marginTop: "15%",
  },
  mT20: {
    marginTop: "20%",
  },
  mT100: {
    marginTop: "100%",
  },
  mB0: {
    marginBottom: 0,
  },
  mB1: {
    marginBottom: "1%",
  },
  mB2: {
    marginBottom: "2%",
  },
  mB3: {
    marginBottom: "3%",
  },
  mB4: {
    marginBottom: "4%",
  },
  mB5: {
    marginBottom: "5%",
  },
  mB10: {
    marginBottom: "10%",
  },
  mB15: {
    marginBottom: "15%",
  },
  mB20: {
    marginBottom: "20%",
  },
  mX0: {
    marginLeft: 0,
    marginRight: 0,
  },
  mX1: {
    marginLeft: "1%",
    marginRight: "1%",
  },
  mX2: {
    marginLeft: "2%",
    marginRight: "2%",
  },
  mX3: {
    marginLeft: "3%",
    marginRight: "3%",
  },
  mX4: {
    marginLeft: "4%",
    marginRight: "4%",
  },
  mX5: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  mX10: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  mX15: {
    marginLeft: "15%",
    marginRight: "15%",
  },
  mX20: {
    marginLeft: "20%",
    marginRight: "20%",
  },
  mY0: {
    marginBottom: 0,
    marginTop: 0,
  },
  mY1: {
    marginBottom: "1%",
    marginTop: "1%",
  },
  mY2: {
    marginBottom: "2%",
    marginTop: "2%",
  },
  mY3: {
    marginBottom: "3%",
    marginTop: "3%",
  },
  mY4: {
    marginBottom: "4%",
    marginTop: "4%",
  },
  mY5: {
    marginBottom: "5%",
    marginTop: "5%",
  },
  mY10: {
    marginBottom: "10%",
    marginTop: "10%",
  },
  mY15: {
    marginBottom: "15%",
    marginTop: "15%",
  },
  mY20: {
    marginBottom: "20%",
    marginTop: "20%",
  },
  p0: {
    padding: 0,
  },
  p1: {
    padding: "1%",
  },
  p2: {
    padding: "2%",
  },
  p3: {
    padding: "3%",
  },
  p4: {
    padding: "4%",
  },
  p5: {
    padding: "5%",
  },
  p10: {
    padding: "10%",
  },
  p15: {
    padding: "15%",
  },
  p20: {
    padding: "20%",
  },
  pL0: {
    paddingLeft: 0,
  },
  pL1: {
    paddingLeft: "1%",
  },
  pL2: {
    paddingLeft: "2%",
  },
  pL3: {
    paddingLeft: "3%",
  },
  pL4: {
    paddingLeft: "4%",
  },
  pL5: {
    paddingLeft: "5%",
  },
  pL10: {
    paddingLeft: "10%",
  },
  pL15: {
    paddingLeft: "15%",
  },
  pL20: {
    paddingLeft: "20%",
  },
  pR0: {
    paddingRight: 0,
  },
  pR1: {
    paddingRight: "1%",
  },
  pR2: {
    paddingRight: "2%",
  },
  pR3: {
    paddingRight: "3%",
  },
  pR4: {
    paddingRight: "4%",
  },
  pR5: {
    paddingRight: "5%",
  },
  pR10: {
    paddingRight: "10%",
  },
  pR15: {
    paddingRight: "15%",
  },
  pR20: {
    paddingRight: "20%",
  },
  pT0: {
    paddingTop: 0,
  },
  pT1: {
    paddingTop: "1%",
  },
  pT2: {
    paddingTop: "2%",
  },
  pT3: {
    paddingTop: "3%",
  },
  pT4: {
    paddingTop: "4%",
  },
  pT5: {
    paddingTop: "5%",
  },
  pT10: {
    paddingTop: "10%",
  },
  pT15: {
    paddingTop: "15%",
  },
  pT20: {
    paddingTop: "20%",
  },
  pB0: {
    paddingBottom: 0,
  },
  pB1: {
    paddingBottom: "1%",
  },
  pB2: {
    paddingBottom: "2%",
  },
  pB3: {
    paddingBottom: "3%",
  },
  pB4: {
    paddingBottom: "4%",
  },
  pB5: {
    paddingBottom: "5%",
  },
  pB10: {
    paddingBottom: "10%",
  },
  pB15: {
    paddingBottom: "15%",
  },
  pB20: {
    paddingBottom: "20%",
  },
  pX0: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  pX1: {
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  pX2: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  pX3: {
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  pX4: {
    paddingLeft: "4%",
    paddingRight: "4%",
  },
  pX5: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  pX10: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  pX15: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  pX20: {
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  pY0: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  pY1: {
    paddingBottom: "1%",
    paddingTop: "1%",
  },
  pY2: {
    paddingBottom: "2%",
    paddingTop: "2%",
  },
  pY3: {
    paddingBottom: "3%",
    paddingTop: "3%",
  },
  pY4: {
    paddingBottom: "4%",
    paddingTop: "4%",
  },
  pY5: {
    paddingBottom: "5%",
    paddingTop: "5%",
  },
  pY10: {
    paddingBottom: "10%",
    paddingTop: "10%",
  },
  pY15: {
    paddingBottom: "15%",
    paddingTop: "15%",
  },
  pY20: {
    paddingBottom: "20%",
    paddingTop: "20%",
  },
  heading: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  button: {
    padding: 10,
    margin: 10,
  },
  buttonPrimary: {
    backgroundColor: "lightblue",
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default s;
// export default c;
