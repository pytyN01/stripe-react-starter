import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import React from "react";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "45ch",
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
}));

export default function Quantity() {
  const classes = useStyles();
  const checked = useSelector((state) => state.checked);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const toUpper = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleAdd = (value) => {
    const capValue = value.charAt(0).toUpperCase() + value.slice(1);

    dispatch({ type: `set${capValue}`, payload: 1 });
  };

  const handleSub = (value) => {
    const capValue = value.charAt(0).toUpperCase() + value.slice(1);

    dispatch({ type: `set${capValue}`, payload: 0 });

    if (value === "dollar" && items[0].quantity === 1) handleZero(value);
    if (value === "coffee" && items[1].quantity === 1) handleZero(value);
    if (value === "meal" && items[2].quantity === 1) handleZero(value);
    if (value === "domain" && items[3].quantity === 1) handleZero(value);
  };

  const handleZero = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === 0) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    dispatch({ type: "setChecked", payload: newChecked });
  };

  return (
    <Grid item xs className={classes.grid}>
      {checked.length > 0 ? (
        <List className={classes.list}>
          <Divider variant="fullWidth" component="li" />
          {items.map((donation, index) =>
            donation.quantity > 0 ? (
              <ListItem dense key={index}>
                <ListItemText
                  primary={`${toUpper(donation.name)}(s) Donated: ${
                    donation.quantity
                  }`}
                  secondary={donation.text}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="start"
                    aria-label="add"
                    onClick={() => handleAdd(donation.name)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="subtract"
                    onClick={() => handleSub(donation.name)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : null
          )}
        </List>
      ) : null}
    </Grid>
  );
}
