import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    display: "flex",
  },
  logo: {
    flex: 0.4,
    alignSelf: "flex-start",
    // alignContent: "flex-start",
  },
  links: {
    flex: 0.6,
    alignSelf: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  homeBtn: {
    fontFamily: "Times New Roman",
    fontStyle: "bold",
    fontSize: 18,
  },
  aboutUsBtn: {
    fontFamily: "Times New Roman",
    fontStyle: "bold",
    fontSize: 18,
  },
  servicesBtn: {
    fontFamily: "Times New Roman",
    fontStyle: "bold",
    fontSize: 18,
  },
  productsBtn: {
    fontFamily: "Times New Roman",
    fontStyle: "bold",
    fontSize: 18,
  },
  /* .home-btn {
        /* font-family: "Times New Roman", Times, serif; */
  /* font-style: "bold"; */
  //   font-size: 100px;
  // }
  // .header-box {
  //   flex: 1;
  //   padding: 20px;
  // }
}));

export { useStyles };
