import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.25),
      padding: theme.spacing(0.25),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();
  const checked = useSelector((state) => state.checked);
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const handleDelete = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex !== -1) {
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
    <div className={classes.root}>
      {checked.map((donation, index) => (
        <Chip
          key={index}
          icon={<FaceIcon />}
          label={donation}
          onClick={handleDelete(donation)}
          onDelete={handleDelete(donation)}
        />
      ))}
    </div>
  );
}
