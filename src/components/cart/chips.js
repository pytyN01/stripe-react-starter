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
  const dollar = useSelector((state) => state.dollar);
  const coffee = useSelector((state) => state.coffee);
  const meal = useSelector((state) => state.meal);
  const domain = useSelector((state) => state.domain);
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
    if (value === "dollar") dispatch({ type: "setDollar", payload: -dollar });
    if (value === "coffee") dispatch({ type: "setCoffee", payload: -coffee });
    if (value === "meal") dispatch({ type: "setMeal", payload: -meal });
    if (value === "domain") dispatch({ type: "setDomain", payload: -domain });
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
