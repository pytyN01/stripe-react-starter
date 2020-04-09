import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Quantity from "./quantity";
import Donate from "./donate";
import Checkout from "./checkout";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Donate />
        <Quantity />
        <Checkout />
      </Grid>
    </div>
  );
}
