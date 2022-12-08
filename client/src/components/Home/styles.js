import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    background: 'linear-gradient(45deg, #818589 30%, #ECFFDC 90%)',
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
    background: 'linear-gradient(45deg, #818589 30%, #ECFFDC 90%)'
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
