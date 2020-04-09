import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import ListItem from "@material-ui/core/ListItem";
import Switch from "@material-ui/core/Switch";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "10%",
  },
  list: {
    width: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Donate() {
  const classes = useStyles();
  const checked = useSelector((state) => state.checked);
  const dollar = useSelector((state) => state.dollar);
  const coffee = useSelector((state) => state.coffee);
  const meal = useSelector((state) => state.meal);
  const domain = useSelector((state) => state.domain);
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
    if (value === "dollar") dispatch({ type: "setDollar", payload: -dollar });
    if (value === "coffee") dispatch({ type: "setCoffee", payload: -coffee });
    if (value === "meal") dispatch({ type: "setMeal", payload: -meal });
    if (value === "domain") dispatch({ type: "setDomain", payload: -domain });
  };

  const handleAdd = (value) => {
    if (value === "dollar") dispatch({ type: "setDollar", payload: 1 });
    if (value === "coffee") dispatch({ type: "setCoffee", payload: 1 });
    if (value === "meal") dispatch({ type: "setMeal", payload: 1 });
    if (value === "domain") dispatch({ type: "setDomain", payload: 1 });
  };

  const handleSub = (value) => {
    if (value === "dollar") dispatch({ type: "setDollar", payload: -1 });
    if (value === "coffee") dispatch({ type: "setCoffee", payload: -1 });
    if (value === "meal") dispatch({ type: "setMeal", payload: -1 });
    if (value === "domain") dispatch({ type: "setDomain", payload: -1 });

    if (value === "dollar" && dollar === 1) handleZero(value);
    if (value === "coffee" && coffee === 1) handleZero(value);
    if (value === "meal" && meal === 1) handleZero(value);
    if (value === "domain" && domain === 1) handleZero(value);
  };

  const handleZero = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    dispatch({ type: "setChecked", payload: newChecked });
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs>
          <List
            subheader={<ListSubheader>Donate</ListSubheader>}
            className={classes.list}
          >
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-dollar"
                primary="A singular dollar"
              />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={handleToggle("dollar")}
                  checked={dollar > 0}
                  inputProps={{ "aria-labelledby": "switch-list-label-dollar" }}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-coffee"
                primary="A Cup Of Coffee"
              />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={handleToggle("coffee")}
                  checked={coffee > 0}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-coffee",
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-meal"
                primary="Feed A Developer"
              />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={handleToggle("meal")}
                  checked={meal > 0}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-meal",
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ImportantDevicesIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-domain"
                primary="Extend Domain By A Year"
              />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={handleToggle("domain")}
                  checked={domain > 0}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-domain",
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs>
          <List
            subheader={<ListSubheader>Quantity</ListSubheader>}
            className={classes.list}
          >
            {checked.includes("dollar") ? (
              <ListItem>
                <ListItemText
                  primary={dollar}
                  secondary="Thanks for the dollar"
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="start"
                    aria-label="add"
                    onClick={() => handleAdd("dollar")}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="subtract"
                    onClick={() => handleSub("dollar")}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : null}

            {checked.includes("coffee") ? (
              <ListItem>
                <ListItemText
                  primary={coffee}
                  secondary="Coffee keeps me coding."
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="start"
                    aria-label="add"
                    onClick={() => handleAdd("coffee")}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="subtract"
                    onClick={() => handleSub("coffee")}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : null}

            {checked.includes("meal") ? (
              <ListItem>
                <ListItemText
                  primary={meal}
                  secondary="Developers run on fastfood."
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="start"
                    aria-label="add"
                    onClick={() => handleAdd("meal")}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="subtract"
                    onClick={() => handleSub("meal")}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : null}

            {checked.includes("domain") ? (
              <ListItem>
                <ListItemText
                  primary={domain}
                  secondary="Help keep Musaeum free forever."
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="start"
                    aria-label="add"
                    onClick={() => handleAdd("domain")}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="subtract"
                    onClick={() => handleSub("domain")}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : null}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
