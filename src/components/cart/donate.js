import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import React from "react";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "45ch",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Donate() {
  const classes = useStyles();
  const checked = useSelector((state) => state.checked);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const capValue = value.charAt(0).toUpperCase() + value.slice(1);

    if (currentIndex === -1) {
      newChecked.push(value);
      dispatch({ type: `set${capValue}`, payload: 1 });
    } else {
      newChecked.splice(currentIndex, 1);
      handleUnchecked(value);
    }

    dispatch({ type: "setChecked", payload: newChecked });
  };

  const handleUnchecked = (value) => {
    const capValue = value.charAt(0).toUpperCase() + value.slice(1);

    dispatch({
      type: `set${capValue}`,
      payload:
        value === "dollar"
          ? -items[0].quantity
          : value === "coffee"
          ? -items[1].quantity
          : value === "meal"
          ? -items[2].quantity
          : value === "domain"
          ? -items[3].quantity
          : null,
    });
  };

  return (
    <Grid item xs>
      <List
        subheader={
          <ListSubheader>Donation Items, Quantity, & Total</ListSubheader>
        }
        className={classes.list}
      >
        <Divider variant="fullWidth" component="li" />

        {items.map((donation, index) => (
          <ListItem dense key={index}>
            <ListItemIcon>
              {donation.name === "dollar" ? (
                <AttachMoneyIcon />
              ) : donation.name === "coffee" ? (
                <LocalCafeIcon />
              ) : donation.name === "meal" ? (
                <FastfoodIcon />
              ) : donation.name === "domain" ? (
                <ImportantDevicesIcon />
              ) : null}
            </ListItemIcon>
            <ListItemText id={donation.name} primary={donation.title} />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle(donation.name)}
                checked={checked.includes(donation.name)}
                inputProps={{ "aria-labelledby": donation.name }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
